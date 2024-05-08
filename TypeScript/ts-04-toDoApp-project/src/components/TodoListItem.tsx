import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

// interface ITodoListItem {
//     todo: ITodoType;
//     deleteTodo: DeleteFn;
//     toggleTodo: ToggleFn; 
// }
interface ITodoListItem extends ITodoListFn {
    todo: ITodoType;

}
const TodoListItem: React.FC<ITodoListItem> = ({ todo,deleteTodo,toggleTodo }) => {
    return (
        <ListItem
            disableGutters
            sx={{ padding: "1rem", cursor: "pointer" }}
            secondaryAction={
                <IconButton
                onClick={()=>deleteTodo(todo.id)}
                sx={{ "&:hover": { color: "red" } }} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemText 
            onClick={()=> toggleTodo(todo)}
            sx={{ wordWrap: "break-word" }} primary={todo.task} />
        </ListItem>
    );
};

export default TodoListItem;
