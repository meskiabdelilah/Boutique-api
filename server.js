import "dotenv/config";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";

async function startServer() {
  try {
    await connectDB();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("server startup failed", error.message);
    process.exit(1);        
  }
}

startServer();