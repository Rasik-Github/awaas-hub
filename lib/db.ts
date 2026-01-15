// lib/db.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
if (!uri) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

// Cache for serverless environments (Vercel/Next.js)
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    connectTimeoutMS: 10000,
    serverSelectionTimeoutMS: 30000,
    monitorCommands: true
  });

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }

  const db = client.db("realestate");

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function getDatabase(): Promise<Db> {
  const { db } = await connectToDatabase();
  return db;
}

export async function getClient(): Promise<MongoClient> {
  const { client } = await connectToDatabase();
  return client;
}
