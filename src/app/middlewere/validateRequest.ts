import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodEffects } from "zod";

const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // console.log("this is from validate requiest", req.body);
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
