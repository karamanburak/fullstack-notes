
import { Container, Typography } from '@mui/material';
import AddTodoComp from '../components/AddTodoComp';
import TodoList from '../components/TodoList';
import { useEffect, useState } from 'react';
import axios from 'axios';


const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos"

const Home = () => {
    // const [todos, setTodos] = useState([] as ITodoType[])
    // const [todos, setTodos] = useState<Array<ITodoType>>([])
    const [todos, setTodos] = useState<ITodoType[]>([]) // yaygin olan kullanim


    const getTodos = async () => {
        try {
            const { data } = await axios<ITodoType[]>(url)
            setTodos(data)
            console.log(data);
        } catch (error) {
            console.log(error);

        }
    }

    //! Function type tanimlama 1.yol !\\
    // const addTodo = async (text:string) => {
    //     try {

    //     } catch (error) {
    //         console.log(error);

    //     }

    // }


    //! Function type tanimlama 2.yol !\\
    // type AddFn = (text:string)=> Promise<void>

    const addTodo: AddFn = async (text) => {
        try {
            await axios.post(url, { task: text, isDone: false })
            getTodos()
        } catch (error) {
            console.log(error);

        }

    }

    const toggleTodo: ToggleFn = async (todo) => {
        try {
            await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone })
        } catch (error) {
            console.log(error);
        } finally {
            getTodos()
        }
    }
    const deleteTodo: DeleteFn = async (id) => {
        try {
            await axios.delete(`${url}/${id}`)
        } catch (error) {
            console.log(error);
        } finally {
            getTodos()
        }
    }

    useEffect(() => {
        getTodos()
    }, [])


    return (
        <Container>
            <Typography align='center' color="error" variant='h3' component="h1">
                Todo App with TypeScript
            </Typography>
            <AddTodoComp addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </Container>
    )
};

export default Home;
