/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:e3Y8nbwvpzst@ep-empty-water-a5s6o83d.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };