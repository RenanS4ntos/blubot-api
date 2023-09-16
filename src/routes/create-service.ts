import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function createService(app: FastifyInstance) {
  app.post('/service', async (req,res) => {
    const bodySchema = z.object({
      teamId: z.string().uuid(),
      forwardingId: z.string().uuid(),
      attendantId: z.string().uuid().optional(),
    })

    const {} = bodySchema.parse(req.body)
  })
}