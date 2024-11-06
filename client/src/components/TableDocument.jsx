import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import tableData from "../dummy/table";
import { documentHeaders } from "@/lib/tableHeaders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button"; // Assuming you have a Button component
import { Separator } from "@radix-ui/react-select";

const TableDocument = ({ data }) => {
  const table = useReactTable({
    data: data || [],
    columns: documentHeaders,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 5 },
    },
  });

  return (
    <div>
      <Table>
        <TableHeader className="border bg-secondary-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={`text-base-300 ${
                    header.column.columnDef.header === "Status"
                      ? "text-center"
                      : ""
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  <Separator />
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell key={cell.id}>
                      <p
                        className={`w-fit ${
                          cell.column.columnDef.header === "Status"
                            ? "mx-auto px-3 py-2 rounded-2xl"
                            : ""
                        } ${
                          cell.getValue() === "synced"
                            ? "text-accent-200 bg-accent-200/10"
                            : cell.getValue() === "sync_failed"
                            ? "text-accent-300 bg-accent-300/10"
                            : "text-base-300"
                        } `}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </p>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={documentHeaders.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      {data?.length > 0 && (
        <div className="flex items-center justify-between mt-7 px-4">
          <span>
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>

          <div className="space-x-7">
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableDocument;
