import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "search", "tel", "url"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Digite algo...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Digite sua senha...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Digite seu e-mail...",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Digite um número...",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Pesquise...",
  },
};

export const Tel: Story = {
  args: {
    type: "tel",
    placeholder: "Digite seu telefone...",
  },
};

export const Url: Story = {
  args: {
    type: "url",
    placeholder: "Digite uma URL...",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Desabilitado",
    disabled: true,
  },
};
