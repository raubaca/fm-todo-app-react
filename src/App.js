import iconSun from './assets/icon-sun.svg';
import iconCross from './assets/icon-cross.svg';

function App() {
  return (
    <div className="todo-app">
      <header className="header row">
        <h1>Todo</h1>
        <button className="btn">
          <img src={iconSun} alt="Light" className="btn__img" />
        </button>
      </header>

      <form className="card form row">
        <input
          type="text"
          name="text"
          id="new-todo-input"
          placeholder="Create a new todo."
          autoComplete="off"
        />
      </form>

      <div className="card">
        <ul className="todos">
          <li className="row todo">
            <input
              type="checkbox"
              name="todo1"
              id="todo1"
              className="checkbox"
            />
            <label htmlFor="todo1" className="todo-label">
              Lorem ipsum dolor sit amet.
            </label>
            <button type="button" className="btn">
              <img src={iconCross} alt="Delete" className="btn__img" />
            </button>
          </li>
          <li className="row todo">
            <input
              type="checkbox"
              name="todo2"
              id="todo2"
              className="checkbox"
            />
            <label htmlFor="todo2" className="todo-label">
              Lorem ipsum dolor sit amet.
            </label>
            <button type="button" className="btn">
              <img src={iconCross} alt="Delete" className="btn__img" />
            </button>
          </li>
        </ul>
        <div className="row items-left">
          <span>5 item(s) left</span>
          <div className="filters web row">
            <button type="button" className="btn" aria-pressed="true">
              All
            </button>
            <button type="button" className="btn" aria-pressed="false">
              Active
            </button>
            <button type="button" className="btn" aria-pressed="false">
              Completed
            </button>
          </div>
          <button type="button" className="btn">
            Clear Completed
          </button>
        </div>
      </div>

      <div className="card filters mobile row">
        <button type="button" className="btn" aria-pressed="true">
          All
        </button>
        <button type="button" className="btn" aria-pressed="false">
          Active
        </button>
        <button type="button" className="btn" aria-pressed="false">
          Completed
        </button>
      </div>
    </div>
  );
}

export default App;
