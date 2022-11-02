
import dbConnect from '../../util/mongo'
import Admin from '../../util/Models/Admin'
export default async function handler(req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const product = await Admin.find({}) /* find all the data in our database */
          res.status(200).json({ success: true, data: product })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const product = await Admin.insertMany(
            req.body
          ) /* create a new model in the database */
          res.status(201).json({ success: true, data: product })
        } catch (error) {
          res.status(400).json({ success: false,data:error })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }