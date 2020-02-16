import { Box, Flex, Text } from "rebass";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Whats = props => {
  return (
    <Box
      sx={{
        transition: "all 0.3s ease-in",
        width: "350px",
        border: "2px solid black",
        borderRadius: "4px",
        padding: "10px",
        color: "#000",
        textDecoration: "none",
        ":hover": {
          cursor: "pointer",
          color: "white",
          background: "black"
        }
      }}
      as="a"
      href="https://wa.me/5548984538771?text=oi"
      target="_blank"
    >
      <Flex justifyContent="space-around" alignItems="center">
        <Text variant="navLink">Falar com um vendedor</Text>
        <WhatsAppIcon fontSize="large" />
      </Flex>
    </Box>
  );
};

export default Whats;
