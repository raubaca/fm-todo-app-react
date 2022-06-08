import iconCross from '../assets/icon-cross.svg';

const Todo = (props) => {
  const { id, text, completed } = props.todo;

  return (
    <li className="row todo">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="checkbox"
        defaultChecked={completed}
        onChange={() => props.onToggleTodo(id)}
      />
      <label htmlFor={id} className="todo-label">
        {text}
      </label>
      <button
        type="button"
        className="btn"
        onClick={() => props.onDeleteTodo(id)}
      >
        <img src={iconCross} alt="Delete" className="btn__img" />
      </button>
    </li>
  );
};

export default Todo;
