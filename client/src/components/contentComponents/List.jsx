import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodoAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from "../../redux/todos/services";
import {
  selectFilteredTodos,
} from "../../redux/todos/todosSlice";
import Loading from "./Loading";
import Error from "./Error";

function List() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) =>state.todos.isLoading);
  const error = useSelector((state)=> state.todos.error);

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  const handleDestroy = async (id) => {
    if (window.confirm("Are you sure?")) {
      await dispatch(removeTodoAsync(id));
    }
  };

  const handleToggle = async (id, completed) =>{
      await dispatch(toggleTodoAsync({id, data:{completed}}));
  };

  if(isLoading){
    return <Loading />;
  }

  if(error){
    return <Error message={error}/>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id, !item.completed)}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
