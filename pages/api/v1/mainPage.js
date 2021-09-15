const pgp = require('pg-promise')({
    noWarnings: true
})

const user = 'gdwsmbxvlcojau'
const pass = '63c2e09bda8f19a4d1e606b783f63931545e886779ec5479cd5a8769e04367c5'
const host = 'ec2-3-219-111-26.compute-1.amazonaws.com'
const data = 'd3d3l0dic9psnm'
const port = '5432'


const db = pgp(`postgres//${user}:${pass}@${host}:${port}/${data}`)

export default async function handler(req, res) {

    try {
    
        const product = await db.one('select * from products')

        res.status(200).json(product)

    } catch (error) {
        // console.error(error);
        res.status(500).send({message: ["Error creating on the server"], error: error})
    }
}

        
  

  