import dotenv from 'dotenv';

const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  PORT: parseInt(process.env.PORT as string, 10) || 5000,
};
