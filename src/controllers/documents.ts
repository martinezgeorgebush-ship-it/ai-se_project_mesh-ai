import type { Request, Response } from "express";


export const uploadDocument = (_req:Request, res:Response):void => {
res.status(201).json({
    success:true,
    data:{},
    error:null
});
};

export const getDocuments =(_req:Request, res: Response):void=>{
    res.status(200).json({
        success:true,
        data:{},
        error:null
    });
};

export const getDocumentById = (_req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {},
    error: null,
  });
};

export const deleteDocument = (_req: Request, res: Response): void => {
  res.status(204).send();
};