// Demo stats API for Vercel deployment
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Demo stats matching the sample data - in production, query real database
    const stats = {
      total: 3,
      today: 1, // Sarah Johnson from 2h ago  
      week: 3   // All 3 demo emails from this week
    };

    res.json({ 
      success: true, 
      stats,
      message: 'Demo stats showing sample data. Connect real database for live tracking.'
    });
  } catch (error) {
    console.error('Stats API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      success: false 
    });
  }
}
