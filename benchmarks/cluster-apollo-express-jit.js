"use strict";

const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const http = require("http");
const { executor } = require("../lib/apollo-jit/executor");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { startCluster } = require("../utils/cluster");

const startServer = () => {
	const app = express();
	const httpServer = http.createServer(app);

	const schema = createApolloSchema();

	const server = new ApolloServer({
		schema,
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
};

startCluster(startServer);
