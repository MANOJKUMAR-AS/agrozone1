import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is missing in environment variables' });
  }

  try {
    const response = await axios.post(
      'https://api.deepseek.com/v1/chat/completions',
      {
        model: 'deepseek-chat',  // You can also try "deepseek-coder" or others if needed
        messages: [{ role: 'user', content: query }]
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices[0]?.message?.content || 'No response generated.';
    res.status(200).json({ response: reply });

  } catch (error) {
    console.error("DeepSeek API Error:", error.response?.data || error.message);
    res.status(500).json({
      error: 'DeepSeek API error',
      details: error.response?.data || error.message
    });
  }
}
