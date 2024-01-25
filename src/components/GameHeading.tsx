import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "./gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((e) => e.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((e) => e.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
