import { Button, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { CardMovie } from "./card-movie";
import { useEffect, useState } from "react";

export function MoviesSpace() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    updateWindowDimensions(); // Atualiza dimensões no início

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <VStack
      width={["full", "60%"]}
      height={["full", "85%"]}
      padding={"6px"}
      borderRadius={"10px"}
      bgGradient={"linear(to-tl, #9747FF, #C497FF)"}
    >
      <VStack
        width={"full"}
        height={"full"}
        bg={"#1E1F28"}
        borderRadius={"10px"}
        boxShadow={"10px 10px 10px 10px rgba(0, 0, 0, 0.25)"}
        px={"10%"}
        pt={"40px"}
        gap={"30px"}
      >
        <HStack width={"full"} justify={"space-between"} align={"center"}>
          <Image src={require("../../public/logo.svg")} alt="EAE" />
          <Button
            width={"200px"}
            height={"45px"}
            fontWeight={"normal"}
            bgGradient={["linear(to-tl, #FF2DAF, #D223FF)"]}
            borderRadius={"5px"}
            fontSize={"14px"}
            rightIcon={
              <Image src={require("../../public/icon-button.svg")} alt={""} />
            }
            _hover={{
              bgGradient: ["linear(to-tl, #C497FF, #9747FF)"],
              transition: "0.5s",
            }}
          >
            Nova recomendação
          </Button>
        </HStack>
        {windowWidth > 768 ? (
          <HStack width={"full"} spacing={4} overflow={"auto"}>
            <CardMovie title="Barbie" image="barbie.svg" rate="5" />
            <CardMovie title="Openheimer" image="openheimer.svg" rate="5" />
            <CardMovie title="Indiana" image="indiana.svg" rate="5" />
          </HStack>
        ) : (
          <VStack width={"full"} spacing={4} overflow={"auto"}>
            <CardMovie title="Barbie" image="barbie.svg" rate="5" />
            <CardMovie title="Openheimer" image="openheimer.svg" rate="5" />
            <CardMovie title="Indiana" image="indiana.svg" rate="5" />
          </VStack>
        )}
      </VStack>
    </VStack>
  );
}
