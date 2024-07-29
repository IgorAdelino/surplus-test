/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { StockItem } from '../../../interfaces/acumatica-stock-item';

@Injectable()
export class AcumaticaGetStockItemService {
  public items = [];

  constructor() {}
  async execute(InventoryID: string, cookies: string)  : Promise<StockItem>{
    const baseUrl = `${process.env.ACUMATICA_BASE_URL}/entity/Default/${process.env.ACUMATICA_ENDPOINT_VERSION}/StockItem/${InventoryID}?$expand=WarehouseDetails`;
    try {
      const response = await axios.get(baseUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Cookie': cookies,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async executeInMemory(InventoryID: string) {
    
    const stockItem = this.items.find(
      (item) => item.InventoryID === InventoryID,
    );
    return stockItem;
  }
}
