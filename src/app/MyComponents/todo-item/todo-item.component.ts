import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo = new Todo;
  @Input() mode: string = "";

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoChange: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    console.log(todo.sno)
    this.todoDelete.emit(todo);
  }

  onChecked(todo:Todo){
    todo.active = !todo.active 
    this.todoChange.emit(todo);
  }

  
  ngOnInit(): void {
      
  }
}
