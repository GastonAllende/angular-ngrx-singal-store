import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../model/todo.model';
import { todos } from '../model/mock.data';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  constructor() { }

  async getTodos() {
		await sleep(1000);
    return todos;
  }

  async addTodo(todo:Partial<Todo>) {
    await sleep(1000);
    return {
      id: Math.random().toString(36),
      ...todo
    } as Todo;
  }

  async deleteTodo(id:string) {
    await sleep(500);
  }

  async updateTodo(id:string, completed: boolean) {
    await sleep(500);
  }

}

async function sleep(ms: number) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}
