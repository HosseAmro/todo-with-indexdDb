import TodoItem from "./TodoItem";

export default function ShowTodo(p) {
  if (p.todo.length === 0) return;

  return (
    <>
      {p.todo.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onCompleted={p.onCompleted}
          onDelete= {p.onDelete}
        />
      ))}
    </>
  );
}
