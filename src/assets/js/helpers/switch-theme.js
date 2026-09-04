export const switchTheme = (theme) => {
  const html = document.documentElement;

  if (theme === "light") {
    html.setAttribute('data-theme', "light");
  } else if (theme === "dark") {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }

  localStorage.setItem("theme", theme);
};
