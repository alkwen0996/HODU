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

const defaultScroll = document.querySelector('.default-scroll');

document.addEventListener('scroll', function () {
  const scrollHeight = window.scrollY;

  if (scrollHeight === 0) {
    defaultScroll.style.display = 'none';
  } else {
    defaultScroll.style.display = 'block';
  }
});