import { css } from "@emotion/react";

export const BorderRadius = ({
  bRadius = "",
  bTopLeftRadius = "",
  bTopRightRadius = "",
  bBottomRightRadius = "",
  bBottomLeftRadius = "",
}) => css`
  border-radius: ${bRadius};
  border-top-left-radius: ${bTopLeftRadius};
  border-top-right-radius: ${bTopRightRadius};
  border-bottom-right-radius: ${bBottomRightRadius};
  border-bottom-left-radius: ${bBottomLeftRadius};
`;
