export type Update<T extends object> = Omit<T, 'createdAt' | 'updatedAt'>;
