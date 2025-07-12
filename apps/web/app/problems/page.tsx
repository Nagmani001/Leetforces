"use client";

import { useState, useEffect } from 'react';
import { Input } from "@repo/ui/shad/ui/input";
import { Button } from '@repo/ui/shad/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui/shad/ui/table';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@repo/ui/shad/ui/dropdown-menu';
import { Skeleton } from '@repo/ui/shad/ui/skeleton';
import { ArrowUpDown, Filter, List } from 'lucide-react';
import { Difficulty, Problem } from '@/lib/config';
import { BACKEND_URL } from "@repo/common/zod";
import { Badge } from '@repo/ui/shad/ui/badge';
import { getDifficultyColor } from '@/lib/utils';
import axios from 'axios';
import { clsx } from 'clsx';


export default function ProblemListPage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [filteredProblems, setFilteredProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Problem; direction: 'asc' | 'desc' } | null>(null);


  // Apply filters and sorting
  useEffect(() => {
    let result = [...problems];
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(problem =>
        problem.title.toLowerCase().includes(term)
      );
    }
    // Apply sorting
    if (sortConfig !== null) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredProblems(result);
  }, [problems, searchTerm, statusFilter, sortConfig]);

  useEffect(() => {
    let func = async () => {
      let ans = await axios.get(`${BACKEND_URL}/problem/problems`);
      setLoading(false);
      setProblems(ans.data);
    };
    func();
  }, [])
  // Handle sort requests
  const requestSort = (key: keyof Problem) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  if (problems[0]?.difficulty) {
    let val = getDifficultyColor(problems[0].difficulty);
    console.log(val);
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Problems</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredProblems.length} problems
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

          <div className="relative w-full sm:w-64">
            <Input
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* TODO: add this feature after user authentication */}
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Difficulty
                </Button>
              </DropdownMenuTrigger>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <List className="mr-2 h-4 w-4" />
                  Status
                </Button>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Problems Table */}
      <div className="rounded-lg border dark:border-gray-800 overflow-hidden">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead className="w-[80px] cursor-pointer" onClick={() => requestSort('id')}>
                <div className="flex items-center">
                  ID
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="min-w-[200px] cursor-pointer" onClick={() => requestSort('title')}>
                <div className="flex items-center">
                  Title
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => requestSort('difficulty')}>
                <div className="flex items-center">
                  Difficulty
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              // Loading state
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                </TableRow>
              ))
            ) : (
              problems.map((problem) => (
                <TableRow
                  key={problem.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer"
                >
                  <TableCell className="font-medium">{problem.id}</TableCell>
                  <TableCell>
                    <a
                      href={`/problems/${problem.id}`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {problem.title}
                    </a>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        problem.difficulty === Difficulty.EASY ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          problem.difficulty === Difficulty.MEDIUM ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }
                    >
                      {problem.difficulty}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
