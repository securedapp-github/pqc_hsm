import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Proxy endpoint for contact form
app.post('/api/contact', async (req, res) => {
    console.log('🚀 Proxying contact request to CRM...');
    try {
        const response = await fetch('https://crm-be.securedapp.io/api/public/project-inquiry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('❌ Proxy Error:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`\n✅ QuantumVault Server running on port ${PORT}`);
    console.log(`📡 Proxying /api/contact -> https://crm-be.securedapp.io/api/public/project-inquiry\n`);
});
