// this function removes the html markup from the htmlString
const stripHtml = htmlString => {
  if (typeof htmlString !== "string") {
    return "Function only accepts string values";
  }
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  document.querySelector("p");
  return div.textContent || div.innerText;
};

export default stripHtml;
