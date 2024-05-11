# API Documentation

## Overview

This API provides endpoints for simulating payment operations. It allows users to register, log in, manage their payment accounts, perform transactions such as transfers and withdrawals, and view payment history.

### Postman Documentation
https://documenter.getpostman.com/view/30790473/2sA3JM8h89

## Prerequisites

Before using the API server, ensure that you have:

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

## Tutorial: Using the API locally

Follow these steps to use the API server:

- **Clone the Repository**: Clone the API server repository from GitHub to your local machine.
  
  ```bash
  git clone https://github.com/RPrasetyoB/payment.git
  ```

- **Install Dependencies**: Navigate to the cloned directory and install the necessary dependencies using npm.
  
  ```bash
  cd payment
  npm install
  ```

- **Set Up Environment Variables**: As the `.env` file is included in the repository for testing purposes, you don't need to set up environment variables manually.

- **Open Docker Desktop**

- **Build Docker Image**: Build docker image using the following command:
  
  ```bash
  npm run docker
  ```

- **Run the Server**: Start the API server in Container locally using the following command:
  
  ```bash
  npm run docker-start
  ```

- the API server is ready to be consumed at http://localhost:3000
