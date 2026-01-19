export const categoryRoutes = {
  italiana: "/italiana",
  japonesa: "/japonesa",
} as const;

export type CategoryKey = keyof typeof categoryRoutes;
export type CategoryRoute = (typeof categoryRoutes)[CategoryKey];
