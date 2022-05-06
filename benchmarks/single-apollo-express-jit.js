"use strict";

const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const http = require("http");
const { executor } = require("../lib/apollo-jit/executor");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
	schema: createApolloSchema(),
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	executor,
});

server.start().then(async () => {
	server.applyMiddleware({
		app,
		path: "/graphql",
	});

	await new Promise((resolve) => httpServer.listen({ port: 4001 }, resolve));
});
