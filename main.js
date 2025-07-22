document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("search-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (!searchBtn || !dropdownMenu) {
        console.error("Ошибка: search-btn или dropdown-menu не найдены!");
        return;
    }

    searchBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show"); 
    });

    document.addEventListener("click", function (event) {
        if (!searchBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show"); 
        }
    });
});

// Slider with Window and Door Starts

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".img-slider");
    let index = 0;

    if (images.length === 0) {
        console.error("Нет изображений в слайдере!");
        return;
    }

    function changeSlide() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    images[index].classList.add("active");
    setInterval(changeSlide, 6000);
});

// Slider with Window and Door Ends

// Slider-Line with Window and Door Starts

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".img-slider");
    const progressBar = document.querySelector(".fill");
    let currentSlide = 0;
    const slideInterval = 6000; 

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "exit");
            if (i === index) {
                slide.classList.add("active");
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add("exit");
            }
        });

        
        progressBar.style.transition = "none";
        progressBar.style.width = "0%";
        setTimeout(() => {
            progressBar.style.transition = `width ${slideInterval / 1000}s linear`;
            progressBar.style.width = "100%";
        }, 50);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    
    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);
});

// Slider-Line with Window and Door Ends

// Swiper with Services Starts

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "1",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: false
    },
    keyboard: {
      enabled: true
    },
    initialSlide: 0,
    on: {
      click(event) {
        swiper.slideTo(this.clickedIndex);
      }
    },
    breakpoints: {
        0: {
          slidesPerView: 1.15,
          centeredSlides: false,
          spaceBetween: 10,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2,
            slideShadows: false
          },
        },
        640: {
          slidesPerView: 1.15,
          centeredSlides: true,
          spaceBetween: 20,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: false
          },
        },
        1200: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 20,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: false
          },
        }
    }
});

// Swiper with Services Ends

// Header Starts

(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.scrollY > 50) {
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');
		}
	};
}());

// Header Ends

// Goods Starts

document.addEventListener("DOMContentLoaded", function () {
    const goodsItems = document.querySelectorAll(".goods li");

    goodsItems.forEach(item => {
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");

        let text = item.querySelector("p");
        if (text) {
            text.classList.add("hidden-text");
            item.appendChild(overlay);
        }

        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
            overlay.classList.add("active-overlay");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
            overlay.classList.remove("active-overlay");
        });
    });

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // После показа больше не отслеживаем
            }
        });
    }, observerOptions);

    goodsItems.forEach(item => {
        observer.observe(item);
    });
});


// Scroll Ends

// Counter Starts

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let count = +entry.target.getAttribute("data-target");
                let start = 0;
                let increment = Math.ceil(count / 100);

                let updateCount = () => {
                    start += increment;
                    if (start > count) {
                        entry.target.innerText = count;
                    } else {
                        entry.target.innerText = start;
                        setTimeout(updateCount, 30);
                    }
                };

                updateCount();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});

// Counter Ends

// Inactive Pop Starts

document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.querySelector(".popup-container");
    const popupBox = document.querySelector(".popup-box");
    const closeButton = document.querySelector(".close-btn");

    popupContainer.style.display = "none";
    popupContainer.style.opacity = "0";

    function showPopup() {
        popupContainer.style.display = "flex";
        setTimeout(() => {
            popupContainer.style.opacity = "1";
        }, 50);
    }

    function closePopup() {
        popupContainer.style.opacity = "0";
        setTimeout(() => {
            popupContainer.style.display = "none";
        }, 300); 
    }

    setTimeout(showPopup, 60000);

    closeButton.addEventListener("click", closePopup);

    popupContainer.addEventListener("click", function (event) {
        if (!popupBox.contains(event.target)) {
            closePopup();
        }
    });
});

// Inactive Pop Ends

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".trusted-logos img").forEach(img => {
        observer.observe(img);
    });
});

// Scroll Types 

$(document).ready(function() {
    $('.carousel-2').owlCarousel({
        loop: true, 
        center: true, 
        nav: false, 
        dots: true, 
        navText: ['&lsaquo;', '&rsaquo;'], 
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
});
