/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { PurchaseOrder } from '../../../interfaces/acumatica-purchase-order';

@Injectable()
export class AcumaticaGetPurchaseOrderService {
  public items = [];

  constructor() {}
  async execute(acumaticaGUID: string, cookies: string): Promise<PurchaseOrder> {
    const baseUrl = `${process.env.ACUMATICA_BASE_URL}/entity/Default/${process.env.ACUMATICA_ENDPOINT_VERSION}/PurchaseOrder/${acumaticaGUID}?$expand=Details`;
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

  async executeInMemory(acumaticaGUID: string) {
    const purchaseOrder = this.items.find(
      (item) => item.acumaticaGUID === acumaticaGUID,
    );

    return purchaseOrder;
  }
}
