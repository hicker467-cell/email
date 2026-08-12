import { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';

// Template 1: ⭐ Official SSSAM College Workshop Proposal (MUST NOT BE ALTERED)
const OFFICIAL_SSSAM_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #2d3748; background-color: #f7fafc; margin: 0; padding: 20px; }
        .email-card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .header-logo { text-align: center; padding: 30px 20px 15px; }
        .logo-circle { margin: 0 auto 10px; display: inline-block; }
        .brand-title { font-size: 20px; font-weight: 700; color: #1a202c; margin: 0; letter-spacing: -0.2px; }
        .brand-sub { font-size: 12px; color: #64748b; margin: 3px 0 10px; }
        .blue-divider { width: 40px; height: 3px; background-color: #2563eb; margin: 0 auto; border-radius: 2px; }
        
        .body-content { padding: 25px 35px 30px; font-size: 14px; color: #334155; }
        .salutation { font-size: 14px; margin-bottom: 14px; }
        .para { margin-bottom: 14px; line-height: 1.6; }
        
        .section-title { font-weight: 700; font-size: 14px; color: #0f172a; margin: 20px 0 8px; }
        .tech-list { font-size: 13px; color: #334155; line-height: 1.8; margin-bottom: 18px; }
        .tech-list strong { color: #1e293b; }
        
        .callout-box { background: #f0f7ff; border-left: 4px solid #2563eb; padding: 14px 18px; margin: 18px 0; border-radius: 0 6px 6px 0; }
        .callout-title { font-weight: 700; font-size: 15px; color: #1e293b; margin-bottom: 3px; }
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
        <!-- Logo & Header -->
        <div class="header-logo">
            <div class="logo-circle">
                <img src="/logo.png" alt="SSSAM Academy Logo" style="max-width: 85px; height: auto;" />
            </div>
            <div class="brand-title">SSSAM Academy</div>
            <div class="brand-sub">Smart Solutions School of AI & Machine Learning</div>
            <div class="blue-divider"></div>
        </div>

        <!-- Body Content -->
        <div class="body-content">
            <div class="salutation">Dear Sir/Madam,</div>
            
            <div class="para">Greetings from <strong>SSSAM Academy, Gurugram</strong>.</div>
            
            <div class="para">
                <strong>SSSAM Academy</strong> conducts <strong>technical seminars, guest lectures, hands-on workshops and industry-oriented training programs</strong> for college students.
            </div>
            
            <div class="para">
                We would like to explore a collaboration with your institution for conducting a suitable technical session for your students.
            </div>

            <div class="section-title">Key Areas</div>
            <div class="tech-list">
                <strong>Cybersecurity & Ethical Hacking</strong> &nbsp;•&nbsp; <strong>Data Analytics, Data Science & AI/ML</strong><br>
                <strong>Programming & Live Coding</strong> &nbsp;•&nbsp; <strong>Website & App Development</strong><br>
                <strong>Full Stack & MERN</strong> &nbsp;•&nbsp; <strong>Digital Marketing & SEO</strong><br>
                <strong>CCNA & CCNP</strong> &nbsp;•&nbsp; <strong>AWS, Cloud & DevOps</strong>
            </div>

            <!-- Callout Box -->
            <div class="callout-box">
                <div class="callout-title">One-Day Technical Workshop</div>
                <div class="callout-badge">FREE OF TRAINING CHARGES</div>
                <div class="callout-note">*Nominal conveyance/logistics charges may apply depending on location and institutional requirements.</div>
            </div>

            <div class="section-title">We also offer</div>
            <div style="font-size: 13px; color: #475569; margin-bottom: 14px;">
                Technical Seminars &nbsp;•&nbsp; Guest Lectures &nbsp;•&nbsp; Hands-on Workshops &nbsp;•&nbsp; Industrial Training &nbsp;•&nbsp; Project-Based Training
            </div>

            <div class="para">
                Sessions can be customized according to the <strong>department, student level, preferred topic and academic schedule</strong>.
            </div>

            <!-- CTA Buttons -->
            <div class="btn-wrapper">
                <a href="https://www.sssamacademy.com/college-training.html" target="_blank" class="btn-blue">Explore College Training & Seminars &rarr;</a>
                <a href="https://www.sssamacademy.com/gallery.html" target="_blank" class="sub-link">View Recent Seminar Activities &rarr;</a>
            </div>

            <div class="para" style="margin-top: 20px;">
                We would be happy to discuss a suitable topic and format for your students.
            </div>

            <div class="para">
                Kindly let us know the concerned <strong>TPO / HOD / Coordinator</strong> with whom we may connect.
            </div>

            <!-- Sign-off -->
            <div class="sign-off">
                <div>Warm Regards,</div>
                <div class="company-title">SSSAM Academy</div>
                <div style="font-size: 12px; color: #64748b;">Smart Solutions School of AI & Machine Learning</div>
                <div style="font-size: 12px; color: #64748b;">Gurugram, Haryana</div>
                
                <div class="contact-info">
                    <strong>Phone:</strong> 9102130958<br>
                    <strong>Email:</strong> <a href="mailto:placements@sssamacademy.com">placements@sssamacademy.com</a><br>
                    <strong>Website:</strong> <a href="http://www.sssamacademy.com" target="_blank">www.sssamacademy.com</a>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer-bar">
            SSSAM Academy | Gurugram
        </div>
    </div>
</body>
</html>`;

// Template 2: 💼 Campus Placement & Talent Sourcing Collaboration
const PLACEMENT_DRIVE_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #2d3748; background-color: #f7fafc; margin: 0; padding: 20px; }
        .email-card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .header-logo { text-align: center; padding: 30px 20px 15px; }
        .brand-title { font-size: 20px; font-weight: 700; color: #1a202c; margin: 0; }
        .brand-sub { font-size: 12px; color: #0f766e; font-weight: 600; margin: 3px 0 10px; }
        .blue-divider { width: 40px; height: 3px; background-color: #0f766e; margin: 0 auto; border-radius: 2px; }
        
        .body-content { padding: 25px 35px 30px; font-size: 14px; color: #334155; }
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
            <img src="/logo.png" alt="SSSAM Academy Logo" style="max-width: 85px; height: auto; margin-bottom: 8px;" />
            <div class="brand-title">SSSAM Academy</div>
            <div class="brand-sub">Campus Placement & Industry Hiring Partnership</div>
            <div class="blue-divider"></div>
        </div>

        <div class="body-content">
            <div style="font-size: 14px; margin-bottom: 14px;">Dear Head of Training & Placement / Dean,</div>
            
            <p style="margin-bottom: 14px;">Greetings from <strong>SSSAM Academy, Gurugram</strong>.</p>
            
            <p style="margin-bottom: 14px;">We are writing to explore a <strong>Campus Placement & Industry Hiring Partnership</strong> with your esteemed college to provide your graduating students with direct career opportunities in top IT firms.</p>

            <div class="callout-box">
                <div style="font-weight: 700; color: #166534; font-size: 15px;">Placement Sourcing & Recruitment Drives</div>
                <div style="font-size: 13px; color: #15803d; margin-top: 4px;">• On-Campus & Virtual Recruitment Drives<br>• Pre-Placement Technical Assessment<br>• Resume Building & Technical Mock Interviews</div>
            </div>

            <p style="margin-bottom: 14px;">Our students and partner candidates undergo rigorous training in <strong>Full-Stack, Data Science, AI/ML, Cyber Security, and Cloud Computing</strong>, making them job-ready for modern corporate needs.</p>

            <div class="btn-wrapper">
                <a href="https://www.sssamacademy.com/college-training.html" target="_blank" class="btn-green">Explore Placement Partnership &rarr;</a>
            </div>

            <div class="sign-off">
                <div>Warm Regards,</div>
                <div style="font-weight: 700; color: #0f172a; font-size: 14px; margin: 2px 0;">Training & Placement Cell</div>
                <div style="font-size: 12px; color: #64748b;">SSSAM Academy, Gurugram</div>
                <div style="font-size: 12px; color: #64748b; margin-top: 6px;">📞 +91 9102130958 | 📧 placements@sssamacademy.com | 🌐 www.sssamacademy.com</div>
            </div>
        </div>

        <div class="footer-bar">
            SSSAM Academy | Gurugram
        </div>
    </div>
</body>
</html>`;

// Template 3: ⚡ Executive Direct Seminar Briefing
const QUICK_BRIEFING_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #2d3748; background-color: #f7fafc; margin: 0; padding: 20px; }
        .email-card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 30px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .btn-blue { background-color: #2563eb; color: #ffffff !important; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px; display: inline-block; }
    </style>
</head>
<body>
    <div class="email-card">
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="/logo.png" alt="SSSAM Academy Logo" style="max-width: 75px; height: auto;" />
            <div style="font-weight: 700; font-size: 18px; color: #1e3a8a; margin-top: 6px;">SSSAM ACADEMY</div>
            <div style="font-size: 12px; color: #64748b;">Smart Solutions School of AI & Machine Learning</div>
        </div>

        <p>Dear Sir/Madam,</p>
        
        <p>On behalf of <strong>SSSAM Academy, Sector 14, Gurugram</strong>, I would like to propose a <strong>Free Hands-on Technical Seminar</strong> for your students on emerging technologies including <strong>AI/ML, Full-Stack Web Development, Cybersecurity, and Cloud Computing</strong>.</p>
        
        <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 16px; margin: 16px 0; font-size: 13px;">
            <strong>Duration:</strong> 90 to 120 Minutes (Interactive Demo + Student Q&A)<br>
            <strong>Cost:</strong> Free of Training Charges for Partner Colleges
        </div>

        <p>Could you please connect us with your TPO / HOD / Coordinator to schedule a suitable date?</p>

        <div style="text-align: center; margin: 20px 0;">
            <a href="https://www.sssamacademy.com/college-training.html" target="_blank" class="btn-blue">View Seminar Details &rarr;</a>
        </div>

        <p style="margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 15px; font-size: 13px; color: #475569;">
            Warm Regards,<br>
            <strong>Institutional Outreach Team</strong><br>
            SSSAM Academy, Sector 14, Gurugram<br>
            📞 9102130958 | 📧 placements@sssamacademy.com | 🌐 www.sssamacademy.com
        </p>
    </div>
</body>
</html>`;

const TEMPLATES_LIST = [
  {
    id: 'official_sssam',
    name: '⭐ Official SSSAM College Workshop Proposal (Default)',
    subject: 'Proposal: College Technical Workshops & Career Seminars - SSSAM Academy',
    html: OFFICIAL_SSSAM_TEMPLATE
  },
  {
    id: 'placement_drive',
    name: '💼 Campus Placement & Talent Sourcing Partnership',
    subject: 'Campus Placement Collaboration: SSSAM Academy IT Talent Drive',
    html: PLACEMENT_DRIVE_TEMPLATE
  },
  {
    id: 'quick_briefing',
    name: '⚡ Quick Executive Seminar Briefing (Direct & Short)',
    subject: 'Invitation: Free Technical Seminar for College Students - SSSAM Academy',
    html: QUICK_BRIEFING_TEMPLATE
  }
];

export default function Dashboard() {
  const [selectedTemplateId, setSelectedTemplateId] = useState('official_sssam');
  const [apiKey, setApiKey] = useState('');
  const [senderName, setSenderName] = useState('SSSAM Academy');
  const [senderEmail, setSenderEmail] = useState('placements@sssamacademy.com');
  const [subject, setSubject] = useState(TEMPLATES_LIST[0].subject);
  const [htmlContent, setHtmlContent] = useState(OFFICIAL_SSSAM_TEMPLATE);

  const [recipients, setRecipients] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [logs, setLogs] = useState([]);
  const [statusMsg, setStatusMsg] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const iframeRef = useRef(null);

  // Load Initial Config Defaults from Environment Route
  useEffect(() => {
    fetch('/api/config')
      .then((res) => res.json())
      .then((cfg) => {
        if (cfg.senderName) setSenderName(cfg.senderName);
        if (cfg.senderEmail) setSenderEmail(cfg.senderEmail);
        if (cfg.defaultSubject) setSubject(cfg.defaultSubject);
        if (cfg.hasEnvApiKey) {
          addLog('Detected BREVO_API_KEY from Vercel environment variables.', 'green');
        }
      })
      .catch((err) => console.log('Env config load note:', err));
  }, []);

  // Handle Template Selector Change
  const handleTemplateChange = (templateId) => {
    setSelectedTemplateId(templateId);
    const selected = TEMPLATES_LIST.find((t) => t.id === templateId);
    if (selected) {
      setHtmlContent(selected.html);
      setSubject(selected.subject);
      addLog(`Selected Template: ${selected.name}`, 'green');
    }
  };

  // Load sample CSV
  const handleLoadSample = () => {
    const sampleData = [
      { email: 'tpo@dtu.ac.in', name: 'Delhi Technological University' },
      { email: 'placements@gurugramuniversity.ac.in', name: 'Gurugram University' },
      { email: 'tpo@amity.edu', name: 'Amity University' },
      { email: 'invalid-email-sample', name: 'Sample Invalid Row' }
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
    addLog('Loaded 4 sample college emails for testing.', 'green');
  };

  // Handle CSV Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = [];
        results.data.forEach((row, index) => {
          const emailVal = row.email || row.Email || row.EMAIL || Object.values(row).find((v) => v && v.includes('@'));
          if (emailVal) {
            parsed.push({
              id: index,
              email: emailVal.trim(),
              name: row.College_Name || row.Name || row.Contact_Person || emailVal.split('@')[0],
              status: 'Pending ⏳',
              reason: '-',
              time: '-',
              messageId: '-'
            });
          }
        });

        if (parsed.length > 0) {
          setRecipients(parsed);
          addLog(`Loaded ${parsed.length} college emails from ${file.name}`, 'green');
        } else {
          alert('No valid emails found in CSV. Please ensure your CSV has an "Email" column.');
        }
      }
    });
  };

  // Add Log Entry
  const addLog = (msg, type = 'normal') => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [{ id: Date.now() + Math.random(), msg: `[${time}] ${msg}`, type }, ...prev]);
  };

  // Test Brevo Connection
  const handleTestConnection = async () => {
    setStatusMsg('Testing Brevo connection...');
    try {
      const res = await fetch('/api/test-brevo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey })
      });
      const data = await res.json();
      if (data.success) {
        setStatusMsg(`✅ Connected! Brevo Account: ${data.account.email}`);
        addLog(`Connected to Brevo Account (${data.account.email})`, 'green');
      } else {
        setStatusMsg(`❌ Connection Failed: ${data.error}`);
        addLog(`Brevo connection failed: ${data.error}`, 'red');
      }
    } catch (err) {
      setStatusMsg(`❌ Connection Error: ${err.message}`);
    }
  };

  // Live Iframe Renderer
  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(htmlContent.replace(/{Email}/g, recipients[0]?.email || 'college@edu.in'));
        doc.close();
      }
    }
  }, [htmlContent, recipients]);

  // Send Email Helper Function
  const sendSingleEmail = async (rec) => {
    const timestamp = new Date().toLocaleTimeString();
    const renderedHtml = htmlContent.replace(/{Email}/g, rec.email);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          senderName,
          senderEmail,
          recipientEmail: rec.email,
          recipientName: rec.name,
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
        addLog(`Sent to ${rec.email} (MsgID: ${data.messageId || 'OK'})`, 'green');
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
      alert('No recipients available to send.');
      return;
    }

    setIsSending(true);
    addLog(`🚀 Starting email dispatch for ${listToProcess.length} colleges...`, 'green');

    for (let i = 0; i < listToProcess.length; i++) {
      const rec = listToProcess[i];
      setRecipients((prev) =>
        prev.map((item) => (item.id === rec.id ? { ...item, status: 'Sending...' } : item))
      );

      await sendSingleEmail(rec);
      await new Promise((r) => setTimeout(r, 150));
    }

    setIsSending(false);
    addLog(`🏁 Dispatch process finished!`, 'green');
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
      College_Name: r.name,
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
          <p>Smart Solutions School of AI & Machine Learning — Bulk Email Dispatcher (No DB, Vercel Ready)</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleLoadSample} className="btn btn-primary">
            📁 Load Sample CSV
          </button>
          <button onClick={handleExportCSV} disabled={recipients.length === 0} className="btn btn-success">
            📥 Export Report CSV
          </button>
        </div>
      </div>

      <div className="grid">
        {/* Left Column Controls */}
        <div>
          {/* Card 1: Brevo Settings */}
          <div className="card">
            <h2 className="card-title">🔑 1. Brevo API & Sender Setup</h2>
            <div className="form-group">
              <label>Brevo API Key (v3)</label>
              <input
                type="password"
                placeholder="xkeysib-... (Or leave empty if BREVO_API_KEY set in Vercel)"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Sender Name</label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Sender Email (Must be verified in Brevo)</label>
              <input
                type="email"
                placeholder="placements@sssamacademy.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
              />
            </div>
            <button onClick={handleTestConnection} className="btn btn-primary btn-full">
              Plug Test Brevo Connection
            </button>
            {statusMsg && <p style={{ fontSize: '12px', marginTop: '8px', color: '#94a3b8' }}>{statusMsg}</p>}
          </div>

          {/* Card 2: CSV Upload & Template Switcher */}
          <div className="card">
            <h2 className="card-title">🎨 2. Choose Template & Upload CSV</h2>
            
            <div className="form-group">
              <label>Select Email Template</label>
              <select
                value={selectedTemplateId}
                onChange={(e) => handleTemplateChange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#38bdf8',
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

            <div className="dropzone" style={{ marginTop: '12px' }}>
              <p style={{ fontSize: '14px', fontWeight: '600' }}>Drop College CSV File Here</p>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0 10px' }}>Requires an "Email" column</p>
              <input type="file" accept=".csv" onChange={handleFileUpload} />
            </div>
          </div>

          {/* Card 3: Dispatch & Live Execution Logs */}
          <div className="card">
            <h2 className="card-title">🚀 3. Campaign Dispatcher</h2>
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
                style={{ flex: 1, padding: '12px', fontSize: '14px' }}
              >
                {isSending ? 'Sending...' : `Send All (${recipients.length})`}
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

        {/* Right Column: Tracking Dashboard & HTML Preview */}
        <div>
          {/* Tracking Metrics & Table */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h2 className="card-title" style={{ margin: 0 }}>📊 Live Recipient Delivery Tracker</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="badge badge-success">Sent: {sentCount}</span>
                <span className="badge badge-danger">Failed: {failedCount}</span>
                <span className="badge badge-warning">Pending: {pendingCount}</span>
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
            <div className="table-wrap" style={{ maxHeight: '250px' }}>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email Address</th>
                    <th>Status</th>
                    <th>Reason / Error Diagnostic</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecipients.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '20px', color: '#94a3b8' }}>
                        No records match the current filter.
                      </td>
                    </tr>
                  ) : (
                    filteredRecipients.map((rec, i) => (
                      <tr key={rec.id}>
                        <td>{i + 1}</td>
                        <td style={{ fontWeight: '600' }}>{rec.email}</td>
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
                            maxWidth: '220px',
                            wordBreak: 'break-word'
                          }}
                        >
                          {rec.reason}
                        </td>
                        <td style={{ fontSize: '11px', color: '#94a3b8' }}>{rec.time}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* HTML Preview */}
          <div className="card">
            <h2 className="card-title">👁️ Live Email Template Preview</h2>
            <iframe ref={iframeRef} className="iframe-box" style={{ height: '480px' }} title="Email Render Preview" />
          </div>
        </div>
      </div>
    </div>
  );
}
