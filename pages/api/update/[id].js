//db connection
import dbConnect from "../../../utils/dbConnect";


//Notes Model
const NoteModel = require('../../../models/Notes')


dbConnect();


export default async (req, res) =>  {
    const {
        method,
        query: { id }
    } = req;

    switch(method){
        case "GET": 
            try {
                const notes = await NoteModel.findById(id)
                
                if(!notes){
                    res.status(422).json({success: false});
                }
                
                res.status(200).json({success: true, data: notes});

            } catch (error) {
                res.status(422).json({success: false});
            }
            break;

        case "PUT": 
            try {
                const notes = await NoteModel.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })

                if(!notes){
                    res.status(422).json({success: false})
                }

                res.status(200).json({success: true, data: notes})
                
            } catch (error) {
                res.status(422).json({success: false});
                
            }
            break;
        
        case "DELETE":
            try {
                const notes = await NoteModel.deleteOne({_id: id})

                if(!notes){
                    res.status(422).json({success: false})
                }

                res.status(200).json({success: true, data: {}})

                
            } catch (error) {
                res.status(422).json({success: false})
            }
            break;
            
        default:
            res.status(422).json({success: false})
            break;
    }

}