"use server";

import api from "@/api";
import { ContactFormData } from "@/app/contact/_components/contact-form-schema";

export default async function contact(
  data: ContactFormData
): Promise<number | null | boolean> {
  let error: number | null = null;

  return 500; //FIXME
  await api
    .post("api/mensagens", {
      data: {
        nome_completo: data.name,
        assunto: data.subject,
        telefone: data.phone,
        email: data.email,
        mensagem: data.message,
      },
    })
    .catch((err) => {
      console.log("Error in contact action: ", err.response);
      error = err?.response?.status || 500;
    });

  return error || true;
}
