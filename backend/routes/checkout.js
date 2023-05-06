const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51MycIqD2171rDQ1bM2Vo43LraZJVqjoKBvTbP7yl52C5ShEqWmsSrT7kktdyrtUAuRwrOD8HRmqXnfFOXPULc7Xr00A9NYeUOU')
router.post('/', async(req, res) => {
    let lineItems = [];
    items = req.body.items;
    items.forEach((item) => {
        lineItems.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images:[item.image],
                },
                unit_amount:item.price.$numberDecimal*100
            },
            quantity:item.quantity,
        })
    })

    // create stripe session

    const stripeSession = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url:'http://localhost:3000/success',
        cancel_url:'http://localhost:3000/cancel'
    })

    res.send(JSON.stringify({
        url: stripeSession.url
    }));

})


module.exports = router;