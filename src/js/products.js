let productsJSON = `
{
    "1": {
        "pid": "UVcgTm90ZWJvb2sgNSBNYXg",
        "name": "QW Notebook 5 Max",
        "price": "₹38,999",
        "pimg": "1.jpg"
    },
    "2": {
        "pid": "UVcgTm90ZWJvb2sgNSBNYXg",
        "name": "Wivi Pro 650 Mobile",
        "price": "₹8,999",
        "pimg": "2phone.jfif"
    },
    "3": {
        "pid": "UVcgTm90ZWJvb2sgNSBNYXg",
        "name": "NG Resso earphone neckband",
        "price": "₹699",
        "pimg": "qw_neckband_g220.jpg"
    },
    "4": {
        "pid": "UVcgTm90ZWJvb2sgNSBNYXg",
        "name": "WLR Pro camera",
        "price": "₹18,999",
        "pimg": "camera 1.jpg"
    },
    "5": {
        "pid": "UVcgTm90ZWJvb2sgNSBNYXg",
        "name": "Erisso Navy Sneakers",
        "price": "₹499",
        "pimg": "hipster-958805_1920.jpg"
    },
    "6": {
        "pid": "UVcgTm90ZWJvb2sgNSBNYXg",
        "name": "PUMA Jaro SQ Slippers",
        "price": "₹699",
        "pimg": "5shoe.jfif"
    },
    "7": {
        "pid": "UVcgTm90ZWJvb2sgNSBNYXg",
        "name": "Puma Evo comet Black shoes",
        "price": "₹899",
        "pimg": "3shoe.jfif"
    },
    "8": {
        "pid": "UVcgTm90ZWJvb2sgNSBNYXg",
        "name": "Grano NXT Camera 450A/W",
        "price": "₹38,999",
        "pimg": "Trigger-Unisex-Shoes (3).jfif"
    }
}

`

var productList = JSON.parse(productsJSON);
console.log(productList);
// Add cards for products
document.querySelectorAll(`[id^="pcard"]`).forEach(e=>{
    let product=productList[e.id.slice(5)]
    e.innerHTML=
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
              <a link="">
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
            <div class="ui mini button">Add to cart</div>
          </span>
        </div>
      </div>
`
console.log(e.id.slice(5))
console.log(productList["1"]["pid"])
});

