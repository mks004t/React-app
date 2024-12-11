import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import oracledb from 'oracledb';
import authRoutes from './routes/auth.js';
import conveyorRoutes from './routes/conveyors.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Oracle connection pool
async function initialize() {
  try {
    await oracledb.createPool({
      user: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECT_STRING,
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0
    });
    console.log('Oracle DB pool initialized');
  } catch (err) {
    console.error('Error initializing Oracle pool:', err);
    process.exit(1);
  }
}

initialize();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/conveyors', conveyorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  try {
    await oracledb.getPool().close(10);
    process.exit(0);
  } catch (err) {
    console.error('Error closing Oracle pool:', err);
    process.exit(1);
  }
});