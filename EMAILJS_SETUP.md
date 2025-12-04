# EmailJS Setup Guide

## � CCURRENT STATUS: ALMOST WORKING!
**Error**: "The recipients address is empty"  
**Cause**: Your EmailJS template doesn't have a recipient email configured  
**Fix**: Set the "To Email" field in your EmailJS template to your email address

✅ **Progress**: EmailJS credentials are working!  
❌ **Issue**: Template configuration incomplete

## Quick Setup Checklist
- [ ] 1. Create EmailJS account
- [ ] 2. Add email service (Gmail/Outlook)  
- [ ] 3. Create email template
- [ ] 4. **Set "To Email" in template to your email address** ⚠️
- [ ] 5. **Replace placeholder values in script.js** ⚠️ 
- [ ] 6. Test the form

---

To get your contact form working, you need to set up EmailJS and configure the credentials. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

## 2. Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

⚠️ **IMPORTANT**: Create a regular email template, NOT an auto-reply template!

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template" 
3. **Make sure you're on the "Content" tab** (NOT "Auto-Reply" tab)
4. **IMPORTANT**: Set up the template with these exact settings:

### Template Settings:
- **To Email**: `sushruthavn@gmail.com` (or your preferred email address) ⚠️ **NOT a variable!**
- **From Name**: `{{from_name}}`
- **From Email**: Use Default Email Address (checked) OR `{{from_email}}`
- **Reply To**: `{{reply_to}}`

### Subject Line:
```
New Contact Form Message: {{subject}}
```

