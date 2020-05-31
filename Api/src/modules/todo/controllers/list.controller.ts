import {
  Controller,
  Get,
  Req,
  Param,
  Post,
  Body
} from "alosaur";
import validator from "validator";

import { HeaderHelper } from '../helpers/header.helper.ts';
import { List } from '../models/entities/list.entity.ts';

const { validate } = validator;

@Controller("/list")
export class ListController {
  constructor() {}

  @Get("/")
  public async list() {
  }

  @Get("/:id")
  public async get(@Param("id") id: string, @Req() req: any) {
    return { success: true, tenant: HeaderHelper.getTenant(req) }
  }

  @Post()
  public async create(@Body(List) list: List) {
    return { list, errrors: await validate(list, { skipMissingProperties: true, validationError: { target: false } }) }
  }
}
