document.addEventListener("DOMContentLoaded", function () {

  /* ==========================================
     MODERN NAREE × PATTERN VALI
     FINAL SHOP SYSTEM — PART 1/4
     ========================================== */

  const WHATSAPP = "919582907643";
  const EMAIL = "modernnaree13@gmail.com";
  const INSTAGRAM = "https://instagram.com/pattern_vali26";
  const ADDRESS =
    "Loni, Ghaziabad, Uttar Pradesh - 201102, India";


  /* ==========================================
     PREMIUM WEBSITE STYLE
     ========================================== */

  const style = document.createElement("style");

  style.innerHTML = `

  *{
    box-sizing:border-box;
    scroll-behavior:smooth;
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    margin:0 !important;
    background:#080808 !important;
    color:#eeeeee !important;
    font-family:Arial,Helvetica,sans-serif;
  }

  h1,
  h2,
  h3,
  h4{
    font-family:Georgia,serif;
  }

  button{
    cursor:pointer;
    font-family:inherit;
  }

  a{
    transition:.3s ease;
  }


  /* ==========================================
     PRODUCT CARDS
     ========================================== */

  .product-card,
  .product-item,
  .product-box,
  .product{

    background:#111 !important;

    border:1px solid #292929 !important;

    overflow:hidden;

    transition:
      transform .4s ease,
      border-color .4s ease,
      box-shadow .4s ease !important;

    cursor:pointer;
  }


  .product-card:hover,
  .product-item:hover,
  .product-box:hover,
  .product:hover{

    transform:translateY(-7px);

    border-color:#777 !important;

    box-shadow:0 25px 70px rgba(0,0,0,.8);
  }


  /* ==========================================
     PRODUCT IMAGE EFFECT
     ========================================== */

  .product-image{

    position:relative;

    min-height:300px;

    overflow:hidden;
  }


  .product-image:after{

    content:"";

    position:absolute;

    inset:0;

    background:
      linear-gradient(
        120deg,
        transparent,
        rgba(255,255,255,.12),
        transparent
      );

    transform:translateX(-100%);

    transition:1s;
  }


  .product-card:hover
  .product-image:after{

    transform:translateX(100%);
  }


  /* ==========================================
     PREMIUM BUTTONS
     ========================================== */

  .brand-btn,
  .add-cart,
  .shop-add,
  .checkout-btn{

    display:inline-block;

    padding:14px 22px !important;

    border:1px solid #777 !important;

    background:#eeeeee !important;

    color:#111111 !important;

    font-weight:bold;

    letter-spacing:1.5px;

    text-decoration:none;

    transition:.3s ease;
  }


  .brand-btn:hover,
  .add-cart:hover,
  .shop-add:hover,
  .checkout-btn:hover{

    background:#111111 !important;

    color:#ffffff !important;

    border-color:#ffffff !important;
  }


  /* ==========================================
     NAVIGATION
     ========================================== */

  nav{

    position:sticky !important;

    top:0;

    z-index:9999;

    background:
      rgba(5,5,5,.90) !important;

    backdrop-filter:blur(15px);

    border-bottom:1px solid #222;
  }


  /* ==========================================
     BRAND SECTIONS
     ========================================== */

  .brand-section{

    position:relative;

    overflow:hidden;

    background:
      radial-gradient(
        circle at 80% 20%,
        #252525,
        transparent 35%
      ),
      #0b0b0b !important;
  }


  .brand-watermark{

    transition:1s ease;
  }


  .brand-section:hover
  .brand-watermark{

    transform:translateX(20px);
  }


  /* ==========================================
     FLOATING BAG
     ========================================== */

  #finalBag{

    position:fixed;

    right:18px;

    bottom:20px;

    z-index:99990;

    width:58px;

    height:58px;

    border-radius:50%;

    border:1px solid #777;

    background:#eeeeee;

    color:#111111;

    font-size:19px;

    box-shadow:
      0 15px 50px rgba(0,0,0,.8);

    transition:.3s ease;
  }


  #finalBag:hover{

    transform:scale(1.08);
  }


  #finalBagCount{

    position:absolute;

    right:-4px;

    top:-4px;

    min-width:21px;

    height:21px;

    border-radius:50%;

    background:#111;

    color:#fff;

    font-size:10px;

    display:flex;

    align-items:center;

    justify-content:center;
  }


  /* ==========================================
     PREMIUM POPUP
     ========================================== */

  .final-overlay{

    position:fixed;

    inset:0;

    background:
      rgba(0,0,0,.80);

    backdrop-filter:blur(8px);

    z-index:100000;

    display:flex;

    align-items:center;

    justify-content:center;

    padding:20px;
  }


  .final-box{

    width:min(520px,100%);

    max-height:90vh;

    overflow:auto;

    background:#111;

    border:1px solid #444;

    box-shadow:
      0 30px 100px #000;

    padding:30px;

    position:relative;
  }


  .final-close{

    position:absolute;

    right:12px;

    top:6px;

    background:none;

    border:0;

    color:#fff;

    font-size:30px;
  }


  /* ==========================================
     MOBILE
     ========================================== */

  @media(max-width:700px){

    .product-image{
      min-height:230px;
    }

    .final-box{
      padding:23px;
    }

    .brand-section{
      padding-left:6% !important;
      padding-right:6% !important;
    }

  }

  `;

  document.head.appendChild(style);


  /* ==========================================
     GLOBAL SETTINGS
     ========================================== */

  window.MN_CONFIG = {

    whatsapp: WHATSAPP,

    email: EMAIL,

    instagram: INSTAGRAM,

    address: ADDRESS

  };


  console.log(
    "PART 1 ACTIVE ✓"
  );

});
  /* ==========================================
     PART 2/4 — CART + PRODUCT SYSTEM
     ========================================== */


  /* ==========================================
     CART STORAGE
     ========================================== */

  let cart = JSON.parse(
    localStorage.getItem("mn_pattern_cart") || "[]"
  );


  function saveCart(){

    localStorage.setItem(
      "mn_pattern_cart",
      JSON.stringify(cart)
    );

    updateCartCount();

  }


  function updateCartCount(){

    let count = cart.reduce(
      function(total,item){
        return total + item.qty;
      },
      0
    );


    document
      .querySelectorAll("#cartCount")
      .forEach(function(el){

        el.innerText = count;

      });


    const floatingCount =
      document.getElementById("finalBagCount");


    if(floatingCount){

      floatingCount.innerText = count;

    }

  }


  /* ==========================================
     ADD PRODUCT TO CART
     ========================================== */

  window.addToCart = function(name,price){

    let numericPrice =
      Number(
        String(price)
        .replace(/[₹,]/g,"")
      );


    let existing =
      cart.find(function(item){

        return item.name === name;

      });


    if(existing){

      existing.qty += 1;

    }else{

      cart.push({

        name:name,

        price:numericPrice,

        qty:1

      });

    }


    saveCart();

    closeProductPopup();

    openCart();

  };


  /* ==========================================
     PRODUCT QUICK VIEW
     ========================================== */

  window.showProduct = function(
    name,
    price,
    brand
  ){

    closeProductPopup();


    let numericPrice =
      Number(
        String(price)
        .replace(/[₹,]/g,"")
      );


    const popup =
      document.createElement("div");


    popup.id =
      "finalProductPopup";


    popup.className =
      "final-overlay";


    popup.innerHTML = `

      <div class="final-box">

        <button
          class="final-close"
          onclick="closeProductPopup()">
          ×
        </button>


        <small
          style="
          letter-spacing:3px;
          color:#999;">
          ${brand || "COLLECTION"}
        </small>


        <h2
          style="
          font-size:38px;
          margin-top:18px;">
          ${name}
        </h2>


        <h3
          style="
          font-size:24px;">
          ₹${numericPrice.toLocaleString("en-IN")}
        </h3>


        <p
          style="
          color:#aaa;
          line-height:1.8;">
          Contemporary Indian fashion with
          refined silhouettes, expressive
          patterns and premium detailing.
          Designed for the modern woman.
        </p>


        <button
          class="checkout-btn"
          style="width:100%;"
          onclick="
          addToCart(
            '${String(name).replace(/'/g,"\\'")}',
            '${numericPrice}'
          )">

          ADD TO BAG →

        </button>

      </div>

    `;


    document.body.appendChild(popup);

  };


  /* ==========================================
     CLOSE PRODUCT POPUP
     ========================================== */

  window.closeProductPopup = function(){

    const popup =
      document.getElementById(
        "finalProductPopup"
      );


    if(popup){

      popup.remove();

    }

  };


  /* ==========================================
     ACTIVATE PRODUCT CARDS
     ========================================== */

  function activateProducts(){

    document
      .querySelectorAll(
        ".product-card," +
        ".product-item," +
        ".product-box," +
        ".product"
      )
      .forEach(function(card){

        if(
          card.dataset.mnActivated === "yes"
        ){

          return;

        }


        card.dataset.mnActivated =
          "yes";


        card.style.cursor =
          "pointer";


        card.addEventListener(
          "click",
          function(event){

            if(
              event.target.closest("button")
            ){

              return;

            }


            if(
              event.target.closest("a")
            ){

              return;

            }


            const title =
              card.querySelector(
                "h1,h2,h3,h4"
              );


            const price =
              card.querySelector(
                "strong,.price,.product-price"
              );


            const brand =
              card.querySelector("p");


            if(!title){

              return;

            }


            showProduct(

              title.innerText,

              price
                ? price.innerText
                : "₹0",

              brand
                ? brand.innerText
                : "COLLECTION"

            );

          }
        );

      });

  }


  activateProducts();


  /* ==========================================
     FLOATING BAG BUTTON
     ========================================== */

  if(
    !document.getElementById("finalBag")
  ){

    const bag =
      document.createElement("button");


    bag.id =
      "finalBag";


    bag.innerHTML = `

      🛍️

      <span id="finalBagCount">
        0
      </span>

    `;


    bag.onclick =
      function(){

        openCart();

      };


    document.body.appendChild(bag);

  }


  updateCartCount();


  /* ==========================================
     CART POPUP
     ========================================== */

  window.openCart = function(){

    const old =
      document.getElementById(
        "finalCartPopup"
      );


    if(old){

      old.remove();

    }


    const popup =
      document.createElement("div");


    popup.id =
      "finalCartPopup";


    popup.className =
      "final-overlay";


    popup.innerHTML = `

      <div class="final-box">

        <button
          class="final-close"
          onclick="
          closeCart()">
          ×
        </button>


        <small
          style="
          letter-spacing:3px;
          color:#999;">
          SHOPPING BAG
        </small>


        <h2>
          YOUR BAG
        </h2>


        <div id="finalCartItems"></div>


        <div
          style="
          display:flex;
          justify-content:space-between;
          padding:20px 0;
          border-top:1px solid #292929;
          margin-top:15px;">

          <span>
            TOTAL
          </span>

          <strong
            id="finalCartTotal">
            ₹0
          </strong>

        </div>


        <button
          class="checkout-btn"
          style="width:100%;"
          onclick="
          openCheckout()">

          CHECKOUT →

        </button>

      </div>

    `;


    document.body.appendChild(
      popup
    );


    renderCart();

  };


  /* ==========================================
     CLOSE CART
     ========================================== */

  window.closeCart = function(){

    const popup =
      document.getElementById(
        "finalCartPopup"
      );


    if(popup){

      popup.remove();

    }

  };


  /* ==========================================
     RENDER CART
     ========================================== */

  function renderCart(){

    const area =
      document.getElementById(
        "finalCartItems"
      );


    const totalElement =
      document.getElementById(
        "finalCartTotal"
      );


    if(!area){

      return;

    }


    if(cart.length === 0){

      area.innerHTML = `

        <p
          style="
          color:#999;
          padding:30px 0;">

          Your bag is currently empty.

        </p>

      `;


      if(totalElement){

        totalElement.innerText =
          "₹0";

      }


      return;

    }


    let total = 0;


    area.innerHTML =
      cart.map(
        function(item,index){

          total +=
            item.price * item.qty;


          return `

            <div
              style="
              display:flex;
              align-items:center;
              justify-content:space-between;
              gap:12px;
              padding:18px 0;
              border-bottom:1px solid #292929;">

              <div>

                <h4
                  style="
                  margin:0 0 5px;">

                  ${item.name}

                </h4>

                <p
                  style="
                  margin:0;
                  color:#999;
                  font-size:12px;">

                  ₹${item.price.toLocaleString("en-IN")}

                </p>

              </div>


              <div
                style="
                display:flex;
                align-items:center;
                gap:8px;">

                <button
                  onclick="
                  changeQuantity(${index},-1)"
                  style="
                  width:28px;
                  height:28px;
                  background:#222;
                  color:#fff;
                  border:1px solid #444;">

                  −

                </button>


                <span>

                  ${item.qty}

                </span>


                <button
                  onclick="
                  changeQuantity(${index},1)"
                  style="
                  width:28px;
                  height:28px;
                  background:#222;
                  color:#fff;
                  border:1px solid #444;">

                  +

                </button>

              </div>


              <button
                onclick="
                removeCartItem(${index})"
                style="
                background:none;
                border:0;
                color:#999;
                font-size:10px;">

                REMOVE

              </button>

            </div>

          `;

        }
      ).join("");


    if(totalElement){

      totalElement.innerText =
        "₹" +
        total.toLocaleString("en-IN");

    }

  }


  /* ==========================================
     CHANGE QUANTITY
     ========================================== */

  window.changeQuantity =
    function(index,change){

      if(!cart[index]){

        return;

      }


      cart[index].qty +=
        change;


      if(
        cart[index].qty <= 0
      ){

        cart.splice(index,1);

      }


      saveCart();

      renderCart();

    };


  /* ==========================================
     REMOVE PRODUCT
     ========================================== */

  window.removeCartItem =
    function(index){

      cart.splice(index,1);

      saveCart();

      renderCart();

    };


  console.log(
    "PART 2 ACTIVE ✓"
  );
  /* ==========================================
     PART 3/4 — CHECKOUT + WHATSAPP ORDER
     ========================================== */


  /* ==========================================
     CHECKOUT POPUP
     ========================================== */

  window.openCheckout = function(){

    if(cart.length === 0){

      alert("Your bag is empty.");

      return;

    }


    const old =
      document.getElementById(
        "finalCheckoutPopup"
      );


    if(old){

      old.remove();

    }


    const popup =
      document.createElement("div");


    popup.id =
      "finalCheckoutPopup";


    popup.className =
      "final-overlay";


    popup.innerHTML = `

      <div class="final-box">

        <button
          class="final-close"
          onclick="
          closeCheckout()">

          ×

        </button>


        <small
          style="
          letter-spacing:3px;
          color:#999;">

          ORDER DETAILS

        </small>


        <h2>
          CHECKOUT
        </h2>


        <p
          style="
          color:#888;
          font-size:12px;
          line-height:1.6;">

          Enter your delivery details.
          Your order will be sent directly
          to our WhatsApp for confirmation.

        </p>


        <form
          id="finalCheckoutForm"
          class="final-form">


          <input
            id="customerName"
            type="text"
            placeholder="Full Name"
            required>


          <input
            id="customerPhone"
            type="tel"
            placeholder="Phone Number"
            required>


          <textarea
            id="customerAddress"
            placeholder="Complete Delivery Address"
            required></textarea>


          <input
            id="customerCity"
            type="text"
            placeholder="City / State / PIN Code"
            required>


          <select
            id="customerPayment">

            <option value="Cash on Delivery">
              Cash on Delivery
            </option>

            <option value="UPI / Payment on WhatsApp">
              UPI / Payment on WhatsApp
            </option>

          </select>


          <button
            type="submit"
            class="checkout-btn"
            style="
            width:100%;
            margin-top:10px;">

            PLACE ORDER ON WHATSAPP →

          </button>


        </form>

      </div>

    `;


    document.body.appendChild(
      popup
    );


    document
      .getElementById(
        "finalCheckoutForm"
      )
      .addEventListener(
        "submit",
        placeOrder
      );

  };


  /* ==========================================
     CLOSE CHECKOUT
     ========================================== */

  window.closeCheckout =
    function(){

      const popup =
        document.getElementById(
          "finalCheckoutPopup"
        );


      if(popup){

        popup.remove();

      }

    };


  /* ==========================================
     PLACE WHATSAPP ORDER
     ========================================== */

  function placeOrder(event){

    event.preventDefault();


    const name =
      document.getElementById(
        "customerName"
      ).value.trim();


    const phone =
      document.getElementById(
        "customerPhone"
      ).value.trim();


    const address =
      document.getElementById(
        "customerAddress"
      ).value.trim();


    const city =
      document.getElementById(
        "customerCity"
      ).value.trim();


    const payment =
      document.getElementById(
        "customerPayment"
      ).value;


    if(
      !name ||
      !phone ||
      !address ||
      !city
    ){

      alert(
        "Please fill all details."
      );

      return;

    }


    let total = 0;


    let products =
      cart.map(
        function(item){

          const itemTotal =
            item.price * item.qty;


          total +=
            itemTotal;


          return (
            item.name +
            " × " +
            item.qty +
            " = ₹" +
            itemTotal.toLocaleString(
              "en-IN"
            )
          );

        }
      ).join("\n");


    const message =

`Hello Modern Naree × Pattern Vali,

I want to place an order.

━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━

Name: ${name}

Phone: ${phone}

Address:
${address}

City / State / PIN:
${city}

━━━━━━━━━━━━━━
ORDER DETAILS
━━━━━━━━━━━━━━

${products}

━━━━━━━━━━━━━━
TOTAL: ₹${total.toLocaleString("en-IN")}
━━━━━━━━━━━━━━

Payment:
${payment}

Please confirm my order.

Thank you.`;


    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP +
      "?text=" +
      encodeURIComponent(
        message
      );


    window.open(
      whatsappURL,
      "_blank"
    );


    /* CLEAR CART */

    cart = [];

    saveCart();


    /* CLOSE POPUPS */

    closeCheckout();

    closeCart();


    alert(
      "Order details opened on WhatsApp ✓"
    );

  }


  /* ==========================================
     WHATSAPP CONTACT BUTTON
     ========================================== */

  if(
    !document.getElementById(
      "finalWhatsApp"
    )
  ){

    const whatsapp =
      document.createElement("a");


    whatsapp.id =
      "finalWhatsApp";


    whatsapp.href =
      "https://wa.me/" +
      WHATSAPP +
      "?text=" +
      encodeURIComponent(
        "Hello Modern Naree × Pattern Vali, I want to know more about your collection."
      );


    whatsapp.target =
      "_blank";


    whatsapp.rel =
      "noopener";


    whatsapp.innerText =
      "WhatsApp";


    whatsapp.style.cssText = `

      position:fixed;

      left:18px;

      bottom:20px;

      z-index:99990;

      background:#eeeeee;

      color:#111111;

      padding:12px 18px;

      border:1px solid #777;

      text-decoration:none;

      font-size:10px;

      font-weight:bold;

      letter-spacing:1.5px;

      box-shadow:
        0 10px 35px #000;

    `;


    document.body.appendChild(
      whatsapp
    );

  }


  /* ==========================================
     ABOUT SECTION
     ========================================== */

  if(
    !document.getElementById(
      "finalAbout"
    )
  ){

    const about =
      document.createElement(
        "section"
      );


    about.id =
      "finalAbout";


    about.innerHTML = `

      <div
        class="about-inner">


        <small>
          OUR STORY · 2026
        </small>


        <h2>

          MODERN NAREE

          <br>

          × PATTERN VALI

        </h2>


        <p>

          Modern Naree × Pattern Vali
          is a contemporary Indian
          fashion destination created
          for women who love timeless
          Indian aesthetics with a
          modern expression.

        </p>


        <p>

          Our collections bring together
          refined silhouettes, expressive
          prints, beautiful patterns and
          premium details — designed to
          make everyday fashion feel
          confident, comfortable and
          effortlessly elegant.

        </p>


        <p>

          Our vision is simple:
          celebrate Indian fashion,
          reinterpret it for today and
          create pieces that feel
          uniquely yours.

        </p>


      </div>

    `;


    document.body.appendChild(
      about
    );

  }


  /* ==========================================
     CONTACT INFORMATION
     ========================================== */

  if(
    !document.getElementById(
      "finalContact"
    )
  ){

    const contact =
      document.createElement(
        "section"
      );


    contact.id =
      "finalContact";


    contact.style.cssText = `

      padding:80px 7%;

      background:#0b0b0b;

      border-top:1px solid #222;

    `;


    contact.innerHTML = `

      <div
        style="
        max-width:900px;">

        <small
          style="
          color:#999;
          letter-spacing:4px;">

          GET IN TOUCH

        </small>


        <h2
          style="
          font-family:Georgia,serif;
          font-size:clamp(40px,7vw,75px);
          margin:18px 0;">

          CONTACT

        </h2>


        <p
          style="
          color:#aaa;
          line-height:1.8;">

          Have a question about our
          collection, sizing, availability
          or an order? Get in touch with us.

        </p>


        <p>

          📞
          <a
            href="https://wa.me/${WHATSAPP}"
            target="_blank"
            style="color:#fff;">

            WhatsApp: 9582907643

          </a>

        </p>


        <p>

          ✉️
          <a
            href="mailto:${EMAIL}"
            style="color:#fff;">

            ${EMAIL}

          </a>

        </p>


        <p
          style="color:#aaa;">

          📍 ${ADDRESS}

        </p>


        <a
          href="${INSTAGRAM}"
          target="_blank"
          style="
          display:inline-block;
          margin-top:15px;
          padding:13px 20px;
          border:1px solid #666;
          color:#fff;
          text-decoration:none;
          font-size:10px;
          letter-spacing:2px;">

          INSTAGRAM · @pattern_vali26

        </a>

      </div>

    `;


    document.body.appendChild(
      contact
    );

  }


  console.log(
    "PART 3 ACTIVE ✓"
  );
  /* ==========================================
     PART 4/4 — FOOTER + OFFER + ANIMATIONS
     ========================================== */


  /* ==========================================
     PREMIUM FOOTER
     ========================================== */

  if(
    !document.getElementById(
      "finalFooter"
    )
  ){

    const footer =
      document.createElement(
        "footer"
      );


    footer.id =
      "finalFooter";


    footer.innerHTML = `

      <div class="footer-grid">


        <div>

          <h3>
            MODERN NAREE × PATTERN VALI
          </h3>


          <p>

            Contemporary Indian fashion,
            premium silhouettes and
            expressive patterns made
            for everyday elegance.

          </p>

        </div>


        <div>

          <h3>
            CONTACT
          </h3>


          <a
            href="https://wa.me/${WHATSAPP}"
            target="_blank">

            WhatsApp · 9582907643

          </a>


          <a
            href="mailto:${EMAIL}">

            ${EMAIL}

          </a>


          <p>

            ${ADDRESS}

          </p>

        </div>


        <div>

          <h3>
            EXPLORE
          </h3>


          <a href="#modern">
            Modern Naree
          </a>


          <a href="#pattern">
            Pattern Vali
          </a>


          <a href="#collection">
            Collection
          </a>


          <a href="#finalAbout">
            About Us
          </a>


          <a href="#finalContact">
            Contact
          </a>


          <a
            href="${INSTAGRAM}"
            target="_blank">

            Instagram · @pattern_vali26

          </a>

        </div>


      </div>


      <div class="footer-bottom">

        © ${new Date().getFullYear()}
        Modern Naree × Pattern Vali.
        All Rights Reserved.

      </div>

    `;


    document.body.appendChild(
      footer
    );

  }


  /* ==========================================
     OFFER POPUP
     ========================================== */

  if(
    !sessionStorage.getItem(
      "mn_offer_seen"
    )
  ){

    setTimeout(
      function(){

        if(
          document.getElementById(
            "finalOfferPopup"
          )
        ){

          return;

        }


        const offer =
          document.createElement(
            "div"
          );


        offer.id =
          "finalOfferPopup";


        offer.className =
          "final-overlay";


        offer.innerHTML = `

          <div
            class="final-box"
            style="
            text-align:center;">


            <button
              class="final-close"
              onclick="
              closeOfferPopup()">

              ×

            </button>


            <small
              style="
              letter-spacing:4px;
              color:#999;">

              WELCOME TO OUR EDIT

            </small>


            <h2
              style="
              font-size:48px;
              margin:20px 0;">

              10% OFF

            </h2>


            <p
              style="
              color:#aaa;">

              Use code

            </p>


            <strong
              style="
              font-size:22px;
              letter-spacing:2px;">

              WELCOME10

            </strong>


            <br><br>


            <button
              class="checkout-btn"
              onclick="
              closeOfferPopup()">

              SHOP COLLECTION →

            </button>


          </div>

        `;


        document.body.appendChild(
          offer
        );


      },
      1800
    );

  }


  /* ==========================================
     CLOSE OFFER
     ========================================== */

  window.closeOfferPopup =
    function(){

      const offer =
        document.getElementById(
          "finalOfferPopup"
        );


      if(offer){

        offer.remove();

      }


      sessionStorage.setItem(
        "mn_offer_seen",
        "1"
      );

    };


  /* ==========================================
     FADE-IN ANIMATION
     ========================================== */

  const animationObserver =
    new IntersectionObserver(
      function(entries){

        entries.forEach(
          function(entry){

            if(
              entry.isIntersecting
            ){

              entry.target.style.opacity =
                "1";


              entry.target.style.transform =
                "translateY(0)";

            }

          }
        );

      },
      {
        threshold:.08
      }
    );


  document.querySelectorAll(
    "section," +
    ".product-card," +
    ".product-item," +
    ".product-box," +
    ".brand-content"
  ).forEach(
    function(element){

      element.style.opacity =
        "0";


      element.style.transform =
        "translateY(25px)";


      element.style.transition =
        "opacity .8s ease," +
        "transform .8s ease";


      animationObserver.observe(
        element
      );

    }
  );


  /* ==========================================
     YEAR AUTO UPDATE
     ========================================== */

  document
    .querySelectorAll(
      "[data-year]"
    )
    .forEach(
      function(element){

        element.innerText =
          new Date().getFullYear();

      }
    );


  /* ==========================================
     ESC KEY CLOSES POPUPS
     ========================================== */

  document.addEventListener(
    "keydown",
    function(event){

      if(
        event.key === "Escape"
      ){

        closeProductPopup();

        closeCart();

        closeCheckout();

        closeOfferPopup();

      }

    }
  );


  /* ==========================================
     CLICK OUTSIDE POPUP TO CLOSE
     ========================================== */

  document.addEventListener(
    "click",
    function(event){

      const product =
        document.getElementById(
          "finalProductPopup"
        );


      const cartPopup =
        document.getElementById(
          "finalCartPopup"
        );


      const checkoutPopup =
        document.getElementById(
          "finalCheckoutPopup"
        );


      if(
        product &&
        event.target === product
      ){

        closeProductPopup();

      }


      if(
        cartPopup &&
        event.target === cartPopup
      ){

        closeCart();

      }


      if(
        checkoutPopup &&
        event.target === checkoutPopup
      ){

        closeCheckout();

      }

    }
  );


  /* ==========================================
     FINAL INITIALIZATION
     ========================================== */

  updateCartCount();


  console.log(
    "MODERN NAREE × PATTERN VALI"
  );


  console.log(
    "FINAL WEBSITE SYSTEM ACTIVE ✓"
  );


});
