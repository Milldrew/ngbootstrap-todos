export type Todo = {
  id: number;
  todoText: string;
  isDone: boolean;
};

export type TodoList = {
  id: number;
  todos: Todo[];
  todoListTitle: string;
};

export type User = {
  name: string;
};
