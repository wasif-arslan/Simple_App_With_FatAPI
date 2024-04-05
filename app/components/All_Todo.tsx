"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { deleteTodo, getAllTodos } from "../api/route";
import { ITask } from "@/app/lib/interface";

export default function All_Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getAllTodos();
      setTodos(todosData);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo: ITask) => (
        <ul className="p-3  mt-2 flex flex-justify-center  ml-10 mr-10  ">
          <li
            key={todo.id}
            className="p-3 flex  items-center rounded-xl text-xl font-bold border-2 border-white w-full"
          >
            <p className=" ">{todo.id}:</p>
            <p className="pl-5">{todo.name}</p>
            <p className="pl-5"> {todo.description}</p>
          </li>
          <button className="" onClick={() => deleteTodo(todo.id)}>
            <Image
              src="./delete.svg"
              width={30}
              height={20}
              alt="delete svg"
              className="ml-2 "
            ></Image>
          </button>
        </ul>
      ))}
    </div>
  );
}
