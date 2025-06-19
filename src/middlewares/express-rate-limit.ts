import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 100, // limit each IP to 100 requests per windowMs
	message: 'Too many requests from this IP, please try again after 5 minutes',
	headers: true, // Send rate limit info in the headers
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false // Disable the `X-RateLimit-*` headers
});

export const loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // limit each IP to 5 login requests per windowMs
	message: 'Too many login attempts from this IP, please try again after 15 minutes'
});
