import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import iconCross from '../assets/icon-cross.svg';

const Todo = (props) => {
  const { id, text, completed } = props.todo;
  const { index, onMoveTodo } = props;

  const [, dragRef] = useDrag({
    type: 'item',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      onMoveTodo(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  return (
    <li className="row todo" ref={dragDropRef}>
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
        className="btn btn--delete"
        onClick={() => props.onDeleteTodo(id)}
      >
        <img src={iconCross} alt="Delete" className="btn__img" />
      </button>
    </li>
  );
};

export default Todo;
