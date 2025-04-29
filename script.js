// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

//Анимация набора текста
let typed = new Typed('#typemachine', { // Тут id того блока, в которм будет анимация
  strings: ['Нашего иновационного сообщества'],
  typeSpeed: 100, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: true // Указываем, повторять ли анимацию
});

//Бургер-меню
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navigation-collapse').classList.toggle('open');
})

//Hover для place__button
$('.mainbutton__button').hover(
  function() {
      $('.mainbutton__buttonpart').toggleClass('hover-btn');
  }
);
