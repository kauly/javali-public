import { useState } from "react";
import { Flex, Box, Image } from "rebass";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import WhatsIcon from "@material-ui/icons/WhatsApp";

import CartIcon from "./CartIcon";
import NavLink from "./NavLink";
import Burguer from "./Burguer";
import OverlayMenu from "./OverlayMenu";

const Navbar = props => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const _handleIsOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <Flex px={2} color="text" bg="navbarBg" alignItems="center" height="80px">
        <Box width={[1 / 3, 1 / 5, 1 / 5]}>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dqapaie8f/image/upload/v1584817181/javali/logos/logo_um.png"
              width="70px"
              height="70px"
              sx={{
                ":hover": {
                  cursor: "pointer"
                }
              }}
            />
          </Link>
        </Box>
        <Box
          width={[0, 3 / 5, 3 / 5]}
          sx={{
            display: ["none", "block", "block"]
          }}
        >
          <Flex justifyContent="space-around" alignItems="center">
            <NavLink href="/accessory" text="Acessoria" />
            <NavLink href="/#location" text="Localização" />
          </Flex>
        </Box>
        <Box width={[1 / 3, 1 / 5, 1 / 5]}>
          <Flex justifyContent="space-around" alignItems="center">
            <IconButton>
              <WhatsIcon fontSize="large" />
            </IconButton>

            <CartIcon />
          </Flex>
        </Box>
        <Box
          width={[1 / 3, 0, 0]}
          sx={{
            display: ["block", "none", "none"]
          }}
        >
          <Flex justifyContent="flex-end">
            <Burguer handleClick={_handleIsOpen} />
          </Flex>
        </Box>
      </Flex>
      <OverlayMenu isOpen={isOpen} handleIsOpen={_handleIsOpen} />
    </>
  );
};

export default Navbar;
