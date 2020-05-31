import { Middleware } from "alosaur";
import { HeaderHelper } from "../helpers/header.helper.ts";

@Middleware(new RegExp("/list"))
export class ExampleMiddleware {
  onPreRequest(context: any) {
    return new Promise((resolve, reject) => {
      const tenant = HeaderHelper.getTenant(context.request);
      if (tenant === "") {
        reject(
          {
            httpCode: 403,
            success: false,
            message: "Not authorized. Session has not started.",
          },
        );
      } else {
        resolve();
      }
    });
  }

  onPostRequest(context: any) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
