// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { message, email } = body;

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ibiteiniyalla@gmail.com",
      subject: "New message from your portfolio",
      //   replyTo: email || "no-reply@example.com",
      html: `<p><strong>Message:</strong></p><p><strong>${email}</strong></p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
