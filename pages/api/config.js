// API route to get safe environment configuration defaults
export default function handler(req, res) {
  res.status(200).json({
    hasEnvApiKey: Boolean(process.env.BREVO_API_KEY),
    senderName: process.env.SENDER_NAME || 'SSSAM Academy',
    senderEmail: process.env.SENDER_EMAIL || 'placements@sssamacademy.com',
    hrSenderEmail: 'hr@sssamacademy.com',
    placementSenderEmail: 'placements@sssamacademy.com',
    defaultSubject: process.env.DEFAULT_SUBJECT || 'Proposal: College Technical Workshops & Career Seminars - SSSAM Academy'
  });
}
