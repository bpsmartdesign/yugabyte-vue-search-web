export interface filterRequestData {
  product: string | undefined
  supplier: string | undefined
  category: string | undefined
  qty: number
  price: number
  stock: number
  order: number
  reorder: number
  discontinued: boolean
}

export interface productResponseData {
  id: number
  categoryId: number
  supplierId: number
  unitStock: string
  unitOrder: string
  unitPrice: number
  reorderLevel: number
  discontinued: boolean
  quantity: number
  name: string
  description: string
  author: string
  type: string
  img: string
}

export interface tableHeader {
  label: string
  key: string
  sortable: boolean
}
