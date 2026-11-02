import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Maps a backend product object to the same shape the static data used,
// so existing JSX renders exactly like before.
export function mapProduct(product) {
  const discountPercent =
    product.discount != null
      ? product.discount
      : product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : null;

  return {
    id: product._id,
    title: product.title,
    name: product.title,
    category: product.category,
    price: product.price,
    oldPrice: product.oldPrice ?? null,
    discount: discountPercent != null ? Math.round(discountPercent) : null,
    rating: product.rating,
    image: product.image,
    gallery: product.gallery || [],
    description: product.description,
  };
}

export default api;
