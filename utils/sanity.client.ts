import { ClientConfig, createClient } from "next-sanity";

export const clientConfig: ClientConfig = {
  projectId: "iu1cm4kr",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-10",
};

export const client = createClient(clientConfig);
