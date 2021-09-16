import nc from 'next-connect';
import upload  from '../../../utils/upload';


const appProducts = nc()    
    .use(upload('products'))
    .post ((req, res ) => {

        res.json({status: "ok"})
    })

    .patch(async (req, res) => {
        throw new Error('Not implemented')
    });

export default appProducts;    

