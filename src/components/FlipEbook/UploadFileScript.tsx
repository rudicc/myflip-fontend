import { useState } from "react";
import { UrlServer } from "../services"; 
function UploadFileScript() {
    const [ierror, setiError] = useState('');
    const [file, setFile] = useState<File | undefined>();
 
  
    function onChanageCapture(e: React.FormEvent<HTMLInputElement>): void{
      //debugger
  
      const target = e.target as HTMLInputElement & {
        files: FileList;
      }
      setFile(target.files[0]);      
    }
  
    const UploadFile = async() => {
      //debugger
      if( typeof file === 'undefined' ) return
      const formData = new FormData()
      formData.append('file' , file)
      try{
        const endpoint =  UrlServer + "/uploadFileScript"
        const uploadResponse = await fetch(endpoint, {
          method: 'POST',
          body: formData
        })
        const res = await uploadResponse.json()
  
        if(res.success === true){

          setiError("File uploaded Sucessfully!")

        }else{

          setiError(res.message)
  
        }
      }catch(err){
        //debugger
        console.log(err)
      }
    }

  return (
    <>
        <div>
            <div className="e-form__group e-d-flex e-align-center e-pd-l-20 e-d-flex">   
                <span><i className="ri-attachment-line"></i></span>       
                <input type="file" id="f" name='f' accept='/*' onChangeCapture={onChanageCapture} className="e-mg-l-10" />                                                                         
            </div> 
            <div  className="e-pd-y-5">
                <div className="e-mg-l-10 e-bdg e-bdg-success ease-bdg">

                <button type="button" className="e-btn-icon" onClick={UploadFile}><i className="ri-add-line"></i></button> 

                </div>                         
            </div>
        </div>  

        <div>
                                                        
        {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}
                                                    
        </div>       
    </>

  )
}

export default UploadFileScript
