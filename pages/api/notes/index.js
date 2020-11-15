//db connection
import dbConnect from "../../../utils/dbConnect";


//Notes Model
const NoteModel = require('../../../models/Notes')


dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch(method){
        case "GET": 
            try {
                const Notes = await NoteModel.find({}).sort('-createdAt')
                

                res.status(200).json({success: true, data: Notes})
                
            } catch (error) {
                res.status(422).json({success: false, error})
            }
            break;


        case "POST": 
            try {
                const Notes = await NoteModel.create(req.body)

                res.status(200).json({success: true, data: Notes})
                
            } catch (error) {
                res.status(422).json({success: false, error})
            }
            break;

        default: 
            res.status(400).json({
                success: false
            })
            break;
    }

}