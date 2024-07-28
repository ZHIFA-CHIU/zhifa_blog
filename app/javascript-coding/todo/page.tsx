'use client'

import { useState } from 'react'

type TodoItem = {
  todo: string
}

const Todo = () => {
  const [list, setList] = useState<TodoItem[]>([])

  const createTodo = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const todo = formData.get('todo')
    if (!todo) return
    const newTodo: TodoItem = { todo: todo as string }
    setList([...list, newTodo])
  }

  return (
    <div className="container flex flex-col items-center justify-center">
      <form onSubmit={createTodo} className="flex flex-col gap-4">
        <div>
          <label htmlFor="create-todo">Todo: </label>
          <input className="dark:text-black" type="text" name="todo" />
        </div>
        <div>
          <button className="border-1" type="submit">
            Create
          </button>
        </div>
      </form>

      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            <div>
              {item.todo}
              <button
                onClick={() => setList(list.filter((_, i) => i !== idx))}
                className="ml-2 border-1"
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
