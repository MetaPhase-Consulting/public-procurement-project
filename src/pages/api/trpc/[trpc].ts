import { createNextApiHandler } from '@trpc/server/adapters/next';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';

import { env } from '../../../env/server.mjs';
import { createTRPCAwsContext, createTRPCContext } from '../../../server/api/trpc';
import { appRouter } from '../../../server/api/root';
import { inferAsyncReturnType } from '@trpc/server';

// export API handler
export default createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
    onError:
        env.NODE_ENV === 'development'
            ? ({ path, error }) => {
                console.error(`❌ tRPC failed on ${path}: ${error}`);
            }
            : undefined,
});

export const awsHandler = awsLambdaRequestHandler({
    router: appRouter,
    createContext: createTRPCAwsContext,
});

type Context = inferAsyncReturnType<typeof awsHandler>;
export type AppRouter = typeof appRouter;
