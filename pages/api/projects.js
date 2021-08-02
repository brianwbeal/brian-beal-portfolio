export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            name: 'Brian'
        },
        {
            id: 2,
            name: 'Jenni'
        }
    ])
}