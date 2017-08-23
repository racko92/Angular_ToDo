import { Component } from '@angular/core';
import { Todo } from '../todo';


@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'
})


export class ToDoComponent{
    todos: any[];
    newTodo: Todo = new Todo('');

    constructor(){
        this.todos = [
            new Todo('First Todo Item'),
            new Todo('Second Todo Item'),
            new Todo('Make Todo Work')
        ]
    }

    addItem(todo){
        this.todos.push(todo);
        this.newTodo = new Todo('');
    }

    deleteItem(todo){
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }
    modifyItem(todo, newTodo){
        let index = this.todos.indexOf(todo);
        this.todos.fill(newTodo, index, index+1);
        this.newTodo = new Todo('');
    }
}