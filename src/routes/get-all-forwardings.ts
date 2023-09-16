import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllForwardingsRoute(app: FastifyInstance) {
  app.get('/forwardings', async () => {
    const forwardings = await prisma.forwardings.findMany()

    return forwardings
  })
}