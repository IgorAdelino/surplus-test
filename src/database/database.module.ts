import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PurchaseOrdersRepository } from './repositories/purchase-orders-repository';
import { PrismaPurchaseOrdersRepository } from './prisma/implementations/prisma-purchase-orders-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: PurchaseOrdersRepository,
      useClass: PrismaPurchaseOrdersRepository,
    },
  ],
  exports: [PrismaService, PurchaseOrdersRepository],
})
export class DatabaseModule {}
