import { useState } from "react";

export default function AddTodo(p) {
  const [add, setadd] = useState("");
  function adding(e) {
    e.preventDefault();
    p.onsubmit({
      text: add,
      completed: false,
    });
    setadd("");
  }
  return (
    <form onSubmit={adding}>
      <input
        type="text"
        placeholder="new todo"
        className="m-4 p-2 placeholder:text-blue-100 text-center bg-slate-950 text-blue-100 rounded-2xl "
        value={add}
        onChange={(e) => setadd(e.target.value)}
      />
    </form>
  );
}
