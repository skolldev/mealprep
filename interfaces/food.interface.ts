import { INutritionInfo } from "./nutriton-info.interface";

export interface IFood {
  name: string;
  nutritionPer100g: INutritionInfo;
  servingName: string;
  servingSize: number;
}
