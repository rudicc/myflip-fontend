import { Fragment, useEffect} from 'react'
import { useAppSelector } from '../../../store/hooks';
import { Link } from 'react-router-dom';
//import { BiArrowFromLeft } from 'react-icons/bi';

 
const Menubar = () => {
  debugger
  const menus = useAppSelector((state) => state.menus.menu_tabs)
  //const [showmenu , setShowmenu] = useState(false)
  
  const MenubarList = () => {
    return(
      <>
          <ul className="ease-inbox-content e-pd-20 ">    
            {menus.length >0 ?(
              menus.map((i) =>( 
 
                i.menu_active==1?(
                  <li  key={i.menu_id}>
                    <Link to={`/` + i.menu_col_code} key={i.menu_id} className="e-d-flex e-justify-between e-align-center e-pd-y-8 btn">
                      <span className="e-fs-14 e-d-flex e-align-center">
                        <i className="ri-draft-line e-mg-r-10"></i>  
                          {i.menu_col_name_th}   
                        </span>
    
                    </Link>                                                                     
                  </li>                
                ):("")

              
                                
              ))
            )
            :("ไม่พบรายการ")
            
            } 

          </ul>
      </>
    )
  }



//const [usersQuantity, setusersQuantity] = useState(0)
// const [username, setUserName] = useState('')

useEffect(() =>{ 
  // if(localStorage.getItem("tmbuser") !== null){
  //  const tmbuser =  localStorage.getItem("tmbuser")?.split(' ') 
    //setusersQuantity(1)
  //    setUserName(tmbuser[0])
  // }else{
  //    setusersQuantity(0)
  //    setUserName('')
  // }
 
})

  return (
    <Fragment>
       <MenubarList />     
    </Fragment>

  )
}

export default Menubar