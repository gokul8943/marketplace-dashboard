import { faker } from "@faker-js/faker";

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  vendor: string;
  status: "active" | "out-of-stock";
  createdAt: string;
};

export const products: Product[] = Array.from({ length: 50 }).map(() => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: Number(faker.commerce.price()),
  stock: faker.number.int({ min: 0, max: 100 }),
  category: faker.commerce.department(),
  vendor: faker.company.name(),
  status: faker.helpers.arrayElement(["active", "out-of-stock"]),
  createdAt: faker.date.past().toISOString(),
}));
