import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaPenNib } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to My Personal Blog
        </Heading>
        <Text fontSize="lg" textAlign="center">
          A space where I share my thoughts, experiences, and stories.
        </Text>
        <Box boxSize="sm">
          <Image src="/path-to-your-image.jpg" alt="Personal Blog" borderRadius="md" />
        </Box>
        <Button rightIcon={<FaPenNib />} colorScheme="teal" variant="solid" size="lg">
          Read My Blog
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;