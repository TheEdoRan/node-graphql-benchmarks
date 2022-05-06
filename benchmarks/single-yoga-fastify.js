"use strict";

const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const { createServer } = require("@graphql-yoga/node");
const fastify = require("fastify");

const app = fastify();

const server = createServer({
	schema: createApolloSchema(),
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
