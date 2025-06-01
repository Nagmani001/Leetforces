// app/problems/page.tsx
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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@repo/ui/shad/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@repo/ui/shad/ui/pagination';
import { Badge } from '@repo/ui/shad/ui/badge';
import { Skeleton } from '@repo/ui/shad/ui/skeleton';
import { ArrowUpDown, Filter, List } from 'lucide-react';

// Problem data type
interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptance: string;
  status: 'Solved' | 'Attempted' | 'Not Started';
  categories: string[];
}

const mockProblems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45.5%",
    status: "Solved",
    categories: ["Array", "Hash Table"]
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    acceptance: "34.6%",
    status: "Attempted",
    categories: ["Linked List", "Math"]
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "31.2%",
    status: "Not Started",
    categories: ["Hash Table", "Sliding Window"]
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "29.8%",
    status: "Not Started",
    categories: ["Array", "Binary Search"]
  },
  // Add more problems as needed...
];

export default function ProblemListPage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [filteredProblems, setFilteredProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Problem; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Initialize data
  useEffect(() => {
    setLoading(true);
    // Simulate API fetch
    setTimeout(() => {
      setProblems(mockProblems);
      setFilteredProblems(mockProblems);
      setLoading(false);
    }, 800);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...problems];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(problem =>
        problem.title.toLowerCase().includes(term) ||
        problem.categories.some(cat => cat.toLowerCase().includes(term))
      );
    }

    // Apply difficulty filter
    if (difficultyFilter.length > 0) {
      result = result.filter(problem =>
        difficultyFilter.includes(problem.difficulty)
      );
    }

    // Apply status filter
    if (statusFilter.length > 0) {
      result = result.filter(problem =>
        statusFilter.includes(problem.status)
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
    setCurrentPage(1);
  }, [problems, searchTerm, difficultyFilter, statusFilter, sortConfig]);

  // Handle sort requests
  const requestSort = (key: keyof Problem) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredProblems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProblems.slice(indexOfFirstItem, indexOfLastItem);

  // Toggle difficulty filter
  const toggleDifficultyFilter = (difficulty: string) => {
    setDifficultyFilter(prev =>
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  // Toggle status filter
  const toggleStatusFilter = (status: string) => {
    setStatusFilter(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  // Difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  // Status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Solved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Attempted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

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

          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Difficulty
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {['Easy', 'Medium', 'Hard'].map((difficulty) => (
                  <DropdownMenuCheckboxItem
                    key={difficulty}
                    checked={difficultyFilter.includes(difficulty)}
                    onCheckedChange={() => toggleDifficultyFilter(difficulty)}
                  >
                    {difficulty}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <List className="mr-2 h-4 w-4" />
                  Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {['Solved', 'Attempted', 'Not Started'].map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={statusFilter.includes(status)}
                    onCheckedChange={() => toggleStatusFilter(status)}
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
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
              <TableHead className="cursor-pointer" onClick={() => requestSort('acceptance')}>
                <div className="flex items-center">
                  Acceptance
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => requestSort('status')}>
                <div className="flex items-center">
                  Status
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Categories</TableHead>
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
                  <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                </TableRow>
              ))
            ) : currentItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                  No problems found
                </TableCell>
              </TableRow>
            ) : (
              currentItems.map((problem) => (
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
                    <Badge className={`${getDifficultyColor(problem.difficulty)} rounded-md`}>
                      {problem.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell>{problem.acceptance}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(problem.status)} rounded-md`}>
                      {problem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {problem.categories.map((category) => (
                        <span
                          key={category}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                />
              </PaginationItem>

              <div className="flex items-center space-x-2 mx-4">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                  Page {currentPage} of {totalPages}
                </span>
              </div>

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
