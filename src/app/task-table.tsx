// src/app/task-table.tsx
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
import { ChevronDown, Plus, Link, Trash2 } from "lucide-react";
import { useState } from "react";
import { useTaskStore } from "@/store/taskStore";
import { AddTaskDialog } from "./add-task-dialog";

export function TaskTable() {
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const { tasks, deleteTask, toggleTaskStatus } = useTaskStore();

  const toggleTask = (taskId: number) => {
    setSelectedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  const handleDeleteSelected = () => {
    selectedTasks.forEach(deleteTask);
    setSelectedTasks([]);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {selectedTasks.length > 0 && (
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDeleteSelected}
            className="h-8"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Selected ({selectedTasks.length})
          </Button>
        )}
        <Button
          className="ml-auto h-8 bg-[#444CE7] hover:bg-[#444CE7]/90"
          size="sm"
          onClick={() => setIsAddTaskOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-y border-[#EAECF0]">
            <TableHead className="w-[40px] p-0">
              <Checkbox
                className="ml-4 rounded-[4px] border-[#D0D5DD] data-[state=checked]:border-[#444CE7]"
                checked={selectedTasks.length === tasks.length}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedTasks(tasks.map(t => t.id));
                  } else {
                    setSelectedTasks([]);
                  }
                }}
              />
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
              Category
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
                <button
                  onClick={() => toggleTaskStatus(task.id)}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                    task.status === "Done"
                      ? "bg-[#ECFDF3] text-[#027A48]"
                      : task.status === "On going"
                      ? "bg-[#FFF6ED] text-[#B93815]"
                      : "bg-[#F2F4F7] text-[#344054]"
                  }`}
                >
                  {task.status}
                </button>
              </TableCell>
              <TableCell className="py-[10px]">
                <span className="px-2 py-0.5 rounded-full border border-[#EAECF0]">
                  {task.category}
                </span>
              </TableCell>
              <TableCell className="py-[10px] text-[13px] text-[#101828]">
                {task.date}
              </TableCell>
              <TableCell className="py-[10px]">
                <div className="flex -space-x-1">
                  {Array.from({ length: task.members }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[26px] h-[26px] rounded-full border-2 border-white bg-[#F2F4F7]"
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell className="p-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-[#F2F4F7]"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2 className="w-3.5 h-3.5 text-[#667085]" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AddTaskDialog open={isAddTaskOpen} onOpenChange={setIsAddTaskOpen} />
    </>
  );
}
