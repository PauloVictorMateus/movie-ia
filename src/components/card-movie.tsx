import {
  Button,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";

interface CardMovieProps {
  title: string;
  image: string;
  rate: string;
  time_movie?: string;
  date_movie?: string;
}

export function CardMovie({
  title,
  image,
  rate,
  time_movie,
  date_movie,
}: CardMovieProps) {
  return (
    <VStack width={"full"}>
      <HStack justify={"space-between"} width={"full"} gap={0}>
        <Text
          color={"white"}
          fontFamily={"Outfit"}
          fontWeight={700}
          isTruncated
          fontSize={"20px"}
        >
          {title}
        </Text>
        <Flex justify={"center"} align={"center"} gap={"4px"}>
          <FaStar color={"#FEEA35"} size={"18px"} />
          <Text color={"#FEEA35"} fontWeight={700}>
            {rate}
          </Text>
        </Flex>
      </HStack>
      <Flex>
        <Image src={image} alt={title} width={"100%"} height={"100%"} />
      </Flex>

      <HStack width={"full"} justify={"space-between"} align={"center"}>
        <HStack gap={1} spacing={0}>
          <BiTimeFive size={"20px"} color={"#8B8D9B"} />
          <Text
            color={"#8B8D9B"}
            fontSize={"15px"}
            fontFamily={"Outfit"}
            fontWeight={500}
          >
            {time_movie ? time_movie : "120 min"}
          </Text>
        </HStack>
        <HStack gap={1} spacing={0}>
          <AiOutlineCalendar size={"20px"} color={"#8B8D9B"} />
          <Text
            color={"#8B8D9B"}
            fontSize={"15px"}
            fontFamily={"Outfit"}
            fontWeight={500}
          >
            {date_movie ? date_movie : "2021"}
          </Text>
        </HStack>
      </HStack>
      <Flex height={"full"} width={"full"}>
        <Button
          bg={"#2B2B37"}
          _hover={{
            bg: "#373745",
          }}
          width={"full"}
          gap={1}
        >
          <Image src={"play.svg"} alt={"play"} />
          <Text fontWeight={500} fontSize={"14px"}>
            Assistir Trailer
          </Text>
        </Button>
      </Flex>
    </VStack>
  );
}
