import { useEffect } from 'react'
 
import MyProfileList from './MyProfileList'
import MyAdDressBookList from './MyAdDressBookList'
import { useAppDispatch } from '../../store/hooks';
import { fetchAddress_bookbyIdtbl} from '../../store/featurestbl/address_book_tblSlice';
import { fetchCustomersbyIdtbl } from '../../store/featurestbl/customers_tblSlice';
//import { fetchCustomersById } from '../../store/features/customersSlice';
import { fetchCountriestbl } from '../../store/featurestbl/countries_tblSlice';
import { GetUsersList } from '../../functions/Utility';



const MyProfile = () => {
  
  const dispatch = useAppDispatch(); 
  useEffect(() => {
  debugger
    //get customers_id to   
    try{
      var u1 =  Number(GetUsersList(1))

      if(u1>0){
 
          dispatch(fetchCustomersbyIdtbl(u1));

          dispatch(fetchAddress_bookbyIdtbl(u1));

          dispatch(fetchCountriestbl());

       } 
    }catch(err){      
      console.log(err)
    }
      
  });
  
  return (
  <>
   

    <div className='details'>       
        <div className="ease-communication-overview e-pd-y-18">

        <div className="e-row">


          <MyProfileList />

        </div>
        <div className="e-row">

            <MyAdDressBookList /> 

        </div>
        </div>
    </div>    

  </>
  )
}

export default MyProfile
