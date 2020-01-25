import Link from "next/link";
import { Text } from "rebass";

interface INavLink {
  href: string;
  text: string;
}

const NavLink = (props: INavLink) => (
  <Link href={props.href}>
    <Text variant="navLink">{props.text}</Text>
  </Link>
);

export default NavLink;
