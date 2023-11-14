//el .d es para tener en cuenta q son las declaraciones, q no va a haber codigo 

export interface Todo {
    id: string
    title: string
    completed: boolean
}
export type TodoId = Pick<Todo, "id">
export type TodoTitle = Pick<Todo, "Title">
export type TodoCompleted = Pick<Todo, "completed">
export type ListOfTodos = Todo[]
  


