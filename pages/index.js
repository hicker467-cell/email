import { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';

// Template 1: ⭐ Official SSSAM College Workshop Proposal (Default)
const OFFICIAL_SSSAM_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #2d3748; background-color: #f7fafc; margin: 0; padding: 20px; }
        .email-card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .header-logo { text-align: center; padding: 30px 20px 15px; }
        .logo-circle { margin: 0 auto 10px; display: inline-block; }
        .brand-title { font-size: 20px; font-weight: 700; color: #1a202c; margin: 0; letter-spacing: -0.2px; }
        .brand-sub { font-size: 12px; color: #64748b; margin: 3px 0 10px; }
        .blue-divider { width: 40px; height: 3px; background-color: #2563eb; margin: 0 auto; border-radius: 2px; }
        .body-content { padding: 25px 35px 30px; font-size: 14px; color: #334155; }
        .salutation { font-size: 14px; margin-bottom: 14px; font-weight: 600; color: #0f172a; }
        .para { margin-bottom: 14px; line-height: 1.6; }
        .section-title { font-weight: 700; font-size: 14px; color: #0f172a; margin: 20px 0 8px; }
        .tech-list { font-size: 13px; color: #334155; line-height: 1.8; margin-bottom: 18px; }
        .tech-list strong { color: #1e293b; }
        .callout-box { background: #f0f7ff; border-left: 4px solid #2563eb; padding: 14px 18px; margin: 18px 0; border-radius: 0 6px 6px 0; }
        .callout-title { font-weight: 700; font-size: 15px; color: #1e3a8a; margin-bottom: 3px; }
        .callout-badge { font-weight: 700; font-size: 13px; color: #2563eb; letter-spacing: 0.3px; }
        .callout-note { font-size: 11px; color: #64748b; margin-top: 6px; font-style: italic; }
        .btn-wrapper { text-align: center; margin: 24px 0 16px; }
        .btn-blue { background-color: #2563eb; color: #ffffff !important; padding: 12px 26px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px; display: inline-block; }
        .sub-link { display: block; text-align: center; color: #2563eb; font-size: 12px; font-weight: 600; text-decoration: none; margin-top: 10px; }
        .sign-off { margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 15px; font-size: 13px; color: #475569; }
        .company-title { font-weight: 700; color: #0f172a; font-size: 14px; margin: 2px 0; }
        .contact-info { margin-top: 8px; font-size: 12px; color: #64748b; line-height: 1.6; }
        .contact-info a { color: #2563eb; text-decoration: none; }
        .footer-bar { background-color: #f8fafc; border-top: 1px solid #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; }
    </style>
</head>
<body>
    <div class="email-card">
        <div class="header-logo">
            <div class="logo-circle">
                <img src="https://sssam-email.vercel.app/logo.png" alt="SSSAM Academy Logo" style="max-width: 85px; height: auto;" />
            </div>
            <div class="brand-title">SSSAM Academy</div>
            <div class="brand-sub">Smart Solutions School of AI & Machine Learning</div>
            <div class="blue-divider"></div>
        </div>

        <div class="body-content">
            <div class="salutation">{Salutation}</div>
            <div class="para">Greetings from <strong>SSSAM Academy, Gurugram</strong>.</div>
            <div class="para"><strong>SSSAM Academy</strong> conducts <strong>technical seminars, guest lectures, hands-on workshops and industry-oriented training programs</strong> for college students.</div>
            <div class="para">We would like to explore a collaboration with your institution for conducting a suitable technical session for your students.</div>

            <div class="section-title">Key Areas</div>
            <div class="tech-list">
                <strong>Cybersecurity & Ethical Hacking</strong> &nbsp;•&nbsp; <strong>Data Analytics, Data Science & AI/ML</strong><br>
                <strong>Programming & Live Coding</strong> &nbsp;•&nbsp; <strong>Website & App Development</strong><br>
                <strong>Full Stack & MERN</strong> &nbsp;•&nbsp; <strong>Digital Marketing & SEO</strong><br>
                <strong>CCNA & CCNP</strong> &nbsp;•&nbsp; <strong>AWS, Cloud & DevOps</strong>
            </div>

            <div class="callout-box">
                <div class="callout-title">One-Day Technical Workshop</div>
                <div class="callout-badge">FREE OF TRAINING CHARGES</div>
                <div class="callout-note">*Nominal conveyance/logistics charges may apply depending on location and institutional requirements.</div>
            </div>

            <div class="section-title">We also offer</div>
            <div style="font-size: 13px; color: #475569; margin-bottom: 14px;">Technical Seminars &nbsp;•&nbsp; Guest Lectures &nbsp;•&nbsp; Hands-on Workshops &nbsp;•&nbsp; Industrial Training &nbsp;•&nbsp; Project-Based Training</div>
            <div class="para">Sessions can be customized according to the <strong>department, student level, preferred topic and academic schedule</strong>.</div>

            <div class="btn-wrapper">
                <a href="https://www.sssamacademy.com/college-training.html" target="_blank" class="btn-blue">Explore College Training & Seminars &rarr;</a>
                <a href="https://www.sssamacademy.com/gallery.html" target="_blank" class="sub-link">View Recent Seminar Activities &rarr;</a>
            </div>

            <div class="para" style="margin-top: 20px;">We would be happy to discuss a suitable topic and format for your students.</div>
            <div class="para">Kindly let us know the concerned <strong>TPO / HOD / Coordinator</strong> with whom we may connect.</div>

            <div class="sign-off">
                <div>Warm Regards,</div>
                <div class="company-title">SSSAM Academy</div>
                <div style="font-size: 12px; color: #64748b;">Smart Solutions School of AI & Machine Learning</div>
                <div style="font-size: 12px; color: #64748b;">Gurugram, Haryana</div>
                <div class="contact-info">
                    <strong>Phone:</strong> 9102130956<br>
                    <strong>Email:</strong> <a href="mailto:placements@sssamacademy.com">placements@sssamacademy.com</a><br>
                    <strong>Website:</strong> <a href="http://www.sssamacademy.com" target="_blank">www.sssamacademy.com</a>
                </div>
            </div>
        </div>
        <div class="footer-bar">SSSAM Academy | Gurugram</div>
    </div>
</body>
</html>`;

// Template 2: 🏢 Corporate HR Talent Hiring Pitch (Company Outreach)
const CORPORATE_HIRING_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #2d3748; background-color: #f7fafc; margin: 0; padding: 20px; }
        .email-card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .header-logo { text-align: center; padding: 30px 20px 15px; }
        .logo-circle { margin: 0 auto 10px; display: inline-block; }
        .brand-title { font-size: 20px; font-weight: 700; color: #1a202c; margin: 0; }
        .brand-sub { font-size: 12px; color: #2563eb; font-weight: 600; margin: 3px 0 10px; }
        .blue-divider { width: 40px; height: 3px; background-color: #2563eb; margin: 0 auto; border-radius: 2px; }
        .body-content { padding: 25px 35px 30px; font-size: 14px; color: #334155; }
        .salutation { font-size: 14px; margin-bottom: 14px; font-weight: 600; color: #0f172a; }
        .callout-box { background: #eff6ff; border-left: 4px solid #2563eb; padding: 14px 18px; margin: 18px 0; border-radius: 0 6px 6px 0; }
        .btn-wrapper { text-align: center; margin: 24px 0 16px; }
        .btn-blue { background-color: #2563eb; color: #ffffff !important; padding: 12px 26px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px; display: inline-block; }
        .sign-off { margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 15px; font-size: 13px; color: #475569; }
        .footer-bar { background-color: #f8fafc; border-top: 1px solid #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; }
    </style>
</head>
<body>
    <div class="email-card">
        <div class="header-logo">
            <div class="logo-circle">
                <img src="https://sssam-email.vercel.app/logo.png" alt="SSSAM Academy Logo" style="max-width: 85px; height: auto;" />
            </div>
            <div class="brand-title">SSSAM Academy</div>
            <div class="brand-sub">Corporate Talent Sourcing & HR Hiring Partner</div>
            <div class="blue-divider"></div>
        </div>

        <div class="body-content">
            <div class="salutation">{Salutation}</div>
            <p style="margin-bottom: 14px;">Greetings from <strong>SSSAM Academy, Gurugram</strong>.</p>
            <p style="margin-bottom: 14px;">SSSAM Academy is a specialized IT training institute focused on upskilling engineering and technology graduates into <strong>job-ready software & tech professionals</strong>.</p>

            <div class="callout-box">
                {RoleCalloutContent}
            </div>

            <p style="margin-bottom: 14px;">We provide <strong>pre-evaluated, project-trained candidates</strong> ready for immediate onboarding with <strong>zero recruitment fees</strong> for partner companies.</p>

            <div class="btn-wrapper">
                <a href="https://www.sssamacademy.com" target="_blank" class="btn-blue">Request Candidate Profiles &rarr;</a>
            </div>

            <div class="sign-off">
                <div>Warm Regards,</div>
                <div style="font-weight: 700; color: #0f172a; font-size: 14px; margin: 2px 0;">Corporate Relations & HR Team</div>
                <div style="font-weight: 600; color: #1e293b;">SSSAM Academy</div>
                <div style="font-size: 12px; color: #64748b;">Smart Solutions School of AI & Machine Learning</div>
                <div style="font-size: 12px; color: #64748b;">Gurugram, Haryana</div>
                
                <div style="margin-top: 10px; font-size: 12px; color: #64748b; line-height: 1.6;">
                    <strong>Phone:</strong> 9102130956<br>
                    <strong>Email:</strong> <a href="mailto:hr@sssamacademy.com" style="color:#2563eb; font-weight:600;">hr@sssamacademy.com</a><br>
                    <strong>Website:</strong> <a href="http://www.sssamacademy.com" target="_blank" style="color:#2563eb;">www.sssamacademy.com</a>
                </div>
            </div>
        </div>
        <div class="footer-bar">SSSAM Academy | Corporate Hiring Partner</div>
    </div>
</body>
</html>`;

// Template 3: 💼 Campus Placement & Talent Sourcing
const PLACEMENT_DRIVE_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #2d3748; background-color: #f7fafc; margin: 0; padding: 20px; }
        .email-card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .header-logo { text-align: center; padding: 30px 20px 15px; }
        .logo-circle { margin: 0 auto 10px; display: inline-block; }
        .brand-title { font-size: 20px; font-weight: 700; color: #1a202c; margin: 0; }
        .brand-sub { font-size: 12px; color: #0f766e; font-weight: 600; margin: 3px 0 10px; }
        .blue-divider { width: 40px; height: 3px; background-color: #0f766e; margin: 0 auto; border-radius: 2px; }
        .body-content { padding: 25px 35px 30px; font-size: 14px; color: #334155; }
        .salutation { font-size: 14px; margin-bottom: 14px; font-weight: 600; color: #0f172a; }
        .callout-box { background: #f0fdf4; border-left: 4px solid #16a34a; padding: 14px 18px; margin: 18px 0; border-radius: 0 6px 6px 0; }
        .btn-wrapper { text-align: center; margin: 24px 0 16px; }
        .btn-green { background-color: #0f766e; color: #ffffff !important; padding: 12px 26px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px; display: inline-block; }
        .sign-off { margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 15px; font-size: 13px; color: #475569; }
        .footer-bar { background-color: #f8fafc; border-top: 1px solid #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; }
    </style>
</head>
<body>
    <div class="email-card">
        <div class="header-logo">
            <div class="logo-circle">
                <img src="https://sssam-email.vercel.app/logo.png" alt="SSSAM Academy Logo" style="max-width: 85px; height: auto;" />
            </div>
            <div class="brand-title">SSSAM Academy</div>
            <div class="brand-sub">Campus Placement & Industry Hiring Partnership</div>
            <div class="blue-divider"></div>
        </div>
        <div class="body-content">
            <div class="salutation">{Salutation}</div>
            <p style="margin-bottom: 14px;">Greetings from <strong>SSSAM Academy, Gurugram</strong>.</p>
            <p style="margin-bottom: 14px;">We are writing to explore a <strong>Campus Placement & Industry Hiring Partnership</strong> with your college.</p>
            <div class="callout-box">
                <div style="font-weight: 700; color: #166534; font-size: 15px;">Placement Sourcing & Recruitment Drives</div>
                <div style="font-size: 13px; color: #15803d; margin-top: 4px;">• On-Campus & Virtual Recruitment Drives<br>• Pre-Placement Technical Assessment<br>• Resume Building & Technical Mock Interviews</div>
            </div>
            <div class="btn-wrapper">
                <a href="https://www.sssamacademy.com/college-training.html" target="_blank" class="btn-green">Explore Placement Partnership &rarr;</a>
            </div>
            <div class="sign-off">
                <div>Warm Regards,</div>
                <div style="font-weight: 700; color: #0f172a; font-size: 14px; margin: 2px 0;">Training & Placement Cell</div>
                <div style="font-size: 12px; color: #64748b;">SSSAM Academy, Gurugram</div>
                <div style="font-size: 12px; color: #64748b; margin-top: 6px;">📞 9102130956 | 📧 placements@sssamacademy.com | 🌐 www.sssamacademy.com</div>
            </div>
        </div>
        <div class="footer-bar">SSSAM Academy | Gurugram</div>
    </div>
</body>
</html>`;

// Template 4: ⚡ Executive Direct Seminar Briefing
const QUICK_BRIEFING_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #2d3748; background-color: #f7fafc; margin: 0; padding: 20px; }
        .email-card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 30px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .btn-blue { background-color: #2563eb; color: #ffffff !important; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px; display: inline-block; }
    </style>
</head>
<body>
    <div class="email-card">
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://sssam-email.vercel.app/logo.png" alt="SSSAM Academy Logo" style="max-width: 75px; height: auto;" />
            <div style="font-weight: 700; font-size: 18px; color: #1e3a8a; margin-top: 6px;">SSSAM ACADEMY</div>
            <div style="font-size: 12px; color: #64748b;">Smart Solutions School of AI & Machine Learning</div>
        </div>
        <p>{Salutation}</p>
        <p>On behalf of <strong>SSSAM Academy, Sector 14, Gurugram</strong>, I would like to propose a <strong>Free Hands-on Technical Seminar</strong> for your students.</p>
        <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 16px; margin: 16px 0; font-size: 13px;">
            <strong>Duration:</strong> 90 to 120 Minutes (Interactive Demo + Student Q&A)<br>
            <strong>Cost:</strong> Free of Training Charges for Partner Colleges
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <a href="https://www.sssamacademy.com/college-training.html" target="_blank" class="btn-blue">View Seminar Details &rarr;</a>
        </div>
        <p style="margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 15px; font-size: 13px; color: #475569;">
            Warm Regards,<br>
            <strong>Institutional Outreach Team</strong><br>
            SSSAM Academy, Sector 14, Gurugram<br>
            📞 9102130956 | 📧 placements@sssamacademy.com | 🌐 www.sssamacademy.com
        </p>
    </div>
</body>
</html>`;

const TEMPLATES_LIST = [
  {
    id: 'official_sssam',
    name: '⭐ Official SSSAM College Workshop Proposal (Default)',
    subject: 'Proposal: College Technical Workshops & Career Seminars - SSSAM Academy',
    defaultSender: 'placements@sssamacademy.com',
    html: OFFICIAL_SSSAM_TEMPLATE,
    defaultSalutation: 'Dear Sir/Madam,'
  },
  {
    id: 'corporate_hiring',
    name: '🏢 Corporate HR Talent Hiring Pitch (Company Outreach)',
    subject: 'Proposal: IT Talent Sourcing & Campus Recruitment Partnership - SSSAM Academy',
    defaultSender: 'hr@sssamacademy.com',
    html: CORPORATE_HIRING_TEMPLATE,
    defaultSalutation: 'Dear HR Manager / Talent Acquisition Team,'
  },
  {
    id: 'placement_drive',
    name: '💼 Campus Placement & Talent Sourcing Partnership',
    subject: 'Campus Placement Collaboration: SSSAM Academy IT Talent Drive',
    defaultSender: 'placements@sssamacademy.com',
    html: PLACEMENT_DRIVE_TEMPLATE,
    defaultSalutation: 'Dear Head of Training & Placement / Dean,'
  },
  {
    id: 'quick_briefing',
    name: '⚡ Quick Executive Seminar Briefing (Direct & Short)',
    subject: 'Invitation: Free Technical Seminar for College Students - SSSAM Academy',
    defaultSender: 'placements@sssamacademy.com',
    html: QUICK_BRIEFING_TEMPLATE,
    defaultSalutation: 'Dear Sir/Madam,'
  }
];

const PRESET_ROLES = [
  { id: 'all', label: '🌟 All Tech Profiles (Multi-Domain Hiring)', title: 'All IT & Tech Profiles' },
  { id: 'fullstack', label: '💻 Full Stack & MERN Web Developers', title: 'Full Stack & MERN Web Developers' },
  { id: 'datascience', label: '📊 Data Analytics, Data Science & AI/ML Engineers', title: 'Data Analytics, Data Science & AI/ML Engineers' },
  { id: 'cybersecurity', label: '🛡️ Cybersecurity & Ethical Hacking Specialists', title: 'Cybersecurity & Ethical Hacking Specialists' },
  { id: 'digitalmarketing', label: '📈 Digital Marketing & SEO Managers', title: 'Digital Marketing & SEO Managers' },
  { id: 'clouddevops', label: '☁️ CCNA/CCNP, AWS Cloud & DevOps Engineers', title: 'AWS Cloud & DevOps Engineers' },
  { id: 'custom', label: '✏️ Custom Role (Type your own role...)', title: 'Custom Role' }
];

export default function Dashboard() {
  const [selectedTemplateId, setSelectedTemplateId] = useState('official_sssam');
  const [subject, setSubject] = useState(TEMPLATES_LIST[0].subject);
  const [senderEmail, setSenderEmail] = useState('placements@sssamacademy.com');
  const [htmlContent, setHtmlContent] = useState(OFFICIAL_SSSAM_TEMPLATE);
  const [showPreview, setShowPreview] = useState(false);

  // Dynamic Job Role Customizer State (for Corporate Outreach)
  const [selectedRole, setSelectedRole] = useState('all');
  const [customRoleInput, setCustomRoleInput] = useState('');

  // Dual Recipient Mode: 'single' vs 'csv'
  const [inputMode, setInputMode] = useState('single');
  const [manualEmail, setManualEmail] = useState('');
  const [manualName, setManualName] = useState('');

  const [recipients, setRecipients] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [logs, setLogs] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fileInputRef = useRef(null);
  const iframeRef = useRef(null);

  // Load Initial Config Defaults from Environment
  useEffect(() => {
    fetch('/api/config')
      .then((res) => res.json())
      .then((cfg) => {
        if (cfg.defaultSubject) setSubject(cfg.defaultSubject);
      })
      .catch((err) => console.log('Env config load note:', err));
  }, []);

  // Compute Active Job Role Title
  const getActiveRoleTitle = () => {
    if (selectedRole === 'custom') {
      return customRoleInput.trim() || 'Software & Tech Professionals';
    }
    const found = PRESET_ROLES.find((r) => r.id === selectedRole);
    return found ? found.title : 'IT & Tech Professionals';
  };

  // Update Subject when Role changes for Corporate Template
  useEffect(() => {
    if (selectedTemplateId === 'corporate_hiring') {
      const roleTitle = getActiveRoleTitle();
      if (selectedRole === 'all') {
        setSubject('Proposal: IT Talent Sourcing & Campus Recruitment Partnership - SSSAM Academy');
      } else {
        setSubject(`Hiring Proposal: Job-Ready ${roleTitle} - SSSAM Academy`);
      }
    }
  }, [selectedRole, customRoleInput, selectedTemplateId]);

  // Handle Template Selection
  const handleTemplateChange = (templateId) => {
    setSelectedTemplateId(templateId);
    const selected = TEMPLATES_LIST.find((t) => t.id === templateId);
    if (selected) {
      setHtmlContent(selected.html);
      setSubject(selected.subject);
      setSenderEmail(selected.defaultSender);
      setSelectedRole('all');
      setCustomRoleInput('');
      addLog(`Template selected: ${selected.name}`, 'green');
    }
  };

  // Add Manual Email One-by-One
  const handleAddManualEmail = (e) => {
    e.preventDefault();
    if (!manualEmail || !manualEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const trimmedEmail = manualEmail.trim();
    if (recipients.some((r) => r.email.toLowerCase() === trimmedEmail.toLowerCase())) {
      alert(`Email ${trimmedEmail} is already in the list!`);
      return;
    }

    const newRecipient = {
      id: Date.now() + Math.random(),
      email: trimmedEmail,
      name: manualName.trim() || '',
      status: 'Pending ⏳',
      reason: '-',
      time: '-',
      messageId: '-'
    };

    setRecipients((prev) => [newRecipient, ...prev]);
    setManualEmail('');
    setManualName('');
    addLog(`Added recipient: ${trimmedEmail}`, 'green');
  };

  // Remove individual recipient
  const handleRemoveRecipient = (id) => {
    setRecipients((prev) => prev.filter((r) => r.id !== id));
  };

  // Clear All Recipients
  const handleClearAll = () => {
    if (confirm('Clear all recipient emails from table?')) {
      setRecipients([]);
      addLog('Cleared all recipient emails.', 'red');
    }
  };

  // Download Pre-formatted CSV Sample Template
  const handleDownloadSampleCSV = () => {
    const csvContent = "Email,Name,Company_or_College\ntpo@college.ac.in,Dr. R. K. Sharma,Delhi Technological University\nhr@company.com,Wipro Hiring Team,Wipro Technologies\nplacements@university.edu,,Gurugram University\n";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'SSSAM_Recipient_Sample_Template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addLog('Downloaded sample CSV template file.', 'green');
  };

  // Load Built-in Sample Emails
  const handleLoadSample = () => {
    const sampleData = [
      { email: 'tpo@dtu.ac.in', name: 'Dr. Sharma (Delhi Technological University)' },
      { email: 'placements@gurugramuniversity.ac.in', name: 'Gurugram University' },
      { email: 'hr@wipro.com', name: 'Wipro Hiring Team' },
      { email: 'tpo@amity.edu', name: '' }
    ];
    setRecipients(
      sampleData.map((r, i) => ({
        id: i,
        email: r.email,
        name: r.name,
        status: 'Pending ⏳',
        reason: '-',
        time: '-',
        messageId: '-'
      }))
    );
    addLog('Loaded 4 sample emails (with and without custom names).', 'green');
  };

  // Robust Case-Insensitive CSV File Parser
  const processCSVFile = (file) => {
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = [];
        if (!results.data || results.data.length === 0) {
          alert('CSV file appears to be empty.');
          return;
        }

        results.data.forEach((row, index) => {
          const keys = Object.keys(row);
          // Find email column key case-insensitively
          const emailKey = keys.find(k => k && k.trim().toLowerCase().includes('email'));
          const nameKey = keys.find(k => k && (
            k.trim().toLowerCase().includes('name') ||
            k.trim().toLowerCase().includes('college') ||
            k.trim().toLowerCase().includes('company') ||
            k.trim().toLowerCase().includes('contact') ||
            k.trim().toLowerCase().includes('tpo')
          ));

          const emailVal = emailKey ? row[emailKey] : Object.values(row).find(v => typeof v === 'string' && v.includes('@'));
          const nameVal = nameKey ? row[nameKey] : '';

          if (emailVal && typeof emailVal === 'string' && emailVal.includes('@')) {
            parsed.push({
              id: Date.now() + Math.random() + index,
              email: emailVal.trim(),
              name: nameVal ? String(nameVal).trim() : '',
              status: 'Pending ⏳',
              reason: '-',
              time: '-',
              messageId: '-'
            });
          }
        });

        if (parsed.length > 0) {
          setRecipients((prev) => [...parsed, ...prev]);
          addLog(`Loaded ${parsed.length} recipients from CSV!`, 'green');
        } else {
          alert('No valid emails found in CSV. Please ensure your CSV has an "Email" column header.');
        }
      },
      error: (err) => {
        alert(`CSV Parsing Error: ${err.message}`);
        addLog(`CSV Error: ${err.message}`, 'red');
      }
    });
  };

  // File Input Handler
  const handleFileInputChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      processCSVFile(file);
    }
  };

  // Drag & Drop Handlers
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processCSVFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Add Log Entry
  const addLog = (msg, type = 'normal') => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [{ id: Date.now() + Math.random(), msg: `[${time}] ${msg}`, type }, ...prev]);
  };

  // Compute Smart Fallback Salutation
  const getSmartSalutation = (recName) => {
    const currentTemplate = TEMPLATES_LIST.find((t) => t.id === selectedTemplateId);
    const defaultFallback = currentTemplate?.defaultSalutation || 'Dear Sir/Madam,';

    if (!recName || recName.trim() === '' || recName.includes('@')) {
      return defaultFallback;
    }

    const cleanName = recName.trim();
    if (cleanName.toLowerCase().startsWith('dear')) {
      return cleanName.endsWith(',') ? cleanName : `${cleanName},`;
    }
    return `Dear ${cleanName},`;
  };

  // Generate Dynamic Callout Box Content for Corporate HR Template
  const getRoleCalloutHTML = () => {
    const roleTitle = getActiveRoleTitle();

    if (selectedRole === 'all') {
      return `<div style="font-weight: 700; color: #1e3a8a; font-size: 15px;">Trained IT Talent Domains Available for Hiring</div>
              <div style="font-size: 13px; color: #1e40af; margin-top: 6px; line-height: 1.7;">
                  • <strong>Full Stack & MERN Web Developers</strong><br>
                  • <strong>Data Analysts, Data Science & AI/ML Engineers</strong><br>
                  • <strong>Cybersecurity & Ethical Hacking Specialists</strong><br>
                  • <strong>Digital Marketing & SEO Managers</strong><br>
                  • <strong>CCNA/CCNP, Cloud (AWS) & DevOps Engineers</strong>
              </div>`;
    }

    return `<div style="font-weight: 700; color: #1e3a8a; font-size: 15px;">⭐ Ready Candidate Pool: ${roleTitle}</div>
            <div style="font-size: 13px; color: #1e40af; margin-top: 6px; line-height: 1.7;">
                We have pre-evaluated, project-trained candidates specifically skilled in <strong>${roleTitle}</strong> ready for immediate onboarding with zero recruitment fees for partner companies.
            </div>`;
  };

  // Render Template with Smart Salutation & Dynamic Role Injection
  const renderTemplateForRecipient = (rec) => {
    const salutation = getSmartSalutation(rec?.name);
    let html = htmlContent.replace(/{Salutation}/g, salutation);

    if (selectedTemplateId === 'corporate_hiring') {
      html = html.replace(/{RoleCalloutContent}/g, getRoleCalloutHTML());
    }

    return html;
  };

  // Live Iframe Renderer (if preview toggled)
  useEffect(() => {
    if (showPreview && iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(renderTemplateForRecipient(recipients[0]));
        doc.close();
      }
    }
  }, [htmlContent, recipients, showPreview, selectedTemplateId, selectedRole, customRoleInput]);

  // Send Email Helper Function
  const sendSingleEmail = async (rec) => {
    const timestamp = new Date().toLocaleTimeString();
    const renderedHtml = renderTemplateForRecipient(rec);

    setRecipients((prev) =>
      prev.map((item) => (item.id === rec.id ? { ...item, status: 'Sending...' } : item))
    );

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderEmail,
          recipientEmail: rec.email,
          recipientName: rec.name || rec.email,
          subject,
          htmlContent: renderedHtml
        })
      });

      const data = await res.json();

      if (data.success) {
        setRecipients((prev) =>
          prev.map((item) =>
            item.id === rec.id
              ? {
                  ...item,
                  status: 'Sent ✅',
                  reason: 'Delivered to Brevo API',
                  time: timestamp,
                  messageId: data.messageId || 'OK'
                }
              : item
          )
        );
        addLog(`Sent to ${rec.email} (from ${senderEmail})`, 'green');
        return true;
      } else {
        const failureReason = data.error || 'Failed to send via Brevo.';
        setRecipients((prev) =>
          prev.map((item) =>
            item.id === rec.id
              ? {
                  ...item,
                  status: 'Failed ❌',
                  reason: failureReason,
                  time: timestamp,
                  messageId: '-'
                }
              : item
          )
        );
        addLog(`Failed to send to ${rec.email}: ${failureReason}`, 'red');
        return false;
      }
    } catch (err) {
      const failureReason = err.message || 'Network/Server Error';
      setRecipients((prev) =>
        prev.map((item) =>
          item.id === rec.id
            ? {
                ...item,
                status: 'Failed ❌',
                reason: failureReason,
                time: timestamp,
                messageId: '-'
              }
            : item
        )
      );
      addLog(`Error sending to ${rec.email}: ${failureReason}`, 'red');
      return false;
    }
  };

  // Execute Bulk Dispatch
  const handleStartDispatch = async (targetList = null) => {
    const listToProcess = targetList || recipients;
    if (listToProcess.length === 0) {
      alert('No recipients available to send. Upload a CSV or add an email manually.');
      return;
    }

    setIsSending(true);
    addLog(`🚀 Dispatching emails to ${listToProcess.length} recipients...`, 'green');

    for (let i = 0; i < listToProcess.length; i++) {
      const rec = listToProcess[i];
      await sendSingleEmail(rec);
      await new Promise((r) => setTimeout(r, 150));
    }

    setIsSending(false);
    addLog(`🏁 Dispatch completed!`, 'green');
  };

  // Retry Failed Emails Only
  const handleRetryFailed = () => {
    const failedItems = recipients.filter((r) => r.status.includes('Failed'));
    if (failedItems.length === 0) {
      alert('No failed emails to retry!');
      return;
    }
    handleStartDispatch(failedItems);
  };

  // Export Results Log CSV
  const handleExportCSV = () => {
    if (recipients.length === 0) return;
    const exportData = recipients.map((r) => ({
      Email: r.email,
      Recipient_Name: r.name,
      Status: r.status,
      Failure_Reason: r.reason,
      Message_ID: r.messageId,
      Time: r.time
    }));

    const csvStr = Papa.unparse(exportData);
    const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `SSSAM_Campaign_Report_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate Metrics
  const sentCount = recipients.filter((r) => r.status.includes('Sent')).length;
  const failedCount = recipients.filter((r) => r.status.includes('Failed')).length;
  const pendingCount = recipients.filter((r) => r.status.includes('Pending')).length;

  // Filtered List for Table
  const filteredRecipients = recipients.filter((r) => {
    const matchesSearch =
      r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (activeFilter === 'sent') return r.status.includes('Sent');
    if (activeFilter === 'failed') return r.status.includes('Failed');
    if (activeFilter === 'pending') return r.status.includes('Pending');
    return true;
  });

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="brand">
          <h1>SSSAM ACADEMY</h1>
          <p>Outreach & Bulk Email Dispatcher</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => handleStartDispatch()}
            disabled={isSending || recipients.length === 0}
            className="btn btn-success"
            style={{ fontWeight: '700', padding: '10px 20px' }}
          >
            {isSending ? 'Sending Emails...' : `🚀 Send All (${recipients.length})`}
          </button>
          <button onClick={handleLoadSample} className="btn btn-primary">
            📁 Sample Data
          </button>
          <button onClick={() => setShowPreview(!showPreview)} className="btn btn-outline">
            {showPreview ? '🙈 Hide Preview' : '👁️ View Preview'}
          </button>
          <button onClick={handleExportCSV} disabled={recipients.length === 0} className="btn btn-outline">
            📥 Export CSV
          </button>
        </div>
      </div>

      <div className="grid">
        {/* Left Column Controls */}
        <div>
          {/* Card 1: Select Template & Add Recipients */}
          <div className="card">
            <h2 className="card-title">📂 1. Select Template & Sender</h2>
            
            {/* Sender Email Switcher */}
            <div className="form-group">
              <label>Sending From (Sender Email)</label>
              <select
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#34d399',
                  fontWeight: '600',
                  fontSize: '13px'
                }}
              >
                <option value="placements@sssamacademy.com">🎓 SSSAM Placement Cell (placements@sssamacademy.com)</option>
                <option value="hr@sssamacademy.com">🏢 SSSAM HR Team (hr@sssamacademy.com)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Choose Email Template</label>
              <select
                value={selectedTemplateId}
                onChange={(e) => handleTemplateChange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#60a5fa',
                  fontWeight: '600',
                  fontSize: '13px'
                }}
              >
                {TEMPLATES_LIST.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            {/* DYNAMIC JOB ROLE CUSTOMIZER (Visible only when Corporate HR Hiring template is chosen) */}
            {selectedTemplateId === 'corporate_hiring' && (
              <div style={{ background: 'rgba(37, 99, 235, 0.12)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.3)', marginBottom: '14px' }}>
                <div className="form-group" style={{ marginBottom: '8px' }}>
                  <label style={{ color: '#93c5fd', fontWeight: '700' }}>🎯 Target Candidate Role / Profile</label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      background: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid #3b82f6',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}
                  >
                    {PRESET_ROLES.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedRole === 'custom' && (
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label style={{ fontSize: '11px', color: '#cbd5e1' }}>Type Custom Job Role / Profile Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Java Developers / React Native Interns"
                      value={customRoleInput}
                      onChange={(e) => setCustomRoleInput(e.target.value)}
                      style={{ padding: '8px 10px', fontSize: '12px' }}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Recipient Input Mode Toggle */}
            <div style={{ display: 'flex', gap: '6px', margin: '14px 0 10px' }}>
              <button
                type="button"
                onClick={() => setInputMode('single')}
                className={`btn ${inputMode === 'single' ? 'btn-primary' : 'btn-outline'}`}
                style={{ flex: 1, fontSize: '12px', padding: '6px' }}
              >
                ✉️ Add Single Email
              </button>
              <button
                type="button"
                onClick={() => setInputMode('csv')}
                className={`btn ${inputMode === 'csv' ? 'btn-primary' : 'btn-outline'}`}
                style={{ flex: 1, fontSize: '12px', padding: '6px' }}
              >
                📁 Upload CSV File
              </button>
            </div>

            {/* Mode A: Manual Single / One-by-One Email Input */}
            {inputMode === 'single' && (
              <form onSubmit={handleAddManualEmail} style={{ background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="form-group" style={{ marginBottom: '8px' }}>
                  <label>Recipient Email Address *</label>
                  <input
                    type="email"
                    placeholder="hr@company.com or tpo@college.ac.in"
                    value={manualEmail}
                    onChange={(e) => setManualEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label>Recipient / TPO / Company Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Dr. Sharma / Wipro Hiring Team (Optional)"
                    value={manualName}
                    onChange={(e) => setManualName(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full" style={{ padding: '8px', fontSize: '13px' }}>
                  ➕ Add Recipient to List
                </button>
              </form>
            )}

            {/* Mode B: Robust Interactive CSV Upload & Template Download */}
            {inputMode === 'csv' && (
              <div 
                className="dropzone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                style={{ position: 'relative', cursor: 'pointer' }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv"
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
                />
                
                <p style={{ fontSize: '15px', fontWeight: '700', color: '#60a5fa' }}>📁 Click or Drag CSV File Here</p>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0 12px' }}>Supports CSV files with an "Email" column</p>

                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }} onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    className="btn btn-primary"
                    style={{ fontSize: '12px', padding: '6px 12px' }}
                  >
                    📂 Browse CSV File
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadSampleCSV}
                    className="btn btn-outline"
                    style={{ fontSize: '12px', padding: '6px 12px', color: '#34d399', borderColor: '#34d399' }}
                  >
                    📥 Download Sample CSV Template
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Card 2: Dispatch Controller & Execution Logs */}
          <div className="card">
            <h2 className="card-title">🚀 2. Campaign Settings & Logs</h2>
            <div className="form-group">
              <label>Subject Line</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <button
                onClick={() => handleStartDispatch()}
                disabled={isSending || recipients.length === 0}
                className="btn btn-success"
                style={{ flex: 1, padding: '14px', fontSize: '15px', fontWeight: '700' }}
              >
                {isSending ? 'Sending Emails...' : `🚀 Send All (${recipients.length})`}
              </button>

              {failedCount > 0 && (
                <button
                  onClick={handleRetryFailed}
                  disabled={isSending}
                  className="btn btn-primary"
                  style={{ padding: '12px', fontSize: '13px' }}
                >
                  🔄 Retry Failed ({failedCount})
                </button>
              )}
            </div>

            {/* Logs */}
            <div className="logs">
              {logs.map((log) => (
                <div key={log.id} className={`log-item ${log.type}`}>
                  {log.msg}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Tracking Dashboard & Optional HTML Preview */}
        <div>
          {/* Tracking Metrics & Table */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h2 className="card-title" style={{ margin: 0 }}>📊 Live Recipient Delivery Tracker</h2>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className="badge badge-success">Sent: {sentCount}</span>
                <span className="badge badge-danger">Failed: {failedCount}</span>
                <span className="badge badge-warning">Pending: {pendingCount}</span>
                {recipients.length > 0 && (
                  <button onClick={handleClearAll} className="btn btn-outline" style={{ padding: '2px 8px', fontSize: '11px', color: '#f87171', borderColor: '#f87171' }}>
                    🗑️ Clear List
                  </button>
                )}
              </div>
            </div>

            {/* Search & Filter Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '4px 10px', fontSize: '12px' }}
                >
                  All ({recipients.length})
                </button>
                <button
                  onClick={() => setActiveFilter('sent')}
                  className={`btn ${activeFilter === 'sent' ? 'btn-success' : 'btn-outline'}`}
                  style={{ padding: '4px 10px', fontSize: '12px' }}
                >
                  Sent ({sentCount})
                </button>
                <button
                  onClick={() => setActiveFilter('failed')}
                  className={`btn ${activeFilter === 'failed' ? 'btn-danger' : 'btn-outline'}`}
                  style={{ padding: '4px 10px', fontSize: '12px' }}
                >
                  Failed ({failedCount})
                </button>
              </div>

              <input
                type="text"
                placeholder="Search email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(15,23,42,0.6)',
                  color: '#fff',
                  fontSize: '12px',
                  width: '180px'
                }}
              />
            </div>

            {/* Delivery Table */}
            <div className="table-wrap" style={{ maxHeight: showPreview ? '220px' : '380px' }}>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email Address</th>
                    <th>Name / Details</th>
                    <th>Status</th>
                    <th>Reason / Error Diagnostic</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecipients.length === 0 ? (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', padding: '20px', color: '#94a3b8' }}>
                        No records in list. Upload a CSV or add an email address manually above.
                      </td>
                    </tr>
                  ) : (
                    filteredRecipients.map((rec, i) => (
                      <tr key={rec.id}>
                        <td>{i + 1}</td>
                        <td style={{ fontWeight: '600' }}>{rec.email}</td>
                        <td style={{ fontSize: '12px', color: '#cbd5e1' }}>{rec.name || '-'}</td>
                        <td>
                          <span
                            className={`badge ${
                              rec.status.includes('Sent')
                                ? 'badge-success'
                                : rec.status.includes('Failed')
                                ? 'badge-danger'
                                : 'badge-warning'
                            }`}
                          >
                            {rec.status}
                          </span>
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            color: rec.status.includes('Failed') ? '#f87171' : '#94a3b8',
                            maxWidth: '180px',
                            wordBreak: 'break-word'
                          }}
                        >
                          {rec.reason}
                        </td>
                        <td style={{ whiteSpace: 'nowrap' }}>
                          <button
                            onClick={() => sendSingleEmail(rec)}
                            disabled={isSending || rec.status.includes('Sending')}
                            className="btn btn-success"
                            style={{
                              padding: '4px 10px',
                              fontSize: '11px',
                              marginRight: '6px'
                            }}
                            title="Send email to this recipient now"
                          >
                            🚀 Send
                          </button>
                          <button
                            onClick={() => handleRemoveRecipient(rec.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#94a3b8',
                              cursor: 'pointer',
                              fontSize: '12px'
                            }}
                            title="Remove from list"
                          >
                            ❌
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Optional Email Preview (Hidden by Default) */}
          {showPreview && (
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h2 className="card-title" style={{ margin: 0 }}>👁️ Email Template Render Preview</h2>
                <button onClick={() => setShowPreview(false)} className="btn btn-outline" style={{ padding: '2px 8px', fontSize: '11px' }}>
                  ✖️ Hide Preview
                </button>
              </div>
              <iframe ref={iframeRef} className="iframe-box" style={{ height: '420px' }} title="Email Render Preview" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
