import { Box, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import { Field } from "../ui/field";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <Stack
      bg="rgba(255, 255, 255, 0.75)"
      borderRadius="xl"
      boxShadow="md"
      w={{ base: "md", sm: "xl" }}
      backdropFilter="blur(5px)"
      p={6}
      mx="5%"
    >
      <Heading mb=".5rem" size="2xl" color="gray.800">
        Contact Us
      </Heading>
      <Box asChild colorPalette="blue">
        <hr />
      </Box>

      <Field label="Full Name">
        <Input type="text" placeholder="John Doe" {...inputStyles} />
      </Field>
      <Field label="Email">
        <Input type="email" placeholder="john@example.com" {...inputStyles} />
      </Field>
      <Field label="Subject">
        <Input type="text" placeholder="Inquiry Subject" {...inputStyles} />
      </Field>
      <Field label="Message">
        <Textarea placeholder="Your message here..." {...inputStyles} />
      </Field>
      <Button colorPalette="teal" mt=".5rem">
        Send <IoIosSend />
      </Button>
    </Stack>
  );
};

export default ContactForm;

const inputStyles = {
  borderRadius: "md",
  border: "1px solid",
  borderColor: "gray.600",
  bg: "whiteAlpha.500",
};
