Vue.createApp({
  data() {
    return {
      apiUrl: "http://localhost:3000/todos/",
      todos: [],
      filter: "all",
      newTodoDescription: "",
      filterOptions: [
        { value: "all", label: "All" },
        { value: "open", label: "Open" },
        { value: "done", label: "Done" }
      ]
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") return this.todos;
      return this.todos.filter((todo) =>
        this.filter === "open" ? !todo.done : todo.done
      );
    }
  },
  methods: {
    async loadTodos() {
      const response = await fetch(this.apiUrl);
      this.todos = await response.json();
    },
    async addTodo() {
      if (this.newTodoDescription.length === 0) return;

      const newTodo = {
        description: this.newTodoDescription,
        done: false
      };

      await fetch(this.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo)
      });

      this.newTodoDescription = "";
      await this.loadTodos();
    },
    async updateTodo(todo) {
      await fetch(this.apiUrl + todo.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo)
      });
    },
    async removeDoneTodos() {
      const doneTodos = this.todos.filter((todo) => todo.done);
      for (const todo of doneTodos) {
        await fetch(this.apiUrl + todo.id, { method: "DELETE" });
      }
      await this.loadTodos();
    }
  },
  mounted() {
    this.loadTodos();
  }
}).mount("#app");
