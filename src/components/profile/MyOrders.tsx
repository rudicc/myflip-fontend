import { useEffect } from 'react'
 
import MyOrderList from './MyOrderList'
import { fetchOrders_BasketCustomers } from '../../store/features/orders_productsBySlice';
import { useAppDispatch } from '../../store/hooks';
import { GetUsersList } from '../../functions/Utility';

const MyOrders = () =>{

  const dispatch = useAppDispatch();  
  useEffect(() =>{        
    debugger
    var u1 =  Number(GetUsersList(1))         
    try{
            //get data         
            const jdataorders = JSON.stringify({
                orders_id: 0,
                customers_id: u1,
            })
            dispatch(fetchOrders_BasketCustomers(jdataorders))          
        }catch(err){
          console.log(err)
        }
  })
          
  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
      
              <MyOrderList />

          </div>
  
          </section>
      </div>    
  
    </>
    )
}

export default MyOrders
