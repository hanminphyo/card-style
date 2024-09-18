let products = [
  {
    id: 1,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      " Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. ",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 2,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      " Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. ",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 3,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. ",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 4,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
  {
    id: 5,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 6,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
];

const container = document.querySelector(".container");
function displayCard() {
  products.forEach((product) => {
    let div = document.createElement("div");
    div.classList.add("col-md-4", "mt-3", "px-3");

    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.classList.add("card-img", "p-2");
    image.src = product.image;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = product.title;

    let price = document.createElement("p");
    price.classList.add("card-text", "fw-bold", "text-danger");
    price.textContent = `$ ${product.price}`;

    let description = document.createElement("p");
    description.classList.add("description", "card-text", "lh-base", "fs-6");
    description.textContent = product.description;

    let category = document.createElement("p");
    category.classList.add("card-text", "description");
    category.textContent = `Category: ${product.category}`;

    let button = document.createElement("button");
    button.classList.add("bg-info", "text-white", "px-4", "py-2");
    button.textContent = "Order";

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(description);
    cardBody.appendChild(category);
    cardBody.appendChild(button);

    card.appendChild(image);
    card.appendChild(cardBody);

    div.appendChild(card);
    container.appendChild(div);
  });
}
displayCard();
