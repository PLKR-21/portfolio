# Email Setup Guide for Your Portfolio

## 🚀 How to Enable Email Automation

Your portfolio is now configured to send emails directly from your contact form using **EmailJS**. Follow these steps to get it working:

### Step 1: Create a Free EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up Free"** and create an account
3. Verify your email

### Step 2: Add Your Email Service (Gmail/Outlook)
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Create New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Copy your **Service ID** (looks like: `service_xxx`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: {{subject}} - from {{from_name}}

From: {{from_email}}

Message:
{{message}}
```

Copy your **Template ID** (looks like: `template_xxx`)

### Step 4: Get Your Public Key
1. Go to **"Account"** in EmailJS dashboard
2. Find **"Public Key"** section
3. Copy your **Public Key** (looks like: `xxx_public_key_xxx`)

### Step 5: Update Your Portfolio Code
Open your `script.js` file and replace these three placeholders:

```javascript
// Line 15: Replace YOUR_PUBLIC_KEY_HERE
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY_HERE", // ← Replace with your Public Key
});

// Line 32: Replace YOUR_SERVICE_ID_HERE
emailjs.send(
    "YOUR_SERVICE_ID_HERE",  // ← Replace with your Service ID
    "YOUR_TEMPLATE_ID_HERE", // ← Replace with your Template ID
    {
        from_name: fromName,
        from_email: fromEmail,
        subject: subject,
        message: message,
        to_email: "papagarilaxmikanthreddy@gmail.com"
    }
);
```

### Example Values:
```javascript
emailjs.init({
    publicKey: "ABC123def456GHI789",
});

emailjs.send(
    "service_abc123def",
    "template_xyz789abc",
    {
        from_name: fromName,
        from_email: fromEmail,
        subject: subject,
        message: message,
        to_email: "papagarilaxmikanthreddy@gmail.com"
    }
);
```

## ✅ Testing Your Email Setup

1. Open your portfolio website
2. Scroll to the contact form
3. Fill in the form with test data
4. Click "Send Message"
5. You should see a success notification
6. Check your email inbox

## 📊 Features Enabled

✅ Contact form sends emails to your inbox
✅ Automatic notifications for success/error
✅ Loading state on submit button
✅ Form validation before sending
✅ Automatic form reset after sending
✅ Works on desktop, tablet, and mobile

## 🔒 Security Notes

- EmailJS handles email sending securely
- Your email credentials are never exposed
- The contact form is spam-protected
- All requests are encrypted

## ❓ Troubleshooting

**Emails not sending?**
- Double-check your Public Key, Service ID, and Template ID
- Verify your email service is connected in EmailJS
- Check browser console for errors (F12 → Console)

**Getting error message?**
- Ensure template variables match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Check that your email service limit hasn't been exceeded (free tier allows 200 emails/month)

**Still having issues?**
- Check EmailJS documentation: https://www.emailjs.com/docs/
- Test sending in EmailJS dashboard first

## 📝 Environment Variables (Optional - For Production)

For better security in production, consider using environment variables:

```javascript
// Instead of hardcoding, use environment variables
emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE",
});
```

## 🚀 Alternative: Using Formspree

If you prefer an alternative, you can also use **Formspree**:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create an account and add your email
3. Get your form endpoint
4. Update the form action in HTML:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

**Your portfolio is now ready to receive emails! 🎉**
