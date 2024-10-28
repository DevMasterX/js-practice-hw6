const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
console.log("🚀  ingredientsList:", ingredientsList);

const ingredientItems = ingredients.map((ingredient) => {
  const listItemEL = document.createElement("li");
  console.log("🚀  listItemEL:", listItemEL);
  listItemEL.textContent = ingredient;
  listItemEL.classList.add("item");
  return listItemEL;
});

ingredientsList.append(...ingredientItems);
