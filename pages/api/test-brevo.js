// Next.js API route to test Brevo connection
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { apiKey } = req.body;
    const brevoKey = apiKey || process.env.BREVO_API_KEY;

    if (!brevoKey) {
      return res.status(400).json({ success: false, error: 'Brevo API Key is missing.' });
    }

    const response = await fetch('https://api.brevo.com/v3/account', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': brevoKey,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: data.message || 'Invalid Brevo API Key.',
      });
    }

    return res.status(200).json({
      success: true,
      account: {
        email: data.email,
        companyName: data.companyName,
        plan: data.plan?.[0]?.type || 'Standard',
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error',
    });
  }
}
