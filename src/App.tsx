import { Box, Flex, Text } from "@chakra-ui/react";
import "./App.css";
import ContactForm from "./components/home/contact-form";

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
      <ContactForm />
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
