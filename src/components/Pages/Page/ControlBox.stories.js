import { Page01 } from './index'
// import docs from './ControlContainer.docs.mdx'

export default {
  title: 'Pages/Page01',
  component: Page01,
}

const Template = (args) => (
  //👇 Your template goes here
  <Page01 {...args}/>
)

export const page01 = Template.bind({})

page01.args = {
  w: '300px',
  h: 'auto',
 
}
