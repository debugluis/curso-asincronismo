import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


const fetchData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* anotherFn (urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        
        yield console.log(product.title);
        yield console.log(category.name);
    }
    catch (error) {
        console.error('error');
    }
}

let af = anotherFn(API);

af.next();
af.next();