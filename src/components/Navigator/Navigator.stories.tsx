import type { Meta, StoryObj } from "@storybook/react";
import Navigator from "./Navigator";
import React from "react";
import { NavDetails } from "../../interfaces/NavDetails";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Navigator",
  component: Navigator as React.FC<{ navDetails: NavDetails[] }>,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Navigator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    navDetails: [
      { title: "Home", link: "/home" },
      { title: "About", link: "/about" },
      { title: "Test", link: "/test" },
    ],
  },
};
