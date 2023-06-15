import { ControlContainer } from './index'
import docs from './ControlContainer.docs.mdx'

export default {
  title: 'Layout/ControlContainer',
  component: ControlContainer,
}

const Template = (args) => (
  //👇 Your template goes here
  <ControlContainer {...args}>
    <ControlContainer w="50%" border= '1px solid gray' p='10px' m='5px' bRadius= '10px'>
      ControlContainer content. It can be anything. ControlContainer is a div to wrap and make componentes
    </ControlContainer>
    <ControlContainer w="50%" border= '1px solid gray' p='10px' m='5px' bRadius= '10px'>
      ControlContainer content. It can be anything. ControlContainer is a div to wrap and make componentes
    </ControlContainer>
  </ControlContainer>
)

export const controlBox = Template.bind({})

controlBox.args = {
  w: '300px',
  h: 'auto',
  minW: '',
  maxW: '',
  minH: '',
  maxH: '',
  vAlign: '',
  overflow: '',
  boxSizing: '',
  bgColor: 'white',
  color: 'black',
  m: '',
  mt: '',
  mr: '',
  mb: '',
  ml: '',
  mx: '',
  my: '',
  p: '',
  pt: '',
  pr: '10px',
  pb: '',
  pl: '10px',
  px: '',
  py: '',
  display: '',
  aItems: '',
  aContent: '',
  aSelf: '',
  jItems: '',
  jContent: '',
  jSelf: '',
  wrap: '',
  direction: '',
  grow: '',
  shrink: '',
  basis: '',
  order: '',
  bRadius: '10px',
  bTopLeftRadius: '',
  bTopRightRadius: '',
  bBottomRightRadius: '',
  bBottomLeftRadius: '',
  border: '1px solid black',
  bWidth: '',
  bStyle: '',
  bColor: '',
  bTop: '',
  bTopWidth: '',
  bTopStyle: '',
  bTopColor: '',
  bRight: '',
  bRightWidth: '',
  bRightStyle: '',
  bRightColor: '',
  bBottom: '',
  bBottomWidth: '',
  bBottomStyle: '',
  bBottomColor: '',
  bLeft: '',
  bLeftWidth: '',
  bLeftStyle: '',
  bLeftColor: '',
  centerContent: true,
  animation: '',
  appearance: '',
  transform: '',
  transformOrigin: '',
  visibility: '',
  whiteSpace: '',
  userSelect: '',
  pointerEvents: '',
  wordBreak: '',
  overflowWrap: '',
  textOverflow: '',
  cursor: '',
  resize: '',
  transition: '',
  objectFit: '',
  objectPosition: '',
  float: '',
  fill: '',
  stroke: '',
  outline: '',
}
