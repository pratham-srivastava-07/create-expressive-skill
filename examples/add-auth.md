# Example: Add / apply authentication

Generated projects already ship JWT auth: `src/middlewares/auth.ts` verifies a bearer
token, and the `user` service handles bcrypt hashing + token issuance. You rarely build
auth from scratch — you **apply** the existing pieces.

## Protect a route

In a route file (e.g. `src/routes/product.ts`), apply the auth middleware:

```ts
import { Router } from "express";
import { auth } from "../middlewares/auth";
import { productController } from "../controllers";

const router = Router();

router.get("/", productController.list);              // public
router.post("/", auth, productController.create);     // protected
router.put("/:id", auth, productController.update);   // protected
router.delete("/:id", auth, productController.remove);// protected

export default router;
```

Match the exact import style already used in `routes/user.ts`.

## Add login/register to a new entity

Reuse the `user` service's approach:

- Hash passwords with bcrypt in the **service** layer (not the controller).
- Issue JWTs using the secret from `config/env.ts` (`JWT_SECRET`).
- Never place hashing or token logic in controllers or repositories.

## Requirements

- `JWT_SECRET` must be set in `.env`.
- The `auth` middleware attaches the authenticated user to the request; downstream
  handlers read it from there.
