import { useState, useEffect } from "react";
import type { Task } from "../types/index";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as apiDeleteTask,
} from "../api/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    setIsLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function addTask(title: string) {
    if (!title.trim()) return;

    try {
      const newTask = await createTask(title);
      setTasks((state) => [newTask, ...state]);
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  }

  async function toggleTask(id: string) {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );

    try {
      await updateTask(id);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      loadTasks();
    }
  }

  async function deleteTask(id: string) {
    setTasks((state) => state.filter((task) => task.id !== id));

    try {
      await apiDeleteTask(id);
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      loadTasks();
    }
  }

  return { tasks, addTask, toggleTask, deleteTask, isLoading };
}
