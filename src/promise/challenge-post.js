import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "New Product Luis",
    "price": 330824,
    "description": "Ergonomic executive chair upholstered in bonded black leather",
    "categoryId": 1,
    "images": [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=9677"
    ]
  }

  postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));