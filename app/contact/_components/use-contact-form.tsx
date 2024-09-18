import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import contactFormSchema, { ContactFormData } from "./contact-form-schema";

export default function useContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  return form;
}
