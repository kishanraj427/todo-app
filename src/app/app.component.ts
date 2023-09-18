import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
  mode: string = "dark";
  navMode: string = "light"
  onChange(){
    this.mode = this.mode === "light"?"dark":"light";
    this.navMode = this.navMode === "light"?"dark":"light";
  }

  ngOnInit(): void {
  }
}
