export interface PRODUCTS  {
    products_id?:  number;
    products_quantity:  number;
    products_model:  string;
    products_image:  string;
    products_price:  string;
    products_date_added:  string;
    products_last_modified:  string;
    products_date_available:  string;
    products_weight:  string;
    products_status:  number;
    products_tax_class_id:  number;
    manufacturers_id:  number;
    products_ordered:  number;
    products_pdf:string;
    products_pdf_id:number;
    categories_name:string;
    products_name:string;
    products_url:string;
    categories_id:number;
    products_description:string;
}



export interface Product {
    id: number;
    cover: string;
    title: string;
    author: string; 
    price: number;
    category: string;
    qty: number;
    model: string;
    desc: string;
    pview: number;
    lang: number;
    categories_id:number;
    parent_id: number;
    parent_name:string;
  
  }