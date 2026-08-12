// Next.js API route for Brevo (Sendinblue) email sending with detailed failure diagnostic messages
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { apiKey, senderName, senderEmail, recipientEmail, recipientName, subject, htmlContent } = req.body;

    const brevoKey = apiKey || process.env.BREVO_API_KEY;
    const fromName = senderName || process.env.SENDER_NAME || 'SSSAM Academy';
    const fromEmail = senderEmail || process.env.SENDER_EMAIL || 'hr.sssamacademy@gmail.com';

    if (!brevoKey) {
      return res.status(400).json({
        success: false,
        error: 'Brevo API Key is missing. Please set BREVO_API_KEY in Vercel or UI.'
      });
    }

    if (!recipientEmail || !recipientEmail.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Invalid recipient email address.'
      });
    }

    // Call Brevo API v3 (POST https://api.brevo.com/v3/smtp/email)
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoKey,
      },
      body: JSON.stringify({
        sender: {
          name: fromName,
          email: fromEmail,
        },
        to: [
          {
            email: recipientEmail,
            name: recipientName || recipientEmail,
          },
        ],
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      let friendlyReason = data.message || 'Failed to send email via Brevo.';

      // Enhance common Brevo HTTP error codes with clear user-friendly reasons
      if (response.status === 401) {
        friendlyReason = '401 Unauthorized: Invalid or missing Brevo API Key.';
      } else if (response.status === 400 && data.code === 'unauthorized_sender') {
        friendlyReason = `Sender email "${fromEmail}" is not authorized/verified in your Brevo account.`;
      } else if (response.status === 402 || data.code === 'account_under_quota') {
        friendlyReason = 'Brevo sending limit or daily quota reached.';
      } else if (data.code === 'invalid_parameter') {
        friendlyReason = `Invalid email parameters: ${data.message}`;
      }

      return res.status(response.status).json({
        success: false,
        error: friendlyReason,
        code: data.code || response.status,
        details: data,
      });
    }

    return res.status(200).json({
      success: true,
      messageId: data.messageId,
      message: 'Delivered to Brevo API successfully!',
    });
  } catch (error) {
    console.error('Brevo API Endpoint Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error while communicating with Brevo',
    });
  }
}
