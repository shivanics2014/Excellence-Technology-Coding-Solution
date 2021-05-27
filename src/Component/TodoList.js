import {useState} from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = () => {
    const [list, setList] = useState([]);
    const [textInput, setTextInput] = useState('');

    const addItemToList = (item) => {
        const currentList = [...list];
        currentList.push(item);
        setList(currentList);
    }

    return <div>
        <input type='text' value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
        <button onClick={() => {
            addItemToList(textInput);
            setTextInput('');
            }}>Add Item</button>
        <b style={{fontSize:18}}>ToDo Items</b>
        {
            list.map((listItem) => {
                return <TodoItem item={listItem}/>
            })
        }
    </div>;
}