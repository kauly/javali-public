import * as React from "react";
import { Button, ButtonProps } from "rebass";
import Link from "next/link";

interface IBtuttonProps extends ButtonProps {
  href?: string;
  las?: string;
}

export default (props: IBtuttonProps) =>
  props.href ? (
    <Link href={props.href} as={props.las}>
      <Button {...props} />
    </Link>
  ) : (
    <Button {...props} />
  );
