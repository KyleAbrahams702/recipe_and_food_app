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
    <InputNumber
      v-model="numRecipes"
      :min="0"
      :max="100"
      placeholder="Max number of recipes"
      class="me-5"
    />
    <Button
      label="Search"
      @click="testFunction(this.query, this.maxCalories, this.numRecipes)"
    />
    <div class="container mt-5">
      <Card v-for="recipe in recipes" :key="recipe.id" style="width: 25em">
        <template #header>
          <img :src="recipe.image" style="height: 15rem" />
        </template>
        <template #title> {{ recipe.title }} </template>
      </Card>
    </div>
  </div>
</template>

<script>
import recipeService from "@/recipeService";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";
export default {
  name: "HelloWorld",
  components: {
    InputNumber,
    InputText,
    Button,
    Card,
  },
  data() {
    return {
      query: null,
      maxCalories: null,
      numRecipes: null,
      recipes: [],
    };
  },
  methods: {
    testFunction(query, maxCalories, numRecipes) {
      recipeService
        .getRecipesComplexSearch(query, maxCalories, numRecipes)
        .then((resp) => {
          this.recipes = resp.data.results;
          console.log(this.recipes);
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
