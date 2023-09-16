-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "teamId" TEXT NOT NULL,
    "forwardingId" TEXT NOT NULL,
    "attendantId" TEXT,
    CONSTRAINT "Service_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_forwardingId_fkey" FOREIGN KEY ("forwardingId") REFERENCES "Forwardings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Attendant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
