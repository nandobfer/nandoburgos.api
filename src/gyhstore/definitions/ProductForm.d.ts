export interface ProductForm {
    name: string
    description: string
    code: string
    price: number

    cover: Image
    images?: Image[]

    urls?: string[]
    categories: number[] // lista de ids
}

export interface Image {
    file: ArrayBuffer
    name: string
}
