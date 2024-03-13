import { useState } from 'react'  
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';
import { UrlServer } from '../services';
import { Product } from '../models/products.model';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { addCart } from '../../store/features/cartSlice';

const initState: Product[] = []

const MyshopItems = () => {

  const category = useAppSelector((state) => state.categoriesselect.categoriesselection);

  const products = useAppSelector((state) => state.product.products);

  const [data, setData] = useState<Product[]>(initState)  

//categories_id
const [ categories_selection, setcategories_selection ] = useState<string>('') 
const [ categories_id, setcategories_id ] = useState<string>('') 


const dispatch = useAppDispatch();

const addToCart = (  e:any  ) => { 
  //debugger
       
  dispatch(addCart( e ))      
}


  const handerSh = ( key:any ) => {
    debugger
      setcategories_selection(key)

        let compareData = products.filter((e) => {
          return e.categories_id == key
        })
        setData(compareData)
        setcategories_id(key)         
  }

  const [openImage, setOpenImage] = useState(false)
  const [img, setImg] = useState("")
  const onOpenImage = ( e:any ) => {
    debugger

    setImg(e.cover)
    setOpenImage(true)
  }

  const ListShop =() => {
    return (
      <>
      <div className='product_items'>
        {data.map(( items  ) => (
          <div className='box' key={items.id}>
            <div className='img'>
              <Link to={`/productdetial/${items.id}`}>
                <img src={UrlServer + "/" + items.cover} alt='' />
              </Link>          
              <div className='overlay'>
 
                <button className='button'  onClick={() => addToCart(items)}>                  
                  <FiShoppingBag />
                </button>

                <button className='button'>
                  <AiOutlineHeart />
                </button>

                <button className='button' onClick={() => onOpenImage(items)}>
                  <FiSearch />
                </button>

              </div>
            </div>
            <div className='details'>
              <h3>{items.model}</h3>
              <p>{items.title}</p>
              <h4>฿{items.price}</h4>
            </div>
          </div>
        ))}
      </div> 
    </>
    )
  }
  return (
    <>
   <div>            
    <select className="e-fs-14 e-bdg" 
       onChange={(e) => handerSh(e.target.value)}
    >

        <option key={0} value="0" >
          เลือกประเภท
        </option>

        {category.map((i:any) =>( 

            <option  key={i.categories_id} value={i.categories_id}>
              <Link to="" className="e-justify-between  e-pd-y-20">
                <span className="e-fs-16  ">
                  <i className="ri-draft-line e-mg-r-10"></i>  
                    {i.categories_name}   
                  </span>

              </Link>                                                                     
            </option>
                          
        ))} 

  </select>

   </div>
    <span hidden={true}>${categories_id}</span>
    <span hidden={true}>${categories_selection}</span>

      <div className='details'>    
         <section className='product'>
            <div className='container'>              
                 <ListShop />                         
            </div>
         </section>
      </div>    
  
      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className='onClickImage'>
          <img src={UrlServer + '/' + img} alt='' />
          <button className='button' onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>    
    </>
    )  
}

export default MyshopItems