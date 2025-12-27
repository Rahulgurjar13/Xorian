import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  host: 'mail.xorianindustries.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'website.contact@xorianindustries.com',
    pass: 'w8T#=NyOc485',
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

export async function POST(request: Request) {
  try {
    const { organization, name, email, phone, application, requirements } = await request.json();

    // Validate required fields
    if (!organization || !name || !email || !application) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email to admin (sendmail@xorianindustries.com)
    const adminMailOptions = {
      from: '"Xorian Website" <website.contact@xorianindustries.com>',
      to: 'sendmail@xorianindustries.com',
      subject: `🚀 New Defense Inquiry - ${organization}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #333; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); padding: 30px; text-align: center; border-bottom: 2px solid #333; }
            .logo { font-size: 28px; font-weight: bold; letter-spacing: 3px; color: #fff; margin-bottom: 5px; }
            .subtitle { font-size: 12px; color: #999; letter-spacing: 2px; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; color: #999; letter-spacing: 1.5px; margin-bottom: 5px; font-weight: 600; }
            .value { font-size: 16px; color: #fff; padding: 12px; background-color: #1a1a1a; border-left: 3px solid #fff; }
            .footer { background-color: #0a0a0a; padding: 20px; text-align: center; border-top: 1px solid #333; }
            .footer-text { font-size: 11px; color: #666; letter-spacing: 1px; }
            .badge { display: inline-block; background-color: #fff; color: #000; padding: 5px 15px; font-size: 10px; letter-spacing: 2px; font-weight: bold; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">XORIAN</div>
              <div class="subtitle">INDUSTRIES</div>
              <div class="badge">NEW INQUIRY</div>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">ORGANIZATION</div>
                <div class="value">${organization}</div>
              </div>
              <div class="field">
                <div class="label">CONTACT NAME</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">EMAIL</div>
                <div class="value"><a href="mailto:${email}" style="color: #fff; text-decoration: none;">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">PHONE</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">APPLICATION TYPE</div>
                <div class="value">${application}</div>
              </div>
              ${requirements ? `
              <div class="field">
                <div class="label">REQUIREMENTS</div>
                <div class="value">${requirements.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">SUBMISSION TIME</div>
                <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</div>
              </div>
            </div>
            <div class="footer">
              <div class="footer-text">XORIAN INDUSTRIES - INDIGENOUS DEFENSE TECHNOLOGY</div>
              <div class="footer-text" style="margin-top: 5px;">© ${new Date().getFullYear()} All Rights Reserved</div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
NEW DEFENSE INQUIRY

ORGANIZATION: ${organization}
CONTACT NAME: ${name}
EMAIL: ${email}
PHONE: ${phone || 'Not provided'}
APPLICATION TYPE: ${application}
REQUIREMENTS: ${requirements || 'Not provided'}

SUBMISSION TIME: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

---
XORIAN INDUSTRIES - INDIGENOUS DEFENSE TECHNOLOGY
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: '"Xorian Industries" <website.contact@xorianindustries.com>',
      to: email,
      subject: 'Thank You for Your Defense Inquiry - Xorian Industries',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #333; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); padding: 30px; text-align: center; border-bottom: 2px solid #333; }
            .logo { font-size: 28px; font-weight: bold; letter-spacing: 3px; color: #fff; margin-bottom: 5px; }
            .subtitle { font-size: 12px; color: #999; letter-spacing: 2px; }
            .content { padding: 30px; line-height: 1.8; }
            .highlight { color: #fff; font-weight: bold; }
            .info-box { background-color: #1a1a1a; border-left: 3px solid #fff; padding: 15px; margin: 20px 0; }
            .footer { background-color: #0a0a0a; padding: 20px; text-align: center; border-top: 1px solid #333; }
            .footer-text { font-size: 11px; color: #666; letter-spacing: 1px; }
            .contact-info { margin-top: 15px; font-size: 13px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">XORIAN</div>
              <div class="subtitle">INDUSTRIES</div>
            </div>
            <div class="content">
              <p>Dear <span class="highlight">${name}</span>,</p>
              
              <p>Thank you for your interest in Xorian Industries' defense technology solutions.</p>
              
              <p>We have received your inquiry regarding <span class="highlight">${application}</span> from <span class="highlight">${organization}</span>.</p>
              
              <div class="info-box">
                <strong>WHAT HAPPENS NEXT?</strong><br><br>
                • Our defense solutions team will review your requirements<br>
                • You will receive a response within 24-48 hours<br>
                • We may request additional information for verification<br>
                • Technical demonstrations can be arranged if applicable
              </div>
              
              <p>We take security and confidentiality seriously. All inquiries are handled through secure channels with appropriate verification procedures for defense and government entities.</p>
              
              <div class="contact-info">
                <strong>CONTACT INFORMATION</strong><br>
                Email: quieres@xorianindustries.com<br>
                Defense Hotline: +91 80 XXXX XXXX<br>
                Headquarters: Kanpur, Uttar Pradesh, India
              </div>
              
              <p style="margin-top: 30px;">Best regards,<br><span class="highlight">Xorian Industries Defense Solutions Team</span></p>
            </div>
            <div class="footer">
              <div class="footer-text">XORIAN INDUSTRIES - INDIGENOUS DEFENSE TECHNOLOGY</div>
              <div class="footer-text" style="margin-top: 5px;">Engineering Excellence in Unmanned Aerial Systems</div>
              <div class="footer-text" style="margin-top: 10px;">© ${new Date().getFullYear()} All Rights Reserved</div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Dear ${name},

Thank you for your interest in Xorian Industries' defense technology solutions.

We have received your inquiry regarding ${application} from ${organization}.

WHAT HAPPENS NEXT?
• Our defense solutions team will review your requirements
• You will receive a response within 24-48 hours
• We may request additional information for verification
• Technical demonstrations can be arranged if applicable

We take security and confidentiality seriously. All inquiries are handled through secure channels with appropriate verification procedures for defense and government entities.

CONTACT INFORMATION
Email: quieres@xorianindustries.com
Defense Hotline: +91 80 XXXX XXXX
Headquarters: Kanpur, Uttar Pradesh, India

Best regards,
Xorian Industries Defense Solutions Team

---
XORIAN INDUSTRIES - INDIGENOUS DEFENSE TECHNOLOGY
Engineering Excellence in Unmanned Aerial Systems
© ${new Date().getFullYear()} All Rights Reserved
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Inquiry submitted successfully. Check your email for confirmation.' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send inquiry. Please try again later.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
