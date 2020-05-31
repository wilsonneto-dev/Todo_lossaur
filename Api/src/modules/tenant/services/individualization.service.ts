import { Injectable } from "alosaur";
import { v4 } from "uuid";

@Injectable()
export class IndividualizationService {
  public generateIdentifier(): string {
    return v4.generate() as string;
  }
}
