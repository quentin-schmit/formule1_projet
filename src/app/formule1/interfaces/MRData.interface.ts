import { Drivers } from './drivers.interface';
import { DriverTable } from './drivertable.interface';

export interface MRData {
  xmlns?: string;
  series?: string;
  url?: string;
  limit?: number;
  offset?: number;
  total?: number;
  DriverTable?: DriverTable[];
}
