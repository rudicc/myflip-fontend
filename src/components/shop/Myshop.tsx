import { useEffect } from 'react'  
import { useAppDispatch} from '../../store/hooks';
import MyshopItems from './MyshopItems';
import { fetchProducts } from '../../store/features/productsSlice';
import { fetchCategoriesSelection } from '../../store/features/categoriesSelectSlice';
import { fetchProductstbl } from '../../store/features/products_tblSlice';

const Myshop = () =>{
  const dispatch = useAppDispatch();
  useEffect(() => {
    debugger
    dispatch(fetchProducts());

    dispatch(fetchCategoriesSelection());
    // dispatch(fetchMenutab());

    dispatch(fetchProductstbl());
  });
  return (
    <>
       <MyshopItems />
    </>
  )
}
 
export default Myshop