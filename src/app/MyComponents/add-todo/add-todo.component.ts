import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  @Output() addNewTodo: EventEmitter<Todo> = new EventEmitter;
  @Input() mode: string = "";
  title: string = ""
  desc: string = ""
  sno: number = 1

  onSubmit(){
    let todo = {
      sno: this.sno++,
      title: this.title,
      desc: this.desc,
      active: false 
    } 
    this.title = ""
    this.desc = ""
    this.addNewTodo.emit(todo);
  }

  clearText(){
    this.title = ""
    this.desc = ""
  }

  ngOnInit(): void {}
}
