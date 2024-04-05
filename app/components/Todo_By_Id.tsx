"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { readTodo } from "../api/route";

interface Todo {
  name: string;
  description: string;
}

interface TodoProps {
    id: string;
  }

  
export default function Todo_By_Id({ id }: TodoProps) {
//   const router = useRouter();
//   const { id } = router.query;
  const [todo, setTodo] = useState<Todo | null>(null); // Define the type of todo

  useEffect(() => {
    const fetchTodo = async () => {
        if (id) {
          const todoData = await readTodo(id);
          setTodo(todoData);
        }
      };
      fetchTodo();
    }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <li className="">
        <p>Name: {todo.name}</p>
        <p>Description: {todo.description}</p>
      </li>
    </div>
  );
}
