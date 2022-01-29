import Joi from 'joi'

export const CarValidators = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яЁёіІїЇґ]{1,20}$')).required().messages({
        'string.empty': '"model" не може бути пустим',
        'string.pattern.base': 'Тільки букви мін 1 макс 20'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base': 'Ціна може бути від 0 до 1 000 000',
        'number.min': 'Ціна має бути рівною 0 або більшою',
        'number.max': 'Ціна не може бути більша за 1 000 000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Рік може бути від 1990 до тееперішнього'
    })
})