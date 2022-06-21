import { css } from "@emotion/react";

export const Borders = ({
  border = "",
  bWidth = "",
  bStyle = "",
  bColor = "",
  bTop = "",
  bTopWidth = "",
  bTopStyle = "",
  bTopColor = "",
  bRight = "",
  bRightWidth = "",
  bRightStyle = "",
  bRightColor = "",
  bBottom = "",
  bBottomWidth = "",
  bBottomStyle = "",
  bBottomColor = "",
  bLeft = "",
  bLeftWidth = "",
  bLeftStyle = "",
  bLeftColor = ""

}) => css`
  border: ${border};
  border-width: ${bWidth};
  border-style: ${bStyle};
  border-color: ${bColor};
  border-top: ${bTop};
  border-top-width: ${bTopWidth};
  border-top-style: ${bTopStyle};
  border-top-color: ${bTopColor};
  border-right: ${bRight};
  border-right-width: ${bRightWidth};
  border-right-style: ${bRightStyle};
  border-right-color: ${bRightColor};
  border-bottom: ${bBottom};
  border-bottom-width: ${bBottomWidth};
  border-bottom-style: ${bBottomStyle};
  border-bottom-color: ${bBottomColor};
  border-left: ${bLeft};
  border-left-width: ${bLeftWidth};
  border-left-style: ${bLeftStyle};
  border-left-color: ${bLeftColor};
`;
