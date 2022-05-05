const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-fastify");
const fastify = require("fastify");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const fastifyAppClosePlugin = (app) => {
	return {
		async serverWillStart() {
			return {
				async drainServer() {
					await app.close();
				},
			};
		},
	};
};

const app = fastify();
const server = new ApolloServer({
	schema: createApolloSchema(),
	csrfPrevention: true,
	plugins: [fastifyAppClosePlugin(app), ApolloServerPluginDrainHttpServer({ httpServer: app.server })],
});

server.start().then(async () => {
	app.register(server.createHandler());
	await app.listen(4001);
});
