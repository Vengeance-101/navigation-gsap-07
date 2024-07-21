document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const toggle = document.querySelector(".toggle");

  const close = document.querySelector(".close-btn");
  let isOpen = true;

  const tl = gsap.timeline({ paused: true });
  tl.to(menu, {
    duration: 0.3,
    opacity: 1,
  });
  tl.to(
    menu,
    {
      duration: 1,
      ease: "power3.inOut",
      clipPath: "polygon(49.75%  0%,50.25% 0%,50.25% 100%,49.75%  100% )",
    },
    "-=0.3"
  );

  tl.to(menu, {
    duration: 1,
    ease: "power3.inOut",
    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
  });

  tl.to(
    ".divider",
    {
      duration: 1,
      ease: "power4.inOut",
      height: "100%",
    },
    "-=0.75"
  );

  toggle.addEventListener("click", function () {
    if (isOpen) {
      tl.play();
    }
    isOpen = !isOpen;
  });

  close.addEventListener("click", function () {
    if (isOpen == false) {
      tl.reverse();
    }
    isOpen = !isOpen;
  });
});
