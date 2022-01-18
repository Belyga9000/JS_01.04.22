function getCounter() {
  let last = 0;

  return () => ++last;
}

const stackIDGenrator = getCounter()

class Good {
  constructor({id, title, price}) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  getId() {
    return this.id;
  }

  getPrice() {
    return this.price;
  }

  getTitle() {
    return this.title;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodStack {
  constructor(good) {
    this.id = stackIDGenrator();
    this.good = good;
    this.count = 1;
  }

  getGoodId() {
    return this.good.id
  }

  getGood() {
    return this.good;
  }

  getCount() {
    return this.count;
  }

  add() {
    this.count++;
    return this.count;
  }

  remove() {
    this.count--;
    return this.count;
  }
}

class Cart {
  constructor(){
    this.list = []
  }

  add(good) {
    const idx = this.list.findIndex((stack) => stack.getGoodId() == good.id)

    if(idx >= 0) {
      this.list[idx].add()
    } else {
      this.list.push(new GoodStack(good))
    }

  }

  remove(id) {
    const idx = this.list.findIndex((stack) => stack.getGoodId() == id)

    if(idx >= 0) {
      this.list[idx].remove()

      if(this.list[idx].getCount() <= 0) {
        this.list.splice(idx, 1)
      }
    } 
  }

  totalPrice() {
    let totalPrice = 0;
    this.list.forEach(good => {
      totalPrice += good.good.price * good.count; 
      return(totalPrice);
    })
  }
}

class Showcase {
  constructor(cart){
    this.list = [];
    this.cart = cart;
  }

  fetchGoods() {
    this.list = [
      new Good({id: 1, title: 'Футболка', price: 140}),
      new Good({id: 2, title: 'Брюки', price: 320}),
      new Good({id: 3, title: 'Галстук', price: 24})
    ]
  }

  addToCart(id) {
    const idx = this.list.findIndex((good) => id == good.id)

    if(idx >= 0) {
      this.cart.add(this.list[idx])
    }
  }
}

class ItemRender {
  constructor(showcase) {
  }

  render() {
    let listHtml = '';
    showcase.list.forEach(good => {
      listHtml += `<div class="showcase-item"><h3>${good.title}</h3><p>Цена: ${good.price}</p></div>`;
    });
    document.querySelector('.goods-showcase-list').innerHTML = listHtml;
  }
}

class ItemRenderInCart {
  constructor(cart) {
    this.list = cart.list;
  }

  render() {
    let listHtml = '';
    this.list.forEach(good => {
      listHtml += `<div class="goods-item"><h3>${good.good.title}</h3><p>Цена: ${good.good.price * good.count}</p><p>Количество: ${good.count}</p></div>`;;
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

document.querySelector('.cart-button').addEventListener('click', () => {
  document.querySelector('.goods-list').classList.toggle('show');
});


const cart = new Cart()
const showcase = new Showcase(cart)
const itemrender = new ItemRender(showcase)
const itemrenderincart = new ItemRenderInCart(cart)

showcase.fetchGoods();

itemrender.render();
showcase.addToCart(1)
showcase.addToCart(1)
showcase.addToCart(1)
showcase.addToCart(3)

cart.remove(1)

itemrenderincart.render();
cart.totalPrice();


console.log(showcase, cart)