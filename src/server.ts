import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { getAllForwardingsRoute } from "./routes/get-all-forwardings"
import { getAllTeams } from "./routes/get-all-teams"
import { getAttendantsByTeam } from "./routes/get-attendants-by-team"
import { createService } from "./routes/create-service"

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllForwardingsRoute);
app.register(getAllTeams);
app.register(getAttendantsByTeam);
app.register(createService);

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT ): 3333,
});
