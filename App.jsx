import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockDate = [
    {
        id:0,
        isDone:false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id:1,
        isDone:false,
        content: "java 공부하기",
        date: new Date().getTime(),
    },
    {
        id:2,
        isDone:false,
        content: "그래픽 디자인 공부하기",
        date: new Date().getTime(),
    },
];

function App(){
    const [todos, setTodos] = useState(mockDate);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current ++,
            isDone: false,
            content: content,
            date: new Date().getTime,
        };

        setTodos([newTodo,...todos])
    };

    const onUpdate = (targetId) => {
        
        //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 배열
        setTodos(
            todos.map((todo) => 
                todo.id === targetId
                    ?{...todo,isDone: !todo.isDone}
                    : todo
            )
        );
    };

    const onDelete = (targetId) => {
        //인수 :todos 배열에서 targetId와 일치하는 Id를 갖는 요소만 삭제
        setTodos(todos.filter((todo)=>todo.id !== targetId))
    }

    return (
    <div className="App">
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete ={onDelete}/>
    </div>
    );
}

export default App;