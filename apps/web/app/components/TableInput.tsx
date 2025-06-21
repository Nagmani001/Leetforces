import { Button } from '@repo/ui/shad/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui/shad/ui/table';

export default function ExampleTableInput() {
  return <div className="">
    <Table className="min-w-full border border-[#a4a4a5] border-b-2 ">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[93%] font-semibold text-lg text-black py-2" >
            Input
          </TableHead>

          <TableHead className="w-[7%] cursor-pointer text-right" >
            <Button variant="success" className="">Test</Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium w-[100%] text-[#800] bg-[#eeeeef] " >
            3
            <br />
            3 1 2</TableCell>
          <TableCell className="bg-[#eeeeef]"></TableCell>
        </TableRow>

      </TableBody>
    </Table>
  </div>
}
