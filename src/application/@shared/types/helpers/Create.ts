export type Create<T extends object> = Omit<
  T,
  'id' | 'createdAt' | 'updatedAt'
>;
