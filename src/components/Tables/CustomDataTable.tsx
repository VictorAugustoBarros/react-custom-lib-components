/** @format */
import React from "react";
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  FilterFn,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomDataTablePagination } from "./CustomDataTablePagination";
import { LoadingSpinner } from "../Loading/LoadingSpinner";

interface CustomDataTablePropsFiltersSelect {
  columnName: string;
  options: string[];
  placeholder: string;
}

interface CustomDataTablePropsFiltersInput {
  columnName: string;
  placeholder: string;
}

interface CustomDataTableProps {
  columns: any[];
  data: any[];
  pageSize?: number;
  loading?: boolean;
  filters?: {
    input?: CustomDataTablePropsFiltersInput[];
    select?: CustomDataTablePropsFiltersSelect[];
  };
}
const exactMatchFilter: FilterFn<any> = (row, columnId, filterValue) => {
  const rowValue = row.getValue(columnId);
  return rowValue === filterValue;
};

const CustomDataTable: React.FC<CustomDataTableProps> = ({
  columns,
  data,
  loading,
  pageSize,
  filters,
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns: columns.map((column) => ({
      ...column,
      filterFn: column.filterFn || exactMatchFilter,
    })),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: pageSize ?? 10,
      },
    },
  });

  const resetFilters = () => {
    setColumnFilters([]);
    setSorting([]);
    table.resetColumnFilters();
    table.resetSorting();
  };

  return (
    <div className="h-full w-full flex flex-col gap-10 justify-center">
      <div className="h-full flex flex-col gap-5">
        {filters && (
          <Accordion type="single" collapsible className=" w-full">
            <AccordionItem value="filters">
              <AccordionTrigger>
                <div className="flex flex-row w-full gap-3 items-center">
                  <div>
                    <Filter />
                  </div>
                  <div>Filtros</div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="w-full">
                  <div className="flex items-end justify-end">
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="text-blue-500 underline"
                    >
                      <p className="text-xs">Redefinir filtros</p>
                    </button>
                  </div>
                </div>

                <div className="flex md:flex-row xs:flex-col xs:items-center xs:gap-3 items-start justify-between py-4 px-1">
                  {filters.input &&
                    filters.input?.length > 0 &&
                    filters.input.map(
                      (
                        filter: CustomDataTablePropsFiltersInput,
                        index: number
                      ) => {
                        return (
                          <Input
                            key={index}
                            placeholder={filter.placeholder}
                            value={
                              (table
                                .getColumn(filter.columnName)
                                ?.getFilterValue() as string) ?? ""
                            }
                            onChange={(event) =>
                              table
                                .getColumn(filter.columnName)
                                ?.setFilterValue(event.target.value)
                            }
                          />
                        );
                      }
                    )}

                  {filters.select &&
                    filters.select?.length > 0 &&
                    filters.select.map(
                      (
                        filter: CustomDataTablePropsFiltersSelect,
                        index: number
                      ) => {
                        return (
                          <Select
                            key={index}
                            onValueChange={(value: any) =>
                              table
                                .getColumn(filter.columnName)
                                ?.setFilterValue(value)
                            }
                            value={
                              (table
                                .getColumn(filter.columnName)
                                ?.getFilterValue() as string) ?? ""
                            }
                          >
                            <SelectTrigger className="w-[300px] xs:w-full">
                              <SelectValue
                                placeholder={filter.placeholder || "Select"}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>{filter.placeholder}</SelectLabel>
                                {filter.options.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        );
                      }
                    )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        <div className={`rounded-md border h-full"}`}>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    {loading ? <LoadingSpinner /> : "Sem registros"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end pb-3">
          <CustomDataTablePagination table={table} />
        </div>
      </div>
    </div>
  );
};

export { CustomDataTable };
