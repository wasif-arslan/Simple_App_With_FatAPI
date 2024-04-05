import All_Todo from "./components/All_Todo";
import Create_Todo from "./components/Create_Todo";
import Todo_By_Id from "./components/Todo_By_Id";

export default function Home() {
  return (
    <section className="text-white bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 text-center m-10 border-2 border-white shadow-2xl  rounded-3xl max-w-fit  bg-black ">
      <section>
        <h1 className="font-bold text-4xl p-10 ">
          App in Nextjs Using FastAPI, SQLModel, Poetry, Postgresql, Neon{" "}
        </h1>
        <Create_Todo />
        <All_Todo />

        {/* <Todo_By_Id id="2"/>
         */}
      </section>
    </section>
  );
}
