import { App } from "alosaur";
import transformer from "transformer";

import { TenantModule } from "./modules/tenant/tenant.module.ts";
import { TodoModule } from "./modules/todo/todo.module.ts";

import config from "./config.ts";
import { ExampleMiddleware } from "./modules/todo/middlewares/example.middleware.ts";

const { plainToClass } = transformer;

const app = new App({
  areas: [TenantModule, TodoModule],
});

// transform plain objects to class in post methods
app.useTransform({
  type: "body", // transform the body
  getTransform: (transform: any, body: any) => {
    return plainToClass(transform, body);
  },
});

await app.listen(`${config.domain}:${config.port}`);
