# Boutique REST API

A REST API for managing a small online boutique, developed as part of **YouCode — Sprint 2: Ma petite boutique**.

The project allows visitors to browse products, customers to place orders, and a seller to manage the product catalog and process orders.

The API is being developed progressively using Node.js, Express, MongoDB, and Mongoose.

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — REST API framework
- **MongoDB** — NoSQL database
- **Mongoose** — MongoDB object modeling
- **Dotenv** — Environment variables
- **Nodemon** — Development server

## Project Structure

```text
boutique-rest-api/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── product.routes.js
│   ├── controllers/
│   │   └── product.controller.js
│   └── middlewares/
│       └── error.middleware.js
├── seeds/
│   └── products.seed.js
├── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

Additional folders and files will be introduced as the project progresses.

## Installation

**Prerequisites**

- Node.js and npm
- MongoDB Community Server
- MongoDB Compass (optional)
- Postman or Insomnia

**1. Clone the repository**

```bash
git clone <repository-url>
cd boutique-rest-api
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file based on `.env.example`.

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/boutique_api
JWT_SECRET=replace_with_a_secure_secret
```

`JWT_SECRET` is reserved for the authentication functionality.

The `.env` file is excluded from Git to protect sensitive configuration.

**4. Start MongoDB**

Make sure your local MongoDB server is running before starting the API.

**5. Start the application**

Development mode:

```bash
npm run dev
```

Production-style start:

```bash
npm start
```

The API runs by default at:

`http://localhost:3000`

## Database Seed

Run:

```bash
npm run seed:products
```

This command connects to MongoDB and inserts five demo products:

| Product | Price (MAD) | Available |
|---|---:|---|
| Mechanical Keyboard | 250.00 | Yes |
| Wireless Mouse | 120.00 | Yes |
| USB-C Hub | 180.00 | Yes |
| Laptop Stand | 150.00 | Yes |
| Gaming Headset | 300.00 | No |

**Warning:** The current product seed removes all existing products before inserting the demo data. Run it only on a disposable development database. Re-running it replaces product IDs and may invalidate references from existing orders.

Prices are stored as integer cents. For example, `25000` represents `250.00 MAD`.

## Available API Endpoints

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/health` | Check API status | Public |
| GET | `/api/products` | Retrieve all products | Public |
| GET | `/api/products/:id` | Retrieve a product by ID | Public |

### GET /api/health

**Request**

```http
GET http://localhost:3000/api/health
```

**Expected response — 200 OK**

```json
{
  "status": "ok",
  "service": "boutique rest api"
}
```

### GET /api/products

**Request**

```http
GET http://localhost:3000/api/products
```

**Response format — 200 OK**

```json
{
  "success": true,
  "data": []
}
```

The `data` array contains the products stored in MongoDB.

### GET /api/products/:id

**Request**

```http
GET http://localhost:3000/api/products/<product-id>
```

**Success response — 200 OK**

```json
{
  "success": true,
  "data": {
    "_id": "<product-id>",
    "name": "Mechanical Keyboard",
    "description": "RGB mechanical keyboard",
    "priceCents": 25000,
    "available": true
  }
}
```

**Invalid ID — 400 Bad Request**

```json
{
  "error": {
    "message": "Invalid product ID"
  }
}
```

**Product not found — 404 Not Found**

```json
{
  "error": {
    "message": "Product not found"
  }
}
```

Unexpected server errors use HTTP 500 with a generic error message.

## Product Model

| Field | Type | Rules |
|---|---|---|
| `name` | String | Required, trimmed |
| `description` | String | Optional, short text |
| `priceCents` | Number | Positive integer |
| `available` | Boolean | Default: true |

## Manual Testing

The following scenarios have been tested during development:

| Test | Expected Status |
|---|---|
| API health check | 200 |
| Retrieve all products | 200 |
| Retrieve an existing product | 200 |
| Retrieve a product with an invalid ID | 400 |
| Retrieve a product with a valid but unknown ID | 404 |

Additional checks before the first review include verifying persistence after restarting the API and checking MongoDB connection failures.

## Current Progress

**Implemented**

- Project initialization and Express setup
- MongoDB connection with Mongoose
- Health endpoint
- Product model
- Product demo seed
- Product listing endpoint
- Product detail endpoint with ID validation

**In progress**

- Error handling verification
- First-review documentation and final checks

**Planned for later stages**

- Product creation and updates
- Customer registration and login
- JWT authentication and role-based authorization
- Order creation, retrieval, and processing
- SQLite database exercise
- Automated tests with Jest and Supertest
- Swagger/OpenAPI documentation
- Docker Compose with API and MongoDB

## Scope

This project focuses on the backend REST API.

Frontend interfaces, online payments, delivery management, stock quantities, and shopping-cart storage are outside the required scope.

## Known Limitations

- Authentication and order management are not implemented yet.
- Product management write operations are not available yet.
- The current demo seed resets the products collection.
- Automated tests and Docker configuration are planned for later stages.

## Development Workflow

Development is organized using Jira and Git feature branches.

Each feature follows this workflow:

**Implement → Test → Explain → Commit**

The `main` branch is intended to contain stable and tested code.

## Project Status

**Sprint 2 — In progress**

First catalog review: **26 October 2026**

Sprint progress review: **30 October 2026**