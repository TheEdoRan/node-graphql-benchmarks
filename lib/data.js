const { faker } = require("@faker-js/faker");

// that way data is consistent
faker.seed(4321);

async function genData() {
	const authors = [];
	for (let i = 0; i < 20; i++) {
		const books = [];

		for (let k = 0; k < 3; k++) {
			books.push({
				id: k.toString(),
				name: faker.internet.domainName(),
				numPages: faker.datatype.number(),
			});
		}

		authors.push({
			id: i.toString(),
			name: faker.name.findName(),
			company: faker.company.bs(),
			books,
		});
	}

	return authors;
}

module.exports.data = genData();
