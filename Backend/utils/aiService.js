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
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a code analyzer. Return only JSON.' },
          { role: 'user', content: prompt }
        ]
      })
    });
    const data = await res.json();
    let text = data.choices[0].message.content;
    if (!text.startsWith('{')) text = text.slice(text.indexOf('{'), text.lastIndexOf('}')+1);
    return JSON.parse(text);
  } catch {
    return getFallbackAnalysis();
  }
}

module.exports = { analyzeRepository };
