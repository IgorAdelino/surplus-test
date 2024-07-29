import { Injectable } from '@nestjs/common';
import { PurchaseOrder } from '../prisma/models/purchase-order-model';
import { PurchaseOrdersRepository } from '../repositories/purchase-orders-repository';

@Injectable()
export class InMemoryPurchaseOrdersRepository
  implements PurchaseOrdersRepository
{
  public items: PurchaseOrder[] = [];
  async findByOrderNbr(orderNbr: string) {
    const purchaseOrder = this.items.find((item) => item.orderNbr === orderNbr);

    if (!purchaseOrder) {
      return null;
    }

    return purchaseOrder;
  }
}
