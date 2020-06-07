class AllProducts{
    constructor(containerProducts, catalogProducts, catalogCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.catalogCounter = document.querySelector(catalogCounter);
        this.createProducts();
    };

  /*   <div class="item">
            <div class="name">Product1</div>
            <div class="image"></div>
            <div class="price">111</div>
            <button class="btn">В корзину</button>
        </div> */

    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;
        for(let i = 0; i < this.catalogProducts.length; i++){
            let index = products.indexOf(this.catalogProducts[i].id);
            let activeText;

            if(index === -1){
                activeText = 'Добавить в корзину';
            } else{
                activeText = 'Удалить из корзины';
            }

            let item = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'item'
            });
            let name = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                contentText: this.catalogProducts[i].name
            });
            let img = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'image',
                bgImage: `url('${this.catalogProducts[i].img}')`
            });
            let price = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                contentText: this.catalogProducts[i].price
            });
            let btn = createProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn',
                contentText: activeText,
                id: this.catalogProducts[i].id
            });

            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);

                allProducts.catalogCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Удалить из корзины';
                } else{
                    this.innerHTML = 'Добавить в корзину';
                }
            })

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.containerProducts.appendChild(wrapper);
    };
}


//let allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');
let allProducts = new AllProducts('.container_products', getWomanProducts(), '.catalog_counter');
/*Функция передачи товаров на страницу и отсортитровка товаров*/ 
function getWomanProducts(){
    let result = [];
   if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "men.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Мужчина"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "menshap.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Мужчина" && catalogProduct[i].clothes === "шапки"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "mennos.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Мужчина" && catalogProduct[i].clothes === "носки"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "women.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Женщина"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "women1.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Женщина" && catalogProduct[i].clothes === "шапки"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "women2.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Женщина" && catalogProduct[i].clothes === "свитер"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "women3.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Женщина" && catalogProduct[i].clothes === "варежки"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "children.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Прочее"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "children1.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Прочее" && catalogProduct[i].clothes === "Дети"){
           result.push(catalogProduct[i]);
        }
    }
  }
  if( location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "dom.html"){
    for(let i=0; i < catalogProduct.length; i++){
        if(catalogProduct[i].name === "Прочее" && catalogProduct[i].clothes === "Товары для дома"){
           result.push(catalogProduct[i]);
        }
    }
  }
  
  
    return result;
};

