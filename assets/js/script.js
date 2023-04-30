let theme = "dark";
const mod = document.querySelector(".mod");
const themeSet = function (theme) {
  if (theme === "Black") {
    document.documentElement.style.setProperty("--bg-color", "#FFFFFF");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--yello-color", "#FA00FF");
    document.documentElement.style.setProperty("--pink-color", "#FFF500");
    mod.classList.remove("bx-sun")
    mod.classList.add("bx-moon")
  } else if (theme === "White") {
    document.documentElement.style.setProperty("--bg-color", "#000000");
    document.documentElement.style.setProperty("--text-color", "#FFFFFF");
    document.documentElement.style.setProperty("--yello-color", "#FFF500");
    document.documentElement.style.setProperty("--pink-color", "#FA00FF");
    mod.classList.add("bx-sun")
    mod.classList.remove("bx-moon")
  }

  document.documentElement.style.setProperty(
    "--frame1",
    `url(/assets/img/${theme}/home-img.svg)`
  );
  document.documentElement.style.setProperty(
    "--big-cross1",
    `url(/assets/img/${theme}/Icons/big-cross-2.svg)`
  );
  document.documentElement.style.setProperty(
    "--down-small-arrow",
    `url(/assets/img/${theme}/Icons/down-small-arrow.svg)`
  );
  document.documentElement.style.setProperty(
    "--right-small-arrow",
    `url(/assets/img/${theme}/Icons/right-small-arrow.svg)`
  );
  document.documentElement.style.setProperty(
    "--img1",
    `url(/assets/img/${theme}/section-up-dark.svg)`
  );
  document.documentElement.style.setProperty(
    "--img3",
    `url(/assets/img/${theme}/section-down-dark.svg)`
  );
  document.documentElement.style.setProperty(
    "--down-big-arrow",
    `url(/assets/img/${theme}/Icons/down-big-arrow.svg)`
  );
  document.documentElement.style.setProperty(
    "--right-small-arrow",
    `url(/assets/img/${theme}/Icons/right-small-arrow.svg)`
  );
  document.documentElement.style.setProperty(
    "--big-cross1",
    `url(/assets/img/${theme}/Icons/big-cross.svg)`
  );
  document.documentElement.style.setProperty(
    "--big-cross1",
    `url(/assets/img/${theme}/Icons/big-cross.svg)`
  );
  document.documentElement.style.setProperty(
    "--img2",
    `url(/assets/img/${theme}/home-back.svg)`
  );
};

themeSet("White");

mod.addEventListener("click", function () {
  if (theme === "dark") {
    theme = "white";
    themeSet("Black");
  } else if (theme === "white") {
    theme = "dark";
    themeSet("White");
  }
});
