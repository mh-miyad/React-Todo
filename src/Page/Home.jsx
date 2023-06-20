import React, { useEffect, useState } from "react";

import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Home = () => {
  const data = localStorage.getItem("todo");

  const [textValue, setTextValue] = useState("");
  const [todo, setTodo] = useState(JSON.parse(data));
  const id = Math.round(Math.random() * 10000);
  const itemAdded = () => {
    // Prevent the default form submission behavior
    if (textValue === "") {
      toast.error("Please enter your value");
    } else {
      const newTodo = {
        id: id,
        text: textValue,
        completed: false,
      };
      setTodo([...todo, newTodo]);
      toast.success("Todo added");
      setTextValue("");
    }
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      itemAdded();
    }
  };
  const completeTodo = (id) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });
    setTodo(updatedTodo);
  };

  const deleteTodo = (id) => {
    const deletedItem = todo.filter((t) => t.id !== id);

    setTodo(deletedItem);
    toast.success("Todo deleted");
  };

  const removeAll = () => {
    setTodo([]);
  };
  return (
    <div className=' container mx-auto  '>
      <div className='text-center text-3xl md:text-4xl lg:text-6xl  p-5 mb-10 uppercase font-bold  text-indigo-700 shadow-2xl my-4 bg-indigo-100 rounded-2xl shadow-indigo-500/40 '>
        Todo App <span>react</span>
      </div>
      <div className=' '>
        <div className=' flex justify-center items-center gap-4  '>
          <input
            type='text'
            value={textValue}
            placeholder='Type here and Press Enter'
            className='input input-bordered input-primary font-semibold  max-w-xs '
            onChange={(e) => setTextValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className='btn  btn-primary text-white font-bold '
            onClick={itemAdded}>
            Add
          </button>
        </div>

        <div className=' max-w-xl mx-auto px-2 md:px-0  my-10'>
          {todo.map((item, index) => {
            return (
              <>
                <div className=' text-center  text-black ' key={index}>
                  <div
                    className='flex items-center justify-between gap-5 w-full rounded-lg mt-3  font-bold  text-base md:text-lg lg:xl shadow-xl bg-indigo-600 text-white p-2 shadow-indigo-600/60'
                    data-aos='fade-right'
                    data-aos-offset='300'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='300'>
                    <h2
                      className={` ${
                        item.completed
                          ? "line-through text-gray-100 decoration-black "
                          : ""
                      } capitalize px-6 drop-shadow-2xl`}>
                      {item.text}
                    </h2>
                    <div className='flex items-center gap-5 px-5 '>
                      <button
                        className='btn btn-sm  '
                        onClick={() => deleteTodo(item.id)}>
                        {" "}
                        <AiOutlineDelete className=' w-6 h-6 text-red-500' />
                      </button>
                      <button
                        className='btn btn-sm  '
                        onClick={() => completeTodo(item.id)}>
                        {" "}
                        <AiOutlineCheck className=' w-6 h-6 text-green-600 ' />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className='text-center '>
          <button
            className=' drop-shadow-2xl shadow-xl shadow-red-600/40 btn bg-red-500 hover:bg-red-600   text-white '
            onClick={removeAll}>
            remove all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
