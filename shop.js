document.addEventListener("DOMContentLoaded", function () {

  let cart = [];

  /* PRODUCT CARDS */
  document.querySelectorAll(
    ".product-card, .product-item, .product-box, .product, article"
  ).forEach(function (card) {

    card.style.cursor = "pointer";

    card.addEventListener("click", function (e) {

      if (e.target.closest("button")) return;
      if (e.target.closest("a")) return;

      let title = card.querySelector("h1,h2,h3,h4");
      let price = card.querySelector(
        "strong,.price,.product-price"
      );

      if (!title) return;

      openProduct(
        title.innerText.trim(),
        price ? price.innerText.trim() : "₹0"
      );

    });

  });


  /* PRODUCT POPUP */
  window.openProduct = function (name, price) {

    document.getElementById("shopPopup")?.remove();

    let popup = document.createElement("div");

    popup.id = "shopPopup";

    popup.innerHTML = `
      <div class="shop-overlay">

        <div class="shop-box">

          <button class="shop-close"
          onclick="document.getElementById('shopPopup').remove()">
          ×
          </button>

          <small>COLLECTION · 2026</small>

          <h2>${name}</h2>

          <h3>${price}</h3>

          <p>
            Premium contemporary Indian fashion with
            refined details and modern design.
          </p>

          <button class="shop-add"
          onclick="addShopCart('${name}','${price}')">
          ADD TO CART →
          </button>

        </div>

      </div>
    `;

    document.body.appendChild(popup);
  };


  /* ADD TO CART */
  window.addShopCart = function (name, price) {

    cart.push({
      name: name,
      price: price
    });

    updateCount();

    document.getElementById("shopPopup")?.remove();

    openCart();

  };


  /* BAG COUNT */
  function updateCount() {

    document.querySelectorAll(".shop-count").forEach(function (el) {
      el.innerText = cart.length;
    });

  }


  /* BAG BUTTON */
  let bag = document.createElement("button");

  bag.className = "shop-bag";

  bag.innerHTML = `
    🛍️
    <span class="shop-count">0</span>
  `;

  bag.onclick = openCart;

  document.body.appendChild(bag);


  /* CART */
  function openCart() {

    document.getElementById("shopCart")?.remove();

    let items = "";

    if (cart.length === 0) {

      items = `
        <p class="empty">
          Your bag is currently empty.
        </p>
      `;

    } else {

      cart.forEach(function (item) {

        items += `
          <div class="cart-item">
            <span>${item.name}</span>
            <strong>${item.price}</strong>
          </div>
        `;

      });

    }

    let box = document.createElement("div");

    box.id = "shopCart";

    box.innerHTML = `
      <div class="shop-overlay">

        <div class="shop-box">

          <button class="shop-close"
          onclick="document.getElementById('shopCart').remove()">
          ×
          </button>

          <small>MODERN NAREE × PATTERN VALI</small>

          <h2>YOUR BAG</h2>

          ${items}

          <button class="shop-add"
          onclick="document.getElementById('shopCart').remove()">
          CONTINUE SHOPPING
          </button>

        </div>

      </div>
    `;

    document.body.appendChild(box);
  }


  /* STYLES */
  let style = document.createElement("style");

  style.innerHTML = `

  .shop-bag{
    position:fixed;
    right:20px;
    bottom:20px;
    z-index:999999;

    width:56px;
    height:56px;

    border-radius:50%;
    border:1px solid #777;

    background:#eee;
    color:#111;

    font-size:20px;
    cursor:pointer;

    box-shadow:0 10px 35px rgba(0,0,0,.5);
  }

  .shop-count{
    position:absolute;
    right:-5px;
    top:-5px;

    min-width:20px;
    height:20px;

    display:flex;
    align-items:center;
    justify-content:center;

    border-radius:50%;

    background:#111;
    color:#fff;

    font-size:10px;
  }

  .shop-overlay{
    position:fixed;
    inset:0;

    background:rgba(0,0,0,.82);

    z-index:1000000;

    display:flex;
    align-items:center;
    justify-content:center;

    padding:20px;
  }

  .shop-box{
    position:relative;

    width:min(420px,100%);
    max-height:80vh;
    overflow:auto;

    padding:35px;

    background:#111;
    color:#fff;

    border:1px solid #444;

    box-shadow:0 20px 80px rgba(0,0,0,.8);
  }

  .shop-box small{
    color:#999;
    letter-spacing:3px;
    font-size:9px;
  }

  .shop-box h2{
    font-size:32px;
    margin:18px 0;
  }

  .shop-box h3{
    font-size:22px;
  }

  .shop-box p{
    color:#aaa;
    line-height:1.7;
  }

  .shop-close{
    position:absolute;
    right:12px;
    top:8px;

    background:none;
    border:0;

    color:#fff;
    font-size:30px;

    cursor:pointer;
  }

  .shop-add{
    width:100%;

    padding:16px;
    margin-top:20px;

    background:#eee;
    color:#111;

    border:0;

    font-weight:bold;
    letter-spacing:2px;

    cursor:pointer;
  }

  .cart-item{
    display:flex;
    justify-content:space-between;

    padding:15px 0;

    border-bottom:1px solid #333;
  }

  .empty{
    color:#aaa;
    padding:20px 0;
  }

  `;

  document.head.appendChild(style);

});
