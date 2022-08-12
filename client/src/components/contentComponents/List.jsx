import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  destroy,
  selectFilteredTodos,
  getTodoAsync,
} from "../../redux/todos/todosSlice";
import Loading from "./Loading";

function List() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) =>state.todos.isLoading);

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure you want to destroy this item?")) {
      dispatch(destroy(id));
    }
  };

  if(isLoading){
    return <Loading />;
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
              onChange={() => dispatch(toggle({ id: item.id }))}
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
