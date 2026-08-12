// SSSAM Academy Email Templates Registry
const EMAIL_TEMPLATES = [
    {
        id: "workshop_proposal",
        name: "🏫 College Workshop & Career Seminar Proposal",
        category: "Seminar Invitation",
        description: "Proposal to conduct a free hands-on technical seminar and career guidance session for college students.",
        subject: "Proposal: Free Campus Technical Workshop on {Seminar_Topic} - SSSAM Academy",
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f6f9; margin: 0; padding: 20px; }
        .email-container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e1e8ed; }
        .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; padding: 30px 25px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; }
        .header p { margin: 5px 0 0; opacity: 0.9; font-size: 14px; }
        .content { padding: 30px 25px; background-color: #ffffff; }
        .salutation { font-size: 16px; font-weight: 600; color: #1e293b; margin-bottom: 15px; }
        .highlight-box { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
        .highlight-box h3 { margin: 0 0 8px; color: #1e3a8a; font-size: 16px; }
        .feature-list { padding-left: 20px; margin: 15px 0; }
        .feature-list li { margin-bottom: 8px; }
        .cta-container { text-align: center; margin: 30px 0 20px; }
        .btn-primary { background-color: #2563eb; color: #ffffff !important; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3); }
        .footer { background: #f8fafc; padding: 20px 25px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b; }
        .signature { margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 15px; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>SSSAM ACADEMY</h1>
            <p>Empowering Next-Gen IT Leaders | Sector 14, Gurugram</p>
        </div>
        <div class="content">
            <div class="salutation">Respected {Contact_Person},</div>
            
            <p>Greetings from <strong>SSSAM Academy, Gurugram</strong>!</p>
            
            <p>We are writing to express our earnest desire to collaborate with <strong>{College_Name}</strong> to bridge the industry-academia gap for your students in {City}.</p>
            
            <p>As part of our educational outreach, SSSAM Academy proposes to conduct a <strong>Free Hands-on Technical Workshop & Career Guidance Seminar</strong> on:</p>
            
            <div class="highlight-box">
                <h3>📌 Seminar Highlights</h3>
                <p style="margin: 0;"><strong>Topic:</strong> {Seminar_Topic}<br>
                <strong>Proposed Date:</strong> {Proposed_Date}<br>
                <strong>Duration:</strong> 90 to 120 Minutes (Interactive Session + Q&A)</p>
            </div>
            
            <p><strong>What Students Will Gain:</strong></p>
            <ul class="feature-list">
                <li><strong>Live Industry Demo:</strong> Practical concepts in {Seminar_Topic} led by senior IT professionals.</li>
                <li><strong>Career Roadmap:</strong> Insights into hiring trends, high-demand skills, and project portfolios.</li>
                <li><strong>Certificates of Participation:</strong> Provided to all attending students.</li>
                <li><strong>Free Skill Assessment:</strong> Personalized guidance for final year and pre-final year students.</li>
            </ul>

            <p>There are <strong>no commercial charges</strong> for conducting this seminar at your campus or virtually.</p>
            
            <div class="cta-container">
                <a href="mailto:info@sssamacademy.com?subject=Re: Seminar Proposal for {College_Name}" class="btn-primary">Confirm Date & Schedule Seminar</a>
            </div>

            <div class="signature">
                <p style="margin: 0;"><strong>Warm Regards,</strong></p>
                <p style="margin: 3px 0; font-weight: 600; color: #1e293b;">Institutional Relations Team</p>
                <p style="margin: 0; color: #475569;">SSSAM Academy, Gurugram</p>
                <p style="margin: 3px 0 0; color: #64748b; font-size: 13px;">📍 M24, Old DLF, Sector 14, Gurugram, Haryana<br>📞 +91 92170 31899 | 🌐 www.sssamacademy.com</p>
            </div>
        </div>
        <div class="footer">
            This email was sent to {Contact_Person} ({Designation}) at {College_Name}, {City}. If you are not the intended recipient, please let us know.
        </div>
    </div>
</body>
</html>`
    },
    {
        id: "placement_collaboration",
        name: "💼 Campus Placement & Talent Hiring Drive",
        category: "Placement Partnership",
        description: "Invitation for College TPOs to partner with SSSAM Academy for hiring job-ready trained graduates.",
        subject: "Campus Placement Collaboration: SSSAM Academy Talent Drive for {College_Name}",
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f6f9; margin: 0; padding: 20px; }
        .email-container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e1e8ed; }
        .header { background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%); color: #ffffff; padding: 30px 25px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
        .header p { margin: 5px 0 0; opacity: 0.9; font-size: 14px; }
        .content { padding: 30px 25px; }
        .badge { display: inline-block; background: #ccfbf1; color: #0f766e; font-weight: 600; padding: 4px 12px; border-radius: 20px; font-size: 13px; margin-bottom: 15px; }
        .feature-grid { display: table; width: 100%; margin: 20px 0; }
        .feature-card { display: table-cell; width: 50%; padding: 12px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
        .cta-container { text-align: center; margin: 25px 0; }
        .btn-success { background-color: #0f766e; color: #ffffff !important; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; }
        .footer { background: #f8fafc; padding: 20px 25px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>SSSAM ACADEMY</h1>
            <p>Industry-Ready Talent Sourcing & Placement Partner</p>
        </div>
        <div class="content">
            <span class="badge">Placement Partnership Initiative</span>
            <p>Dear <strong>{Contact_Person}</strong> ({Designation}),</p>

            <p>We hope this email finds you well at <strong>{College_Name}</strong>.</p>

            <p>SSSAM Academy (Gurugram) specializes in upskilling engineering and technology students in job-aligned fields including <strong>Full-Stack Software Development, Data Science, AI/ML, Cyber Security, and Digital Marketing</strong>.</p>

            <p>We are reaching out to partner with the Training & Placement Cell of <strong>{College_Name}</strong> to support your students with:</p>

            <ul>
                <li><strong>Pooled & On-Campus Placement Drives:</strong> Connecting your students directly with our network of hiring companies.</li>
                <li><strong>Pre-Placement Training (PPT):</strong> Technical mock interviews, resume optimization, and coding assessments.</li>
                <li><strong>Free Industry Masterclasses:</strong> Expert-led bootcamps on {Seminar_Topic}.</li>
            </ul>

            <p>We would welcome a brief 10-minute call or meeting on <strong>{Proposed_Date}</strong> to discuss how we can assist your students in securing top IT placements this academic year.</p>

            <div class="cta-container">
                <a href="mailto:placements@sssamacademy.com?subject=Placement Drive Inquiry - {College_Name}" class="btn-success">Connect with Placement Team</a>
            </div>

            <div style="margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 15px;">
                <strong>Training & Placement Cell</strong><br>
                SSSAM Academy | Sector 14, Gurugram<br>
                📞 +91 92170 31899 | 📧 corporate@sssamacademy.com
            </div>
        </div>
        <div class="footer">
            Sent to {Contact_Person}, {College_Name}, {City}.
        </div>
    </div>
</body>
</html>`
    },
    {
        id: "short_invitation",
        name: "⚡ Quick Seminar Invitation (Direct & Brief)",
        category: "Quick Outreach",
        description: "A concise, high-response email invitation designed for quick reading by busy Deans and HODs.",
        subject: "Invitation: Hands-on Tech Seminar at {College_Name} - SSSAM Academy",
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.5; color: #2d3748; background-color: #f7fafc; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0; }
        .brand { color: #2b6cb0; font-weight: 700; font-size: 18px; margin-bottom: 15px; }
        .date-badge { background: #ebf8ff; color: #2b6cb0; padding: 6px 12px; border-radius: 4px; font-weight: 600; display: inline-block; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="brand">SSSAM ACADEMY | GURUGRAM</div>
        <p>Dear {Contact_Person},</p>
        
        <p>On behalf of SSSAM Academy, Sector 14, Gurugram, I would like to propose a <strong>Free Technical Seminar on "{Seminar_Topic}"</strong> for the students of <strong>{College_Name}</strong>.</p>
        
        <div class="date-badge">📅 Tentative Date: {Proposed_Date}</div>
        
        <p>The session will cover modern industry trends, practical demonstrations, and career pathways in software engineering and data technologies.</p>
        
        <p>Could you please let us know a suitable time slot for an introductory call or virtual session?</p>
        
        <p>Best Regards,<br>
        <strong>Outreach Team</strong><br>
        SSSAM Academy, Gurugram<br>
        📞 +91 92170 31899 | 🌐 www.sssamacademy.com</p>
    </div>
</body>
</html>`
    }
];
