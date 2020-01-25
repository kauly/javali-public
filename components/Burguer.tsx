import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

interface IBurguer {
  handleClick: () => void;
}

const Burguer = (props: IBurguer) => {
  return (
    <IconButton arial-label="menu" onClick={props.handleClick}>
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};

export default Burguer;
