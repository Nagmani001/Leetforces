import { Button } from '@repo/ui/shad/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui/shad/ui/table';

export default function ExampleTable() {
  return <div className="p-4">
    <Table className="min-w-full">
      <TableHeader className="dark:bg-gray-800">
        <TableRow>
          <TableHead className="w-[93%] cursor-pointer" >
            <div className="flex items-center">
              Input
            </div>
          </TableHead>

          <TableHead className="w-[7%] cursor-pointer text-right" >
            <div className="flex items-center">
              <Button variant="outline">Copy</Button>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          className="cursor-pointer w-full"
        >
          <TableCell className="font-medium w-full">nag</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
}
