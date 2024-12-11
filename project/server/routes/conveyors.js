import express from 'express';
import oracledb from 'oracledb';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get conveyor status
router.get('/status', authenticateToken, async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute(
      `SELECT * FROM conveyor_status`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

// Update conveyor settings
router.put('/settings/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { speed, temperature } = req.body;
  
  let connection;
  try {
    connection = await oracledb.getConnection();
    await connection.execute(
      `UPDATE conveyor_settings 
       SET speed = :speed, temperature = :temperature 
       WHERE conveyor_id = :id`,
      [speed, temperature, id]
    );
    
    await connection.commit();
    res.json({ message: 'Settings updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

export default router;