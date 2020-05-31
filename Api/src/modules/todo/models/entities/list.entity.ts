import validator from "validator";
import { IList } from "../interfaces/list.interface.ts";

const { Length, MinLength, ValidateIf } = validator;

export class List implements IList {
  @Length(1, 100)
  title: string = "";

  @ValidateIf((o: List) => o.id !== "")
  @MinLength(32)
  id: string = "";

  active: boolean = true;
}
