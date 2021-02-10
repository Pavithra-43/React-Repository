import axios from 'axios'

const PRODUCT_API_URL="http://localhost:8083/api/products";
const PRODUCT_COSMETICS="http://localhost:8083/api/products/category/cosmetics"
const PRODUCT_ACCESSORIES="http://localhost:8083/api/products/category/accessories"

class ProductService{
    getAllproducts()
    {
        console.log(axios.get(PRODUCT_API_URL))
       return axios.get(PRODUCT_API_URL);
    }
    getAllCosmetics()
    {
        return axios.get(PRODUCT_COSMETICS)
    }
    getAllAccessories()
    {
        return axios.get(PRODUCT_ACCESSORIES)
    }
    addProduct(product)
    {
        return axios.post(PRODUCT_API_URL,product)
    }
    getProductById(productId){
        return axios.get(PRODUCT_API_URL+ '/'+productId)
    }
    updateProduct(product, productId){
        return axios.put(PRODUCT_API_URL +'/'+productId, product)
    }
}

export default new ProductService()
