import { css } from "@emotion/react";

export const Typography = ({
  fFamily = "",
  fSize = "",
  fWeight = "",
  fStyle = "",
  lHeight = "",
  lSpacing = "",
  tAlign = "",
  tTransform = "",
  tDecoration = "",
  position = "",
}) => css`
  font-family: ${fFamily};
  font-size: ${fSize};
  font-weight: ${fWeight};
  font-style: ${fStyle};
  line-height: ${lHeight};
  letter-spacing: ${lSpacing};
  text-align: ${!tAlign.xs && !tAlign.sm && !tAlign.md && !tAlign.lg && tAlign};
  text-transform: ${tTransform};
  text-decoration: ${tDecoration};
  position: ${position};

  @media (max-width: 767px) {
    text-align: ${tAlign.xs};
  }

  @media (min-width: 768px) {
    text-align: ${tAlign.sm};
  }

  @media (min-width: 1024px) {
    text-align: ${tAlign.md};
  }

  @media (min-width: 1440px) {
    text-align: ${tAlign.lg};
  }
`;
