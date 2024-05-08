
import { Container, Typography } from '@mui/material';
import AddTodoComp from '../components/AddTodoComp';
import TodoList from '../components/TodoList';
import { useState } from 'react';

interface ITodoType{
    task: string;
    isDone: boolean;
    id: string | number;
}


const Home = () => {
    // const [todos, setTodos] = useState([] as ITodoType[])
    // const [todos, setTodos] = useState<Array<ITodoType>>([])
    const [todos, setTodos] = useState<ITodoType[]>([]) // yaygin olan kullanim


    return (
        <Container>
            <Typography align='center' color="error" variant='h3' component="h1">
                Todo App with TypeScript
            </Typography>
            <AddTodoComp />
            <TodoList />
        </Container>
    )
};

export default Home;
