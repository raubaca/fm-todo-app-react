import { useRef } from 'react';

const Form = (props) => {
  const inputRef = useRef('');

  const submitHandler = (e) => {
    e.preventDefault();
    const todoText = inputRef.current.value;
    if (todoText.trim() === '') return;
    props.onAddTodo(todoText);
    inputRef.current.value = '';
  };

  return (
    <div className="card">
      <form onSubmit={submitHandler} className="form row">
        <input
          ref={inputRef}
          type="text"
          name="text"
          placeholder="Create a new todo."
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Form;
