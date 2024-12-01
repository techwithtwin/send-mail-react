import { ContactFormdata } from "../../schema";

export type SendMailRes = {
  status: boolean;
  message: string;
};

export const sendEmail = async ({
  fullName,
  email,
  subject,
  message,
}: ContactFormdata): Promise<SendMailRes> => {
  const data = {
    service_id: "service_5pu63l9",
    template_id: "template_wqeaw7o",
    user_id: "Xt5liCHuWekhfnsr8",
    template_params: {
      fullName,
      email,
      subject,
      message,
    },
  };
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to submit. Try again later");
    }

    return {
      status: true,
      message: "Inquiry Submitted successfully",
    };
  } catch (error) {
    //logging
    console.error("Error", error);
    let msg = "Failed to Submit Request, Try again later";
    if (error instanceof Error) {
      msg = error.message;
    }

    return {
      status: false,
      message: msg,
    };
  }
};
