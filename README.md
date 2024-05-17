# API Documentation

## Overview

This API provides endpoints for simulating payment operations. It allows users to register, log in, manage their payment accounts, perform transactions such as transfers and withdrawals, and view payment history.

#### Technologies Used

- **Fastify**: Fastify is used as the web framework for building the API server, providing high performance and low overhead.
- **Prisma with PostgreSQL via Supabase**: Prisma is used as the ORM (Object-Relational Mapping) to interact with the PostgreSQL database, simplifying database operations. PostgreSQL database is hosted on Supabase, a platform providing a suite of tools and services built on top of PostgreSQL, simplifying database management and providing additional functionality such as authentication and real-time data handling.
- **jsonwebtoken**: This library is used for generating and verifying JWT (JSON Web Tokens) for authentication.
- **nanoid**: nanoid is used for generating unique user IDs.
- **@fastify/swagger**: This plugin is used for generating Swagger documentation for the API endpoints.
- **dotenv**: dotenv is used for loading environment variables from a .env file.
- **bcrypt**: bcrypt is used for hashing passwords securely.
- **joi**: joi is used for body validation.

### Postman Documentation

https://documenter.getpostman.com/view/30790473/2sA3JM8h89

## Prerequisites

Before using the API server, ensure that you have:

- **Visual Studio Code or any IDE**.
- **Node.js**: Make sure you have Node.js version 20.11. You can download Node.js from [Node.js official website](https://nodejs.org/en/download).
- **Docker Desktop**.

## Authentication

The API server uses a bearer token authentication mechanism to secure endpoints. Clients are required to include a valid JWT (JSON Web Token) in the `Authorization` header of their requests.

##### Token Generation

When a user successfully logs in, the API server generates a JWT token and returns it to the client. This token should be securely stored by the client and included in subsequent API requests to authenticate the user.

```javascript
import jwt, { JwtPayload } from "jsonwebtoken";
import JWT_SIGN from "../config/jwt/jwt";
import { FastifyRequest } from "fastify";

export const getToken = (req: FastifyRequest): JwtPayload | null => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SIGN!) as JwtPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};

export const loggedUser = (decodedToken: JwtPayload | null) => {
  return {
    userId: decodedToken?.id,
  };
};
```

## Endpoints

|                                     | Method | Patch                              | Auth (Bearer token) | Req.body                                                                         |
| ----------------------------------- | ------ | ---------------------------------- | ------------------- | -------------------------------------------------------------------------------- |
| documentation                       | GET    | *baseUrl*/docs                     | no                  | -                                                                                |
| User registration                   | POST   | *baseUrl*/api/v1/auth/register     | no                  | name: string, password: string                                                   |
| User login                          | POST   | *baseUrl*/api/v1/auth/login        | no                  | id: string, password: string                                                     |
| User detail                         | GET    | *baseUrl*/api/v1/user/profile      | yes                 | -                                                                                |
| Get all user (for testing reason)   | GET    | *baseUrl*/api/v1/user              | no                  | -                                                                                |
| Payment Account Registration        | POST   | *baseUrl*/api/v1/payment-account   | yes                 | account_name: string , account_number: string, type: string                      |
| Get user's payment accounts         | GET    | *baseUrl*/api/payment-account      | yes                 | -                                                                                |
| Delete Payment account              | DELETE | *baseUrl*/api/payment-accountr/:id | yes                 | -                                                                                |
| Create payment transaction transfer | POST   | *baseUrl*/api/payment/send         | yes                 | payment_account_id: number, amount: number, currency: string, to_address: string |
| Create withdrawal                   | POST   | baseUrl*/api/payment/withdraw      | yes                 | payment_account_id:  number, amount: number, currency: string                    |
| Get paymeny history                 | GET    | baseUrl*/api/payment/history       | yes                 | -                                                                                |

#### API root : <br>
![Screenshot_25](https://github.com/RPrasetyoB/payment/assets/129088807/6b27199f-3c75-4554-bf08-e10859b69c93)

#### Account for testing :

```json
{
    "id": "2304972621",
    "password": "abc123"
}
```

## Tutorial: Using the API locally

Follow these steps to use the API server:

- **Clone the Repository**: Clone the API server repository from GitHub to your local machine.
  
  ```bash
  git clone https://github.com/RPrasetyoB/payment.git
  ```

- **Navigate to the cloned directorys**:
  
  ```bash
  cd payment
  ```

- **Set Up Environment Variables**: As the `.env` file is included in the repository for testing purposes, you don't need to set up environment variables manually.

- **Open Docker Desktop** : Make sure docker engine running before to next step.

- **Run the Server**: Start the API server in Container locally using the following command:
  
  ```bash
  npm run docker-start
  ```

- the API server is ready to be consumed at http://localhost:3000

**Note**:
If you encounter issues with fetching data or connecting to the database, please don't hesitate to contact me. Since I'm using a free account on Supabase, the database may freeze if it's not used for a while
