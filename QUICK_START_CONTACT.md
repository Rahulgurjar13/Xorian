# 📧 Quick Start - Contact Form

## Run the Contact Form (Development)

### Single Command (Easiest):
```bash
npm run dev:all
```

This starts:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3001

### Or Run Separately:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run dev:server
```

---

## Test the Form

1. Open: http://localhost:8080
2. Scroll to Contact section
3. Fill out form:
   - Organization name
   - Your name
   - Your email
   - Phone (optional)
   - Application type
   - Requirements
4. Click "Submit Inquiry"
5. Check:
   - ✅ Success message appears
   - ✅ Your email inbox for confirmation
   - ✅ quieres@xorianindustries.com inbox for inquiry

---

## Email Configuration

**Sending From:** website.contact@xorianindustries.com  
**Admin Receives At:** quieres@xorianindustries.com  
**User Receives:** Confirmation at their email

---

## Production Deployment

### Build Frontend:
```bash
npm run build
```

### Run Backend:
```bash
npm run server
```

Or use PM2 for production:
```bash
pm2 start server.js --name xorian-api
```

---

## 📁 Important Files

- `server.js` - Backend API with Nodemailer
- `src/components/ContactSection.tsx` - Contact form
- `vite.config.ts` - API proxy configuration
- `CONTACT_FORM_SETUP.md` - Full documentation

---

## ⚡ Quick Commands

```bash
# Install dependencies
npm install

# Run both (frontend + backend)
npm run dev:all

# Run frontend only
npm run dev

# Run backend only  
npm run dev:server

# Build for production
npm run build

# Run production server
npm run server
```

---

## ✅ Everything is Ready!

Your contact form is fully configured and production-ready! 🚀
