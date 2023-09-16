import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllTeams(app: FastifyInstance) {
  app.get('/teams', async () => {
    const teams = await prisma.team.findMany()

    return teams
  })
}