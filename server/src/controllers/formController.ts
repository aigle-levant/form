import { Request, Response } from "express";
import { saveFormData } from "../services/form.service";

export const submitForm = async (req: Request, res: Response) => {
  try {
    const data = await saveFormData(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
