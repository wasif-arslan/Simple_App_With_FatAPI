"use server";

import { ITask } from "@/app/lib/interface";
import { revalidateTag } from "next/cache";

const API_URL = "http://127.0.0.1:8000"; // Replace with your FastAPI backend URL

export const getAllTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      cache: "no-store",
      next: {
        tags: ["todos"],
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export default async function createTodo(todoData: { name: string; description: string; }) {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
    if (!response.ok) {
      throw new Error("Failed to create todo");
    }

    revalidateTag("todos");

    return await response.json();
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
}

export const readTodo = async (todoId: string) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todoId}`);
    if (!response.ok) {
      throw new Error(`Failed to read todo ${todoId}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error reading todo ${todoId}:`, error);
    throw error;
  }
};

export const updateTodo = async (todoId: string, todoData: any) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update todo ${todoId}`);
    }

    revalidateTag("todos");

    return await response.json();
  } catch (error) {
    console.error(`Error updating todo ${todoId}:`, error);
    throw error;
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todoId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete todo ${todoId}`);
    }

    revalidateTag("todos");

    return { message: "Todo deleted successfully" };
  } catch (error) {
    console.error(`Error deleting todo ${todoId}:`, error);
    throw error;
  }
};
