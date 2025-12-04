import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userService } from "./user.service";

const createUser = async(req:Request,res:Response) =>{

  try{
    const result = await userService.createuser(req.body)
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

};

const getUsers = async(req:Request, res:Response) =>{
  try {
    const result = await userService.getUsers();
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
}

const getSelectedUser = async(req:Request, res:Response) =>{
  try {
    const result = await userService.getSelectedUser(req.params.id as string);

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
}

const updateSelectedUser = async(req:Request, res:Response) =>{
  const {name, email} = req.body;
  try {
    const result = await userService.updateSelectedUser(name,email,req.params.id as string);

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
}

const deleteSelectedUser = async(req:Request, res:Response) =>{
  try {
    const result = await userService.deleteSelectedUser(req.params.id as string);

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
}

export const userController = {
  createUser,getUsers,getSelectedUser,updateSelectedUser,deleteSelectedUser
}