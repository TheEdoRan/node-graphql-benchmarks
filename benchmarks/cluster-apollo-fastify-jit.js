const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-fastify");
const fastify = require("fastify");
const { executor } = require("../lib/apollo-jit/executor");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { startCluster } = require("../utils/cluster");

const startServer = () => {
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

	const schema = createApolloSchema();

	const server = new ApolloServer({
		schema,
		csrfPrevention: true,
		plugins: [fastifyAppClosePlugin(app), ApolloServerPluginDrainHttpServer({ httpServer: app.server })],
		executor,
	});

	server.start().then(async () => {
		app.register(server.createHandler());
		await app.listen(4001);
	});
};

startCluster(startServer);
