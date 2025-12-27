import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// For Vercel, we need to read the logo from the public folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
        user: process.env.EMAIL_USER || 'website.contact@xorianindustries.com',
        pass: process.env.EMAIL_PASS || 'w8T#=NyOc485',
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const referenceId = `XOR-${Date.now().toString().slice(-8)}`;
    const currentDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
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

    // Admin Email Template
    const adminMailOptions = {
      from: {
        name: 'Xorian Industries',
        address: process.env.EMAIL_USER || 'website.contact@xorianindustries.com'
      },
      to: 'quieres@xorianindustries.com',
      replyTo: { name: name, address: email },
      subject: `◆ Defense Inquiry: ${organization} | ${application}`,
      html: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:#050505;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#050505;">
  <tr>
    <td align="center" style="padding:30px 15px;">
      <table width="640" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="background:linear-gradient(90deg,#c41e3a 0%,#8b1528 100%);padding:10px 25px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-size:9px;color:#ffffff;letter-spacing:4px;font-weight:700;">◆ INTERNAL COMMUNICATION</td>
                <td style="text-align:right;font-size:9px;color:rgba(255,255,255,0.8);letter-spacing:2px;">${currentDate}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <table width="640" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;border:1px solid #1a1a1a;border-top:none;">
        <tr>
          <td style="background:linear-gradient(180deg,#0d0d0d 0%,#0a0a0a 100%);padding:50px 40px;text-align:center;">
            <img src="${logoUrl}" alt="XORIAN INDUSTRIES" width="300" style="width:300px;max-width:100%;height:auto;display:block;margin:0 auto;" />
            <div style="margin-top:25px;padding-top:20px;border-top:1px solid #1a1a1a;">
              <span style="font-size:10px;color:#555555;letter-spacing:5px;text-transform:uppercase;font-weight:600;">Indigenous Defense Technology</span>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background-color:#c41e3a;padding:18px 30px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td><div style="font-size:13px;color:#ffffff;font-weight:800;letter-spacing:2px;text-transform:uppercase;">▶ NEW INQUIRY RECEIVED</div></td>
                <td style="text-align:right;"><div style="font-size:11px;color:rgba(255,255,255,0.9);font-weight:600;">REF: ${referenceId}</div></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:30px;">
            <div style="font-size:9px;color:#555555;letter-spacing:3px;font-weight:700;margin-bottom:20px;text-transform:uppercase;">Inquiry Details</div>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d0d0d;border:1px solid #1a1a1a;">
              <tr>
                <td width="50%" style="padding:18px 22px;border-bottom:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
                  <div style="font-size:9px;color:#555555;letter-spacing:2px;font-weight:600;margin-bottom:8px;">ORGANIZATION</div>
                  <div style="font-size:16px;color:#ffffff;font-weight:600;">${organization}</div>
                </td>
                <td style="padding:18px 22px;border-bottom:1px solid #1a1a1a;">
                  <div style="font-size:9px;color:#555555;letter-spacing:2px;font-weight:600;margin-bottom:8px;">CONTACT</div>
                  <div style="font-size:16px;color:#ffffff;font-weight:600;">${name}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:18px 22px;border-bottom:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
                  <div style="font-size:9px;color:#555555;letter-spacing:2px;font-weight:600;margin-bottom:8px;">EMAIL</div>
                  <div style="font-size:14px;"><a href="mailto:${email}" style="color:#c41e3a;text-decoration:none;">${email}</a></div>
                </td>
                <td style="padding:18px 22px;border-bottom:1px solid #1a1a1a;">
                  <div style="font-size:9px;color:#555555;letter-spacing:2px;font-weight:600;margin-bottom:8px;">PHONE</div>
                  <div style="font-size:14px;color:#ffffff;">${phone || 'Not provided'}</div>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding:18px 22px;${requirements ? 'border-bottom:1px solid #1a1a1a;' : ''}">
                  <div style="font-size:9px;color:#555555;letter-spacing:2px;font-weight:600;margin-bottom:8px;">APPLICATION</div>
                  <div style="font-size:15px;color:#ffffff;font-weight:500;">${application}</div>
                </td>
              </tr>
              ${requirements ? `<tr><td colspan="2" style="padding:18px 22px;">
                <div style="font-size:9px;color:#555555;letter-spacing:2px;font-weight:600;margin-bottom:8px;">REQUIREMENTS</div>
                <div style="font-size:13px;color:#aaaaaa;line-height:1.8;">${requirements}</div>
              </td></tr>` : ''}
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:linear-gradient(180deg,#080808 0%,#050505 100%);padding:30px;text-align:center;border-top:1px solid #1a1a1a;">
            <div style="font-size:12px;color:#555555;letter-spacing:5px;font-weight:700;">XORIAN INDUSTRIES</div>
            <div style="font-size:8px;color:#2a2a2a;margin-top:10px;">© ${new Date().getFullYear()} Xorian Industries Pvt. Ltd.</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
    };

    // User Email Template
    const userMailOptions = {
      from: {
        name: 'Xorian Industries',
        address: process.env.EMAIL_USER || 'website.contact@xorianindustries.com'
      },
      to: email,
      replyTo: { name: 'Xorian Industries', address: 'quieres@xorianindustries.com' },
      subject: `Your Inquiry Has Been Received | Xorian Industries [${referenceId}]`,
      html: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:#050505;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#050505;">
  <tr>
    <td align="center" style="padding:30px 15px;">
      <table width="640" cellpadding="0" cellspacing="0" border="0">
        <tr><td style="background:linear-gradient(90deg,#c41e3a 0%,#8b1528 50%,#c41e3a 100%);height:4px;"></td></tr>
      </table>
      <table width="640" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;border:1px solid #1a1a1a;border-top:none;">
        <tr>
          <td style="background:linear-gradient(180deg,#0d0d0d 0%,#0a0a0a 100%);padding:55px 40px;text-align:center;">
            <img src="${logoUrl}" alt="XORIAN INDUSTRIES" width="320" style="width:320px;max-width:100%;height:auto;display:block;margin:0 auto;" />
            <div style="margin-top:25px;padding-top:22px;border-top:1px solid #1a1a1a;">
              <span style="font-size:10px;color:#555555;letter-spacing:5px;text-transform:uppercase;font-weight:600;">Indigenous Defense Technology</span>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:40px 40px 0 40px;">
            <p style="margin:0 0 25px 0;font-size:18px;color:#ffffff;">Dear <strong>${name}</strong>,</p>
            <p style="margin:0;font-size:15px;color:#aaaaaa;line-height:1.9;">
              Thank you for reaching out to <strong style="color:#ffffff;">Xorian Industries</strong>. We have received your inquiry regarding our advanced defense technology solutions and unmanned aerial systems.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:35px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f0f0f;border:1px solid #1a1a1a;border-left:4px solid #c41e3a;">
              <tr>
                <td style="padding:28px;">
                  <div style="font-size:11px;color:#c41e3a;letter-spacing:2px;font-weight:700;margin-bottom:18px;">✓ INQUIRY CONFIRMED</div>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr><td style="padding:8px 0;font-size:12px;color:#666666;">Reference ID: <span style="color:#c41e3a;font-weight:700;">${referenceId}</span></td></tr>
                    <tr><td style="padding:8px 0;font-size:12px;color:#666666;">Organization: <span style="color:#ffffff;">${organization}</span></td></tr>
                    <tr><td style="padding:8px 0;font-size:12px;color:#666666;">Application: <span style="color:#ffffff;">${application}</span></td></tr>
                    <tr><td style="padding:8px 0;font-size:12px;color:#666666;">Submitted: <span style="color:#888888;">${currentDateTime} IST</span></td></tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 35px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d0d0d;border:1px solid #1a1a1a;">
              <tr>
                <td style="padding:25px;">
                  <div style="font-size:10px;color:#888888;letter-spacing:2px;font-weight:700;margin-bottom:18px;">CONTACT INFORMATION</div>
                  <div style="font-size:13px;color:#666666;line-height:2;">
                    Email: <a href="mailto:quieres@xorianindustries.com" style="color:#c41e3a;text-decoration:none;">quieres@xorianindustries.com</a><br>
                    Phone: <span style="color:#ffffff;">+91 9111227474</span><br>
                    Website: <a href="https://xorianindustries.com" style="color:#c41e3a;text-decoration:none;">xorianindustries.com</a>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 40px 40px;">
            <p style="margin:0;font-size:14px;color:#ffffff;">
              Warm regards,<br><br>
              <strong>Xorian Industries</strong><br>
              <span style="font-size:12px;color:#666666;">Defense Solutions & Unmanned Systems Division</span>
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:linear-gradient(180deg,#080808 0%,#050505 100%);padding:35px;text-align:center;border-top:1px solid #1a1a1a;">
            <div style="font-size:13px;color:#555555;letter-spacing:5px;font-weight:700;">XORIAN INDUSTRIES</div>
            <div style="font-size:9px;color:#333333;margin-top:8px;">Made in India 🇮🇳</div>
            <div style="font-size:8px;color:#2a2a2a;margin-top:12px;">© ${new Date().getFullYear()} Xorian Industries Pvt. Ltd.</div>
          </td>
        </tr>
      </table>
      <table width="640" cellpadding="0" cellspacing="0" border="0">
        <tr><td style="background:linear-gradient(90deg,#c41e3a 0%,#8b1528 50%,#c41e3a 100%);height:3px;"></td></tr>
      </table>
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
