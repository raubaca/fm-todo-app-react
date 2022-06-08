import Filters from './Filters';
import Todo from './Todo';

import { FILTERS } from '../utils/constants';

const Todos = (props) => {
  const {
    todos,
    filter,
    onFilter,
    onToggleTodo,
    onDeleteTodo,
    onClearCompleted,
  } = props;

  const itemsLeft = todos.filter(FILTERS['Active']).length;

  return (
    <>
      <section className="card">
        <ul className="todos">
          {todos.filter(FILTERS[filter]).map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ul>
        <div className="row items-left">
          <span>{itemsLeft} item(s) left</span>
          <div className="filters row web">
            <Filters active={filter} setFilter={onFilter} />
          </div>
          <button type="button" className="btn" onClick={onClearCompleted}>
            Clear Completed
          </button>
        </div>
      </section>
      <section className="card filters row mobile">
        <Filters active={filter} setFilter={onFilter} />
      </section>
    </>
  );
};

export default Todos;
