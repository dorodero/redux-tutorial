// Todoの型
export type TodoState = {
  id: number; // Todoの行番
  text: string; // Todoの内容
  completed: boolean; // Todoが完了したか
};

// TodoListの型
export type TodoListState = {
  todos: TodoState[];
};
