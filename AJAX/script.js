const api = "https://dummyjson.com/products";
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => console.log(json))
async function GetDataFromPage(url){
    const data = await fetch(api);
    const elements = await data.json();
    console.log(elements);
    for(const i of elements.products){
       userList.innerHTML += `<div class="card text-center mb-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${i.title}</h5>
              <p class="card-text">${i.description}</p>
              <a href="#" class="btn btn-primary">${i.price}$</a>
            </div>
          </div>`
    }

}
GetDataFromPage(api);