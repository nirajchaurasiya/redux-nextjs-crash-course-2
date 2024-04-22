export interface Product {
    type: string,
    id: number,
    name: string,
    price: number,
    dimensions: { length: number, width: number, height: number },
    weight: number,
    company: string,
    image: string
}

export interface Products {
    cart: Product[]
}

export interface RootState {
    cart: {
        cart: []
    }
}