# Mini project
- POSTMAN JSON COLLECTION
```json
{
	"info": {
		"_postman_id": "a380dfe7-417a-4de2-a4b5-d555466be5c2",
		"name": "Mini Project",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "30623717"
	},
	"item": [
		{
			"name": "Find Treasure",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"latitude\": \"14.552036595352455\",\r\n    \"longitude\": \"121.01696118771324\",\r\n    \"distance\": \"1\",\r\n    \"prize_value\": \"20\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/api/v1/treasures/find-treasures",
					"host": [
						"{{url}}"
					],
					"path": [
						"api",
						"v1",
						"treasures",
						"find-treasures"
					]
				}
			},
			"response": []
		},
		{
			"name": "Find Treasure with prize value",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"latitude\": \"14.552036595352455\",\r\n    \"longitude\": \"121.01696118771324\",\r\n    \"distance\": \"1\",\r\n    \"prize_value\": 10\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/api/v1/treasures/find-treasures",
					"host": [
						"{{url}}"
					],
					"path": [
						"api",
						"v1",
						"treasures",
						"find-treasures"
					]
				}
			},
			"response": []
		}
	]
}
```

## Installation

To install the Mini-project, use the following command:
```bash
npm install
```
This will install all the necessary dependencies required to run the application.

## Running the Application

To start the Mini-project, use the following command:
```bash
npm start
```
This will start the application and make it accessible at the designated port.

## Testing

To run the tests for the Mini-project, use the following command:
```bash
npm run test
```
This will execute the test suite using the Mocha test framework.

## Development
### `.env`

Update the `.env` file with the following configurations:

``` bash
cp .env.example .env
```

### `.env.test`

For running tests, update the `.env.test` file with the following configurations:

```bash
NODE_ENV=test
TEST_USERNAME=<test username>
TEST_PASSWORD=<test username>
TEST_URL=<api base url>
DATABASE_TEST_URL=<test db connection>
```

### Creating new model

To generate new model:
```bash
npx sequelize-cli models:generate --name <name> --attributes <list of attributes>
```

### Creating migrations

To generate new migration:
```bash
npx sequelize-cli migration:generate --name <name>
npx sequelize-cli db:migrate # to run migration
```

To view all Sequelize commands, run:
```bash
npx sequelize-cli
```

### Folder Structuring
Below is the suggested folder structure for an organized development: 
```bash
.
├── apps                    	   # Modular configuration
│   ├── treasure                   # Module
│   │   ├── v1              	   # Version 1 APIs for this module
│   │   │   ├── controller.js      # Controller for the module
│   │   │   ├── index.js           # Module routes, schema validation
│   │   │   └── service.js         # Database related operations
│   │   └── v2              # Version 2 APIs for this module
├── config                  # Sequelize configs directory
├── constants
├── middlewares
├── migrations              # Sequelize migrations directory
├── models                  # Sequelize models directory
├── routes
├── seeders                 # Sequelize seeders directory
├── test                    # Test directory
├── utils
└── index.js                # Main entry
```

This folder structure follows a modular approach where each module (e.g., "treasure") has its own versioned API endpoints, controllers, routes, and services. It also includes directories for configuration (config), database migrations (migrations), Sequelize models (models), seeders for database seeding (seeders), and utility scripts (utils). The constants, middlewares, and routes directories provide a centralized location for storing respective files, and the test directory is dedicated to unit tests. Finally, the index.js file serves as the main entry point for the application.


## Technologies Used

The Mini-Porject utilizes the following technologies:

- Sequelize: Sequelize is used as an ORM (Object-Relational Mapping) tool for managing database models and migrations.
- Joi: Joi is used for schema validation, ensuring that the incoming data meets the specified requirements.
- MySQL: MySQL is used as the database for storing the Mini-project data.
