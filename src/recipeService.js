import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.spoonacular.com/recipes",
  withCredentials: false,
  params: {
    apiKey: "6088b81738644532a988617a9ad5cd38",
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getRecipesComplexSearch(query, maxCalories, numRecipes) {
    return apiClient.get(
      `/complexSearch?query=${query}&maxCalories=${maxCalories}&number=${numRecipes}`
    );
  },
  getRecipeByIngredients(ingredients) {
    return apiClient.get(`/findByIngredients?ingredients=${ingredients}`);
  },
  getRecipeWithId(id) {
    return apiClient.get(`${id}/analyzedIntructions`);
  },
  getRecipeSummary(id) {
    return apiClient.get(`${id}/summary`);
  },
  getRecipePriceBreakdown(id) {
    return apiClient.get(`${id}/priceBreakdownWidget`);
  },
};
