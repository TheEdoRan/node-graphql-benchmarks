"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const app = Fastify();

app.register(mercurius, {
	schema: createApolloSchema(),
});

app.listen(4001);
