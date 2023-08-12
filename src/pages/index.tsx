import { CardMovie } from "@/components/card-movie";
import { MoviesSpace } from "@/components/movie-space";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      as="main"
      align="center"
      justify="center"
      w="100vw"
      h="100vh"
      bgGradient={["linear(to-tl, #FF46B9, #9F55FF)"]}
    >
      <MoviesSpace />
    </Flex>
  );
}
