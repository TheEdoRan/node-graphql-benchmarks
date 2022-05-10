const { compileQuery, isCompiledQuery } = require("graphql-jit");
const LRU = require("tiny-lru/lib/tiny-lru.cjs");

const cache = LRU(1024);

module.exports.executor = ({ context, source, schema, document, request }) => {
	if (!cache.has(source)) {
		const compiled = compileQuery(schema, document);
		cache.set(source, compiled);
		return compiled.query({}, context, request.variables);
	}
	return cache.get(source).query({}, context, request.variables);
};

// const cache = LRU(1024);

// module.exports.executor =
// 	(schema) =>
// 	({ context, document, operationName, request, queryHash }) => {
// 		const prefix = operationName || "NotParametrized";
// 		const cacheKey = `${prefix}-${queryHash}`;
// 		let compiledQuery = cache.get(cacheKey);
// 		if (!compiledQuery) {
// 			const compilationResult = compileQuery(schema, document, operationName || undefined);
// 			if (isCompiledQuery(compilationResult)) {
// 				compiledQuery = compilationResult;
// 				cache.set(cacheKey, compiledQuery);
// 			} else {
// 				// ...is ExecutionResult
// 				return compilationResult;
// 			}
// 		}
// 		return compiledQuery.query(undefined, context, request.variables || {});
// 	};
