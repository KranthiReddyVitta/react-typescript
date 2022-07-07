import { Todo } from "../models/todo";
import TodoItem from "./Todo";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
