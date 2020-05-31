// import { ExampleController } from "./controllers/example.controller.ts";
import { Area } from "alosaur";
import { TenantController } from "./controllers/tenant.controller.ts";

@Area({
  controllers: [TenantController],
})
export class TenantModule {}
