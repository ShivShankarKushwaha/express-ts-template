import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
	salt: string;
}

const schema = new Schema<User>({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	salt: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
});

export const User = mongoose.model<User>('User', schema);
