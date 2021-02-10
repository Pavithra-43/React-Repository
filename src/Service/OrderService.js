import axios from 'axios';

const ORDERDETAILS_BASE_URL = "http://localhost:8083/order";

class OrderService{
    getOrderdetails(){
        return axios.get(ORDERDETAILS_BASE_URL);
    }

}
export default new OrderService()