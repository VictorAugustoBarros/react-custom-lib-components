import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ExampleForm from "./exampleForm";

const meta = {
  title: "Organisms/ExampleForm",
  component: ExampleForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ExampleForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
