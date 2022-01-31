type CardType = {
  name: string;
  type: string | string[];
  cost: number;
  damage: null | number;
  rare: boolean;
  // Code your type alias here
};

// Uncomment all the cards below to help you rewrite CardType

// const card1: CardType = {
//   name: "Blue Knight",
//   type: "Creature",
//   cost: 3,
//   damage: Math.floor(Math.random() * 15 + 1),
//   rare: false,
// };

// const card2: CardType = {
//   name: "Shocking Gamble",
//   type: "Sorcery",
//   cost: 4,
//   damage: Math.floor(Math.random() * 10 + 1),
//   rare: true,
// };

// const card3: CardType = {
//   name: "Rescue",
//   type: "Instant",
//   cost: 1,
//   damage: null,
//   rare: false,
// };

// const card4: CardType = {
//   name: "Training mannequin",
//   type: ["Creature", "Artifact"],
//   cost: 2,
//   damage: Math.floor(Math.random() * 5 + 1),
//   rare: false,
// };

export { CardType };
