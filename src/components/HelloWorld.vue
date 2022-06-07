<template>
  <div class="hello">
    <h1>Test</h1>
    <InputText class="me-5" v-model="query" placeholder="Search recipe" />
    <InputNumber
      class="me-5"
      v-model="maxCalories"
      :min="0"
      placeholder="Max calories"
    />
    <Button
      label="Search"
      @click="testFunction(this.query, this.maxCalories)"
    />
    <div class="container mt-5">
      <div class="row">
        <Card
          v-for="recipe in testRecipe"
          :key="recipe.title"
          style="width: 25em"
          class="col-4 me-4 mb-4"
        >
          <template #header>
            <img :src="recipe.image" style="height: 15rem" />
          </template>
          <template #title> {{ recipe.title }} </template>
          <template #footer>
            <Button
              icon="pi pi-info-circle"
              class="p-button-secondary p-button-rounded p-button-text"
              @click="getRecipeWithId(recipe.id)"
            />
          </template>
        </Card>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="display" :modal="true"> </Dialog>
</template>

<script>
import recipeService from "@/recipeService";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
export default {
  name: "HelloWorld",
  components: {
    InputNumber,
    InputText,
    Button,
    Card,
    Dialog,
  },
  data() {
    return {
      query: null,
      maxCalories: null,
      recipes: [],
      recipe: {},
      display: false,
      testRecipe: [
        {
          title: "Lychee Smoothie",
          image: "https://spoonacular.com/recipeImages/650498-312x231.jpg",
        },
        {
          title: "Coconut Bliss Smoothie",
          image: "https://spoonacular.com/recipeImages/639728-312x231.jpg",
        },
        {
          title: "Peachy NanaNut Smoothie",
          image: "https://spoonacular.com/recipeImages/655195-312x231.jpg",
        },
        {
          title: "Skinny Green Monster Smoothie",
          image: "https://spoonacular.com/recipeImages/660227-312x231.jpg",
        },
        {
          title: "Peanut Butter Banana Smoothie",
          image: "https://spoonacular.com/recipeImages/1497523-312x231.jpg",
        },
        {
          title: "TROPICAL BANANA GREEN SMOOTHIE",
          image: "https://spoonacular.com/recipeImages/663845-312x231.jpg",
        },
        {
          title: "Green Tea Fruit Medley Smoothie",
          image: "https://spoonacular.com/recipeImages/645530-312x231.jpg",
        },
        {
          title: "Luscious Orange Cardamom Smoothie",
          image: "https://spoonacular.com/recipeImages/650485-312x231.jpg",
        },
        {
          title: "CHOCOLATE BANANA MORNING BUZZ SMOOTHIE",
          image: "https://spoonacular.com/recipeImages/638825-312x231.jpg",
        },
        {
          title: "Delicious RAW Macadamia Zucchini GREEN Smoothie",
          image: "https://spoonacular.com/recipeImages/641411-312x231.jpg",
        },
        {
          title: "Delicious Limeade Triple Berry Smoothies",
          image: "https://spoonacular.com/recipeImages/704655-312x231.jpg",
        },
      ],
    };
  },
  methods: {
    testFunction(query, maxCalories) {
      recipeService
        .getRecipesComplexSearch(query, maxCalories)
        .then((resp) => {
          this.recipes = resp.data.results;
          console.log(this.recipes);
        })
        .catch((err) => alert(err));
    },
    getRecipeWithId(id) {
      console.log(id);
      recipeService
        .getRecipeWithId(id)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((err) => alert(err));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
