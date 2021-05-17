import { IFood } from "./food.interface";
import { INutritionInfo } from "./nutriton-info.interface";

export interface IRecipe {
  name: string;
  foods: IRecipePart[];
  nutrition: INutritionInfo;
}

export interface IRecipePart {
  food: IFood;
  servings: number;
}
