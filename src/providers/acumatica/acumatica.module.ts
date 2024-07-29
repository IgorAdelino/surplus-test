import { Module } from '@nestjs/common';
import { AcumaticaController } from './http/acumatica.controller';
import { AcumaticaAuthService } from './services/acumatica-auth.service';
import { AcumaticaGetPurchaseOrderService } from './services/acumatica-get-purchase-order-details.service';
import { AcumaticaGetStockItemService } from './services/acumatica-get-stock-item-details.service';

@Module({
  controllers: [AcumaticaController],
  providers: [
    AcumaticaAuthService,
    AcumaticaGetPurchaseOrderService,
    AcumaticaGetStockItemService,
  ],
  exports: [AcumaticaGetPurchaseOrderService, AcumaticaGetStockItemService],
})
export class AcumaticaModule {}
