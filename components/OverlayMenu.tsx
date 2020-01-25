import { Flex, Box } from "rebass";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import NavLink from "./NavLink";

interface IOverlayMenu {
  isOpen: boolean;
  handleIsOpen: () => void;
}

const OverlayMenu = (props: IOverlayMenu) => {
  return (
    <Box
      bg="searchBg"
      sx={{
        position: "fixed",
        width: props.isOpen ? "100%" : 0,
        height: "100vh",
        transition: "all ease 0.5s",
        zIndex: 5,
        left: 0,
        top: 0
      }}
    >
      {props.isOpen && (
        <>
          <IconButton arial-label="close-menu" onClick={props.handleIsOpen}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            sx={{
              position: "relative",
              height: "100vh",
              padding: 4
            }}
          >
            <NavLink href="#location" text="Acessoria" />
            <NavLink href="#location" text="Como o site funciona?" />
            <NavLink href="#location" text="Localização" />
          </Flex>
        </>
      )}
    </Box>
  );
};

export default OverlayMenu;
