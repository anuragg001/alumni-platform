const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, async() => {
  
await connectDB(
  "mongodb+srv://anuraggjaiswal:anuragjaiswal1122@cluster0.yfdz96s.mongodb.net/"
);

  console.log(`Server running on port ${PORT}`);
});
