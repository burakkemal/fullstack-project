import { Supplier } from '../../suplier/models/Supplier';

export interface Category {
  categoryId: number;
  categoryName: string;
  description: string;
}

export interface getAllProductsModel {
  id: number;
  name: string;
  unitPrice: number;
  category: Category;
  unitsInStock: number;
  supplier: Supplier;
  discontinued: number;
}
