"use strict";

const express = require("express");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { createServer } = require("@graphql-yoga/node");
const { startCluster } = require("../utils/cluster");

const startServer = () => {
	const app = express();
	const schema = createApolloSchema();
	const server = createServer({
		schema,
	});
	app.use("/graphql", server);
	app.listen(4001);
};

startCluster(startServer);
