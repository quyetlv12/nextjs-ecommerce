import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ArrayProps } from '../interfaces/utility';
import { RootState, AppDispatch } from '../redux/store';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type idProps = number | string | undefined
export const KEY_PRODUCTS = 'products'

export const API_PRODUCTS = "/products"

export const isEmptyArray = (arr:ArrayProps) => {
    if(arr.length === 0) return false
    else return true
}
export const isEmtyObject = (obj:any) =>{
    return obj 
    && Object.keys(obj).length === 0
    && Object.getPrototypeOf(obj) === Object.prototype
}
export const alertPopup = () =>{
    return alertify.alert('Alert Title', function(){ alertify.success('Ok'); });
}