import React from "react";

import { Container } from "./styles";

const Button = ({ isLoading = false, children, ...props }) => {
  return (
    <Container isLoading={isLoading} {...props}>
      {isLoading ? '<Spinner size="1rem" />' : children}
    </Container>
  );
};

export { Button };
