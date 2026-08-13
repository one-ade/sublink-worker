import { createApp } from '../app/createApp.jsx';
import { createNodeRuntime } from '../runtime/node.js';
import { startNodeHttpServer } from './nodeHttpServer.js';

const runtime = createNodeRuntime(process.env);
const app = createApp(runtime);
const port = Number(process.env.PORT || 8787);

const host = process.env.HOST || '127.0.0.1';
startNodeHttpServer(app, { port, host, logger: runtime.logger });
