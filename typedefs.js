const { gql } = require("apollo-server");

const typeDefs = gql`
  input TodoInput {
    title: String
    status: String
  }

  type Todo {
    title: String
    status: String
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addToDo(title: String, status: String): Todo
    editToDo(title: String, status: String): Todo
  }
`;

module.exports = {
  typeDefs,
};
