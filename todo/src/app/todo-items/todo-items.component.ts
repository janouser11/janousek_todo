import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  toDoList: Array<string> = ["Make header", "Create Component", "Make dynamic"];

      addTodo(newTodo: string) {
        if (newTodo) {
          this.toDoList.push(newTodo);
        }
      }

      deleteItem(index: number){
        console.log(index);
        this.toDoList.splice(index, 1)
      }

}
