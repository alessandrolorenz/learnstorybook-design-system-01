import { Box } from './index'
import docs from './Box.docs.mdx'

export default {
  title: 'Layout/Box',
  component: Box,
}

const Template = (args) => (
  //👇 Your template goes here
  <Box {...args}>
    <Box w="50%" border= '1px solid gray' p='10px' m='5px' bRadius= '10px'>
      Box content. It can be anything. Box is a div to wrap and make componentes
    </Box>
    <Box w="50%" border= '1px solid gray' p='10px' m='5px' bRadius= '10px'>
      Box content. It can be anything. Box is a div to wrap and make componentes
    </Box>
  </Box>
)

export const Red = Template.bind({})

Red.args = {
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
  pr: '',
  pb: '',
  pl: '',
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
