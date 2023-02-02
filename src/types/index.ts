export interface IDish {
  id: number;
  name: string;
  price: number;
  description: string;
  category: number[];
  cookingTime: string;
  imgUrl: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  count: number;
}
