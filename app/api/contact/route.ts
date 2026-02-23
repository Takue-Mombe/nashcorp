import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getWriteClient } from "@/lib/cms";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Please complete all required fields correctly." },
        { status: 400 },
      );
    }

    const { name, email, phone, service, message } = result.data;

    const forwardedFor = request.headers.get("x-forwarded-for");
    const sourceIp = forwardedFor?.split(",")[0]?.trim() ?? "unknown";
    const userAgent = request.headers.get("user-agent") ?? "unknown";

    const writeClient = getWriteClient();
    let persistedInSanity = false;

    if (writeClient) {
      try {
        await writeClient.create({
          _type: "enquiry",
          name,
          email,
          phone: phone || "",
          service,
          message,
          source: "website",
          sourceIp,
          userAgent,
          submittedAt: new Date().toISOString(),
          status: "new",
        });
        persistedInSanity = true;
      } catch {
        persistedInSanity = false;
      }
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
      process.env;

    let emailed = false;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: Number(SMTP_PORT) === 465,
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `Website Enquiry <${SMTP_USER}>`,
          to: CONTACT_TO_EMAIL,
          replyTo: email,
          subject: `New Carpentry Enquiry: ${service}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || "Not provided"}`,
            `Service: ${service}`,
            `IP: ${sourceIp}`,
            "",
            "Project Details:",
            message,
          ].join("\n"),
        });
        emailed = true;
      } catch {
        emailed = false;
      }
    }

    if (!persistedInSanity && !emailed) {
      return NextResponse.json(
        {
          error:
            "Enquiry service is not configured. Please set SANITY_API_WRITE_TOKEN and/or SMTP variables.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your enquiry." },
      { status: 500 },
    );
  }
}
