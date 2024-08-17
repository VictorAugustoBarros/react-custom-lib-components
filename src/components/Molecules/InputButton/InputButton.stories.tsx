import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputWithButton } from ".";

const meta = {
  title: "Molecules/InputWithButton",
  component: InputWithButton,
  tags: ["autodocs"],
  argTypes: {
    inputType: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "search", "tel", "url"],
    },
    inputPlaceholder: {
      control: { type: "text" },
    },
    buttonText: {
      control: { type: "text" },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputWithButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputType: "email",
    inputPlaceholder: "Email",
    buttonText: "Subscribe",
  },
};

export const WithPassword: Story = {
  args: {
    inputType: "password",
    inputPlaceholder: "Password",
    buttonText: "Submit",
  },
};
