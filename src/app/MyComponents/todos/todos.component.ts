import { Input, Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  @Input() mode: string = "";
  todos: Todo[] = [];
  localItem: string = "";
  
  constructor(){
    this.localItem = localStorage.getItem("todos") || ""
    if(this.localItem === ""){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
    
  }
  
  addTodo(todo: Todo){
    todo.sno = this.todos.length + 1
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  
  
  changeTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index] = todo
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  ngOnInit(): void {
  }

}

