import Link from "next/link"

export async  function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await data.json()
  return {
    props: {todos},
  }
}

export default function Todos(props: any)
{
  return (
    // fragment
    <> 
      <div className="flex gap-4 border flex-col p-10 bg-gray-100 ">
      {
        props.todos.map((todo: any) => {
          return (
            <div key={todo.id} className="border p-4 rounded-lg bg-white">
              <h2 className="font-bold"># {todo.id}</h2>
              <h3>{todo.title}</h3>
              <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
              <Link href={`/todos/${todo.id}`}>
                <span className="text-blue-500">View</span>
              </Link>
            </div>
          )
        })
      }
      </div>
    </>
  )
}