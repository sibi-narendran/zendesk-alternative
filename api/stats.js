// Using JSONBin.io as a simple cloud database for Vercel deployment
const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/676250a7ad19ca34f8c97b45'; // Create your own at jsonbin.io
const JSONBIN_KEY = '$2a$10$85nT.r4FjB4Wd3Aw9LPiKeFQF2qVpFP.6OLsA6Rv0EQZJF9.VJqZq'; // Replace with your key

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
    // Fetch current data from JSONBin
    const fetchResponse = await fetch(JSONBIN_URL + '/latest', {
      headers: { 'X-Master-Key': JSONBIN_KEY }
    });
    
    let emailStorage = [];
    if (fetchResponse.ok) {
      const data = await fetchResponse.json();
      emailStorage = data.record?.emails || [];
    }

    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const stats = {
      total: emailStorage.length,
      today: emailStorage.filter(email => 
        email.timestamp.split('T')[0] === today
      ).length,
      week: emailStorage.filter(email => 
        new Date(email.timestamp) > oneWeekAgo
      ).length
    };

    res.json({ success: true, stats });
  } catch (error) {
    console.error('Stats API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      success: false 
    });
  }
}
