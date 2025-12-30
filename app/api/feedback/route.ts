import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Pulse 46 <noreply@pulse46.app>',
      to: ['admin@pulse46.app'],
      subject: `Pulse 46 Feedback${name ? ` from ${name}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00F0FF;">New Feedback from Pulse 46</h2>
          <p><strong>Name:</strong> ${name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <hr style="border: 1px solid #333; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true, message: 'Feedback sent successfully' });
  } catch (error: any) {
    console.error('Feedback error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

