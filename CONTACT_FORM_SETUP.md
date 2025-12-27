# Xorian Industries - Contact Form Setup Guide

## 📧 Contact Form with Nodemailer

Your contact form is now fully configured with professional email notifications!

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
bun install
```

This will install:
- `nodemailer` - Email sending
- `express` - Backend server
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `concurrently` - Run multiple servers

### 2. Run Development

**Option A: Run Both Servers Together (Recommended)**
```bash
npm run dev:all
```

**Option B: Run Separately**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run dev:server
```

---

## 📬 How It Works

### When User Submits Form:

1. **User fills out form** on website
2. **Form submits to** `/api/contact`
3. **Backend sends 2 emails:**
   - ✅ **Admin email** to `sendmail@xorianindustries.com` with inquiry details
   - ✅ **Confirmation email** to user with thank you message
4. **User sees success** toast notification

---

## 📧 Email Configuration

**Sending Account:**
- Host: `mail.xorianindustries.com`
- Port: `465` (SSL)
- Username: `website.contact@xorianindustries.com`
- Password: `w8T#=NyOc485`

**Receiving Account:**
- Admin: `quieres@xorianindustries.com`
- User: Their submitted email address

---

## 🎨 Email Templates

### Admin Email Features:
- Professional dark theme matching website
- All form data formatted nicely
- Includes submission timestamp (IST)
- Direct reply-to user's email
- Xorian branding

### User Confirmation Email Features:
- Thank you message
- Inquiry summary
- What happens next information
- Contact information
- Professional Xorian branding

---

## 🔧 Testing Locally

1. Start both servers:
   ```bash
   npm run dev:all
   ```

2. Open browser:
   ```
   http://localhost:8080
   ```

3. Fill out contact form and submit

4. Check:
   - ✅ Success toast appears
   - ✅ Form clears
   - ✅ Admin receives email at `quieres@xorianindustries.com`
   - ✅ User receives confirmation at their email

---

## 🌐 Production Deployment

### Option 1: Vercel (Frontend) + Heroku/Railway (Backend)

**Frontend (Vercel):**
```bash
npm run build
vercel deploy --prod
```

**Backend (Heroku):**
```bash
# In project root
heroku create xorian-contact-api
git push heroku main
```

Update frontend API URL to your Heroku app URL.

### Option 2: Single Server (VPS/cPanel)

1. Build frontend:
   ```bash
   npm run build
   ```

2. Upload `dist` folder + `server.js` to server

3. Install dependencies on server:
   ```bash
   npm install --production
   ```

4. Start server:
   ```bash
   node server.js
   ```

5. Use PM2 for production:
   ```bash
   npm install -g pm2
   pm2 start server.js --name xorian-api
   pm2 startup
   pm2 save
   ```

### Option 3: Netlify (Frontend) + Netlify Functions (Backend)

Create `netlify/functions/contact.js` with the email logic.

---

## 📁 Project Structure

```
├── server.js                 # Express backend with Nodemailer
├── src/
│   └── components/
│       └── ContactSection.tsx # Contact form component
├── api/
│   └── contact.ts            # API route (alternative)
├── vite.config.ts            # Proxy configuration
├── package.json              # Dependencies & scripts
└── .env.example              # Environment variables template
```

---

## ⚙️ Environment Variables

Create `.env` file (not tracked in git):

```env
EMAIL_HOST=mail.xorianindustries.com
EMAIL_PORT=465
EMAIL_USER=website.contact@xorianindustries.com
EMAIL_PASS=w8T#=NyOc485
EMAIL_TO=sendmail@xorianindustries.com
PORT=3001
NODE_ENV=production
```

---

## 🐛 Troubleshooting

### Email not sending?

1. **Check email credentials:**
   ```bash
   # Test connection
   npm run dev:server
   # Look for: ✅ Email server is ready
   ```

2. **Check firewall:**
   - Port 465 must be open for SSL
   - Some ISPs block port 465

3. **Check email server:**
   - Verify `mail.xorianindustries.com` is correct
   - Test credentials in email client first

### CORS errors?

Update `server.js`:
```javascript
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));
```

### API not found?

Check vite proxy in `vite.config.ts` is configured correctly.

---

## ✅ Production Checklist

- [ ] Email credentials are correct
- [ ] Both servers run without errors
- [ ] Form submission works
- [ ] Admin receives email
- [ ] User receives confirmation
- [ ] Success/error toasts work
- [ ] Form validation works
- [ ] Email templates look professional
- [ ] Mobile responsive
- [ ] Security features active

---

## 📞 Support

**Email not working?**
- Check spam/junk folders
- Verify email server settings with your hosting provider
- Test with a simple email client first

**Need help?**
- Check server logs: `console.log` messages
- Test API directly: `POST http://localhost:3001/api/contact`
- Verify network tab in browser DevTools

---

## 🎉 Features

✅ Professional email templates  
✅ Dual email sending (admin + user)  
✅ Form validation  
✅ Loading states  
✅ Success/error notifications  
✅ Mobile responsive  
✅ Security features  
✅ Dark theme emails  
✅ Xorian branding  
✅ IST timezone  

---

**Your contact form is production-ready! 🚀**

**Last Updated:** December 27, 2025  
**Version:** 1.0.0
