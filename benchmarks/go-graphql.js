"use strict";
const { exec } = require("child_process");
const path = require("path");

exec("/opt/homebrew/bin/go run go_gql_server.go", { cwd: path.join(__dirname, "..", "other-benchmarks/go-gql/") });
