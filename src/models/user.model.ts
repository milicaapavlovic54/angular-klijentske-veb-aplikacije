import { OrderModel } from "./order.model"

export interface UserModel{
    firstName: string
    lastName: string
    email: string
    password: string
    destination: string
    address: string
    phone: string
    orders: OrderModel[]
}