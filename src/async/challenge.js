import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


const fetchData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        console.log(products);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        console.log(product.title);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(category.name);
    }
    catch (error) {
        console.error('error');
    }
}

anotherFn(API);