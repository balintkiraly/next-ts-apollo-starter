import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { ButtonProps } from "@chakra-ui/core"
import { Button } from "./button"

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
)

export const SimpleButton = Template.bind({})
SimpleButton.args = {
  children: "Test",
}

export const BlueButton = Template.bind({})
BlueButton.args = {
  children: "Test",
  variantColor: "blue",
}
