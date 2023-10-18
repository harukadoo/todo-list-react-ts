import React, { useState } from 'react';
import './styles/App.css';
import Todo from './components/Todo';

interface TodoOptions {
  text: string
}

function App() {
  const [isVisible, setVisiblity] = useState<boolean>(false);

  const [input, setInputValue] = useState<string>('');

  const [todoList, setTodoList] = useState<TodoOptions[]>([]);

  const setWindowVisiblity = () => {
    setVisiblity(!isVisible);
  };

  function renderTodo() {
    return todoList.map((todo, index) => (
      <Todo key={index} text={todo.text} onDelete={() => deleteTodo(index)} onEdit={() => editTodo(index)} id={index} />
    ));
  }

  function addTodo(): void {
    if (input !== '') {
      const inputValue: TodoOptions = { text: input };
      setTodoList([...todoList, inputValue]);
      setInputValue('');

    }
  }

  const updatedTodoList: TodoOptions[] = [...todoList];

  function editTodo(index: number) {
    const newValue = prompt('new value');

    if (newValue !== '' && newValue !== null) {
      updatedTodoList.splice(index, 1, { text: newValue });
      setTodoList(updatedTodoList);
    }
  }

  function deleteTodo(index: number) {
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  }


  return (
    <div className='todo'>
      <div className='todo__container'>
        <h1 className='todo__title'>tasks to do 📝</h1>


        <div className="list">
          <div className="list__container">
          {renderTodo()}
          </div>
        </div>

        <div className="create-task">
          <div className="create-task__container">
            <button className="create-task-btn" onClick={setWindowVisiblity}>new task +</button>
          </div>
        </div>

        <div className="add-task" style={{ display: isVisible ? 'block' : 'none' }}>
          <div className="add-task__container">
            <div className="add-task__window">
              <abbr title="close">
                <button className="close-btn" onClick={setWindowVisiblity}>

                  <i className="fa-solid fa-xmark"></i>

                </button>
              </abbr>

              <h3 className="add-task__caption">write your task</h3>

              <div className="task-input__container">
                <label htmlFor="task-input">
                  <input
                   value={input}
                   onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    className="task-input"
                    name="task-input"
                    placeholder="your task" />
                </label>
              </div>

              <button className="add-task__btn" onClick={() => { addTodo(); setWindowVisiblity(); }}>add +</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
