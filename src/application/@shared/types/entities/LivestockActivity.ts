export interface LivestockActivity {
  id: string;
  name: string;
  females_amount: number;
  males_amount: number;
  breed: string;
  size: string;
  production_system: string;
  power_supply: string;
  goal: string;
  hectares: number;
  property_id: string;
  createdAt: Date;
  updatedAt: Date;
}
