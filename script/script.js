const cardItems = [
  {
    id: 1,
    title: "National Emergency Number",
    subTitle: "National Emergency",
    helpline: 999,
    category: "All",
    icon_url: "emergency.png",
  },
  {
    id: 2,
    title: "Police Helpline Number",
    subTitle: "Police",
    helpline: 999,
    category: "All",
    icon_url: "police.png",
  },
  {
    id: 3,
    title: "Fire Service Number",
    subTitle: "Fire Service ",
    helpline: 999,
    category: "All",
    icon_url: "emergency.png",
  },
  {
    id: 4,
    title: "National Emergency Number",
    subTitle: "National Emergency",
    helpline: 109,
    category: "All",
    icon_url: "emergency.png",
  },
  {
    id: 5,
    title: "National Emergency Number",
    subTitle: "National Emergency",
    helpline: 999,
    category: "All",
    icon_url: "emergency.png",
  },
  {
    id: 6,
    title: "National Emergency Number",
    subTitle: "National Emergency",
    helpline: 100999,
    category: "All",
    icon_url: "emergency.png",
  },
  {
    id: 7,
    title: "National Emergency Number",
    subTitle: "National Emergency",
    helpline: 999,
    category: "All",
    icon_url: "emergency.png",
  },
  {
    id: 8,
    title: "National Emergency Number",
    subTitle: "National Emergency",
    helpline: 109,
    icon_url: "emergency.png",
  },
  {
    id: 9,
    title: "National Emergency Number",
    subTitle: "National Emergency",
    helpline: 999,
    category: "All",
    icon_url: "emergency.png",
  },
];
const cartContainerDiv = document.getElementById("card-container");
function showCards() {
  cartContainerDiv.innerHTML = "";
  cardItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "md:w-[310px]",
      "w-full",
      "mx-auto",
      "max-w-[430px]",
      "bg-[#FFFFFF]",
      "p-[15px]",
      "shadow"
    );
    card.innerHTML = `
        
          <div class="flex place-content-between items-center mb-4">
            <img class="w-[60px]" src="assets/${item.icon_url}" alt="">
            <img onclick="handleCount()" class="pointer w-[24px] h-[24px] " src="assets/heart-outline.png" alt="">
          </div>
          <div>
          <h3 class="font-bold text-[20px]">${item.title}</h3>
          <p class="mb-4">${item.subTitle}</p>
          <h3  class="font-bold text-[20px]">${item.helpline}</h3>
          <button class="mb-4 bg-[#F2F2F2] px-4 rounded-[50px]">All</button>
          </div>
          <div class="grid grid-cols-2 w-full gap-2 mt-2">
            <button onclick="handleCopyCount(${item.id})" class="border-1 border-gray-400 rounded-[8px]"><i class="fa-solid fa-copy"></i>Copy</button>
            <button onclick="handleCall(${item.id})" class="call-btn bg-green-500 rounded-[8px]"><i class="fa-solid fa-phone"></i>Call</button>
          </div>
        
    `;
    cartContainerDiv.appendChild(card);
  });
}
showCards();
// by clicking heart icon count increase
const countDiv = document.getElementById("count");
let count = 0;
function handleCount() {
  count++;
  countDiv.textContent = count;

  console.log(count);
}
// handleCount();
// console.log(heartBtn);
// start call btn function
let historyItems = [];

const coinDiv = document.getElementById("coin");
function handleCall(id) {
  const item = cardItems.find((item) => item.id == id);
  const balance = +coinDiv.textContent;
  if (balance < 20) {
    alert("insufficient balance");
    return;
  } else {
    alert(`Service Name: ${item.title} 
        Service Number: ${item.helpline}`);
    coinDiv.textContent = +coinDiv.textContent - 20;
    historyItems.push(item);
    showCallHistory();
    console.log(historyItems);
  }
}

const historyDiv = document.getElementById("call-history-container");
function showCallHistory() {
  historyDiv.innerHTML = "";
  historyItems.forEach((item) => {
    const historyCard = document.createElement("div");
    historyCard.innerHTML = `
     <div class="time-section flex place-content-between p-5 shadow mb-4 bg-[#FAFAFA]">
            <div>
              <h5  class="font-bold">${item.title}</h5>
              <p>${item.helpline}</p>
            </div>
            <p  class="font-bold">${new Date().toLocaleTimeString()} </p>
          </div>
    `;

    historyDiv.appendChild(historyCard);
  });
}

function handleHistoryClear() {
  historyItems = [];
  showCallHistory();
}

// copy counts function
let copyCount = 0;
const copyCountEl = document.getElementById("copy-count");
function handleCopyCount(id) {
  copyCount = +copyCountEl.textContent + 1;
  copyCountEl.textContent = copyCount;
  const item = cardItems.find((item) => item.id == id);
  navigator.clipboard.writeText(item.helpline);
  alert(`${item.title} coppied`);

  console.log(id);
}
