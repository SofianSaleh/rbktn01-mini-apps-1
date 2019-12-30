const router = require('express').Router()
const User = require('../userSchema')

router.route('/add').post((req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        phone: req.body.phone,
        cardNumber: req.body.cardNumber,
        expiration: req.body.expiration,
        cvv: req.body.cvv,
        Billing_address: req.body.Billing_address
    })
    newUser.save()
    .then(() => res.json('User Saved'))
    .catch((err) => res.status(400).json(`Error ${err}`))
})

module.exports = router;