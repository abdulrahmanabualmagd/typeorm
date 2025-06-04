# TypeORM Express API Example

This project is a RESTful API built with [Express.js](https://expressjs.com/) and [TypeORM](https://typeorm.io/) for PostgreSQL. It demonstrates a modular structure for managing users, profiles, posts, comments, and tags, following best practices for scalable Node.js applications.

## Features

- **TypeORM** for object-relational mapping with PostgreSQL
- **Express.js** for building RESTful APIs
- Modular resource structure: User, Profile, Post, Comment, Tag
- CRUD operations for all resources
- Singleton database connection pattern
- TypeScript for type safety

## Project Structure

```
├── src/
│   ├── app.ts                # Express app setup and route mounting
│   ├── main.ts               # Application bootstrap and server start
│   ├── config/
│   │   ├── db.ts             # TypeORM DataSource singleton
│   │   └── index.ts          # Config index (re-exports)
│   └── resources/
│       ├── user/             # User entity, controller, routes, service
│       ├── profile/          # Profile entity, controller, routes, service
│       ├── post/             # Post entity, controller, routes, service
│       ├── comment/          # Comment entity, controller, routes, service
│       └── tag/              # Tag entity, controller, routes, service
├── package.json
├── tsconfig.json
├── .gitignore
└── log.sql
```

## Getting Started

### Prerequisites
- Node.js v18 or higher
- PostgreSQL database

### Installation

```bash
npm install
```

### Configuration

Edit the database connection settings in `src/config/db.ts` if needed:
```ts
host: "localhost",
port: 5432,
username: "postgres",
password: "sa123456",
database: "test",
```

### Running the Application

```bash
npm run dev
```

The server will start on [http://localhost:3000](http://localhost:3000).

### API Endpoints

- `GET    /users`      - List all users
- `POST   /users`      - Create a new user
- `GET    /users/:id`  - Get user by ID
- `PUT    /users/:id`  - Update user by ID
- `DELETE /users/:id`  - Delete user by ID

Similar endpoints exist for `/profiles`, `/posts`, `/comments`, and `/tags`.

## Development
- TypeScript is used for all source files.
- Entities are defined using TypeORM decorators.
- Each resource has its own controller, service, and routes for separation of concerns.

## License

This project is licensed under the ISC License.
