const faqItems = Array.from(document.querySelectorAll("#faq .cs-question"));
faqItems.forEach((item) => {
  const onClick = () => {
    item.parentNode.classList.toggle("active");
  };

  item.addEventListener("click", onClick);
});
