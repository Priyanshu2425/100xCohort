/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.list = [];
  }

  add(task){
    this.list.push(task);
  }

  remove(index){
    this.list.splice(index, 1);
  }

  update(index, updatedTask){
    this.list.splice(index, 1, updatedTask);
  }

  getAll(){
    return this.list;
  }

  get(index){
    return this.list[index];
  }

  clear(){
    this.list = [];
  }
}

module.exports = Todo;
