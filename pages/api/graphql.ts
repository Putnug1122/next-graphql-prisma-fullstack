import { NextApiRequest, NextApiResponse } from "next";
import { createYoga } from "graphql-yoga";

import { schema } from "../../graphql/schema";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
