import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL; // adresse qui reçoit les notifications

function isConfigured(): boolean {
  return Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS && NOTIFY_EMAIL);
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }
  return transporter;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Envoie une notification email à l'adresse configurée lorsqu'un
 * nouveau message de contact est reçu.
 * Ne fait rien si les variables SMTP ne sont pas configurées.
 */
export async function sendContactNotification(data: ContactData): Promise<void> {
  if (!isConfigured()) {
    console.warn('[mailer] SMTP non configuré — notification email ignorée.');
    return;
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#2d3e50;border-bottom:2px solid #d4a13e;padding-bottom:8px">
        Nouveau message — Sanctuaire ND de la Tronchaye
      </h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">
        <tr>
          <td style="padding:8px 12px;font-weight:bold;color:#2d3e50;width:100px">Nom</td>
          <td style="padding:8px 12px">${escapeHtml(data.name)}</td>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:8px 12px;font-weight:bold;color:#2d3e50">Email</td>
          <td style="padding:8px 12px">
            <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 12px;font-weight:bold;color:#2d3e50">Sujet</td>
          <td style="padding:8px 12px">${escapeHtml(data.subject)}</td>
        </tr>
      </table>
      <div style="background:#f5f1ea;padding:16px;border-radius:8px;white-space:pre-wrap">${escapeHtml(data.message)}</div>
      <p style="color:#888;font-size:12px;margin-top:24px">
        Ce message a été envoyé via le formulaire de contact du site.
        Vous pouvez y répondre directement en répondant à cet email.
      </p>
    </div>
  `;

  await getTransporter().sendMail({
    from: `"Sanctuaire ND Tronchaye" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    replyTo: data.email,
    subject: `[Contact] ${data.subject} — ${data.name}`,
    html,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
