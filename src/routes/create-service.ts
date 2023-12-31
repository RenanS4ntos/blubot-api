import { prisma } from './../lib/prisma';
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function createService(app: FastifyInstance) {
  app.post('/service', async (req) => {
    const bodySchema = z.object({
      teamId: z.string().uuid(),
      forwardingId: z.string().uuid(),
      attendantId: z.string().uuid().optional(),
    })

    const data = bodySchema.parse(req.body)

    const response = await prisma.service.create({
      data
    })

    return {
      protocol: response.id
    }
  })
}