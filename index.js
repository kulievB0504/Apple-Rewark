const buttons = document.querySelectorAll(".colors-iphone-buttons-click button");
const tabContents = document.querySelectorAll(".tabcontainer .tabcontent");

buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        tabContents.forEach((tabContent) => {
            tabContent.style.display = "none";
        });
        tabContents[idx + 1].style.display = "block";
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

const whiteBtn = document.querySelector('.white_col');
const greyBtn = document.querySelector('.gray_col');

whiteBtn.onclick = () => {
    macInfo.inne = 'White';
}

greyBtn.onclick = () => {
    macInfo.inne = 'Space Grey';
}


const macPrice = document.querySelector('.macbook_price');
const macBtn = document.querySelectorAll('.macbook_memory');


const prices = [1999, 2199, 2599, 3199];
for (let i = 0; i < macBtn.length; i++) {
    macBtn[i].onclick = () => {
        macPrice.innerText = `$${prices[i].toLocaleString('en-EN')}`;

    };
}
