import { Component, effect, inject, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TodosFilter, TodoStore } from '../store/todos.store';
import { MatListModule } from '@angular/material/list';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatFormFieldModule, FormsModule, MatInputModule, MatIconModule, MatButtonToggleModule, MatListModule, JsonPipe, CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {

  value = '';
  store = inject(TodoStore);

  filter = viewChild.required(MatButtonToggleGroup);

  constructor(){
    effect(() => {
      const filter = this.filter();
      filter.value = this.store.filter();      
    });
  }

  async addTodo(){
    await this.store.addTodo(this.value)
  }

  async deleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    await this.store.deleteTodo(id);
  }

  async updateCompleted(id: string, completed: boolean){
    await this.store.updateTodo(id, completed);
  }

  onFilterTodo(event : MatButtonToggleChange){
    const filter = event.value as TodosFilter;
    this.store.updateFilter(filter); 
  }

}
