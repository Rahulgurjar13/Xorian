import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { organization, name, email, phone, application, requirements } = req.body;

    // Validate required fields
    if (!organization || !name || !email || !application) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Email configuration
    const transporter = nodemailer.createTransport({
      host: 'mail.xorianindustries.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const referenceId = `XOR-${Date.now().toString().slice(-8)}`;
    const currentDateTime = new Date().toLocaleString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    });

    // Logo URL for Vercel deployment
    const logoUrl = 'https://xorian.vercel.app/logo.png';

    // ═══════════════════════════════════════════════════════════════════════════
    // ADMIN EMAIL - Clean Professional Template (Spam-Optimized)
    // ═══════════════════════════════════════════════════════════════════════════
    const adminMailOptions = {
      from: {
        name: 'Xorian Industries',
        address: process.env.EMAIL_USER
      },
      to: 'quieres@xorianindustries.com',
      replyTo: { name: name, address: email },
      subject: `New Inquiry from ${organization} - ${application}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Inquiry</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background-color:#f5f5f5;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;">
  <tr>
    <td align="center" style="padding:30px 15px;">
      
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <tr>
          <td style="background-color:#0a0a0a;padding:30px;text-align:center;border-radius:8px 8px 0 0;">
            <img src="${logoUrl}" alt="Xorian Industries" width="200" style="width:200px;max-width:100%;height:auto;" />
          </td>
        </tr>
        
        <!-- Content -->
        <tr>
          <td style="padding:30px;">
            <h2 style="margin:0 0 20px 0;color:#333333;font-size:22px;">New Inquiry Received</h2>
            <p style="margin:0 0 25px 0;color:#666666;font-size:15px;line-height:1.6;">
              A new inquiry has been submitted through the website. Details are below.
            </p>
            
            <!-- Details Box -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9f9f9;border:1px solid #e0e0e0;border-radius:6px;">
              <tr>
                <td style="padding:20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #e0e0e0;">
                        <strong style="color:#333333;">Reference:</strong>
                        <span style="color:#c41e3a;margin-left:10px;">${referenceId}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #e0e0e0;">
                        <strong style="color:#333333;">Organization:</strong>
                        <span style="color:#555555;margin-left:10px;">${organization}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #e0e0e0;">
                        <strong style="color:#333333;">Contact Name:</strong>
                        <span style="color:#555555;margin-left:10px;">${name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #e0e0e0;">
                        <strong style="color:#333333;">Email:</strong>
                        <a href="mailto:${email}" style="color:#c41e3a;margin-left:10px;text-decoration:none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #e0e0e0;">
                        <strong style="color:#333333;">Phone:</strong>
                        <span style="color:#555555;margin-left:10px;">${phone || 'Not provided'}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;">
                        <strong style="color:#333333;">Application:</strong>
                        <span style="color:#555555;margin-left:10px;">${application}</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            ${requirements ? `
            <!-- Requirements -->
            <div style="margin-top:25px;">
              <h3 style="margin:0 0 15px 0;color:#333333;font-size:16px;">Requirements:</h3>
              <div style="background-color:#f9f9f9;border:1px solid #e0e0e0;border-radius:6px;padding:15px;">
                <p style="margin:0;color:#555555;font-size:14px;line-height:1.7;white-space:pre-wrap;">${requirements}</p>
              </div>
            </div>
            ` : ''}
            
            <!-- Timestamp -->
            <p style="margin:25px 0 0 0;color:#999999;font-size:13px;">
              Received: ${currentDateTime} IST
            </p>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr>
          <td style="background-color:#f0f0f0;padding:20px;text-align:center;border-radius:0 0 8px 8px;">
            <p style="margin:0;color:#888888;font-size:12px;">
              Xorian Industries Pvt. Ltd. | Kanpur, Uttar Pradesh, India
            </p>
          </td>
        </tr>
        
      </table>
    </td>
  </tr>
</table>

</body>
</html>`
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // CUSTOMER EMAIL - Clean Professional Template (Spam-Optimized)
    // ═══════════════════════════════════════════════════════════════════════════
    const userMailOptions = {
      from: {
        name: 'Xorian Industries',
        address: process.env.EMAIL_USER
      },
      to: email,
      replyTo: { name: 'Xorian Industries', address: 'quieres@xorianindustries.com' },
      subject: `Thank you for contacting Xorian Industries [${referenceId}]`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank You</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background-color:#f5f5f5;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;">
  <tr>
    <td align="center" style="padding:30px 15px;">
      
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <tr>
          <td style="background-color:#0a0a0a;padding:30px;text-align:center;border-radius:8px 8px 0 0;">
            <img src="${logoUrl}" alt="Xorian Industries" width="200" style="width:200px;max-width:100%;height:auto;" />
          </td>
        </tr>
        
        <!-- Content -->
        <tr>
          <td style="padding:30px;">
            <h2 style="margin:0 0 20px 0;color:#333333;font-size:22px;">Thank You, ${name}!</h2>
            <p style="margin:0 0 25px 0;color:#666666;font-size:15px;line-height:1.6;">
              We have received your inquiry and our team will review it shortly. You can expect a response within 24-48 business hours.
            </p>
            
            <!-- Confirmation Box -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9f9f9;border:1px solid #e0e0e0;border-left:4px solid #c41e3a;border-radius:0 6px 6px 0;">
              <tr>
                <td style="padding:20px;">
                  <h3 style="margin:0 0 15px 0;color:#c41e3a;font-size:14px;text-transform:uppercase;letter-spacing:1px;">Your Inquiry Details</h3>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding:5px 0;">
                        <span style="color:#888888;font-size:13px;">Reference ID:</span>
                        <span style="color:#c41e3a;font-weight:bold;margin-left:8px;">${referenceId}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:5px 0;">
                        <span style="color:#888888;font-size:13px;">Organization:</span>
                        <span style="color:#333333;margin-left:8px;">${organization}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:5px 0;">
                        <span style="color:#888888;font-size:13px;">Application:</span>
                        <span style="color:#333333;margin-left:8px;">${application}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:5px 0;">
                        <span style="color:#888888;font-size:13px;">Submitted:</span>
                        <span style="color:#333333;margin-left:8px;">${currentDateTime} IST</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- What's Next -->
            <div style="margin-top:25px;">
              <h3 style="margin:0 0 15px 0;color:#333333;font-size:16px;">What happens next?</h3>
              <ol style="margin:0;padding-left:20px;color:#666666;font-size:14px;line-height:1.8;">
                <li>Our team will review your requirements</li>
                <li>We will contact you within 24-48 business hours</li>
                <li>We may request additional details if needed</li>
              </ol>
            </div>
            
            <!-- Contact Info -->
            <div style="margin-top:25px;padding-top:20px;border-top:1px solid #e0e0e0;">
              <p style="margin:0;color:#666666;font-size:14px;line-height:1.6;">
                Need immediate assistance? Contact us at:
              </p>
              <p style="margin:10px 0 0 0;font-size:14px;">
                <a href="mailto:quieres@xorianindustries.com" style="color:#c41e3a;text-decoration:none;">quieres@xorianindustries.com</a>
                <span style="color:#cccccc;margin:0 10px;">|</span>
                <span style="color:#333333;">+91 9111227474</span>
              </p>
            </div>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr>
          <td style="background-color:#f0f0f0;padding:20px;text-align:center;border-radius:0 0 8px 8px;">
            <p style="margin:0 0 5px 0;color:#666666;font-size:13px;font-weight:bold;">Xorian Industries Pvt. Ltd.</p>
            <p style="margin:0;color:#888888;font-size:12px;">Kanpur, Uttar Pradesh, India</p>
            <p style="margin:10px 0 0 0;">
              <a href="https://xorianindustries.com" style="color:#c41e3a;text-decoration:none;font-size:12px;">www.xorianindustries.com</a>
            </p>
          </td>
        </tr>
        
      </table>
      
      <!-- Unsubscribe Notice (helps with spam) -->
      <p style="margin:15px 0 0 0;color:#999999;font-size:11px;text-align:center;">
        This is a transactional email regarding your inquiry. You will not receive marketing emails unless you opt in.
      </p>
      
    </td>
  </tr>
</table>

</body>
</html>`
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    res.status(200).json({
      success: true,
      message: 'Inquiry submitted successfully. Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      error: 'Failed to send inquiry. Please try again later.'
    });
  }
}
