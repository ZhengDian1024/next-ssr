import list from './mock'

export default (req, res) => {
    const result = list.find(item => item.id === req.query.id)
    console.log('result', result, req.query.id)
    res.status(200).json(result)
}