import { Detail } from './acumatica-detail';

export interface PurchaseOrder {
  id: string;
  rowNumber: number;
  note: string;
  BaseCurrencyID: { value: string };
  Branch: { value: string };
  ControlTotal: { value: number };
  CurrencyEffectiveDate: { value: string };
  CurrencyID: { value: string };
  CurrencyRate: { value: number };
  CurrencyRateTypeID: Record<string, unknown>;
  CurrencyReciprocalRate: { value: number };
  Date: { value: string };
  Description: Record<string, unknown>;
  Details: Detail[];
  Hold: { value: boolean };
  LastModifiedDateTime: { value: string };
  LineTotal: { value: number };
  Location: { value: string };
  OrderNbr: { value: string };
  OrderTotal: { value: number };
  Owner: Record<string, unknown>;
  PromisedOn: { value: string };
  Status: { value: string };
  TaxTotal: { value: number };
  Terms: { value: string };
  Type: { value: string };
  VendorID: { value: string };
  VendorRef: Record<string, unknown>;
  VendorTaxZone: Record<string, unknown>;
  custom: Record<string, unknown>;
  _links: {
    self: string;
    'files:put': string;
  };
}
