import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UrlServer } from '../services';
import axios from '../axios';

function FlipEBooks() {   
  const  { pid } = useParams()
  const [ebook, setEbook] = useState<string>('');
 
  useEffect(() =>{
    onShowEbook();
  })

  const onShowEbook = async () =>{       
    try{
     
      const res = await axios.get('/products/'+ pid,{
        headers: {
            'Content-Type': 'application/json'
        },          
      });

      const data = res.data; 
      if(data.length>0){
        var str:string = data[0].products_pdf;
        const  path = UrlServer + "/pdf/productfile/" + str.replace(".pdf","") + "/" + str.replace(".pdf",".html");
        setEbook(path);    
      }
   
    }catch(err){
      console.log(err);

    }
  
  }

  return (
    <Fragment>
          <div className='details'>   
          <iframe src={ebook} id="iframeEbook" typeof="application/html" width={1450}  height={800}>

          </iframe>
          </div>         
    </Fragment>      
  )
}

export default FlipEBooks
