export interface AgricuturalActivity {
  id: string;
  name: string;
  uses_irrigation: boolean;
  uses_pesticides: boolean;
  cultivation: string;
  input: string;
  hectares: number;
  work_method: string;
  used_equipament: string;
  property_id: string;
  createdAt: Date;
  updatedAt: Date;
}
