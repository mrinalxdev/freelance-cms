"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, Plus } from "lucide-react";
import { Link } from "lucide-react";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "Creating Tinder app UI design",
    status: "Done",
    category: "Apps Design",
    date: "02 Jan 2022",
    members: 3,
    hasLink: true,
  },
  {
    id: 2,
    title: "Write blog on LinkedIn growth strategy",
    status: "Done",
    category: "Web design",
    date: "03 Jan 2022",
    members: 2,
    hasLink: true,
  },
  {
    id: 3,
    title: "Creating fintech banking website",
    status: "On going",
    category: "Web design",
    date: "03 Jan 2022",
    members: 2,
    hasLink: false,
  },
  {
    id: 4,
    title: "Write blog on LinkedIn growth strategy",
    status: "Done",
    category: "Dashboard UI",
    date: "04 Jan 2022",
    members: 2,
    hasLink: false,
  },
  {
    id: 5,
    title: "Upload shot on Dribbble",
    status: "On going",
    category: "Apps Design",
    date: "05 Jan 2022",
    members: 1,
    hasLink: false,
  },
  {
    id: 6,
    title: "Monthly meeting with Alexander",
    status: "On going",
    category: "Dashboard UI",
    date: "05 Jan 2022",
    members: 3,
    hasLink: false,
  },
  {
    id: 7,
    title: "Presentation of monthly financial stat...",
    status: "On list",
    category: "Apps Design",
    date: "06 Jan 2022",
    members: 3,
    hasLink: false,
  },
];

export function TaskTable() {
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const toggleTask = (taskId: number) => {
    setSelectedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent border-y border-[#EAECF0]">
          <TableHead className="w-[40px] p-0">
            <Checkbox className="ml-4 rounded-[4px] border-[#D0D5DD] datat-[state=checked]:border-[#444CE7]" />
          </TableHead>
          <TableHead className="font-semibold text-[11px] text-[#667085]">
            Task Title
          </TableHead>
          <TableHead className="font-semibold text-[11px] text-[#667085]">
            <Button
              variant="ghost"
              className="h-8 -ml-3 text-[11px] font-semibold hover:bg-transparent"
            >
              Status
              <ChevronDown className="w-3.5 h-3.5 ml-1 text-[#667085]" />
            </Button>
          </TableHead>
          <TableHead className="font-semibold text-[11px] text-[#667085]">
            Date
          </TableHead>
          <TableHead className="font-semibold text-[11px] text-[#667085]">
            Member
          </TableHead>
          <TableHead className="w-[40px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow
            key={task.id}
            className="hover:bg-[#F9FAFB] border-b border-[#EAECF0]"
          >
            <TableCell className="p-0">
              <Checkbox
                className="ml-4 rounded-[4px] border-[#D0D5DD] data-[state=checked]:border-[#444CE7]"
                checked={selectedTasks.includes(task.id)}
                onCheckedChange={() => toggleTask(task.id)}
              />
            </TableCell>
            <TableCell className="py-[10px]">
              <div className="flex items-center gap-2 text-[13px] text-[#101828]">
                {task.hasLink && (
                  <Link className="w-3.5 h-3.5 text-[#667085]" />
                )}
                {task.title}
              </div>
            </TableCell>
            <TableCell className="py-[10px]">
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                  task.status == "Done"
                    ? "bg-[#ECFDF3] text-[#027A48]"
                    : task.status == "On going"
                    ? "bg-[#FFF6ED] text-[#B93815]"
                    : "bg-[#F2F4F7] text-[#344054]"
                }`}
              >
                {task.status}
              </span>
            </TableCell>
            <TableCell className="py-[10px]">
              <span className="px-2 py-0.5 rounded-full border border-[#EAECF0]">
                {task.category}
              </span>
            </TableCell>
            <TableCell className="py-[10px] text-[13px] text-[#101828]">
              {task.category}
            </TableCell>
            <TableCell className="py-[10px]">
              <div className="flex -space-x-1">
                {Array.from({ length: task.members }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[26px] h-[26px] rounded-full border-2 border-white bg-[#F2F4F7]"
                  ></div>
                ))}
              </div>
            </TableCell>
            <TableCell className="p-0">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-[#F2F4F7]"
              >
                <Plus className="w-3.5 h-3.5 text-[#667085]" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
