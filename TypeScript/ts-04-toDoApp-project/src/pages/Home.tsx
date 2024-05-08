
import { Container, Typography } from '@mui/material';
import AddTodoComp from '../components/AddTodoComp';
import TodoList from '../components/TodoList';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ITodoType {
    task: string;
    isDone: boolean;
    id: string | number;
}

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
    
    const addTodo:AddFn = async (text) => {
        try {
            await axios.post(url,{task:text, isDone:false})
            getTodos()
        } catch (error) {
            console.log(error);
            
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
            <AddTodoComp addTodo={addTodo}/>
            <TodoList />
        </Container>
    )
};

export default Home;
