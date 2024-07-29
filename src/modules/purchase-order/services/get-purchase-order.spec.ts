import { Test, TestingModule } from '@nestjs/testing';
import { InMemoryPurchaseOrdersRepository } from '../../../database/in-memory/in-memory-purchase-order-repository';
import { GetPurchaseOrderService } from './get-purchase-order.service';
import { PurchaseOrdersRepository } from '../../../database/repositories/purchase-orders-repository';
import { AcumaticaGetPurchaseOrderService } from '../../../providers/acumatica/services/acumatica-get-purchase-order-details.service';
import { AcumaticaGetStockItemService } from '../../../providers/acumatica/services/acumatica-get-stock-item-details.service';

describe('GetPurchaseOrderService', () => {
  let sut: GetPurchaseOrderService;
  let inMemoryPurchaseOrdersRepository: InMemoryPurchaseOrdersRepository;
  let inMemoryAcumaticaGetPurchaseOrderService: AcumaticaGetPurchaseOrderService;
  let inMemoryAcumaticaGetStockItemService: AcumaticaGetStockItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetPurchaseOrderService,
        {
          useClass: InMemoryPurchaseOrdersRepository,
          provide: PurchaseOrdersRepository,
        },
        AcumaticaGetPurchaseOrderService,
        AcumaticaGetStockItemService,
      ],
    }).compile();

    sut = module.get<GetPurchaseOrderService>(GetPurchaseOrderService);
    inMemoryPurchaseOrdersRepository = new InMemoryPurchaseOrdersRepository();
    inMemoryAcumaticaGetStockItemService = new AcumaticaGetStockItemService();
    inMemoryAcumaticaGetPurchaseOrderService =
      new AcumaticaGetPurchaseOrderService();
    sut = new GetPurchaseOrderService(
      inMemoryPurchaseOrdersRepository,
      inMemoryAcumaticaGetPurchaseOrderService,
      inMemoryAcumaticaGetStockItemService,
    );
  });
  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should get a purchase order', async () => {
    const newAcumaticaPurchaseOrder = {
      id: '123',
      orderNbr: '1',
      acumaticaGUID: '123',
      Details: [
        {
          InventoryID: {
            value: '1',
          },
        },
        {
          InventoryID: {
            value: '2',
          },
        },
        {
          InventoryID: {
            value: '3',
          },
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newDBPurchaseOrder = {
      id: '123',
      orderNbr: '1',
      acumaticaGUID: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const stockItem1 = {
      id: '1',
      InventoryID: '1',
      AverageCost: {
        value: 100,
      },
    };

    const stockItem2 = {
      id: '2',
      InventoryID: '2',
      AverageCost: {
        value: 200,
      },
    };
    const stockItem3 = {
      id: '3',
      InventoryID: '3',
      AverageCost: {
        value: 300,
      },
    };

    inMemoryPurchaseOrdersRepository.items.push(newDBPurchaseOrder);
    inMemoryAcumaticaGetPurchaseOrderService.items.push(
      newAcumaticaPurchaseOrder,
    );
    inMemoryAcumaticaGetStockItemService.items.push(
      stockItem1,
      stockItem2,
      stockItem3,
    );

    const response = await sut.executeInMemory('1');
    expect(response).toEqual({
      stockItems: [stockItem3, stockItem2, stockItem1],
    });
  });
});
