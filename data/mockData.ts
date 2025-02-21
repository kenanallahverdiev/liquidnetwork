export const CATEGORIES = [
  { icon: "plane", percent: 30, name: "Travel", amount: 1297.55 },
  { icon: "hamburger", percent: 20, name: "Food", amount: 865.03 },
  { icon: "shopping-basket", percent: 10, name: "Shopping", amount: 432.52 },
  { icon: "briefcase", percent: 20, name: "Business", amount: 865.03 },
  { icon: "ellipsis-h", percent: 20, name: "Other", amount: 865.03 },
];

export const SPENDING_GOALS = [
  {
    id: "1",
    name: "Food",
    icon: "fast-food-outline",
    currentAmount: 460,
    targetAmount: 500,
    progress: 92,
    warning: "You're almost out of budget!",
  },
  {
    id: "2",
    name: "Shopping",
    icon: "cart-outline",
    currentAmount: 225,
    targetAmount: 500,
    progress: 45,
  },
];

export const USER_DATA = {
  name: "Kenan",
  avatar: require("@/assets/images/avatar.jpg"),
  availableFunds: 3234,
};
