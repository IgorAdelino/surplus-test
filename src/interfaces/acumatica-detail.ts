export interface Detail {
  id: string;
  rowNumber: number;
  note: string | null;
  Account: Record<string, unknown>;
  AlternateID: Record<string, unknown>;
  BranchID: { value: string };
  CalculateDiscountsOnImport: Record<string, unknown>;
  Cancelled: { value: boolean };
  Completed: { value: boolean };
  CompleteOn: { value: number };
  Description: Record<string, unknown>;
  ExtendedCost: { value: number };
  InventoryID: { value: string };
  LineDescription: { value: string };
  LineNbr: { value: number };
  LineType: { value: string };
  MaxReceiptPercent: { value: number };
  MinReceiptPercent: { value: number };
  OrderNbr: { value: string };
  OrderQty: { value: number };
  OrderType: { value: string };
  OrigPONbr: Record<string, unknown>;
  OrigPOType: Record<string, unknown>;
  Promised: { value: string };
  QtyOnReceipts: { value: number };
  ReceiptAction: { value: string };
  ReceivedAmount: Record<string, unknown>;
  Requested: { value: string };
  Subaccount: Record<string, unknown>;
  TaxCategory: { value: string };
  UnitCost: { value: number };
  UOM: { value: string };
  WarehouseID: { value: string };
  custom: Record<string, unknown>;
  _links: {
    'files:put': string;
  };
}
