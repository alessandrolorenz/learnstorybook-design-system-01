import { css } from "@emotion/react";

export const Shadow = ({ boxShadow = "" }) => css`
  box-shadow: ${boxShadow};
`;
