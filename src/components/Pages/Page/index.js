import React from "react";

import { Styles } from "./styles";
import { ControlContainer } from '../../Layout/ControlContainer'

const Page01 = ({
  children,
  display = "flex",
  direction = "column",
  lHeight = "150%",
  ...props
}) => {
  return (
    <Styles {...props}>
      <ControlContainer   w= '300px'  h= 'auto'  pr= '10px'  pl= '10px'  bRadius= '10px'  border= '1px solid black'>Page01</ControlContainer>
      {/* {children} */}
    </Styles>
  );
};

export { Page01 };
