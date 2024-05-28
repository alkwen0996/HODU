function alertDownload() {
  alert('이미지 다운로드!');
}

const navDownloadButton = document.querySelector('.nav-download-btn');
navDownloadButton.addEventListener('click', alertDownload);

const contentDownloadButton = document.querySelector('.cont-down_btn');
contentDownloadButton.addEventListener('click', alertDownload);

const mapContainer = document.getElementById('map'), // 지도를 표시할 div 

  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다.
var map = new kakao.maps.Map(mapContainer, mapOption);

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.subscribe-button');
const modalClose = document.querySelector('.close-button');

modalOpen.addEventListener('click', function () {
  modal.style.display = 'block';
});

modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
});

const moveScroll = document.querySelector('.scroll');

moveScroll.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

const listPicture = document.querySelector('.main-image-context-container');
const showMoreImages = document.querySelector('.add-image-button');
let pageCount = 1;

showMoreImages.addEventListener('click', async function () {
  const response = await fetch(`https://cataas.com/api/cats?skip=${pageCount}&limit=3`);
  pageCount += 3;
  const jsonData = await response.json();

  jsonData.forEach((data) => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');

    listItem.appendChild(img);
    listPicture.appendChild(listItem);

    const tempImage = document.createElement('img');
    tempImage.src = `https://cataas.com/cat?_id=${data._id}`

    tempImage.onload = () => {
      img.src = tempImage.src;
      img.className = 'cat-image-line';
    }
  });
});

const defaultScroll = document.querySelector('.default-scroll');

document.addEventListener('scroll', function () {
  const scrollHeight = window.scrollY;

  if (scrollHeight === 0) {
    defaultScroll.style.display = 'none';
  } else {
    defaultScroll.style.display = 'block';
  }
});