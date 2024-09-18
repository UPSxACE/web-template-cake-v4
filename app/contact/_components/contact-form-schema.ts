import { z } from "zod";
import validator from "validator";

const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Por favor, insira o seu nome." })
    .min(1, { message: "Por favor, insira o seu nome." }),
  email: z
    .string({ required_error: "Endereço de email inválido." })
    .email({ message: "Endereço de email inválido." })
    .min(1, { message: "Por favor, insira o seu email." }),
  phone: z
    .string()
    .refine(
      validator.isMobilePhone,
      "Por favor, insira um número de telefone válido."
    ),
  subject: z
    .string({ required_error: "Por favor, insira o assunto." })
    .min(1, { message: "Por favor, insira o assunto." }),
  message: z
    .string({ required_error: "Por favor, insira a sua mensagem." })
    .min(1, { message: "Por favor, insira a sua mensagem." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export default contactFormSchema;
