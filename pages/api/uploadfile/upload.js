

import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

var mv = require('mv');


export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async (req, res) => {
    
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
       
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            console.log(files.file[0]);
            
			 var newPath = `public/uploads/profiles/${files.file[0].originalFilename}`;
			 var oldPath = files.file[0].filepath;
			  mv(oldPath, newPath, function(err) {
				res.status(200).json({ oldPath, newPath, files,err})
				});
			
			
			
            
        })
    })
    
}