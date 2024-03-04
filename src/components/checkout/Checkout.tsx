import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useAppDispatch } from '../../store/hooks'
import { fetchCustomersbyIdtbl } from '../../store/featurestbl/customers_tblSlice'
import { fetchAddress_bookbyIdtbl } from '../../store/featurestbl/address_book_tblSlice'
import { fetchCountriestbl } from '../../store/featurestbl/countries_tblSlice'
import CheckProgressState from './CheckProgressState'

import { GetUsersList } from '../../functions/Utility'

const  Checkout =() =>{
    const { id } = useParams()
         
      const dispatch = useAppDispatch();

      useEffect(() => {
        //debugger
        try{
            let id =   Number(GetUsersList(1))
            if(id > 0){
              dispatch(fetchCustomersbyIdtbl(id));
    
              dispatch(fetchAddress_bookbyIdtbl(id));
    
              dispatch(fetchCountriestbl());
            } 
        }catch(err){
          console.log(err)
        }
      });
       
  return (<>

        <CheckProgressState keyid={id} />
  </>

  )
}

export default Checkout