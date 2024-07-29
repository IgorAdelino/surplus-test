import { Module } from '@nestjs/common';
import { PurchaseOrderController } from './http/purchase-order.controller';
import { GetPurchaseOrderService } from './services/get-purchase-order.service';
import { DatabaseModule } from 'src/database/database.module';
import { AcumaticaModule } from 'src/providers/acumatica/acumatica.module';

@Module({
  imports: [DatabaseModule, AcumaticaModule],
  controllers: [PurchaseOrderController],
  providers: [GetPurchaseOrderService],
})
export class PurchaseOrderModule {}
