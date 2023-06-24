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
  async getStore() {
    const db = await this.openDB("todos", 1);
    const store = db
      .transaction("todo_store", "readwrite")
      .objectStore("todo_store");
    return store;
  }
  async add(todo) {
    const store = await this.getStore();
    const key = await store.add(todo);
    return this.get(key);
  }
  async delete(id) {
    const store = await this.getStore();
    return store.delete(id);
  }
  async update(todo) {
    const store = await this.getStore();
    return store.put(todo);
  }
  async get(key) {
    const store = await this.getStore();
    return store.get(key);
  }
  async getAll() {
    const store = await this.getStore();
    return store.getAll();
  }
}

const todoApi = new TodoApi();
export default todoApi;
