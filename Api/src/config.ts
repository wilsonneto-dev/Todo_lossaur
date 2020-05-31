import { config } from "dotenv";

interface IConfig {
  port: number;
  domain: string;
}

const envConfig = config();

const globalConfig: IConfig = {
  port: parseInt(envConfig.PORT ?? 3333),
  domain: envConfig.DOMAIN ?? "localhost",
};

export default globalConfig;
