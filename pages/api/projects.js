export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            name: 'test'
        },
        {
            id: 2,
            name: 'test2'
        }
    ])
}