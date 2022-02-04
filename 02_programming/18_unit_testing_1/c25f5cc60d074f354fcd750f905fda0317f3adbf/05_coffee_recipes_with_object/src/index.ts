export const recipeMaker = {
  coffeeRecipes: [
    {
      name: "espresso",
      ingredients: ["espresso"],
    },
    {
      name: "macchiato",
      ingredients: ["espresso", "milk foam"],
    },
    {
      name: "latte",
      ingredients: ["espresso", "milk foam", "steamed milk"],
    },
    {
      name: "cappuccino",
      ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
    },
    {
      name: "americano",
      ingredients: ["espresso", "water"],
    },
  ],
  giveRecipe(name: string): string {
    console.log(name);
    switch (name) {
      case "espresso":
        return `${name} ingredients:\n- ${["espresso"].join(",\n- ")}`;
      case "macchiato":
        return `${name} ingredients:\n- ${["espresso", "milk foam"].join(",\n- ")}`;
      case "latte":
        return `${name} ingredients:\n- ${["espresso", "milk foam", "steamed milk"].join(",\n- ")}`;
      case "cappuccino":
        return `${name} ingredients:\n- ${["espresso", "milk foam", "steamed milk", "chocolate"].join(",\n- ")}`;
      case "americano":
        return `${name} ingredients:\n- ${["espresso", "water"].join(",\n- ")}`;
      default:
        return `Sorry, ${name} does not exist on our list.`;
    }
  },
};
