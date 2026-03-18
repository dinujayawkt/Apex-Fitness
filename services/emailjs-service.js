import emailjs from "@emailjs/browser";

function getEmailJsConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing EmailJS environment variables.");
  }

  return { serviceId, templateId, publicKey };
}

export async function sendContactEmail({ name, email, message }) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  const templateParams = {
    from_name: name,
    from_email: email,
    message,
  };

  try {
    return await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
    });
  } catch (error) {
    const details = typeof error?.text === "string" ? error.text : "Unknown EmailJS error.";
    throw new Error(details);
  }
}
