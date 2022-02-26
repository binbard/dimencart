let productsJSON = `
{
    "1": {
        "pid": "10",
        "name": "QW Notebook 5 Max",
        "price": "₹38,999",
        "pimg": "1.jpg"
    },
    "2": {
        "pid": "20",
        "name": "Wivi Pro 650 Mobile",
        "price": "₹8,999",
        "pimg": "2phone.jfif"
    },
    "3": {
        "pid": "30",
        "name": "NG Resso earphone neckband",
        "price": "₹699",
        "pimg": "qw_neckband_g220.jpg"
    },
    "4": {
        "pid": "40",
        "name": "WLR Pro camera",
        "price": "₹18,999",
        "pimg": "camera 1.jpg"
    },
    "5": {
        "pid": "50",
        "name": "Erisso Navy Sneakers",
        "price": "₹499",
        "pimg": "hipster-958805_1920.jpg"
    },
    "6": {
        "pid": "60",
        "name": "PUMA Jaro SQ Slippers",
        "price": "₹699",
        "pimg": "5shoe.jfif"
    },
    "7": {
        "pid": "70",
        "name": "Puma Evo comet Black shoes",
        "price": "₹899",
        "pimg": "3shoe.jfif"
    },
    "8": {
        "pid": "80",
        "name": "Grano NXT Camera 450A/W",
        "price": "₹38,999",
        "pimg": "Trigger-Unisex-Shoes (3).jfif"
    },
    "9": {
      "pid": "90",
      "name": "AKIMIA Black flared Suit",
      "price": "₹1,899",
      "pimg": "attire 1.webp"
    },
    "10": {
      "pid": "100",
      "name": "Jade pro jeans",
      "price": "₹1,299",
      "pimg": "jeans1.jpg"
    },
    "11": {
      "pid": "110",
      "name": "Awaremen solid yellow comfy T-shirt",
      "price": "₹699",
      "pimg": "top1.jpg"
    },
    "12": {
      "pid": "120",
      "name": "Rayon flared top navy-blue",
      "price": "₹899",
      "pimg": "attire 2.webp"
    },
    "13": {
      "pid": "130",
      "name": "Curology Serums Fairness Glow",
      "price": "₹199",
      "pimg": "curology-DGH1u80sZik-unsplash.jpg"
    },
    "14": {
      "pid": "140",
      "name": "Coconut oil Topical suncreen 250g",
      "price": "₹249",
      "pimg": "deanna-alys-6LBBOwkPzyQ-unsplash.jpg"
    },
    "15": {
      "pid": "150",
      "name": "Perm natural moisturizer",
      "price": "₹299",
      "pimg": "valeriia-miller-_42NKYROG7g-unsplash.jpg"
    },
    "16": {
      "pid": "160",
      "name": "Equoda Blackmagic gold oil",
      "price": "₹899",
      "pimg": "pmv-chamara-MEsWk-dZzlI-unsplash.jpg"
    },
    "17": {
      "pid": "170",
      "name": "Cannon EF Zoom Max M2",
      "price": "₹899",
      "pimg": "camera 9.jpg"
    },
    "18": {
      "pid": "180",
      "name": "JBL Headphone Dual gaming Audio",
      "price": "₹899",
      "pimg": "pexels-cottonbro-3945667.jpg"
    },
    "19": {
      "pid": "190",
      "name": "DZ Singular 4/128 Anroid",
      "price": "₹899",
      "pimg": "4phone.jfif"
    },
    "20": {
      "pid": "200",
      "name": "Moko band multi var 5 watch",
      "price": "₹899",
      "pimg": "pepi-stojanovski-EF7BVa9BB2M-unsplash.jpg"
    }
    
}

`


const btnCart = (e, pid) => {
  if (!inCart(pid)) {
    addToCart(pid)
    console.log("added to cart")
    e.innerHTML = ` Added to cart
    <a class="ui right corner label">
      <i class="cart icon"></i>
    </a> `
    e.classList.add('blue')
    // e.parentElement.parentElement.parentElement.style.color="yellow"
  }
  else {
    cart[pid] = undefined
    removeFromCart(pid)
    console.log("removed from cart")
    e.innerHTML = 'Add to cart'
    e.classList.remove('blue')
  }
}

const icoWlist = (e, pid) => {
  if (!inWlist(pid)) {
    addToWlist(pid)
    e.children[0].classList.add("active")
  }
  else {
    wlist[pid] = undefined
    removeFromWlist(pid)
    e.children[0].classList.remove("active")
  }
}

/*-------------------------------------- */

var productList = JSON.parse(productsJSON);

// Add cards for products
document.querySelectorAll('[id^="pcard"]').forEach(e => {
  let product = productList[e.id.slice(5)]
  e.innerHTML =
    `
    <div class="doubling eight column row ui card">
        <div class="content">
          <div class="left floated meta">${product['name']}</div>
          <img class="zpimg ui avatar image" src="/res/products/${product['pimg']}">
          <div class="ui tag labels">
            <a class="ui label">
              ${product['price']}
            </a>
            <span class="right floated like">
              <a link=""  onclick="icoWlist(this,'${product['pid']}')">
                <i class="like icon"></i>
                Wishlist
              </a>
            </span>
          </div>
        </div>

        <div class="image">
          <img>
        </div>
        <div class="content">
          <div class="left floated ui star rating" data-rating="4"></div>
          <span class="right floated like">
            <i class="cart arrow down"></i>
            <div class="ui mini button" onclick="btnCart(this,'${product['pid']}')">Add to cart</div>
          </span>
        </div>
    </div>
  `

  if (inCart(product['pid'])) {
    let btn = e.querySelector('div.ui.mini');
    btn.innerHTML = ` Added to cart
    <a class="ui right corner label">
      <i class="cart icon"></i>
    </a> `
    btn.classList.add('blue')
  }

  if (inWlist(product['pid'])) {
    e.querySelector('i.like').classList.add("active")
  }

});

