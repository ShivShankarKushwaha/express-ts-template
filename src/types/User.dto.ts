import Joi from 'joi';

export const userSignupPayload = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
	age: Joi.number().integer().optional()
});

export const userLoginPayload = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required()
});

export interface userAuthPayload {
	_id: string;
	name: string;
	email: string;
}
