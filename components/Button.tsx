import * as React from "react";
import { Button, ButtonProps } from "rebass";
import Link from "next/link";

interface IBtuttonProps extends ButtonProps {
  href?: string;
}

export default (props: IBtuttonProps) =>
  props.href ? (
    <Link href={props.href}>
      <Button {...props} />
    </Link>
  ) : (
    <Button {...props} />
  );
