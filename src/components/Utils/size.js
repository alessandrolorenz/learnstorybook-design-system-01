import { css } from "@emotion/react";

export const Size = ({
  w = "",
  h = "",
  minW = "",
  maxW = "",
  minH = "",
  maxH = "",
  vAlign = "",
  overflow = "",
  boxSizing = ""
}) => css`
  width: ${!w.xs && !w.sm && !w.md && !w.lg && w};
  height: ${!h.xs && !h.sm && !h.md && !h.lg && h};
  min-width: ${minW};
  max-width: ${maxW};
  min-height: ${minH};
  max-height: ${maxH};
  vertical-align: ${vAlign};
  overflow: ${overflow};
  ${boxSizing ? `box-sizing: ${boxSizing};` : "box-sizing: border-box;"}

  @media (max-width: 767px) {
    width: ${w.xs};
    height: ${h.xs};
  }

  @media (min-width: 768px) {
    width: ${w.sm};
    height: ${h.sm};
  }

  @media (min-width: 1024px) {
    width: ${w.md};
    height: ${h.md};
  }

  @media (min-width: 1440px) {
    width: ${w.lg};
    height: ${h.lg};
  }
`;
