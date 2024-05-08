
interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
}

type AddFn = (text: string) => Promise<void>;

type ToggleFn = (todo:ITodoType) => Promise<void>;

type DeleteFn = (id: string | number) => Promise<void>;

interface ITodoListFn {
  deleteTodo: DeleteFn;
  toggleTodo: ToggleFn;
}