(function () {
    class SlideShow {
        constructor(startIndex, element) {
            this.startIndex = startIndex;
            this.currentIndex = this.startIndex;
            this.element = element;
            this.slides = this.element.querySelectorAll('.slide');
            this.dots = this.element.querySelectorAll('.photo__dot');
            this.setActiveSlide();
            this.setActiveDot();
            this.next();
            this.prev();

        }

        setActiveDot() {
            this.dots.forEach((item, index,) => {
                if (index === this.currentIndex) {
                    item.classList.add('photo__dot-active');
                } else {
                    item.classList.remove('photo__dot-active');
                }
            })

        }

        setActiveSlide() {
            this.slides.forEach((item, index,) => {
                if (index === this.currentIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })

        }

        prev() {
            const prevBtn = this.element.querySelector('[data-way="prev"]');
            prevBtn.addEventListener('click', () => {
                if (this.currentIndex === 0) {
                    this.currentIndex = this.slides.length - 1;
                } else {
                    this.currentIndex--;
                }
                this.setActiveSlide();
                this.setActiveDot()
            })
        }

        next() {
            const nextBtn = this.element.querySelector('[data-way="next"]');
            nextBtn.addEventListener('click', () => {
                if (this.currentIndex === this.slides.length - 1) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex++;
                }
                this.setActiveSlide();
                this.setActiveDot()    
            })

        }
    }

    const slideShow = document.querySelectorAll('.slideshow');

    slideShow.forEach(item => {
        new SlideShow(0, item)
    })

}());