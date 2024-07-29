import { Injectable } from '@nestjs/common';
import { PurchaseOrdersRepository } from '../../../database/repositories/purchase-orders-repository';
import { AcumaticaGetPurchaseOrderService } from '../../../providers/acumatica/services/acumatica-get-purchase-order-details.service';
import { AcumaticaGetStockItemService } from '../../../providers/acumatica/services/acumatica-get-stock-item-details.service';

@Injectable()
export class GetPurchaseOrderService {
  constructor(
    private purchaseOrderRepository: PurchaseOrdersRepository,
    private acumaticaGetPurchaseOrderService: AcumaticaGetPurchaseOrderService,
    private acumaticaGetStockItemService: AcumaticaGetStockItemService,
  ) {}
  async execute(orderNbr: string, cookies: string) {
    const purchaseOrderInDatabase =
      await this.purchaseOrderRepository.findByOrderNbr(orderNbr);

    if (!purchaseOrderInDatabase) {
      return null;
    }

    const purchaseOrder = await this.acumaticaGetPurchaseOrderService.execute(
      purchaseOrderInDatabase.acumaticaGUID,
      cookies,
    );

    const productIds = purchaseOrder.Details.map(
      (detail) => detail.InventoryID.value,
    );

    const stockItemsPromises = productIds.map((productId: string) =>
      this.acumaticaGetStockItemService.execute(productId, cookies),
    );

    const stockItems = await Promise.all(stockItemsPromises);

    const sortedStockItems = stockItems.sort(
      (a, b) => b.AverageCost.value - a.AverageCost.value,
    );

    return { stockItems: sortedStockItems };
  }

  async executeInMemory(orderNbr: string) {
    const purchaseOrderInDatabase =
      await this.purchaseOrderRepository.findByOrderNbr(orderNbr);

    if (!purchaseOrderInDatabase) {
      return null;
    }

    const purchaseOrder =
      await this.acumaticaGetPurchaseOrderService.executeInMemory(
        purchaseOrderInDatabase.acumaticaGUID,
      );

    const productIds = purchaseOrder.Details.map(
      (detail) => detail.InventoryID.value,
    );

    const stockItemsPromises = productIds.map((productId: string) =>
      this.acumaticaGetStockItemService.executeInMemory(productId),
    );

    const stockItems = await Promise.all(stockItemsPromises);

    const sortedStockItems = stockItems.sort(
      (a, b) => b.AverageCost.value - a.AverageCost.value,
    );

    return { stockItems: sortedStockItems };
  }
}
