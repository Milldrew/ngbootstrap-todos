type Todo = {
  id: number;
  todoText: string;
  isDone: boolean;
};

type TodoList = {
  id: number;
  todos: Todo[];
  todoListTitle: string;
};
