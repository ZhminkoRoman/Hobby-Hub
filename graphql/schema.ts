export const typeDefs = `
  type Event {
    id: ID
    title: String
    slug: String
    content: String
    authorId: String
  }

  type Query {
    events: [Event]!
  }
`;
