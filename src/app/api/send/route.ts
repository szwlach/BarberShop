import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { userEmail, message } = await req.json();

  console.log("Received userEmail:", userEmail);
  console.log("Received message:", message);

  try {
    const { data, error } = await resend.emails.send({
      from: userEmail,
      to: ["example@gmail.com"],
      subject: "New Barber booking",
      html: `<p>You received a new message from: ${userEmail}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("Email sent successfully:", data);

    if (error) {
      console.error("Error from Resend API:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send the email." }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error caught in API route:", error); // Log the error caught in the try block
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
