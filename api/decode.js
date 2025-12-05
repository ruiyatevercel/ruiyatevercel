export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { data } = req.body;

        if (data === undefined || data === '' || isNaN(data)) {
            return res.status(400).json({ error: 'Invalid input' });
        }

        let result = parseFloat(data);
        for (let i = 0; i < 7; i++) {
            result = (result * 823 + 778899) % 31234;
        }

        return res.status(200).json({
            output: Math.round(result)
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
