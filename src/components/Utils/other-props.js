import { css } from "@emotion/react";

export const OtherProps = ({
  animation = "",
  appearance = "",
  transform = "",
  transformOrigin = "",
  visibility = "",
  whiteSpace = "",
  userSelect = "",
  pointerEvents = "",
  wordBreak = "",
  overflowWrap = "",
  textOverflow = "",
  cursor = "",
  resize = "",
  transition = "",
  objectFit = "",
  objectPosition = "",
  float = "",
  fill = "",
  stroke = "",
  outline = "",
}) => css`
  animation: ${animation};
  appearance: ${appearance};
  transform: ${transform};
  transform-origin: ${transformOrigin};
  visibility: ${visibility};
  white-space: ${whiteSpace};
  user-select: ${userSelect};
  pointer-events: ${pointerEvents};
  word-break: ${wordBreak};
  overflow-wrap: ${overflowWrap};
  text-overflow: ${textOverflow};
  cursor: ${cursor};
  resize: ${resize};
  transition: ${transition};
  object-fit: ${objectFit};
  object-position: ${objectPosition};
  float: ${float};
  fill: ${fill};
  stroke: ${stroke};
  outline: ${outline};
`;
