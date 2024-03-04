import { useState } from 'react'  
// import HeroShop from '../home/Hero/HeroShop'
// import ProductShop from '../product/ProductShop'
import { useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';
import { UrlServer } from '../services';
import { PRODUCTS } from '../models/products.model';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

//const Url = UrlServer

const initState: PRODUCTS[] = []

const Myshop = () => {
  //debugger
  //const { id } = useParams()
 {/*  return (
    <>          
        <HeroShop />
        <ProductShop />        
    </>
  ) */}

  const category = useAppSelector((state) => state.categoriesselect.categoriesselection);

  const products = useAppSelector((state) => state.producttbl.productstbl);
   

  const [data, setData] = useState<PRODUCTS[]>(initState)  

//categories_id
const [ categories_selection, setcategories_selection ] = useState<string>('') 
const [ categories_id, setcategories_id ] = useState<string>('') 



  const handerSh = ( key:any ) => {
    debugger

    //setcValue("")
      // let comddata = category.filter((e) => {
      //     return e.categories_id == key
      // })
      setcategories_selection(key)
      //console.log(comddata[0].categories_id)        
      // const jdata = JSON.stringify({
      //   products_id: products_id,
      //   categories_id: comddata[0].categories_id
      // })
      // dispatch(InsertProducts_to_categoriestbl(jdata))
        
   // if(key !== "เลือกทุกประเภท"){
      //get some type
        let compareData = products.filter((e) => {
          return e.categories_id == key
        })
        setData(compareData)
        setcategories_id(key)         
   // }else{
      //all type
      //dispatch(fetchProductstbl());
      //setData(products)   
    //}
  }

  const ListShop =() => {
    return (
      <>
      <div className='product_items'>
        {data.map(( items  ) => (
          <div className='box' key={items.products_id}>
            <div className='img'>
              <Link to={`/productdetial/${items.products_id}`}>
                <img src={UrlServer + "/" + items.products_image} alt='' />
              </Link>
              {/* <img src={UrlServer + "/" + items.cover} alt='' /> */}
              <div className='overlay'>
 
                <button className='button'  
                  //onClick={() => dispatch(addCart({ items }))}
                >                  
                  <FiShoppingBag />
                </button>

                <button className='button'>
                  <AiOutlineHeart />
                </button>

                <button className='button' 
                  // onClick={() => onOpenImage(items.cover)}
                >
                  <FiSearch />
                </button>

              </div>
            </div>
            <div className='details'>
              <h3>{items.products_model}</h3>
              <p>{items.products_name}</p>
              <h4>฿{items.products_price}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className='onClickImage'>
          <img src={UrlServer + '/' + img} alt='' />
          <button className='button' onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>       */}
    </>
    )
  }
  return (
    <>
    <span hidden={true}>${categories_id}</span>
    <span hidden={true}>${categories_selection}</span>

      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
  
  
  
            <div className="e-flex-md-2 e-mg-b-20 e-mg-b-0-md e-card">
  
              <div className="ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">ประเภทสินค้า</span>
  
                  {/* <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text"></span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div> */}
                </div>
  
                <div className="e-card__body e-pd-0 e-d-flex e-fd-column e-justify-between">
                
                <ul className="ease-inbox-content e-pd-20 ">

                  {category.map((i) =>( 
            
                      <li  key={i.categories_id} onClick={() => handerSh(i.categories_id)}>
                        <Link to="" className="e-d-flex e-justify-between e-align-center e-pd-y-8">
                          <span className="e-fs-14 e-d-flex e-align-center">
                            <i className="ri-draft-line e-mg-r-10"></i>  
                              {i.categories_name}   
                            </span>

                        </Link>                                                                     
                      </li>
                                    
                  ))} 

                </ul>
  
                </div>
  
              </div>
  
            </div>
  

  
            <div className="e-flex-md-10">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld"><i className="ri-star-line e-mg-r-10"></i></span>
  

            

                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text"></span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div>
                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-inbox">
  
{/* 
                  {data.map((i) =>(
                           

                           
      <div key={i.products_id} className="e-tbl__row">

      <div className="e-tbl__data e-pd-x-20">

        <div className="ease-communication-content">

          <div className="e-d-flex-lg">

            <div className="left-side e-d-flex e-mg-r-10-lg">

              <div className="e-mg-r-10">
                <div className="e-avat e-avat-30"><img src={UrlServer + '/' + i.products_image} alt=""
                    className="e-avat__img"/></div>
              </div>

              <div className="ease-communication-details">
                <span className="e-h5 e-d-block">{i.products_model}</span>
                <p className="e-fs-12">฿{i.products_price}</p>
              </div>

            </div>

            <div className="right-side">
              <div className="ease-communication-details">
                <span className="e-h5 e-d-block">{i.products_name}</span>
                <p className="e-fs-12">{i.products_description}.</p>
              </div>
            </div> 

 


          </div>

          <span className="ease-meta e-fs-12 ease-faded-text">{i.products_date_added}</span>

        </div>

      </div>

    </div>

                  ))} */}
 
 <ListShop />

                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          </section>
      </div>    
  
    </>
    )  
}

export default Myshop