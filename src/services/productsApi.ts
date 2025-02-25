import axios from "axios";

import { BASE_API_URL } from "../utils/constants";
import handleAxiosErr from "../utils/handleAxiosErr";

import {
  TProduct,
  TProductSeller,
  TProductComment,
  TFinalProduct,
} from "../types/product.types";
import { TUser } from "../types/users.types";

export async function getProducts() {
  try {
    const res = await axios<TProduct[]>(`${BASE_API_URL}/products`);
    return res.data;
  } catch (err) {
    throw new Error(handleAxiosErr(err, "Failed to get products data"));
  }
}

export async function getProduct(id: string): Promise<TFinalProduct> {
  try {
    const [product, comments, sellers, users] = await Promise.all([
      axios<TProduct>(`${BASE_API_URL}/products/${id}`),
      axios<TProductComment[]>(`${BASE_API_URL}/products/${id}/comments`),
      axios<TProductSeller[]>(`${BASE_API_URL}/sellers`),
      axios<TUser[]>(`${BASE_API_URL}/users`),
    ]);

    const usersMap = new Map(
      users?.data.map((user) => [
        user.id,
        {
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          avatar: user.avatar,
        },
      ])
    );

    const commentsWithUsers = comments?.data.map((comment) => ({
      ...comment,
      user: usersMap.get(comment.userId) || null,
    }));

    const seller = sellers?.data.find(
      (seller) => seller.id === product?.data?.sellerId
    );

    const productFullData = {
      ...product?.data,
      seller,
      comments: commentsWithUsers,
    } as TFinalProduct;

    return productFullData;
  } catch (err) {
    console.error("Failed to fetch data:", err);
    throw new Error(handleAxiosErr(err, "Failed to get product data"));
  }
}
// export async function getProduct(id: string) {
//   try {
//     const res = await axios<TProduct>(`${BASE_API_URL}/products/${id}`);
//     return res.data;
//   } catch (err) {
//     throw new Error(handleAxiosErr(err, "Failed to get product data"));
//   }
// }
