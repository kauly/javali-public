import { Box } from "rebass";
import { useRouter } from "next/router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

const BackBar = props => {
  const router = useRouter();
  const handleClick = () => router.push("/");
  return (
    <Box width={1 / 1} padding="3">
      <IconButton onClick={handleClick}>
        <ArrowBackIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default BackBar;
