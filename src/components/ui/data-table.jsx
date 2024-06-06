import React,{useState} from "react"
import { Button } from "./button"
import { ChevronDownIcon, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight, Tally1 } from "lucide-react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"

export function DataTable({ columns, data , placeholderSearch, searchName}) {
  const [sorting, setSorting]=useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnFilters, setColumnFilters]=useState([])
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 5, //default page size
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnVisibility,
      columnFilters,
      pagination,
    },
  })

  return (
    <>

      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center py-4 w-full">
          <Input
            placeholder={placeholderSearch}
            value={table.getColumn(searchName)?.getFilterValue() ?? ""}
            onChange={event =>
                table.getColumn(searchName)?.setFilterValue(event.target.value)
            }
            className="shadow-sm w-7/12"
          />
        </div>

        <DropdownMenu >
          <DropdownMenuTrigger  asChild>
            <Button variant="outline" className="ml-auto shadow-sm">
              Columnas
              <ChevronDownIcon className="ml-2 h-4 w-4" /> 
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
                .getAllColumns()
                .filter(
                  (column) => column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <p>Página {pagination.pageIndex+1} de {table.getPageCount()}</p>
        <Select
          value={table.pageSize}
          onValueChange={value=> {
            table.setPageSize(Number(value))
          }}        
        >
          <SelectTrigger
            className="w-1/6">
            <SelectValue placeholder={table.pageSize} />
          </SelectTrigger>
            <SelectContent>
              {[5, 10, 20, 30, 40].map(pageSize => (
                <SelectItem  value={pageSize}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
        </Select>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft size={18}/>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft size={15}/>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight size={15}/>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRight size={18}/>
        </Button>
      </div>
    </>
  )
}

