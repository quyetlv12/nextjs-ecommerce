import HttpClient from "../api/axiosClient"
import { API_PRODUCTS } from "../configs"

export const ProductService = {
    getAllProducts(){
        return HttpClient.get(API_PRODUCTS)
    },
    getInfoProduct(id:number){
        return HttpClient.get(`${API_PRODUCTS}/${id}`)
    }
}