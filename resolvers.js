const todos = require("./data");

module.exports = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    addToDo: (parent, args) => {
      todos.push({ title: args.title, status: args.status });

      return args;
    },
    editToDo: (parent, args) => {
      const todoIndex = todos.findIndex((t) => t.title === args.title);

      todos[todoIndex] = { title: args.title, status: args.status };
      return args;
    },
  },
};
