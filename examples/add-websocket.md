# Example: Add WebSocket support

WebSockets are not part of the default scaffold. When adding them, respect the existing
layered architecture — the socket layer is a transport, like routes; business logic still
lives in services.

## Steps

1. Install a WebSocket library:

```bash
npm install ws
# or: npm install socket.io
```

2. Attach the WebSocket server to the same HTTP server created in `src/index.ts` (share the
   port; don't spin up a second listener).

3. Create a dedicated module, e.g. `src/sockets/index.ts`, that:
   - accepts connections,
   - authenticates them (reuse the JWT logic from `middlewares/auth.ts`),
   - and delegates real work to **services** — the same services the HTTP controllers call.

4. Do NOT put business logic in socket handlers. Like controllers, they parse input, call a
   service, and emit a result.

## Principle

A WebSocket handler is a sibling of a controller: transport in, service call, transport out.
Reusing services keeps HTTP and WebSocket behavior consistent and avoids duplicated rules.
