import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PurchaseOrdersRepository } from '../../repositories/purchase-orders-repository';

@Injectable()
export class PrismaPurchaseOrdersRepository
  implements PurchaseOrdersRepository
{
  constructor(private prisma: PrismaService) {}
  async findByOrderNbr(orderNbr: string) {
    const purchaseOrder = await this.prisma.purchaseOrder.findUnique({
      where: {
        orderNbr,
      },
    });

    return purchaseOrder;
  }
}
