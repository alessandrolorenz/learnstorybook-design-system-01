import styled from '@emotion/styled';
import { FlexBox } from '../Utils/flexbox';
import { Typography } from '../Utils/typography';
import { Space } from '../Utils/space';
import { Position } from '../Utils/position';
import { Size } from '../Utils/size';
import { BackgroundAndColor } from '../Utils/background-and-color';
import { Borders } from '../Utils/borders';
import { BorderRadius } from '../Utils/border-radius';
import { Shadow } from '../Utils/shadow';
import { OtherProps } from '../Utils/other-props';
import {color} from '../../shared/styles'

export const Container = styled.div`

${(props) => {
    if (props.centerContent) {
      return `
    display: flex;
    align-items: center;
    justify-content: center;
  `;
    }
  }}

display: ${(props) => props.display || 'flex'};
${FlexBox}
${Typography}
${Space}
${Position}
${Size}
${BackgroundAndColor}   
${Borders}
${BorderRadius}
${Shadow}
${OtherProps}

::-webkit-scrollbar {
  width: 16px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: ${color.medium};        /* color of the tracking area */
  border: 1px solid ${color.tertiary};
  border-radius: 3px;
  background-clip: content-box;   /* THIS IS IMPORTANT */
}

::-webkit-scrollbar-thumb {
  background-color: ${color.medium});    /* color of the scroll thumb */
  border-radius: 2px;       /* roundness of the scroll thumb */
  border: 5px solid ${color.tertiary};  /* creates padding around scroll thumb */
}

`;
