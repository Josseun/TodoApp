import { useState } from "react";
import { BiCheck, BiCircle, BiCode } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { FaArrowAltCircleRight } from "react-icons/fa";

const initialList = [
  { id: 1, text: "Complete online JavaScript", completed: false },
  { id: 2, text: "Jog around the park 3x", completed: false },
  { id: 3, text: "10 minutes meditation", completed: false },
  { id: 4, text: "Read for 1 hour", completed: false },
  { id: 5, text: "Pick up groceries", completed: false },
  { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
];

function Todo() {
  const [tasks, setTasks] = useState(initialList);
  const [displayTasks, setDisplayTasks] = useState([...tasks]);

  const [inputValue, setInputValue] = useState("");

  function handleKeyClick(event) {
    if (event.key === "Enter") {
      addBtn();
    }
  }

  function addBtn() {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        text: inputValue,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, { ...newTask }]);
      setDisplayTasks((prev) => [...prev, { ...newTask }]);
      setInputValue("");
    } else {
      alert("pls enter a task");
    }
  }

  function markAsIncomplete(idToUpdate) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === idToUpdate ? { ...task, completed: false } : task
      )
    );
    setDisplayTasks((prev) =>
      prev.map((task) =>
        task.id === idToUpdate ? { ...task, completed: false } : task
      )
    );
  }

  function markAsComplete(idToUpdate) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === idToUpdate ? { ...task, completed: true } : task
      )
    );
    setDisplayTasks((prev) =>
      prev.map((task) =>
        task.id === idToUpdate ? { ...task, completed: true } : task
      )
    );
  }

  const clearCompletedTasks = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
    setDisplayTasks((prev) => prev.filter((task) => !task.completed));
  };

  const Completedtasks = () => {
    setDisplayTasks(tasks.filter((task) => task.completed));
  };

  const Activetasks = () => {
    setDisplayTasks(tasks.filter((task) => !task.completed));
  };

  const allTasks = () => {
    setDisplayTasks([...tasks]);
  };

  const removeTask = (indexToRemove) => {
    setTasks((prev) => prev.filter((_, index) => index !== indexToRemove));
    setDisplayTasks((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <div>
        <div>
          <div className="flex justify-around items-center">
            <div
              id="bg"
              className="w-130 p-5 rounded-xs flex items-center mt-10 bg-slate-100 shadow-lg"
            >
              <BiCircle
                size={30}
                className="mr-5 text-slate-300 cursor-pointer"
              />
              <input
                value={inputValue}
                id="inputValue"
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="Create a new Todo..."
                onKeyDown={handleKeyClick}
                className="text-slate-400 border-none outline-none text-xl w-110 h-10 placeholder:text-gray-400"
              />
              <button>
                <FaArrowAltCircleRight
                  onClick={addBtn}
                  className="text-4xl text-slate-500 hover:text-black cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center m-5 mb-0">
          <ul>
            {displayTasks.map((task, index) => (
              <li
                key={task.id}
                id="bg"
                className={`w-130 p-5 text-xl text-slate-900 rounded-xs flex flex-col border-b border-gray-500 items-startshadow-lg  ${
                  !task.completed ? "" : "line-through text-gray-100"
                }`}
              >
                <div className="flex justify-center items-center">
                  <div>
                    {!task.completed ? (
                      <BiCircle
                        onClick={() => markAsComplete(task.id)}
                        size={30}
                        className="mr-5 text-slate-300 cursor-pointer"
                      />
                    ) : (
                      <BiCheck
                        onClick={() => markAsIncomplete(task.id)}
                        size={30}
                        className="rounded-full cursor-pointer bg-gradient-to-r from-cyan-400 to-purple-400 mr-5"
                      />
                    )}
                  </div>
                  <div className=" border-none flex items-center outline-none text-xl w-100 h-10">
                    {task.text}
                  </div>
                  <div>
                    <LiaTimesSolid
                      onClick={() => removeTask(index)}
                      size={30}
                      className="text-4xl text-slate-500 hover:text-black cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-around items-center pb-10">
          <div
            id="bg"
            className="w-130 pt-4 pb-4 rounded-xs flex justify-around items-center shadow-lg"
          >
            <div className="">{tasks.length} items left</div>
            <div>
              <div className="flex justify-around items-center w-full">
                <div className="cursor-pointer pr-3" onClick={allTasks}>
                  All
                </div>

                <div className="cursor-pointer pr-3" onClick={Activetasks}>
                  Active
                </div>
                <div className="cursor-pointer pr-3" onClick={Completedtasks}>
                  Completed
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-around items-center w-full">
                <div
                  className="cursor-pointer pr-3"
                  onClick={clearCompletedTasks}
                >
                  Clear-Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
