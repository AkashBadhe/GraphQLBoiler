export default `
  type Link {
    id: String!
    title: String!
    link: String!
  }
  type Query {
    link(id: String!): Link
    navigation: [Link]
  }
  type Mutation {
    addLink(id: String!, title: String!, link: String!): Link
    editLink(id: String, title: String, link: String): Link
    deleteLink(id: String, title: String, link: String): Link
  }
`;
