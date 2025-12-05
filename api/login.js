export default async function handler(req, res) {
    // 只允许 POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { password } = req.body;

        // 验证密码
        const correctPassword = 'ruiyate8868';

        if (password === correctPassword) {
            return res.status(200).json({ 
                success: true,
                message: 'Login successful'
            });
        } else {
            return res.status(401).json({ 
                success: false,
                message: '密码错误，请重试'
            });
        }
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: 'Internal Server Error'
        });
    }
}
