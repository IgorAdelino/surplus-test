import { Controller, Get, Headers, Param } from '@nestjs/common';
import { GetPurchaseOrderService } from '../services/get-purchase-order.service';

@Controller('purchase-orders')
export class PurchaseOrderController {
  constructor(private getPurchaseOrderService: GetPurchaseOrderService) {}

  getPurchaseOrder() {}

  @Get('/:orderNbr')
  async get(
    @Param('orderNbr') orderNbr: string,
    @Headers('cookie') cookies: string,
  ) {
    const purchaseOrder = await this.getPurchaseOrderService.execute(
      orderNbr,
      cookies,
    );

    return purchaseOrder;
  }
}
