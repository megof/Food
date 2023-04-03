export const navBarColor = () => {
  const $navbar = document.getElementById("navbar");

  window.addEventListener("DOMContentLoaded", () => {
    if (window.scrollY >= 32) {
      $navbar.classList.add("navbar-scroll");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 32) {
      $navbar.classList.add("navbar-scroll");
    } else {
      $navbar.classList.remove("navbar-scroll");
    }
  });
};

export const wavesHidden = () => {
  const $waves = document.getElementById("waves");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $waves.classList.add("waves-hidden");
      }
    });
  };

  const observe = new IntersectionObserver(cb, { threshold: 0.8 });
  observe.observe($waves);
};
