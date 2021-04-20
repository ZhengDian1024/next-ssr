import Cors from 'cors'
import runMiddleware from '../cors'
import list from './mock'

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

export default async function getList(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    res.status(200).json(list)
}