import * as idb from "idb";
class TodoApi {
  openDB() {
    return idb.openDB("todos", 1, {
      upgrade(db) {
        const store = db.createObjectStore("todo_store", {
          keyPath: "id",
          autoIncrement: true,
        });
        store.transaction.oncomplete = () => {
          console.count("update is complete");
        };
      },
    });
  }
  async add(todo) {
    const db = await this.openDB("todos", 1);
    const store = db
      .transaction("todo_store", "readwrite")
      .objectStore("todo_store");
    const key = await store.add(todo);   
    return this.get(key);
  }
  async delete(id) {
    const db = await this.openDB("todos", 1);
    const store = db
      .transaction("todo_store", "readwrite")
      .objectStore("todo_store");
    return store.delete(id);
  }
  async update(todo) {
    const db = await this.openDB("todos", 1);
    const store = db
      .transaction("todo_store", "readwrite")
      .objectStore("todo_store");
    return store.put(todo);
  }
  async get(key) {
    const db = await this.openDB("todos", 1);
    const store = db.transaction("todo_store").objectStore("todo_store");
    return store.get(key);
  }
  async getAll() {
    const db = await this.openDB("todos", 1);
    const store = db.transaction("todo_store").objectStore("todo_store");
    return store.getAll();
  }
}

const todoApi = new TodoApi();
export default todoApi;
