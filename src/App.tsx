import {
  Box,
  Flex,
  Heading,
  Input,
  Separator,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import "./App.css";
import { Button } from "./components/ui/button";
import { Field } from "./components/ui/field";

function App() {
  return (
    <Flex
      h="100vh"
      bgImage="url(/lizard-bg.jpg)"
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100%"
      align="center"
      justify="center"
      pos="relative"
    >
      <Stack
        bg="rgba(255, 255, 255, 0.75)"
        borderRadius="xl"
        boxShadow="md"
        w="xl"
        backdropFilter="blur(5px)"
        p={6}
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

      <Text pos="absolute" color="white" bottom={4} right={4}>
        Image by{" "}
        <Box asChild mr="1" textDecor="underline" fontWeight={600}>
          <a href="https://pixabay.com/users/breaklessbiker-27735510/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9179598">
            JAGADEESH
          </a>
        </Box>
        from
        <Box asChild ml="2" textDecor="underline" fontWeight={600}>
          <a href="https://pixabay.com">Pixabay</a>
        </Box>
      </Text>
    </Flex>
  );
}

export default App;

const inputStyles = {
  borderRadius: "md",
  border: "1px solid",
  borderColor: "gray.600",
  bg: "whiteAlpha.500",
};
