import React from "react";
import {
  Box,
  Center,
  Avatar,
  SimpleGrid,
  Text,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";

function GridItem(props) {
  const { name, image, position, link } = props;
  return (
    <Box placeItems={"center"} align={"center"} p={5}>
      <Center flexDirection="column" p={"auto"}>
        <Avatar size="2xl" src={image} />
        {link ? (
          <Link href={link} isExternal p={2}>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
              width="25px"
              height="25px"
            />
          </Link>
        ) : null}
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
          py={{ base: 3, md: 4 }}
        >
          {name}
        </Text>
        <Text
          fontWeight={"thin"}
          as={"span"}
          position={"relative"}
          fontSize={{ base: "md", sm: "lg", lg: "xl" }}
        >
          {position}
        </Text>
      </Center>
    </Box>
  );
}

export default function TeamGrid(props) {
  const { team, faculty } = props;
  return (
    <Box width={"full"}>
      <Stack
        justify="center"
        align={"center"}
        spacing={20}
        direction={{ base: "column", md: "row" }}
      >
        {faculty.map((teamMember) => (
          <GridItem
            name={teamMember.name}
            image={teamMember.image.url}
            position={teamMember.position}
            key={teamMember.id}
          />
        ))}
      </Stack>
      <SimpleGrid py={10} columns={{ base: 1, md: 4 }}>
        {team.map((teamMember) => (
          <GridItem
            name={teamMember.name}
            image={teamMember.image.url}
            position={teamMember.position}
            key={teamMember.id}
            link={teamMember.linkedin}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
