import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoStore } from './store/todos.store';
import { TodosListComponent } from "./todos-list/todos-list.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosListComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'NGRX signal store';

  store = inject(TodoStore);

  ngOnInit(): void {
      this.loadTodos().then(() => console.log("Todos loaded"))
  }

  async loadTodos(){
    await this.store.loadAll();
  }

}

