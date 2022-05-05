"use strict";
const { exec } = require("child_process");
const path = require("path");

exec("./go-graphql-benchmark", { cwd: path.join(__dirname, "..", "other-benchmarks/go-gql/") });
