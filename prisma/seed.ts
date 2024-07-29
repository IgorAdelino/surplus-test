// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.purchaseOrder.createMany({
    data: [
      {
        orderNbr: '000062',
        acumaticaGUID: 'd78b2168-ce18-ed11-8195-1246df81f056',
      },
      {
        orderNbr: '000070',
        acumaticaGUID: 'b05f292c-410e-ef11-8359-125aba3e7187',
      },
      {
        orderNbr: '000071',
        acumaticaGUID: '0bbb5aad-4448-ef11-835c-125aba3e7187',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
