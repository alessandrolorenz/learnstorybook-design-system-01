import { css } from "@emotion/react";

export const FlexBox = ({
  display = "",
  aItems = "",
  aContent = "",
  aSelf = "",
  jItems = "",
  jContent = "",
  jSelf = "",
  wrap = "",
  direction = "",
  grow = "",
  shrink = "",
  basis = "",
  order = ""
}) => css`
  display: ${!display.xs && !display.sm && !display.md && !display.lg && display};
  align-items: ${!aItems.xs && !aItems.sm && !aItems.md && !aItems.lg && aItems};
  align-content: ${!aContent.xs && !aContent.sm && !aContent.md && !aContent.lg && aContent};
  align-self: ${!aSelf.xs && !aSelf.sm && !aSelf.md && !aSelf.lg && aSelf};
  justify-items: ${!jItems.xs && !jItems.sm && !jItems.md && !jItems.lg && jItems};
  justify-content: ${!jContent.xs && !jContent.sm && !jContent.md && !jContent.lg && jContent};
  justify-self: ${!jSelf.xs && !jSelf.sm && !jSelf.md && !jSelf.lg && jSelf};
  flex-wrap: ${!wrap.xs && !wrap.sm && !wrap.md && !wrap.lg && wrap};
  flex-direction: ${!direction.xs && !direction.sm && !direction.md && !direction.lg && direction};
  flex-grow: ${!grow.xs && !grow.sm && !grow.md && !grow.lg && grow};
  flex-shrink: ${!shrink.xs && !shrink.sm && !shrink.md && !shrink.lg && shrink};
  flex-basis: ${!basis.xs && !basis.sm && !basis.md && !basis.lg && basis};
  order: ${!order.xs && !order.sm && !order.md && !order.lg && order};

  @media (max-width: 767px) {
    display: ${display.xs};
    align-items: ${aItems.xs};
    align-content: ${aContent.xs};
    align-self: ${aSelf.xs};
    justify-items: ${jItems.xs};
    justify-content: ${jContent.xs};
    justify-self: ${jSelf.xs};
    flex-wrap: ${wrap.xs};
    flex-direction: ${direction.xs};
    flex-grow: ${grow.xs};
    flex-shrink: ${shrink.xs};
    flex-basis: ${basis.xs};
    order: ${order.xs};
  }

  @media (min-width: 768px) {
    display: ${display.sm};
    align-items: ${aItems.sm};
    align-content: ${aContent.sm};
    align-self: ${aSelf.sm};
    justify-items: ${jItems.sm};
    justify-content: ${jContent.sm};
    justify-self: ${jSelf.sm};
    flex-wrap: ${wrap.sm};
    flex-direction: ${direction.sm};
    flex-grow: ${grow.sm};
    flex-shrink: ${shrink.sm};
    flex-basis: ${basis.sm};
    order: ${order.sm};
  }

  @media (min-width: 1024px) {
    display: ${display.md};
    align-items: ${aItems.md};
    align-content: ${aContent.md};
    align-self: ${aSelf.md};
    justify-items: ${jItems.md};
    justify-content: ${jContent.md};
    justify-self: ${jSelf.md};
    flex-wrap: ${wrap.md};
    flex-direction: ${direction.md};
    flex-grow: ${grow.md};
    flex-shrink: ${shrink.md};
    flex-basis: ${basis.md};
    order: ${order.md};
  }

  @media (min-width: 1440px) {
    display: ${display.lg};
    align-items: ${aItems.lg};
    align-content: ${aContent.lg};
    align-self: ${aSelf.lg};
    justify-items: ${jItems.lg};
    justify-content: ${jContent.lg};
    justify-self: ${jSelf.lg};
    flex-wrap: ${wrap.lg};
    flex-direction: ${direction.lg};
    flex-grow: ${grow.lg};
    flex-shrink: ${shrink.lg};
    flex-basis: ${basis.lg};
    order: ${order.lg};
  }
`;
