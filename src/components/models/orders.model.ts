export interface ORDERS  {
    orders_id?:  number;
    customers_id:  number;
    customers_name:  string;
    customers_company:  string;
    customers_street_address:  string;
    customers_suburb:  string;
    customers_city:  string;
    customers_postcode:  string;
    customers_state:  string;
    customers_country:  string;
    customers_telephone:  string;
    customers_email_address:  string;
    customers_address_format_id:  number;
    delivery_name:  string;
    delivery_company:  string;
    delivery_street_address:  string;
    delivery_suburb:  string;
    delivery_city:  string;
    delivery_postcode:  string;
    delivery_state:  string;
    delivery_country:  string;
    delivery_address_format_id:  number;
    billing_name:  string;
    billing_company:  string;
    billing_street_address:  string;
    billing_suburb:  string;
    billing_city:  string;
    billing_postcode:  string;
    billing_state:  string;
    billing_country:  string;
    billing_address_format_id:  number;
    payment_method:  string;
    cc_type:  string;
    cc_owner:  string;
    cc_number:  string;
    cc_expires:  string;
    last_modified:  string;
    date_purchased:  string;
    orders_status:  number;
    orders_date_finished:  string;
    currency:  string;
    currency_value:  string
}

export interface ORDERS_BASKET  {
    orders_id?:  number;
    customers_id:  number;
    customers_name:  string;
    customers_email_address:  string;
    billing_img_receipt:  string;
    orders_status:  number;
    orders_date_added:  string;
    orders_date_finished:  string;
    last_modified:  string;
    date_purchased:  string;
    update_user:  string;
}

export interface ORDERS_PRODUCTS_CUSTOMER {
    orders_id: string;
    customers_id: string;
    customers_name: string;
    customers_email_address: string;
    billing_img_receipt: string;
    orders_status: string;
    orders_date_added: string;
    orders_date_finished: string;
    orders_products_id: string;
    products_id: number;
    products_model: string;
    products_name: string;
    products_price: number;
    final_price: number;
    products_tax: number;
    products_quantity: number;
}