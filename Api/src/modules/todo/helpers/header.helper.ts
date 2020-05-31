import { Injectable } from "alosaur";

export class HeaderHelper {
  public static getTenant(req: any): string {
    return (req.headers.get("tenant") as string) || "";
  }
}
