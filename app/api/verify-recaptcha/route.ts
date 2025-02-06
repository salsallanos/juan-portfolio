const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "your-secret-key";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    if (!token) {
      return Response.json({ success: false, message: "No token provided" }, { status: 400 });
    }

    // Verify token with Google reCAPTCHA API
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return Response.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
