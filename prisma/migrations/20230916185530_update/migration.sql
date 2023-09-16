-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "teamId" TEXT NOT NULL,
    "forwardingId" TEXT NOT NULL,
    "attendantId" TEXT,
    CONSTRAINT "Service_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_forwardingId_fkey" FOREIGN KEY ("forwardingId") REFERENCES "Forwardings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_attendantId_fkey" FOREIGN KEY ("attendantId") REFERENCES "Attendant" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("attendantId", "forwardingId", "id", "teamId") SELECT "attendantId", "forwardingId", "id", "teamId" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
