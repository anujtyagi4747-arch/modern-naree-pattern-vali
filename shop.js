document.addEventListener("DOMContentLoaded", () => {

  /* PREMIUM SITE */

  const style = document.createElement("style");

  style.innerHTML = `
  
  *{
    box-sizing:border-box;
    scroll-behavior:smooth;
  }

  body{
    margin:0;
    background:#080808 !important;
    color:#eee !important;
    font-family:Arial,Helvetica,sans-serif;
  }

  section{
    position:relative;
    overflow:hidden;
  }

  h1,h2,h3{
    font-family:Georgia,serif;
    letter-spacing:-1px;
  }

  a,button{
    transition:.3s ease;
  }

  a:hover{
    opacity:.75;
  }

  button{
    cursor:pointer;
  }

  /* PREMIUM PRODUCT GRID */

  .product-card,
  .product-item,
  .product-box,
  .product{
    background:#111 !important;
    border:1px solid #252525 !important;
    transition:.45s ease !important;
    overflow:hidden;
  }

  .product-card:hover,
  .product-item:hover,
  .product-box:hover,
  .product:hover{
    transform:translateY(-8px);
    border-color:#666 !important;
    box-shadow:0 25px 60px #000;
  }

  /* PRODUCT IMAGE */

  .product-image{
    min-height:330px;
    background:
    linear-gradient(135deg,#211d1b,#0b0b0b);
    position:relative;
    overflow:hidden;
  }

  .product-image:after{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,.08),
      transparent
    );
    transform:translateX(-100%);
    transition:1s;
  }

  .product-card:hover .product-image:after{
    transform:translateX(100%);
  }

  /* BUTTONS */

  .brand-btn,
  .add-cart,
  .shop-add,
  button[class*="btn"]{
    border:1px solid #777 !important;
    background:#eee !important;
    color:#111 !important;
    padding:14px 22px !important;
    font-weight:bold;
    letter-spacing:1.5px;
  }

  .brand-btn:hover,
  .add-cart:hover,
  .shop-add:hover{
    background:#111 !important;
    color:#fff !important;
    border-color:#fff !important;
  }

  /* HERO */

  header,
  .hero{
    min-height:80vh;
  }

  /* BRAND SECTIONS */

  .brand-section{
    min-height:65vh;
    background:
      radial-gradient(circle at 80% 20%,#252525,transparent 35%),
      #0b0b0b !important;
  }

  .brand-watermark{
    opacity:.8;
    transition:1s;
  }

  .brand-section:hover .brand-watermark{
    transform:translateX(20px);
  }

  /* NAVIGATION */

  nav{
    backdrop-filter:blur(15px);
    background:rgba(5,5,5,.82) !important;
    border-bottom:1px solid #222;
    position:sticky;
    top:0;
    z-index:9999;
  }

  /* FLOATING BAG */

  .shop-bag,
  #floatingCart,
  #masterBag{
    box-shadow:0 10px 40px #000 !important;
    transition:.3s !important;
  }

  .shop-bag:hover,
  #floatingCart:hover,
  #masterBag:hover{
    transform:scale(1.08);
  }

  /* MOBILE */

  @media(max-width:700px){

    .menu{
      gap:12px !important;
      font-size:8px !important;
    }

    .brand-section{
      min-height:55vh;
      padding:70px 6% !important;
    }

    .brand-content h2{
      font-size:48px !important;
    }

    .product-image{
      min-height:250px;
    }

    .product-card:hover,
    .product-item:hover,
    .product-box:hover,
    .product:hover{
      transform:none;
    }

  }

  `;

  document.head.appendChild(style);


  /* PRODUCT QUICK VIEW */

  document.querySelectorAll(
    ".product-card,.product-item,.product-box,.product,article"
  ).forEach(card=>{

    card.style.cursor="pointer";

    card.addEventListener("click",e=>{

      if(e.target.closest("button")) return;
      if(e.target.closest("a")) return;

      const title=card.querySelector("h1,h2,h3,h4");
      const price=card.querySelector(
        "strong,.price,.product-price"
      );

      if(!title) return;

      showProduct(
        title.innerText,
        price ? price.innerText : "₹0"
      );

    });

  });


  /* POPUP */

  window.showProduct=(name,price)=>{

    document.getElementById("premiumProduct")?.remove();

    const box=document.createElement("div");

    box.id="premiumProduct";

    box.innerHTML=`

      <div style="
      position:fixed;
      inset:0;
      background:#000d;
      z-index:999999;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px">

        <div style="
        background:#111;
        color:#fff;
        width:min(430px,100%);
        padding:35px;
        position:relative;
        border:1px solid #444;
        box-shadow:0 30px 100px #000">

          <button
          onclick="this.parentElement.parentElement.remove()"
          style="
          position:absolute;
          right:12px;
          top:8px;
          background:none;
          border:0;
          color:white;
          font-size:30px">
          ×
          </button>

          <small style="letter-spacing:3px;color:#999">
          EDIT · 2026
          </small>

          <h2>${name}</h2>

          <h3>${price}</h3>

          <p style="color:#aaa;line-height:1.7">
          Contemporary Indian fashion crafted with
          premium detailing and modern silhouettes.
          </p>

          <button
          onclick="alert('Added to Bag ✓')"
          style="
          width:100%;
          padding:16px;
          border:0;
          background:#eee;
          color:#111;
          font-weight:bold">
          ADD TO BAG →
          </button>

        </div>
      </div>
    `;

    document.body.appendChild(box);

  };


  /* FADE-IN ANIMATION */

  const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

      if(entry.isIntersecting){

        entry.target.style.opacity="1";
        entry.target.style.transform="translateY(0)";

      }

    });

  },{threshold:.08});


  document.querySelectorAll(
    "section,.product-card,.product-item,.product-box,.brand-content"
  ).forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(25px)";
    el.style.transition="opacity .8s ease,transform .8s ease";

    observer.observe(el);

  });


  /* YEAR */

  document.querySelectorAll("[data-year]").forEach(el=>{
    el.innerText=new Date().getFullYear();
  });

});
