import React from 'react';
import './app-header.css'

const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header">
            <div className="app-header d-flex">
                <h1>To-Do App!</h1>
                <h2>{toDo} more to Do, {done} done</h2>
            </div>
            <div className="add-new">
                <h2>Add New To Do</h2>
            </div>
        </div>        
    );
};

export default AppHeader;