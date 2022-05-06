"use strict";

const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { createServer } = require("@graphql-yoga/node");
const fastify = require("fastify");
const { useGraphQlJit } = require("@envelop/graphql-jit");
const { useParserCache } = require("@envelop/parser-cache");
const { useValidationCache } = require("@envelop/validation-cache");
const { usePersistedOperations, InMemoryStore } = require("@envelop/persisted-operations");
const { startCluster } = require("../utils/cluster");

const store = new InMemoryStore();

const startServer = () => {
	const app = fastify();

	const server = createServer({
		schema: createApolloSchema(),
		plugins: [useGraphQlJit(), useParserCache(), useValidationCache(), usePersistedOperations({ store })],
	});

	app.route({
		url: "/graphql",
		method: ["GET", "POST", "OPTIONS"],
		handler: async (req, reply) => {
			const response = await server.handleIncomingMessage(req, {
				req,
				reply,
			});
			response.headers.forEach((value, key) => {
				reply.header(key, value);
			});

			reply.status(response.status);
			reply.send(response.body);
		},
	});

	app.listen(4001);
};

startCluster(startServer);
