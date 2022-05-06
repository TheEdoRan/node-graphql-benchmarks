const cluster = require("cluster");
const cpuCount = require("os").cpus().length;

module.exports.startCluster = (handler) => {
	if (!cluster.isMaster) {
		handler();
		return;
	}

	for (let i = 0; i < cpuCount; i++) {
		cluster.fork();
	}
};
