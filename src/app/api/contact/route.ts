import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.RESEND_TO_EMAIL;
    const sender = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      return Response.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return Response.json({ message: "Invalid request." }, { status: 400 });
    }

    const data = body as Record<string, unknown>;

    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const subject = typeof data.subject === "string" ? data.subject.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";
    const website = typeof data.website === "string" ? data.website.trim() : "";

    // Honeypot: silently discard likely bot submissions.
    if (website) {
      return Response.json({ message: "Message received." });
    }

    if (
      !name ||
      !email ||
      !subject ||
      !message ||
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return Response.json(
        { message: "Please enter valid details in every field." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `Portfolio message: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);

      return Response.json(
        { message: "Email could not be sent. Please try again later." },
        { status: 502 },
      );
    }

    return Response.json(
      { message: "Your message has been sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
