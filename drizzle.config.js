/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_D0wQ4IsfhWtr@ep-icy-shape-a5siu2sw-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
