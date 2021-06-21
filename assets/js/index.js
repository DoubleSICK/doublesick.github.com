function initVideo() {
  var player = new Txplayer({
    containerId: 'player',
    vid: 'd3253lcqpgj',
    width: '100%',
    height: '100%',
    autoplay: true,
  });
}

function initSwiper() {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

function init() {
  // initVideo();
  initSwiper();
}

window.onload = function () {
  init();
};
