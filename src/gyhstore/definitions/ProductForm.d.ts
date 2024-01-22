export interface ProductForm {
    name: string
    description: string
    code: string
    price: number

    cover: Image
    images?: Image[]

    urls?: string[]
}

export interface Image {
    file: ArrayBuffer
    name: string
}
