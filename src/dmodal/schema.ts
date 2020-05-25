const Joi = require('joi');

export const schemaA = Joi.object().keys({
			playerId: Joi.number().positive().integer().min(1).max(5500).required(),
			datetime: Joi.date().required(),
			amount: Joi.number().positive().integer().min(10).max(2500).required()
});

export const schemaB = Joi.object().keys({
			playerId: Joi.number().positive().integer().min(1).max(5500).required(),
			time: Joi.date().required(),
			amount: Joi.number().positive().integer().min(10).max(2500).required()
});

export const schemaC = Joi.object().keys({
			playerid: Joi.number().positive().integer().min(1).max(5500).required(),
			page: Joi.number().positive().integer().min(1).max(100).optional()
});




