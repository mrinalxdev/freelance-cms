"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTaskStore } from "@/store/taskStore";
import { TaskCategory, TaskStatus } from "@/types/task";
import { SelectContent } from "@radix-ui/react-select";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface TaskForm {
  title: string;
  category: TaskCategory;
  status: TaskStatus;
  members: string;
  hasLink: boolean;
}

export function AddTaskDialog({ open, onOpenChange }: AddTaskDialogProps) {
  const addTask = useTaskStore((state) => state.addTask);
  const [loading, setLoading] = useState(false);

  const form = useForm<TaskForm>({
    defaultValues: {
      title: "",
      category: "Casual Work",
      status: "On list",
      members: "1",
      hasLink: false,
    },
  });

  const onSubmit = async (data: TaskForm) => {
    setLoading(true);
    try {
      addTask({
        ...data,
        members: parseInt(data.members),
        date: new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Failed to add task", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter task title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="App Design"> App Design</SelectItem>
                    <SelectItem value="Web Design">Web Design</SelectItem>
                    <SelectItem value="Dashboard UI">Dashboard UI</SelectItem>
                  </SelectContent>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
