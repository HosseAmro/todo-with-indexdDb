import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import todoApi from "./db/todoApi";

function App() {
  const [todo, settodo] = useState([]);

  async function onsubmit(todo) {
    const todo1 = await todoApi.add(todo);
    settodo((old) => [...old, todo1]);
  }
  async function onDelete(e) {
    const key = parseInt(e.target.id);
    await todoApi.delete(key);
    const todo1 = await todoApi.getAll();
    settodo(todo1);
  }
  async function onCompleted(todo) {
    await todoApi.update(todo);
    const todo1 = await todoApi.getAll();
    settodo(todo1);
  }
  useEffect(() => {
    async function load() {
      const todo1 = await todoApi.getAll();
      settodo(todo1);
    }
    load();
  }, []);

  return (
    <div className="text-center mt-10 font-mono text-slate-950">
      <h2 className=" font-bold text-[2rem] p-4">indexdDB</h2>
      <h1 className=" font-medium text-[1.5rem] p-2">todo</h1>
      <AddTodo onsubmit={onsubmit} />
      <ShowTodo todo={todo} onDelete={onDelete} onCompleted={onCompleted} />
    </div>
  );
}

export default App;
