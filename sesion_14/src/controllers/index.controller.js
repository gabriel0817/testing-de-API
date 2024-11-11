const {Pool} = require('pg');

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'firstapi',
    password:'0000',
    port: '5432'
});



const getUsers = async (req, res)=>{
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows);
}

const getUserById = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from users where id=$1',[id]);
    res.json(response.rows);
}

const deleteUser = async (req, res)=>{
    const id = req.params.id
    const response = await pool.query('delete from users where id=$1',[id]);
    res.json(`el usuario: ${id} ha sido eliminado`);
    //res.send('el usuario: '+  req.params.id +' ha sido eliminado' );
}

const createUser = async (req, res)=>{
    const {name,email} = req.body;

    const response = await pool.query('insert into users(name,email) values($1,$2)',[name,email]);
    console.log(response);
    res.json({
        menssage:'el usuario ha sido creado',
        body:{
            user:{name,email}
        }
    })

    res.send('el usuario ha sido creado');
}


module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser
};