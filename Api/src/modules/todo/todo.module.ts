import { Area } from "alosaur";

import { ExampleMiddleware } from "./middlewares/example.middleware.ts";
import { ListController } from "./controllers/list.controller.ts";

@Area({
  controllers: [ListController, ExampleMiddleware],
})
export class TodoModule {}
