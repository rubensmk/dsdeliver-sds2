
export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

type ProductID = {
    id: number;
}

export type OrderPayload = {
    products: ProductID[];
} & OrderLocationData;
