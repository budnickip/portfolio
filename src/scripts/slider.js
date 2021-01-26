const makeSlider = () => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 0.8,
      slidesToScroll: 1,
      draggable: true,
      rewind: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            },
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1
            }
        }
      ]
    });
  }
  
export default makeSlider;