export const collectionsImages = import.meta.glob(
  "/src/assets/img/collections/**/*.{jpg,jpeg,png,gif}",
  { eager: true },
);

export const avatarsImages = import.meta.glob(
  "/src/assets/img/avatars/**/*.{jpg,jpeg,png,gif}",
  { eager: true },
);

export const gamesImages = import.meta.glob(
  "/src/assets/img/games/**/*.{jpg,jpeg,png,gif}",
  { eager: true },
);

export const articlesImages = import.meta.glob(
  "/src/assets/img/articles/**/*.{jpg,jpeg,png,gif}",
  { eager: true },
);

export const walkthroughsImages = import.meta.glob(
  "/src/assets/img/walkthroughs/**/*.{jpg,jpeg,png,gif}",
  { eager: true },
);