### Email Content:
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Sent: {{timestamp}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.
```

### 🔑 **Variable Names Reference:**
These are the exact variable names your code sends to EmailJS:
- `{{from_name}}` - Visitor's name from the form
- `{{from_email}}` - Visitor's email from the form  
- `{{subject}}` - Subject from the form
- `{{message}}` - Message from the form
- `{{reply_to}}` - Same as visitor's email (for easy replies)
- `{{timestamp}}` - When the message was sent

4. **CRITICAL**: Make sure the "To Email" field is set to YOUR email address where you want to receive messages
5. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## 5. Update Configuration

**CRITICAL**: You must replace the placeholder values in `script.js` around line 110-112:

**Current (INVALID - causes errors):**
```javascript
emailService.updateConfig({
    serviceId: 'YOUR_SERVICE_ID',     // ❌ PLACEHOLDER - REPLACE THIS
    templateId: 'YOUR_TEMPLATE_ID',   // ❌ PLACEHOLDER - REPLACE THIS  
    publicKey: 'YOUR_PUBLIC_KEY'      // ❌ PLACEHOLDER - REPLACE THIS
});
```

**Updated (with your real values):**
```javascript
emailService.updateConfig({
    serviceId: 'service_abc123',      // ✅ Your actual Service ID
    templateId: 'template_xyz789',    // ✅ Your actual Template ID  
    publicKey: 'user_abcdef123456'    // ✅ Your actual Public Key
});
```

**⚠️ The form will NOT work until you replace ALL THREE placeholder values with your real EmailJS credentials!**

## 6. Test the Form

1. Open your contact page
2. Fill out the form with test data
3. Submit and check your email inbox
4. Verify the email format looks correct

## Troubleshooting

### Common Errors and Solutions

**❌ "The Public Key is invalid"**
- You're still using `'YOUR_PUBLIC_KEY'` placeholder
- **Solution**: Replace with your actual public key from EmailJS dashboard

**❌ "Service not available"** 
- You're still using `'YOUR_SERVICE_ID'` placeholder
- **Solution**: Replace with your actual service ID

**❌ "The recipients address is empty"**
- Your email template doesn't have a "To Email" address configured
- **Solution**: Edit your EmailJS template and set the "To Email" field to your email address

**❌ "Template not found"**
- You're still using `'YOUR_TEMPLATE_ID'` placeholder  
- **Solution**: Replace with your actual template ID

**❌ "EmailJS library not loaded"**
- CDN script failed to load
- **Solution**: Check internet connection and reload page

### Quick Fix Checklist
1. ✅ Created EmailJS account
2. ✅ Added email service (Gmail, Outlook, etc.)
3. ✅ Created email template
4. ✅ **REPLACED all three placeholder values in script.js**
5. ✅ Tested the form

### 🔧 Fix "Recipients address is empty" Error:

1. **Go to EmailJS Dashboard** → Email Templates
2. **Edit your template** (click the template name)
3. **Check the "Settings" tab** (not just Content)
4. **Set "To Email"** to your email address (e.g., `sushruthavn@gmail.com`)
5. **Save the template**
6. **Test the form again**

### 🔧 Fix "Name and Subject not showing" Error:

**Problem**: Your template variables don't match what the code sends.

**Solution**: Update your EmailJS template to use these exact variable names:

**In your template Content tab:**
```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Sent: {{timestamp}}

Message:
{{message}}
```

**In your template Settings tab:**
- To Email: `sushruthavn@gmail.com` (your actual email, NOT `{{email}}`)
- From Name: `{{from_name}}`
- Reply To: `{{reply_to}}`

### Still Having Issues?
- Double-check you copied the IDs correctly (no extra spaces)
- Make sure you're using the PUBLIC key, not private key
- Verify your email service is properly connected in EmailJS dashboard
- Ensure the "To Email" field in your template is set to a valid email address

## 🔒 Security Notes

**✅ SAFE to expose in client-side code:**
- **Public Key**: This is specifically designed to be public (hence the name)
- **Service ID**: This is just an identifier, not sensitive
- **Template ID**: This is just an identifier, not sensitive

**❌ NEVER expose in client-side code:**
- Private keys or API secrets
- Email passwords
- Server-side credentials

**Why EmailJS Public Keys are Safe:**
- They're designed for client-side use
- They only allow sending emails through your pre-configured templates
- They can't access your email account or other services
- EmailJS handles rate limiting and spam protection server-side
- You can regenerate them anytime if needed

**Additional Security Measures Already Implemented:**
- Rate limiting (2-minute cooldown between submissions)
- Input sanitization to prevent XSS attacks
- Honeypot field for bot detection
- Form validation to prevent malicious input

**How EmailJS Security Works:**
1. Your public key only allows sending emails through YOUR specific templates
2. Attackers can't modify the email template or recipient
3. EmailJS enforces daily/monthly sending limits automatically
4. All emails are logged in your EmailJS dashboard for monitoring
5. You can disable/regenerate keys instantly if needed

**What Attackers Could Do (Limited Impact):**
- Send emails using your form (but they're limited by rate limits)
- Use up your monthly email quota (200 emails/month on free tier)

**What Attackers CAN'T Do:**
- Access your email account
- Send emails to different recipients
- Modify email templates
- Access any other services
- See previous emails or data

## Free Tier Limits

- 200 emails per month
- 50 emails per day
- Basic spam protection included

For higher volumes, consider upgrading to a paid plan.
---

## 
🎯 QUICK FIX FOR MISSING NAME/SUBJECT DATA

**Problem**: Your contact form is sending emails, but the name and subject aren't showing up.

**Root Cause**: Your EmailJS template is using `{{email}}` and other variables that don't match what our code sends.

**Solution**: Update your EmailJS template with these exact variable names:

### In EmailJS Template Settings Tab:
- **To Email**: `sushruthavn@gmail.com` (your actual email, NOT `{{email}}`)
- **From Name**: `{{from_name}}`  
- **Reply To**: `{{reply_to}}`

### In EmailJS Template Content Tab:
```
Subject: New Contact Form Message: {{subject}}

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Time: {{timestamp}}

Message:
{{message}}

---
Reply directly to this email to respond.
```

**These are the exact variable names your code sends:**
- `{{from_name}}` = visitor's name
- `{{from_email}}` = visitor's email
- `{{subject}}` = form subject
- `{{message}}` = form message
- `{{reply_to}}` = visitor's email (for replies)
- `{{timestamp}}` = submission time

Make these changes and test again! 🚀
---


## 🚨 COMMON MISTAKE: Auto-Reply vs Regular Template

**If you accidentally created an Auto-Reply template:**

### What's Wrong:
- Auto-Reply templates send responses TO the person who filled out your form
- You need a regular template that sends the form data TO YOU

### How to Fix:
```

**Updated (with your real values):**
```javascript
emailService.updateConfig({
    serviceId: 'service_abc123',      // ✅ Your actual Service ID
    templateId: 'template_xyz789',    // ✅ Your actual Template ID  
    publicKey: 'user_abcdef123456'    // ✅ Your actual Public Key
});
```

**⚠️ The form will NOT work until you replace ALL THREE placeholder values with your real EmailJS credentials!**

## 6. Test the Form

1. Open your contact page
2. Fill out the form with test data
3. Submit and check your email inbox
4. Verify the email format looks correct

## Troubleshooting

### Common Errors and Solutions

**❌ "The Public Key is invalid"**
- You're still using `'YOUR_PUBLIC_KEY'` placeholder
- **Solution**: Replace with your actual public key from EmailJS dashboard

**❌ "Service not available"** 
- You're still using `'YOUR_SERVICE_ID'` placeholder
- **Solution**: Replace with your actual service ID

**❌ "The recipients address is empty"**
- Your email template doesn't have a "To Email" address configured
- **Solution**: Edit your EmailJS template and set the "To Email" field to your email address

**❌ "Template not found"**
- You're still using `'YOUR_TEMPLATE_ID'` placeholder  
- **Solution**: Replace with your actual template ID

**❌ "EmailJS library not loaded"**
- CDN script failed to load
- **Solution**: Check internet connection and reload page

### Quick Fix Checklist
1. ✅ Created EmailJS account
2. ✅ Added email service (Gmail, Outlook, etc.)
3. ✅ Created email template
4. ✅ **REPLACED all three placeholder values in script.js**
5. ✅ Tested the form

### 🔧 Fix "Recipients address is empty" Error:

1. **Go to EmailJS Dashboard** → Email Templates
2. **Edit your template** (click the template name)
3. **Check the "Settings" tab** (not just Content)
4. **Set "To Email"** to your email address (e.g., `sushruthavn@gmail.com`)
5. **Save the template**
6. **Test the form again**

### 🔧 Fix "Name and Subject not showing" Error:

**Problem**: Your template variables don't match what the code sends.

**Solution**: Update your EmailJS template to use these exact variable names:

**In your template Content tab:**
```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Sent: {{timestamp}}

Message:
{{message}}
```

**In your template Settings tab:**
- To Email: `sushruthavn@gmail.com` (your actual email, NOT `{{email}}`)
- From Name: `{{from_name}}`
- Reply To: `{{reply_to}}`

### Still Having Issues?
- Double-check you copied the IDs correctly (no extra spaces)
- Make sure you're using the PUBLIC key, not private key
- Verify your email service is properly connected in EmailJS dashboard
- Ensure the "To Email" field in your template is set to a valid email address

## 🔒 Security Notes

**✅ SAFE to expose in client-side code:**
- **Public Key**: This is specifically designed to be public (hence the name)
- **Service ID**: This is just an identifier, not sensitive
- **Template ID**: This is just an identifier, not sensitive

**❌ NEVER expose in client-side code:**
- Private keys or API secrets
- Email passwords
- Server-side credentials

**Why EmailJS Public Keys are Safe:**
- They're designed for client-side use
- They only allow sending emails through your pre-configured templates
- They can't access your email account or other services
- EmailJS handles rate limiting and spam protection server-side
- You can regenerate them anytime if needed

**Additional Security Measures Already Implemented:**
- Rate limiting (2-minute cooldown between submissions)
- Input sanitization to prevent XSS attacks
- Honeypot field for bot detection
- Form validation to prevent malicious input

**How EmailJS Security Works:**
1. Your public key only allows sending emails through YOUR specific templates
2. Attackers can't modify the email template or recipient
3. EmailJS enforces daily/monthly sending limits automatically
4. All emails are logged in your EmailJS dashboard for monitoring
5. You can disable/regenerate keys instantly if needed

**What Attackers Could Do (Limited Impact):**
- Send emails using your form (but they're limited by rate limits)
- Use up your monthly email quota (200 emails/month on free tier)

**What Attackers CAN'T Do:**
- Access your email account
- Send emails to different recipients
- Modify email templates
- Access any other services
- See previous emails or data

## Free Tier Limits

- 200 emails per month
- 50 emails per day
- Basic spam protection included

For higher volumes, consider upgrading to a paid plan.
---

## 
🎯 QUICK FIX FOR MISSING NAME/SUBJECT DATA

**Problem**: Your contact form is sending emails, but the name and subject aren't showing up.

**Root Cause**: Your EmailJS template is using `{{email}}` and other variables that don't match what our code sends.

**Solution**: Update your EmailJS template with these exact variable names:

### In EmailJS Template Settings Tab:
- **To Email**: `sushruthavn@gmail.com` (your actual email, NOT `{{email}}`)
- **From Name**: `{{from_name}}`  
- **Reply To**: `{{reply_to}}`

### In EmailJS Template Content Tab:
```
Subject: New Contact Form Message: {{subject}}

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Time: {{timestamp}}

Message:
{{message}}

---
Reply directly to this email to respond.
```

**These are the exact variable names your code sends:**
- `{{from_name}}` = visitor's name
- `{{from_email}}` = visitor's email
- `{{subject}}` = form subject
- `{{message}}` = form message
- `{{reply_to}}` = visitor's email (for replies)
- `{{timestamp}}` = submission time

Make these changes and test again! 🚀
---


## 🚨 COMMON MISTAKE: Auto-Reply vs Regular Template

**If you accidentally created an Auto-Reply template:**

### What's Wrong:
- Auto-Reply templates send responses TO the person who filled out your form
- You need a regular template that sends the form data TO YOU

### How to Fix:
1. **Go to EmailJS Dashboard** → Email Templates
2. **Delete the auto-reply template** (or keep it for later if you want auto-replies)
3. **Create a NEW template** on the **"Content" tab** (not Auto-Reply tab)
4. **Follow the template setup above** with your email as the "To Email"

### Template Types Explained:
- **Content Tab**: Sends form data to YOU (what you need)
- **Auto-Reply Tab**: Sends confirmation to the VISITOR (optional feature)

**You need the Content tab template for your contact form to work!**

## 🕵️ Troubleshooting: "The Sender gets the email, but I don't!"

**Symptoms:**
- You test the form with a different email address.
- That different email address receives a copy of the message.
- **YOU (the website owner)** do not receive anything.

**Cause:**
Your EmailJS template's **"To Email"** field is set to the sender's email variable (like `{{from_email}}`) instead of your actual email address.

**Fix:**
1. Go to **EmailJS Dashboard** -> **Email Templates**.
2. Click on your template (`template_svwobdh`).
3. Click on the **Settings** tab (next to Content).
4. Find the **"To Email"** field.
5. **Delete** any variable like `{{from_email}}` or `{{email}}`.
6. **Type your actual email address** (e.g., `sushruthavn@gmail.com`).
7. Click **Save**.

Now the email will go to **YOU**, not the person who filled out the form.
```