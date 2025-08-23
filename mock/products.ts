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
  unspc: string;
  image: string;
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
  unspc: `${faker.number.int({ min: 1000, max: 9999 })}.${faker.number.int({ min: 1000, max: 9999 })}`,
  image: `https://picsum.photos/200/200?random=${faker.number.int({ min: 1, max: 1000 })}`,
}));
