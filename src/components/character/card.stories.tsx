import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { CharacterCard, CharacterCardProps } from "./card"

export default {
  title: "Character/Card",
  component: CharacterCard,
} as Meta

const Template: Story<CharacterCardProps> = (args) => (
  <CharacterCard {...args} />
)

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  name: "Test",
  image: "https://placehold.it/400x400",
}
