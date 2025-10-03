


function getFallbackAnalysis() {
  return {
    summary: "AI Services is currently down, please try again later.",
    type: "Unknown",
    languages: ["Unknown"],
    frameworks: ["Unknown"],
    technologies: ["Unknown"],
    features: ["Analysis temporarily unavailable"],
    setup: "AI analysis unavailable",
    usage: "AI services unavailable"
  };
}

async function analyzeRepository(prompt) {
  try {
    console.log('Starting AI analysis... (Prompt length:', prompt.length, ')');

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'google/gemma-2-9b-it:free',
        messages: [
          { role: 'system', content: 'You are a code analyzer. Return only JSON.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1500,
        temperature: 0.7
      })
    });

    if (!res.ok) throw new Error(`API ${res.status}: ${JSON.stringify(await res.json())}`);

    const data = await res.json();
    const text = (data.choices?.[0]?.message?.content || "").trim();
    if (!text) throw new Error("Empty AI response");

    const jsonText = text.startsWith("{") ? text : text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
    return JSON.parse(jsonText);

  } catch (err) {
    console.error('Analysis failed:', err.message);
    return getFallbackAnalysis();
  }
}

module.exports = { analyzeRepository };
