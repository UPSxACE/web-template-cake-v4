"use client";

import contact from "@/actions/contact";
import Spinner from "@/components/spinners/spinner";
import { Dialog, DialogContent } from "@/components/sui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/sui/form";
import { FormButton } from "@/components/ui/form/form-button";
import { FormInput } from "@/components/ui/form/form-input";
import { FormTextarea } from "@/components/ui/form/form-textarea";
import { useState } from "react";
import { toast } from "sonner";
import { ContactFormData } from "./_components/contact-form-schema";
import useContactForm from "./_components/use-contact-form";

export default function ContactForm() {
  const [open, setOpen] = useState(false);

  const form = useContactForm();

  async function onSubmit(values: ContactFormData) {
    setOpen(true);

    await contact(values)
      .then((result) => {
        if (result !== true) {
          throw new Error(
            "Error submiting the contact form: " + String(result)
          );
        }

        setTimeout(() => {
          toast.success(
            "Recebemos o seu email. Responderemos assim que possível.",
            {
              duration: 30000,
              closeButton: false,
            }
          );
          setOpen(false);
          form.reset();
        }, 1000);
      })
      .catch(() => {
        toast.error(
          "Infelizmente ocorreu um erro. Por favor, tente novamente mais tarde.",
          {
            duration: 30000,
            closeButton: false,
          }
        );
        setOpen(false);
      });
  }

  return (
    <Form {...form}>
      <Dialog open={open}>
        <DialogContent
          hideCloseButton
          className="border-none bg-transparent text-white justify-center"
        >
          <Spinner className="[&>div]:!bg-white" />
        </DialogContent>
      </Dialog>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-md:max-w-[36rem] w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <FormInput required placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <FormInput required placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone (Opcional)</FormLabel>
              <FormControl>
                <FormInput placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assunto</FormLabel>
              <FormControl>
                <FormInput required placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <FormTextarea required rows={4} placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormButton type="submit">ENVIAR</FormButton>
      </form>
    </Form>
  );
}
