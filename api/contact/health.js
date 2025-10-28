// api/health.js
module.exports = (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    resend_configured: !!process.env.RESEND_API_KEY,
    email_configured: !!process.env.EMAIL_USER
  });
};