import * as React from "react";
import { Flex, Box } from "rebass";
import { Select, Input } from "@rebass/forms";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = props => {
  return (
    <Flex
      bg="searchBg"
      height={[120, 60, 60]}
      width="100%"
      px={2}
      alignItems="center"
      justifyContent={["space-evenly", "center", "center"]}
      flexDirection={["column", "row", "row"]}
    >
      <Box width={[1 / 2, 1 / 3, 1 / 3]}>
        <Select
          id="categories"
          name="categories"
          sx={{
            width: [180, 240, 240],
            fontFamily: "body",
            ":hover": {
              cursor: "pointer"
            },
            "option > *": {
              cursor: "pointer"
            }
          }}
        >
          <option defaultChecked>Categorias</option>
          <option key={0}>Farol</option>
          <option key={1}>Guincho</option>
          <option key={2}>Pneu</option>
        </Select>
      </Box>
      <Box width={[1 / 2, 1 / 3, 1 / 3]}>
        <Flex justifyContent="center">
          <Input
            id="search"
            name="search"
            type="text"
            sx={{
              width: [140, 200, 200],
              color: "#000",
              borderRight: 0,
              fontFamily: "body"
            }}
          />
          <Flex
            width={40}
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "1px solid black",
              ":hover": {
                cursor: "pointer"
              }
            }}
          >
            <SearchIcon />
          </Flex>
        </Flex>
      </Box>
      <Box width={[0, 1 / 3, 1 / 3]}></Box>
    </Flex>
  );
};

export default SearchBar;
