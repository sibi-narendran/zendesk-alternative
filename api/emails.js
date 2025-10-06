// Using JSONBin.io as a simple cloud database for Vercel deployment
const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/676250a7ad19ca34f8c97b45'; // Create your own at jsonbin.io
const JSONBIN_KEY = '$2a$10$85nT.r4FjB4Wd3Aw9LPiKeFQF2qVpFP.6OLsA6Rv0EQZJF9.VJqZq'; // Replace with your key

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      // Submit new email
      const { email } = req.body;
      
      // Validate email
      if (!email || !email.includes('@')) {
        return res.status(400).json({ 
          error: 'Valid email address is required',
          success: false 
        });
      }

      // Fetch current data
      const fetchResponse = await fetch(JSONBIN_URL + '/latest', {
        headers: { 'X-Master-Key': JSONBIN_KEY }
      });
      
      let emailStorage = [];
      if (fetchResponse.ok) {
        const data = await fetchResponse.json();
        emailStorage = data.record?.emails || [];
      }

      const emailData = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        email: email.toLowerCase().trim(),
        timestamp: new Date().toISOString(),
        ip_address: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
        user_agent: req.headers['user-agent'] || 'unknown'
      };

      // Add to storage
      emailStorage.push(emailData);
      
      // Save back to JSONBin
      const updateResponse = await fetch(JSONBIN_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': JSONBIN_KEY
        },
        body: JSON.stringify({ emails: emailStorage })
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to save to database');
      }
      
      console.log(`New email saved: ${emailData.email} at ${emailData.timestamp}`);
      
      return res.status(201).json({ 
        success: true, 
        message: 'Email saved successfully',
        id: emailData.id
      });
    }

    if (req.method === 'GET') {
      // Get all emails (admin)
      const fetchResponse = await fetch(JSONBIN_URL + '/latest', {
        headers: { 'X-Master-Key': JSONBIN_KEY }
      });
      
      let emailStorage = [];
      if (fetchResponse.ok) {
        const data = await fetchResponse.json();
        emailStorage = data.record?.emails || [];
      }
      
      return res.json({ 
        success: true, 
        emails: emailStorage.reverse(), // newest first
        total: emailStorage.length
      });
    }

    if (req.method === 'DELETE') {
      // Clear all emails (admin)
      const fetchResponse = await fetch(JSONBIN_URL + '/latest', {
        headers: { 'X-Master-Key': JSONBIN_KEY }
      });
      
      let deletedCount = 0;
      if (fetchResponse.ok) {
        const data = await fetchResponse.json();
        deletedCount = data.record?.emails?.length || 0;
      }
      
      // Save empty array
      const updateResponse = await fetch(JSONBIN_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': JSONBIN_KEY
        },
        body: JSON.stringify({ emails: [] })
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to clear database');
      }
      
      return res.json({ 
        success: true, 
        message: `Deleted ${deletedCount} email records`,
        deletedCount
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
    
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      success: false 
    });
  }
}
