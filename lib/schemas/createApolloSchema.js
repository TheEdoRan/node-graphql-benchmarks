const { makeExecutableSchema } = require("@graphql-tools/schema");
const { gql } = require("apollo-server-express");
const { data } = require("../data");

const typeDefs = gql`
	type Author {
		id: ID!
		name: String!
		md5: String!
		company: String!
		books: [Book!]!
	}

	type Book {
		id: ID!
		name: String!
		numPages: Int!
	}

	type Query {
		authors: [Author!]!
	}
`;

const resolvers = {
	Author: {
		md5: (parent) => "test123test123test123test123",
	},
	Query: {
		authors: () => data,
	},
};

module.exports.createApolloSchema = () =>
	makeExecutableSchema({
		typeDefs,
		resolvers,
	});
