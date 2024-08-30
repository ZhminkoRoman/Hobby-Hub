export const resolvers = {
  Query: {
    events: () => {
      return [
        {
          id: "1es",
          title: "test-1",
          slug: "test-1",
          content: "test description",
          authorId: "sadvfdsfka",
        },
      ];
    },
  },
};
