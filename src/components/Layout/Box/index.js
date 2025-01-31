import React from "react";

import { Container } from "./styles";

const Box = ({
  children,
  display = "flex",
  direction = "column",
  lHeight = "150%",
  ...props
}) => {
  return (
    <Container
      display={display}
      direction={direction}
      lHeight={lHeight}
      {...props}
    >
      {children}
    </Container>
  );
};

export { Box };
