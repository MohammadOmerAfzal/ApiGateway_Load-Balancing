export interface Order {
  id: number;
  userId: number;
  productIds: number[];
  total: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}
