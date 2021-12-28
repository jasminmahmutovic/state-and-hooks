import useFetch from "../hooks/useFetch";

const Todos = () => {
    const todos = useFetch("https://jsonplaceholder.typicode.com/todos/");

    return (
        <>
    <h1>Todo list</h1>
    {todos.map(todo => 
    <p>{todo.title}</p>)}
        </>
    )
};

export default Todos;