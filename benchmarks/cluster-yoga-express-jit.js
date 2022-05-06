"use strict";

const express = require("express");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { createServer } = require("@graphql-yoga/node");
const { useGraphQlJit } = require("@envelop/graphql-jit");
const { startCluster } = require("../utils/cluster");

const startServer = () => {
	const app = express();
	const schema = createApolloSchema();
	const server = createServer({
		schema,
		plugins: [useGraphQlJit()],
	});
	app.use("/graphql", server);
	app.listen(4001);
};

startCluster(startServer);
