"use client";

import { useState } from "react";
import createTodo from "../api/route";
import { ITask } from "@/app/lib/interface";
import { revalidateTag } from "next/cache";

export default  function Create_Todo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await createTodo({
        name,
        description,
      });
      alert("Todo created successfully");
      setName("");
      setDescription("");

    } catch (error) {
      console.error("Error creating todo:", error);
      alert("Failed to create todo");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-around items-center "
      >
        <div className="flex flex-col font-bold text-xl">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 border-4 border-red-500 text-center text-black"
          />
        </div>
        <div className="flex flex-col font-bold text-xl">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-10 border-4 text-center  border-red-500 text-black"
          />
        </div>
        <button type="submit" className="p-2 pl-5 pr-5 border-4 border-white text-lg font-bold  rounded-full">Create Todo</button>
      </form>
    </div>
  );
}
