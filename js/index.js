let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://github.com/JoyShaheb/shopping-cart-js/blob/starter-files/images/img-1.jpg?raw=true",
  },
  {
    id: "ioytrhndcv",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://github.com/JoyShaheb/shopping-cart-js/blob/starter-files/images/img-2.jpg?raw=true",
  },
  {
    id: "wuefbncxbsn",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://github.com/JoyShaheb/shopping-cart-js/blob/starter-files/images/img-3.jpg?raw=true",
  },
  {
    id: "thyfhcbcv",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://github.com/JoyShaheb/shopping-cart-js/blob/starter-files/images/img-4.jpg?raw=true",
  },
  {
    id: "thyfhcbcv",
    name: "Casual shoe",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://shopping-cart-js-joyshaheb.vercel.app/images/img-6.png",
  },
  {
    id: "thyfhcbcv",
    name: "Black Suit",
    price: 450,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://shopping-cart-js-joyshaheb.vercel.app/images/img-7.png",
  },
  {
    id: "thyfhcbcv",
    name: "Mens Tie",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://shopping-cart-js-joyshaheb.vercel.app/images/img-5.png",
  },
  {
    id: "thyfhcbcv",
    name: "Polo Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://shopping-cart-js-joyshaheb.vercel.app/images/img-8.png",
  },
  {
    id: "thyfhcbcv",
    name: "Denim Shirt",
    price: 85,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://shopping-cart-js-joyshaheb.vercel.app/images/img-9.png",
  },
  {
    id: "thyfhcbcv",
    name: "Denim Pants",
    price: 120,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://shopping-cart-js-joyshaheb.vercel.app/images/img-10.png",
  },
  {
    id: "thyfhcbcv",
    name: "Basic Cap",
    price: 35,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://shopping-cart-js-joyshaheb.vercel.app/images/img-11.png",
  },
  {
    id: "thyfhcbcv",
    name: "Leather Boots",
    price: 350,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://shopping-cart-js-joyshaheb.vercel.app/images/img-12.png",
  },
];

const mainContainer = qS(".main-container");
const cardContainer = qS(".card-container");
const selectContainer = qS(".select-cards");
const storeCards = qS(".store-cards");
const badge = qS(".badge");
const fragment = document.createDocumentFragment();
let element;
let flag = true;

generateCards(shopItemsData);
mainContainer.addEventListener("click", addFunctionalityOnCards);

badge.innerText = 0;

// selectContainer.style.display = "none";

// get element by class name
function qS(selector) {
  return document.querySelector(selector);
}

function handleShopItemFunctionality(getElement) {
  const getClassName = getElement.classList[0];
  switch (getClassName) {
    case "shopping":
      cardContainer.style.display = "none";
      selectContainer.style.display = "block";
      break;
    case "home-button":
      flag = true;
      cardContainer.style.display = "flex";
      selectContainer.style.display = "none";
      break;
  }
}

function addFunctionalityOnCards(event) {
  const currentElement = event.target;
  if (currentElement.classList[0] === "increase" && flag) {
    handleIncreaseFunctionality(currentElement);
  } else if (currentElement.classList[0] === "decrease") {
    handleFunctionality(currentElement);
  } else if (
    currentElement.classList[0] === "shopping" ||
    currentElement.classList[0] === "home-button"
  ) {
    flag = false;
    element = currentElement;
    handleShopItemFunctionality(element);
  } else {
    return;
  }
}

function handleIncreaseFunctionality(getElement) {
  const getParentElement = getElement.closest(".cards");
  const cloneCard = getParentElement.cloneNode(true);
  const ProductQuantity = getParentElement.querySelector(".quantity");

  const cardsLength = storeCards.querySelectorAll(".cards").length + 1;

  badge.innerText = cardsLength;
  storeCards.append(cloneCard);
}

// generate cards
function generateCards(shopItemsData) {
  let clutter = "";

  shopItemsData.forEach((element) => {
    clutter += ` <div
    class="cards w-[150px] h-[210px] bg-gray-900 rounded-md overflow-hidden"
  >
    <div class="img-container w-full h-[120px]">
      <img
        class="w-full h-full object-cover object-center"
        src="${element.img}"
        alt=""
      />
    </div>
    <div class="about-product w-full h-[100px] p-1">
      <div class="product-name text-xs font-medium text-white py-1 px-2">
        ${element.name}
      </div>
      <div
        class="product-details text-[10px] font-medium text-white px-2"
      >
        ${element.desc}
      </div>
      <div
        class="w-full flex text-white text-xs justify-between px-2 py-1"
      >
        <div class="text-sm">
          $ <span class="price">${element.price}</span>
        </div>
        <div class="quantity-container flex gap-2 text-sm">
          <div class="decrease controller text-red-600 cursor-pointer">-</div>
          <div class="quantity item-quantity">0</div>
          <div class="increase controller text-green-400 cursor-pointer">+</div>
        </div>
      </div>
    </div>
  </div>`;
  });

  cardContainer.innerHTML = clutter;
}
