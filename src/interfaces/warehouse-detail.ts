export interface WarehouseDetail {
  id: string;
  rowNumber: number;
  note: string;
  DailyDemandForecast: Record<string, unknown>;
  DailyDemandForecastErrorSTDEV: Record<string, unknown>;
  DefaultIssueLocationID: { value: string };
  DefaultReceiptLocationID: { value: string };
  InventoryAccount: { value: string };
  InventorySubaccount: { value: string };
  IsDefault: { value: boolean };
  LastForecastDate: Record<string, unknown>;
  Override: { value: boolean };
  OverridePreferredVendor: { value: boolean };
  OverrideReplenishmentSettings: { value: boolean };
  OverrideStdCost: { value: boolean };
  PreferredVendor: Record<string, unknown>;
  PriceOverride: { value: boolean };
  ProductManager: Record<string, unknown>;
  ProductWorkgroup: Record<string, unknown>;
  QtyOnHand: { value: number };
  ReplenishmentSource: { value: string };
  ReplenishmentWarehouse: Record<string, unknown>;
  Seasonality: Record<string, unknown>;
  ServiceLevel: Record<string, unknown>;
  Status: { value: string };
  WarehouseID: { value: string };
  custom: Record<string, unknown>;
  _links: {
    'files:put': string;
  };
}
