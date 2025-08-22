import { Product } from "@/mock/products";

type Props = {
  products: Product[];
  page: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
};

export default function ProductTable({ products, page, total, limit, onPageChange }: Props) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Category</th>
            <th className="p-2">Status</th>
            <th className="p-2">Vendor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{p.name}</td>
              <td className="p-2">${p.price}</td>
              <td className="p-2">{p.stock}</td>
              <td className="p-2">{p.category}</td>
              <td className="p-2">{p.status}</td>
              <td className="p-2">{p.vendor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
