import { css } from "@emotion/react";

export const BackgroundAndColor = ({
  color = "",
  bg = "",
  bgColor = "",
  opacity = "",
  bgImage = "",
  bgSize = "",
  bgPosition = "",
  bgRepeat = "",
  bgAttachment = "",
  bgClip = "",
}) => css`
  color: ${color};
  background: ${bg};
  background-color: ${bgColor};
  opacity: ${opacity};
  background-image: ${bgImage};
  background-size: ${bgSize};
  background-position: ${bgPosition};
  background-repeat: ${bgRepeat};
  background-attachment: ${bgAttachment};
  background-clip: ${bgClip};
`;
