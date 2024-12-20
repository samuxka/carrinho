// Quais ações meu carrinho pode fazer?

// Adicionar um item
async function addItem(userCart, item){
    userCart.push(item)
}

// Remover um item
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if(indexFound == -1){
        return
    }

    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
    }
}

// Deletar um item
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// Calcular o total
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}

async function displayCart(userCart){
    console.log("========== * Shopee cart list * ==========")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal =  R$${item.subtotal()}`)
    })
}

export { addItem, removeItem, deleteItem, calculateTotal, displayCart }