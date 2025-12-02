import express, { NextFunction, Request, Response } from "express";
import {Pool} from "pg";
import dotenv from "dotenv";
import path from "path";

const app = express()
const port = 5000
dotenv.config({path: path.join(process.cwd(), '.env')});


app.use(express.json());

const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STR}`
});

const initDB = async() =>{
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    age INT,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(200) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT false,
      due_date DATE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
      )
      `)
};

initDB();
// logger middleware
const logger = (req:Request,res:Response, next:NextFunction) =>{

  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
  next();
}


app.get('/', logger,(req:Request, res:Response) => {
  res.send('Hello Friends, My name is EVO')
})

// ==> add user to users DB
app.post('/users',async(req:Request,res:Response) =>{
  const {name,email}=req.body;
  console.log("name: ",name);
  console.log("email: ",email);
  try{
    const result = await pool.query(`INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`,[name,email]);
    console.log(result);
    res.status(201).json({
      success: true,
      message: "Data Inserted Successfully",
      data: result.rows[0],
  }); 
  }catch(err:any){
    res.status(500).json({
      success:false ,
      message: err.message
    })
  }

});

// ==> Retrive data from users table
app.get('/users',async(req:Request, res:Response) =>{
  try {
    const result = await pool.query(`SELECT * FROM users`);
    console.table(result.rows);
    res.status(201).json({
      success: true,
      message: "Users data Retrived Successfully",
      data: result.rows,
  }); 

  } catch (error:any) {
    res.status(500).json({
      success:false,
      message: error.message
    })
  }
})

// ==> Retrive selected data from users table
app.get('/users/:id',async(req:Request, res:Response) =>{
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`,[req.params.id]);

    if(result.rows.length === 0){
      res.status(404).json({
        success:false,
        message:"Data not found",
      })
    }
    else{
      console.table(result.rows);
      res.status(201).json({
      success: true,
      message: "User data Retrived Successfully",
      data: result.rows[0],
  }); 
    }

  } catch (error:any) {
    res.status(500).json({
      success:false,
      message: error.message
    })
  }
})

// ==> Update data with PUT method
app.put('/users/:id',async(req:Request, res:Response) =>{
  const {name, email} = req.body;
  try {
    const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,[name,email,req.params.id]);

    if(result.rows.length === 0){
      res.status(404).json({
        success:false,
        message:"Data not found",
      })
    }
    else{
      console.table(result.rows);
      res.status(201).json({
      success: true,
      message: "User data Updated Successfully",
      data: result.rows[0],
  }); 
    }

  } catch (error:any) {
    res.status(500).json({
      success:false,
      message: error.message
    })
  }
})

// ==> DELETE method to delte date form users table
app.delete('/users/:id',async(req:Request, res:Response) =>{
  try {
    const result = await pool.query(`DELETE FROM users WHERE id = $1`,[req.params.id]);

    if(result.rowCount === 0){
      res.status(404).json({
        success:false,
        message:"Data not found",
      })
    }
    else{
      console.table(result.rows);
      res.status(201).json({
      success: true,
      message: "User data Deleted Successfully",
      data: null,
  }); 
    }

  } catch (error:any) {
    res.status(500).json({
      success:false,
      message: error.message
    })
  }
})

// TODO

// ==> Create todo 
app.post("/todos", async (req: Request, res: Response) => {
  const { user_id, title } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`,
      [user_id, title]
    );
    console.table(result.rows);
    res.status(201).json({
      success: true,
      message: "Todo created",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ==> Get all todos tabledata
app.get("/todos", async(req:Request, res:Response) =>{
  try {
    const result = await pool.query(`SELECT * FROM todos`);
    console.table(result.rows);
    res.status(200).json({
      success: true,
      message: "Data Featched form todos DB",
      data: result.rows,
    })
  } catch (err:any) {
    res.status(501).json({
      success: false,
      message: err.message,
    })
  }
})


app.use((req:Request,res:Response)=>{
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
