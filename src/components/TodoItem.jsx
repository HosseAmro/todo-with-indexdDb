export default function TodoItem(p) {
  const { id, completed, text } = p.todo;
  function onChange() {
    p.onCompleted({ ...p.todo, completed: !completed });
  }
  return (
    <>
      <div
        className={`mt-4 mx-auto self-center text-start w-[12.5rem]
      ${completed && `text-slate-300`}`}
      >
        <input
          className="mx-3"
          type="checkbox"
          checked={completed}
          onChange={onChange}
        ></input>
        {p.index + 1}.{text}
        <button className="float-right mr-4 block" id={id} onClick={p.onDelete}>
          ❌
        </button>
      </div>
    </>
  );
}
