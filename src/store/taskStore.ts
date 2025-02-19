import { Task } from '@/types/task';
import {create} from 'zustand'

interface TaskStore {
    tasks : Task[];
    addTask : (task : Omit<Task, 'id'>) => void
    updateTask : (id : number, updates: Partial<Task>) => void;
    deleteTask : (id : number) => void
    toggleTaskStatus : (id : number) => void
}


export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [
        {
            id: 1,
            title: "Creating Tinder app UI design",
            status: "Done",
            category: "App Design",
            date: "02 Jan 2022",
            members: 3,
            hasLink: true,
          },
          {
            id: 2,
            title: "Implement user authentication system",
            status: "On going",
            category: "Backend",
            date: "15 Mar 2023",
            members: 2,
            hasLink: false,
          },
          {
            id: 3,
            title: "Design landing page for e-commerce site",
            status: "On list",
            category: "Web Design",
            date: "20 Apr 2024",
            members: 1,
            hasLink: true,
          },
          {
            id: 4,
            title: "Optimize database queries",
            status: "Done",
            category: "Backend",
            date: "05 Jul 2022",
            members: 1,
            hasLink: false,
          },
          {
            id: 5,
            title: "Develop a new feature for scheduling",
            status: "On going",
            category: "Casual Work",
            date: "10 Oct 2023",
            members: 4,
            hasLink: true,
          },
          {
            id: 6,
            title: "Create system architecture diagrams",
            status: "On list",
            category: "System Design",
            date: "12 Nov 2024",
            members: 2,
            hasLink: true,
          },
          {
            id: 7,
            title: "Refactor frontend for better performance",
            status: "Done",
            category: "Web Design",
            date: "18 Sep 2022",
            members: 3,
            hasLink: false,
          },
          {
            id: 8,
            title: "Setup CI/CD pipeline",
            status: "On going",
            category: "Backend",
            date: "22 Feb 2023",
            members: 1,
            hasLink: true,
          },
          {
            id: 9,
            title: "Conduct user interviews for app feedback",
            status: "On list",
            category: "Casual Work",
            date: "03 Dec 2024",
            members: 2,
            hasLink: false,
          },
          {
            id: 10,
            title: "Develop RESTful API for microservices",
            status: "Done",
            category: "System Design",
            date: "28 Aug 2022",
            members: 5,
            hasLink: true,
          },
    ],
    addTask: (task) =>
      set((state) => ({
        tasks: [...state.tasks, { ...task, id: Math.max(...state.tasks.map(t => t.id), 0) + 1 }],
      })),
    updateTask: (id, updates) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, ...updates } : task
        ),
      })),
    deleteTask: (id) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      })),
    toggleTaskStatus: (id) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id
            ? {
                ...task,
                status:
                  task.status === 'Done'
                    ? 'On going'
                    : task.status === 'On going'
                    ? 'On list'
                    : 'Done',
              }
            : task
        ),
      })),
  }));
