const inCart = (pid) => {
    if (cart[pid] === undefined) return 0
    else return 1
}

const addToCart = (pid) => {
    cart[pid] = new Date().toLocaleString()
    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeFromCart = (pid) => {
    delete cart[pid]
    localStorage.setItem('cart', JSON.stringify(cart))
}

const inWlist = (pid) => {
    if (wlist[pid] === undefined) return 0
    else return 1
}

const addToWlist = (pid) => {
    wlist[pid] = new Date().toLocaleString()
    localStorage.setItem('wlist', JSON.stringify(wlist))
    console.log("added to wishlist")
}
const removeFromWlist = (pid) => {
    delete wlist[pid]
    localStorage.setItem('wlist', JSON.stringify(wlist))
    console.log("removed from wishlist")
}