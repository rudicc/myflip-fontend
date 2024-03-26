const CURRENCY_FORMATTER_USD = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  })
  
  const CURRENCY_FORMATTER_THD = new Intl.NumberFormat(undefined, {
    currency: "THD",
    style: "currency",
  })

  export function formatCurrencyUSD(number: number) {
    return CURRENCY_FORMATTER_USD.format(number)
  }

  export function formatCurrencyTHD(number: number) {
    return CURRENCY_FORMATTER_THD.format(number)
  }


  export function GetDateNow(){
    return  formatDate()
  }
  
export const formatDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const subStrings =( values:string , vstart:number , vend:number ) =>{
  return values.substring(vstart,vend)
}


export const GetUsersList = (i:any) => {
  let value = "";
  try{
    if(localStorage.getItem("tmbuser") !== null){
      const tmbuser =  localStorage.getItem("tmbuser")?.split(' ')           
      tmbuser?.map((e:any,k) =>{
          if(k==i){  
                     
          value = e;
            
             
          }
      });
     }else{
      value = "";
     }
  }catch(ex){
    console.log(ex)
    value = "";
  }
return value;
}

export const chkUndefined = (values:any) =>{

  if(values === undefined){
    return true;
  }else{
    return false;
  }
}