const Joi = require("joi");

const registerValidation = Joi.object({
        name: Joi.string()
        .min(2)  // Minimum length for the name
        .max(50) // Maximum length for the name
        .pattern(new RegExp('^[a-zA-Z ]+$')) // Accepts only alphabetic characters and in between space
        .required()   //not empty
        .messages({
            'string.empty': 'Name is required',
            'string.min': 'Name must be at least {#limit} characters long',
            'string.max': 'Name must be less than or equal to {#limit} characters long',
            'string.pattern.base': 'Name must contain only letters (no numbers or special characters)'
        }),
    
    email: Joi.string()
        .email()
        .min(5)  // Minimum length for the email address
        .max(255) // Maximum length for the email address (255 is typical for email addresses)
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Email must be a valid email address',
            'string.min': 'Email must be at least {#limit} characters long',
            'string.max': 'Email must be less than or equal to {#limit} characters long'
        }),
    
        password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%?&])[A-Za-z\\d@$!%?&]{8,}$'))
        .max(100)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.pattern.base': 'Password must be strong (at least 8 characters, include uppercase, lowercase, number, and special character)',
            'string.max': 'Password must be less than or equal to {#limit} characters long'
        })
    
});

module.exports = { registerValidation };



//const arr=["dp",2,3,2,1,"jjj",33"]

//123hjgfhh9