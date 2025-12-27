#!/bin/bash

# Test Contact Form API

echo "🧪 Testing Contact Form API..."
echo ""

# Test data
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "organization": "Test Ministry of Defense",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91 98765 43210",
    "application": "defense",
    "requirements": "Testing the contact form functionality"
  }'

echo ""
echo ""
echo "✅ Test complete! Check the response above."
echo ""
echo "If successful, you should see:"
echo "- Success message in response"
echo "- Email sent to quieres@xorianindustries.com"
echo "- Confirmation email sent to test@example.com"
