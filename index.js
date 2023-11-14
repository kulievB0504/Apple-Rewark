const buttons = document.querySelectorAll(".colors-iphone-buttons-click button");
const tabContents = document.querySelectorAll(".tabcontainer .tabcontent");

buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        tabContents.forEach((tabContent) => {
            tabContent.style.opacity = 0; // Начинаем с нулевой прозрачности
            tabContent.style.display = "none";
        });
        tabContents[idx + 1].style.display = "block";
        tabContents[idx + 1].style.transition = ".5s ease"; // применяем анимацию transition
        setTimeout(() => {
            tabContents[idx + 1].style.opacity = 1; 
        }); 
    });
});





const macBTn = document.querySelectorAll('.macbook_color_btn button');
const mcTabContent = document.querySelectorAll('.mackbook_statistic .macbook_img');
const macInfo = document.querySelector('.macbook_info .macbook_colors')

mcTabContent.forEach((img, idx) => {
    if (idx !== 0) {
        img.style.display = 'none';
    }
});

macBTn.forEach((mBtn, idx) => {
    mBtn.addEventListener('click', () => {
        macBTn.forEach(btn => {
            btn.classList.remove('active')
        })
        mBtn.classList.add('active')
        mcTabContent.forEach((tabContent) => {
            tabContent.style.display = 'none';
        });
        mcTabContent[idx].style.display = 'block';
    });
});

const whiteBtn = document.querySelector('.white_col');2
const greyBtn = document.querySelector('.gray_col');

whiteBtn.onclick = () => {
    macInfo.innerHTML = 'White';
}

greyBtn.onclick = () => {
    macInfo.innerHTML = 'Space Grey';
}


const macPrice = document.querySelector('.macbook_price');
const macBtn = document.querySelectorAll('.macbook_memory');


const prices = [1999, 2199, 2599, 3199];
for (let i = 0; i < macBtn.length; i++) {
    macBtn[i].onclick = () => {
        macPrice.innerText = `$${prices[i].toLocaleString('en-EN')}`;

    };
}


const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});





