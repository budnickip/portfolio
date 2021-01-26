const makeSlider = () => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1.25,
      slidesToScroll: 1,
      draggable: true,
      rewind: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 1.25,
            slidesToScroll: 1,
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            },
          }
        }
      ]
    });
  }
  
export default makeSlider;