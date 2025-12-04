import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
const auth = (...role: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(500).json({ message: "You are not Allowed" });
      }
      const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;
      req.user = decoded;
      // admin
      if (role.length && !role.includes(decoded.role as string)) {
        return res.status(500).json({
          error: "Unauthorized!!!",
        })
      }
      next();
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message
      })
    }
  }
}

export default auth;