import styled from '@emotion/styled';
import {color} from '../../shared/styles'

export const Container = styled.button`
  ${(props) => {
    if (props.primary) {
      return `
        background: ${color.primary};
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        border: none;

        cursor: pointer;



        &:not(:disabled):hover,
        &:not(:disabled):active {
          background-color: gray;
        }
        
        &:not(:disabled):focus {
          background-color: blue;
          border: 3px solid gray;
        }

        &:disabled {
          background-color: black;
          color: gray;
          cursor: not-allowed;
        }
        
      `;
    }
  }}

  ${(props) => {
    if (props.outlined) {
      return `
        background: transparent;
        color: blue;
        border: 1px solid blue;
        font-weight: 400;

        cursor: pointer;

        &:not(:disabled):hover,
        &:not(:disabled):active {
          background: blue;
          color: #FFFFFF;
          font-weight: 500;
        }

        &:not(:disabled):focus {
          color: blue;
          font-weight: 400;
          background: transparent;
          border: 3px solid gray;
        }

        &:disabled {
          border: 1px solid #8F9095;
          color: #8F9095;
          cursor: not-allowed;
        }
      `;
    }
  }}

${(props) => {
    if (props.outlinedBold) {
      return `
    background: transparent;
    color: blue;
    border: 1px solid blue;
    font-weight: 700;
    cursor: pointer;

    &:not(:disabled):hover,
    &:not(:disabled):active {
      background: blue;
      color: #FFFFFF;
      font-weight: 700;

    }

    &:not(:disabled):focus {
      color: blue;
      font-weight: 700;
      background: transparent;
      border: 3px solid gray;

    }

    &:disabled {
      background: black;
      border: none;
      color: gray;
      cursor: not-allowed;
    }

`;
    }
  }}

${(props) => {

if (props.markedX) {
  return `
    background: blue;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    border: none;

    &:not(:disabled):hover,
    &:not(:disabled):active {
      background-color: gray;
    }

    

    &:not(:disabled):focus {
      background-color: blue;
      border: 3px solid gray;
    }


    &:disabled {
      background-color: black;
      color: #5E5E61;
      cursor: not-allowed;
    }
  `;
}

}}




${(props) => {
    if (props.dropdown) {
      return `
        justify-content: space-between;
        height: 40px;
        background: white;
        color: white;
        border: 1px solid black;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        padding: 8px;

        &:not(:disabled):hover,
        &:not(:disabled):active {
          background: white;
          color: blue;
          border-color: blue;
          border-bottom: 2px solid;
          font-weight: 500;
        }

        &:not(:disabled):focus,
        &:not(:disabled).actice {
          color: blue;
          font-weight: 500;
          background: transparent;
          border: 1px solid gray;

          .font-icon {
            transform: rotate(180deg);
          }
        }

        &:disabled {
          border: 1px solid black;
          color: black;
        }

        .font-icon {
          display: inline-block;
          color: blue;
        }
      `;
    }
  }}

${(props) => {
    if (props.quickView) {
      return `
        display: flex;
        width: 79px;
        height: 24px
        left: 150px;
        bottom: 58px;
        background: white;
        color: blue;
        border: 1px solid black;
        font-size: 12px;
        font-weight: 400;
        padding: 0px;

        &:not(:disabled):hover,
        &:not(:disabled):active {
          font-weight: 700;
          background: white;
          color: blue;
        }

        &.active {
          visibility: initial;
        }

        &.none {
          visibility: hidden;
        }

        @media screen and (max-width:1024px) {
          display: none;
        }
      `;
    }
  }}

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms;

  font-family: ${(props) => props.fFamily || ''};
  font-size: ${(props) => props.fSize || '16px'};
  font-weight: ${(props) => props.fWeight || ''};
  font-style: ${(props) => props.fStyle || ''};
  line-height: ${(props) => props.lHeight || ''};
  letter-spacing: ${(props) => props.lSpacing || ''};
  text-align: ${(props) => props.tAlign || ''};
  text-transform: ${(props) => props.tTransform || ''};
  text-decoration: ${(props) => props.tDecoration || ''};

  // standard
  margin: ${(props) => props.m || ''};
  margin-top: ${(props) => props.mt || ''};
  margin-right: ${(props) => props.mr || ''};
  margin-bottom: ${(props) => props.mb || ''};
  margin-left: ${(props) => props.ml || ''};

  padding: ${(props) => props.p || ''};
  padding-top: ${(props) => props.pt || ''};
  padding-right: ${(props) => props.pr || ''};
  padding-bottom: ${(props) => props.pb || ''};
  padding-left: ${(props) => props.pl || ''};

  // >>>>>>> Position
  position: ${(props) => props.position || ''};
  z-index: ${(props) => props.zIndex || ''};
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  bottom: ${(props) => props.bottom || ''};
  left: ${(props) => props.left || ''};

  // >>>>>>> Layout
  width: ${(props) => props.w || ''};
  height: ${(props) => props.h || '40px'};
  min-width: ${(props) => props.minW || ''};
  max-width: ${(props) => props.maxW || '100%'};
  min-height: ${(props) => props.minH || ''};
  max-height: ${(props) => props.maxH || ''};
  vertical-align: ${(props) => props.vAlign || ''};
  overflow: ${(props) => props.overflow || ''};
  /* overflowx: ${(props) => props.overflowX || ''};
  overflowy: ${(props) => props.overflowY || ''}; */
  box-sizing: ${(props) => props.boxSizing || ''};

  // >>>>>>> Background & Color
  color: ${(props) => props.color || ''};
  background: ${(props) => props.bg || ''};
  background-color: ${(props) => props.bgColor || ''};
  opacity: ${(props) => props.opacity || ''};

  // >>>>>>> Borders
  border: ${(props) => props.border || ''};
  border-color: ${(props) => props.bColor || ''};
  border-right-color: ${(props) => props.bRightColor || ''};

  // >>>>>>> Border Radius
  border-radius: ${(props) => props.radius || '4px'};
  border-top-left-radius: ${(props) => props.bTopLeftRadius || ''};
  border-top-right-radius: ${(props) => props.bTopRightRadius || ''};
  border-bottom-right-radius: ${(props) => props.bBottomRightRadius || ''};
  border-bottom-left-radius: ${(props) => props.bBottomLeftRadius || ''};

  // >>>>>>> Shadow
  box-shadow: ${(props) => props.boxShadow || ''};
`;
