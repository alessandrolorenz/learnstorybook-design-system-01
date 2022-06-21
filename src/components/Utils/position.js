import { css } from "@emotion/react";

export const Position = ({
  position = "",
  zIndex = "",
  top = "",
  right = "",
  bottom = "",
  left = "",
}) => css`
  position: ${position};
  z-index: ${zIndex};
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
`;
