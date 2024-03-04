import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UrlServer } from '../services';
import axios from '../axios';

function FileDownload() {   
  const  { pid } = useParams()
  const [ebook, setEbook] = useState<string>('');
 
  useEffect(() =>{
    onShowEbook();
  })

  const onShowEbook = async () =>{       
    debugger
    try{
     
      const res = await axios.get('/products/'+ pid,{
        headers: {
            'Content-Type': 'application/json'
        },          
      });

      const data = res.data; 
      if(data.length>0){
        var str:string = data[0].products_pdf;
        const  path = UrlServer + "/pdf/productfile/" + str.toString();
        setEbook(path); 
        
      }
   
    }catch(err){
      console.log(err);

    }
  
  }

  return (
    <Fragment>
        <a href={ebook} download>....</a>
          <div className='details'>  
            <object data={ebook}  type="application/pdf" width={850}  height={850}>

            </object>
          </div>         
    </Fragment>      
  )
}

export default FileDownload