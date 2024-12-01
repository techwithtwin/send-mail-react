import { Box, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormdata } from "../../../schema";
import { toast } from "react-toastify";
import { useState } from "react";
import { sendEmail } from "../../utils/functions";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormdata>({
    resolver: zodResolver(ContactSchema),
    mode: "onChange",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ContactFormdata) => {
    setIsLoading(true);

    const res = await sendEmail(data);
    setIsLoading(false);

    //check for success
    if (res.status) {
      toast.success(res.message);
      reset();
      return;
    }

    //toast an error
    toast.error(res.message);
  };

  return (
    <Stack
      bg="rgba(255, 255, 255, 0.75)"
      borderRadius="xl"
      boxShadow="md"
      w={{ base: "md", sm: "xl" }}
      backdropFilter="blur(5px)"
      p={6}
      mx="5%"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading mb=".5rem" size="2xl" color="gray.800">
        Contact Us
      </Heading>
      <Box asChild colorPalette="blue">
        <hr />
      </Box>

      <Field
        label="Full Name"
        required
        invalid={!!errors.fullName}
        errorText={errors.fullName?.message}
        helperText={!errors.fullName && "Enter your Full name"}
      >
        <Input
          type="text"
          placeholder="John Doe"
          {...register("fullName")}
          {...inputStyles}
        />
      </Field>
      <Field
        label="Email"
        required
        invalid={!!errors.email}
        errorText={errors.email?.message}
        helperText={!errors.email && "Enter your Email"}
      >
        <Input
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          {...inputStyles}
        />
      </Field>
      <Field
        label="Subject"
        required
        invalid={!!errors.subject}
        errorText={errors.subject?.message}
        helperText={!errors.subject && "Subject of your Inquiry"}
      >
        <Input
          type="text"
          placeholder="Inquiry Subject"
          {...register("subject")}
          {...inputStyles}
        />
      </Field>
      <Field
        label="Message"
        required
        invalid={!!errors.message}
        errorText={errors.message?.message}
        helperText={!errors.message && "Enter your message in detail"}
      >
        <Textarea
          placeholder="Your message here..."
          {...register("message")}
          {...inputStyles}
        />
      </Field>
      <Button loading={isLoading} colorPalette="teal" mt=".5rem" type="submit">
        Send <IoIosSend />
      </Button>
    </Stack>
  );
};

export default ContactForm;

const inputStyles = {
  // borderRadius: "md",
  // border: "1px solid",
  // borderColor: "gray.600",
  bg: "whiteAlpha.500",
  boxShadow: "sm",
};
