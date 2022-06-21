import { css } from "@emotion/react";

export const Space = ({
  m = "",
  mt = "",
  mr = "",
  mb = "",
  ml = "",
  mx = "",
  my = "",
  p = "",
  pt = "",
  pr = "",
  pb = "",
  pl = "",
  px = "",
  py = ""
}) => css`
  margin: ${!m.xs && !m.sm && !m.md && !m.lg && m};
  margin-top: ${!mt.xs && !mt.sm && !mt.md && !mt.lg && mt};
  margin-right: ${!mr.xs && !mr.sm && !mr.md && !mr.lg && mr};
  margin-bottom: ${!mb.xs && !mb.sm && !mb.md && !mb.lg && mb};
  margin-left: ${!ml.xs && !ml.sm && !ml.md && !ml.lg && ml};
  ${!mx.xs &&
  !mx.sm &&
  !mx.md &&
  !mx.lg &&
  `margin-left: ${mx}; margin-right: ${mx};`}
  ${!my.xs &&
  !my.sm &&
  !my.md &&
  !my.lg &&
  `margin-top: ${my}; margin-bottom: ${my};`}

  padding: ${!p.xs && !p.sm && !p.md && !p.lg && p};
  padding-top: ${!pt.xs && !pt.sm && !pt.md && !pt.lg && pt};
  padding-right: ${!pr.xs && !pr.sm && !pr.md && !pr.lg && pr};
  padding-bottom: ${!pb.xs && !pb.sm && !pb.md && !pb.lg && pb};
  padding-left: ${!pl.xs && !pl.sm && !pl.md && !pl.lg && pl};
  ${!px.xs &&
  !px.sm &&
  !px.md &&
  !px.lg &&
  `padding-left: ${px}; padding-right: ${px};`}
  ${!py.xs &&
  !py.sm &&
  !py.md &&
  !py.lg &&
  `padding-top: ${py}; padding-bottom: ${py};`}

  @media (max-width: 767px) {
    padding: ${p.xs};
    padding-top: ${pt.xs};
    padding-right: ${pr.xs};
    padding-bottom: ${pb.xs};
    padding-left: ${pl.xs};
    ${px.xs ? `padding-left: ${px.xs}; padding-right: ${px.xs};` : ""}
    ${py.xs ? `padding-top: ${py.xs}; padding-bottom: ${py.xs};` : ""}
    margin: ${m.xs};
    margin-top: ${mt.xs};
    margin-right: ${mr.xs};
    margin-bottom: ${mb.xs};
    margin-left: ${ml.xs};
    ${mx.xs ? `margin-left: ${mx.xs}; margin-right: ${mx.xs};` : ""}
    ${my.xs ? `margin-top: ${my.xs}; margin-bottom: ${my.xs};` : ""}
  }

  @media (min-width: 768px) {
    padding: ${p.sm};
    padding-top: ${pt.sm};
    padding-right: ${pr.sm};
    padding-bottom: ${pb.sm};
    padding-left: ${pl.sm};
    ${px.sm ? `padding-left: ${px.sm}; padding-right: ${px.sm};` : ""}
    ${py.sm ? `padding-top: ${py.sm}; padding-bottom: ${py.sm};` : ""}
    margin: ${m.sm};
    margin-top: ${mt.sm};
    margin-right: ${mr.sm};
    margin-bottom: ${mb.sm};
    margin-left: ${ml.sm};
    ${mx.sm ? `margin-left: ${mx.sm}; margin-right: ${mx.sm};` : ""}
    ${my.sm ? `margin-top: ${my.sm}; margin-bottom: ${my.sm};` : ""}
  }

  @media (min-width: 1024px) {
    padding: ${p.md};
    padding-top: ${pt.md};
    padding-right: ${pr.md};
    padding-bottom: ${pb.md};
    padding-left: ${pl.md};
    ${px.md ? `padding-left: ${px.md}; padding-right: ${px.md};` : ""}
    ${py.md ? `padding-top: ${py.md}; padding-bottom: ${py.md};` : ""}
    margin: ${m.md};
    margin-top: ${mt.md};
    margin-right: ${mr.md};
    margin-bottom: ${mb.md};
    margin-left: ${ml.md};
    ${mx.md ? `margin-left: ${mx.md}; margin-right: ${mx.md};` : ""}
    ${my.md ? `margin-top: ${my.md}; margin-bottom: ${my.md};` : ""}
  }

  @media (min-width: 1440px) {
    padding: ${p.lg};
    padding-top: ${pt.lg};
    padding-right: ${pr.lg};
    padding-bottom: ${pb.lg};
    padding-left: ${pl.lg};
    ${px.lg ? `padding-left: ${px.lg}; padding-right: ${px.lg};` : ""}
    ${py.lg ? `padding-top: ${py.lg}; padding-bottom: ${py.lg};` : ""}
    margin: ${m.lg};
    margin-top: ${mt.lg};
    margin-right: ${mr.lg};
    margin-bottom: ${mb.lg};
    margin-left: ${ml.lg};
    ${mx.lg ? `margin-left: ${mx.lg}; margin-right: ${mx.lg};` : ""}
    ${my.lg ? `margin-top: ${my.lg}; margin-bottom: ${my.lg};` : ""}
  }
`;
