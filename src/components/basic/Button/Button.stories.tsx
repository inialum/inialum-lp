import { Button } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'basic/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '入会する',
    colorTheme: 'primary',
    size: 'medium',
    styleType: 'filled',
  },
}

export const Outlined: Story = {
  args: {
    ...Default.args,
    styleType: 'outlined',
  },
}

export const Rounded: Story = {
  args: {
    ...Default.args,
    radius: 'rounded',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
