export interface ServiceOrder {
  id: string;
  name: string;
  address: string;
  start_date: Date;
  end_date: Date;
  active: boolean;
  farmer_id: string;
  user_id: string;
  createdAt: Date;
  updatedAt: Date;
}
