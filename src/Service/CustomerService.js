import axios from 'axios';
const CUSTOMER_URL="http://localhost:8083/api/customer";
const LOGIN_URL="http://localhost:8083/api/customer/signin";


class CustomerService{

    getAllCustomer(){
        return axios.get(CUSTOMER_URL);
    }
    registerCustomer(customer){
        return axios.post(CUSTOMER_URL,customer);
    }
    updateCustomer(customer){
        return axios.put(CUSTOMER_URL,customer);
    }
    validateCustomer(username,password)
    {
        return axios.get(LOGIN_URL+"/"+username+"/"+password)
    }
}
export default new CustomerService()