import { FastifyInstance } from "fastify";
import {z} from 'zod';
import { prisma } from "../lib/prisma";

export async function getAttendantsByTeam(app: FastifyInstance) {
  app.get('/teams/:teamId/attendants', async (req, res) => {

    const paramsSchema = z.object({
      teamId: z.string().uuid(),
    })

    const { teamId } = paramsSchema.parse(req.params)

    const attendants = await prisma.attendant.findMany({
      where: {
        teamId
      }
    })

    if(!attendants) {
      return res.status(404).send({
        message: 'Attendants not found'
      })
    }

    return attendants
  })
} 