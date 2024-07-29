import { Injectable } from '@nestjs/common';
import { PurchaseOrder } from '../prisma/models/purchase-order-model';

@Injectable()
export abstract class PurchaseOrdersRepository {
  abstract findByOrderNbr(orderNbr: string): Promise<PurchaseOrder | null>;
}
