let { body, check } = require("express-validator");

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes llenar este campo'),

    check('email')
    .notEmpty()
    .withMessage('Debes llenar este campo'),

    check('age')
    .isNumeric()
    .withMessage('Solo puedes ingresar números'),

    check('colors')
    .notEmpty()
    .withMessage('Debes seleccionar un color'),

    body("colors").custom((value, {req})=> {
        if(!req.body.colors){
            return false;
        }
        return true;
    })
]