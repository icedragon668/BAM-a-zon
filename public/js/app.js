const render = function (inventory) { //@#$%
    $('table').html(inventory)
}
const inventory = function () {
    $('table').html('')
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (response) {
        const inventory = $(`
        <thead>
        <tr>
            <th scope="col">Quantity</th>
            <th scope="col">Stock</th>
            <th scope="col" class="col-6">Name</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
        `);
        for (i = 0; i < response.length; i++) {
            stock_quantity = response[i].stock_quantity
            product_name = response[i].product_name
            price = response[i].price
            id = response[i].id
            inventory.append(`
<tr>
<td scope="col"><input type="number" class="col" id="item${id}"></td>
<td scope="col">${stock_quantity}</td>
<td scope="col" class="col-6"> ${product_name}</td>
<td scope="col">${price}</td>
</tr>
`)
        }
        render(inventory)
    })
}

inventory()

const getLocalVal = function () {  //needs to be switched to dynamic //i think i'm dying >.<
    const scores = [
        Number($('#item1').val()),
        Number($('#item2').val()),
        Number($('#item3').val()),
        Number($('#item4').val()),
        Number($('#item5').val()),
        Number($('#item6').val()),
        Number($('#item7').val()),
        Number($('#item8').val()),
        Number($('#item9').val()),
        Number($('#item10').val())
    ]
    return scores
};

const getStock = function () {
    const availStock = []
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (res) {
        for (i = 0; i < res.length; i++) {
            availStock.push(Number(res[i].stock_quantity))
        };
        return( availStock) 
    })
}

const validate = function () { 
    let reqStock = getLocalVal()
    const availStock = []
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (res) {
        for (i = 0; i < res.length; i++) {
            availStock.push(Number(res[i].stock_quantity))
        };
    console.log("what is this?", Object.values(availStock))
    let notOk = 0
    for (i = 0; i < reqStock.length; i++) {
        if (availStock[i] >= reqStock[i]) {
        } else {
            notOk++
        }
    }
    if (notOk == 0) {
        $('#error').hide();
        getPrice(reqStock)  //error should be dynmic
    } else {
        $('#error').show()
    }
})}

const getPrice = function (reqStock) {
    const itemPrice = []
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (res) {
        for (i = 0; i < res.length; i++) {
            itemPrice.push(Number(res[i].price))
        };
        checkout(itemPrice, reqStock)
    });
}

const checkout = function (itemPrice, reqStock) {
    $('#myModal').modal('toggle')
    let cost = 0;
    for (i = 0; i < itemPrice.length; i++) {
        cost += (itemPrice[i] * reqStock[i])
    }
    $('#shoppingCart').html(`
    <h4>Your Total: </h4>
    <p><strong>$${cost}</strong></p>
    `)
}

const onClick = function (e) {
    e.preventDefault();
    validate()
    // getStock()
}

const stockUpdate = function (e) {
    e.preventDefault();
    //clear input
    // $('#item1').val('')
    // $('#item2').val('')
    // $('#item3').val('')
    // $('#item4').val('')
    // $('#item5').val('')
    // $('#item6').val('')
    // $('#item7').val('')
    // $('#item8').val('')
    // $('#item9').val('')
    // $('#item10').val('')

    //setup put request
    let reqStock = getLocalVal()
    
    //get the @#$%ING unusable array
    const stockUpdate = []
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (res) {
        for (i = 0; i < res.length; i++) {
            stockUpdate.push(Number(res[i].stock_quantity - reqStock[i]))
        };
        $.ajax({
            url: '/api/products',
            method: 'PUT'
        }).then(function (req,res){

        console.log(stockUpdate)
        })
    })
    console.log(reqStock[0])
}

$('#error').hide()
$('#submit').on('click', onClick)
$('#buy').on('click', stockUpdate)