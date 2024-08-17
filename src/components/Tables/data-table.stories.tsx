/** @format */
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomDataTable from "./CustomDataTable";

const meta = {
  title: "Data Table",
  component: CustomDataTable,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "object" },
    data: { control: "object" },
    pageSize: { control: "number" },
    loading: { control: "boolean" },
    filters: { control: "object" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomDataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultColumns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

const defaultData = [
  { id: "1", name: "John Doe", status: "Active" },
  { id: "2", name: "Jane Smith", status: "Inactive" },
];

export const DataTable: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    pageSize: 10,
    loading: false,
  },
};

export const LoadingState: Story = {
  args: {
    columns: defaultColumns,
    data: [],
    pageSize: 10,
    loading: true,
  },
};

export const NoDataState: Story = {
  args: {
    columns: defaultColumns,
    data: [],
    pageSize: 10,
    loading: false,
  },
};

export const DataTableFilters: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    pageSize: 10,
    loading: false,
    filters: {
      input: [{ columnName: "name", placeholder: "Search by name" }],
      select: [
        {
          columnName: "status",
          options: ["Active", "Inactive"],
          placeholder: "Select status",
        },
      ],
    },
  },
};
