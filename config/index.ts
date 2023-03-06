interface Config {
  baseURL: string;
}

const createConfig: () => Config = () => {
  if (!process.env.NEXT_PUBLIC_SERVER_URL) throw new Error("no api server url");

  return {
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  };
};

export default createConfig();
