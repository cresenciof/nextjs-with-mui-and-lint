import { Box, Button } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  elevation: 1,
  children: 'Card',
};

export const Styled = Template.bind({});
Styled.args = {
  elevation: 1,
  children: <Button>a</Button>,
  sx: {
    maxWidth: 400,
    padding: 2,
  },
  renderActions: () => (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 2 }}>
      <Button variant="contained" color="primary">
        Save
      </Button>
      <Button variant="contained" color="secondary">
        Cancel
      </Button>
    </Box>
  ),
};
