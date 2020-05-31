import {
  Controller,
  Get,
} from "alosaur";

import { IndividualizationService } from "../services/individualization.service.ts";

@Controller("/tenant")
export class TenantController {
  constructor(private individualizationService: IndividualizationService) {}

  @Get("/generate")
  public async generate() {
    return {
      success: true,
      tenant: this.individualizationService.generateIdentifier(),
    };
  }
}
