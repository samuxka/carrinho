import createItem from "./services/item.js"
import * as cartService from './services/cart.js'

const myCart = []
const myWhishList = []

const item1 = await createItem("Ryzen 5 5600G", 854.47, 1)
const item2 = await createItem("B550M-A", 755, 3)
const item3 = await createItem("16GB RAM DDR4 3200MHZ", 129.33, 2)
const item4 = await createItem("SSD NVME 1TB 6000mb/s", 449.89, 1)
const item5 = await createItem("MSI MAG 650W 80plus", 289.99, 1)
const item6 = await createItem("Corsair 4000d Branco", 489.99, 1)
const item7 = await createItem("RX6600XT 8GB", 1649.99, 1)

// Adicionei itens
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)
// await cartService.addItem(myCart, item4)
// await cartService.addItem(myCart, item5)
// await cartService.addItem(myCart, item6)
// await cartService.addItem(myCart, item7)
await cartService.displayCart(myCart)

// Deletei 2 itens
// await cartService.deleteItem(myCart, item1.name)
// await cartService.deleteItem(myCart, item2.name)

await cartService.removeItem(myCart, item2)

console.log("Total R$")
await cartService.calculateTotal(myCart)