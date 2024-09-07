import { Request, Response, NextFunction } from 'express';
import asyncHandler from '@/middlewares/asyncHandlerMiddleware';
import { categoryService } from '../services/index';

// @Get: getAllCategories
export const getAllCategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    return await categoryService.getAllCategories(req, res, next);
});
// @Get: getAllCategoriesForMenu
export const getAllCategoriesForMenu = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    return await categoryService.getAllCategoriesForMenu(req, res, next);
});

// @Get: getPopularCategories
export const getPopularCategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    return await categoryService.getPopularCategories(req, res, next);
});

// @Get: getDetailedCategory
export const getDetailedCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    return await categoryService.getDetailedCategory(req, res, next);
});

// @Post: createNewCategory
export const createNewCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    return await categoryService.createNewCategory(req, res, next);
});

// @Patch: createNewCategory
export const updateCateGory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    return await categoryService.updateCateGory(req, res, next);
});
