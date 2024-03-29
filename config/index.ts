interface Config {
  baseURL: string;
  nodeEnv: string;
  defaultProfile: string;
}

const createConfig: () => Config = () => {
  if (!process.env.NEXT_PUBLIC_SERVER_URL) throw new Error("no api server url");
  if (!process.env.NODE_ENV) throw new Error("no api server url");

  return {
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    nodeEnv: process.env.NODE_ENV,
    defaultProfile: "/assets/NoImageGirl.png",
  };
};

export default createConfig();
