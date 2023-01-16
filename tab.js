// JavaScript Document
  $(document).on('ready', function() {
      $(".regular").slick({
        dots:false,
		arrows:true,
        infinite: true,
		slidesToShow: 4,
        slidesToScroll: 4,
		responsive: [{
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
        slidesToScroll: 3,
		 autoplay:true
      }
    }, {
      breakpoint:640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		  autoplay:true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  autoplay:true

      }
    }]
      });
	   $(".en-star").slick({
        dots:false,
		arrows:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		responsive: [{
      breakpoint: 1024,
      settings: {
      slidesToShow: 2,
        slidesToScroll: 2,
		  autoplay:true
      }
    }, {
      breakpoint:640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  autoplay:true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  autoplay:true

      }
    }]
      });
      $(".en-case").slick({
        dots:false,
		arrows:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		responsive: [{
      breakpoint: 1024,
      settings: {
      slidesToShow: 2,
        slidesToScroll: 2,
		  autoplay:true
      }
    }, {
      breakpoint:640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  autoplay:true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  autoplay:true

      }
    }]
      });
    });