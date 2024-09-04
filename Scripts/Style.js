$(".show_search_lg").click(function () {
  $(".search_lg").slideToggle("slow");
});
$(".close_search_lg").click(function () {
  $(".search_lg").slideToggle("slow");
});
$(window).resize(function () {
  if ($(window).width() <= 1400) {
    $(".long_text_menu").text("Hoạt động");
  } else {
    $(".long_text_menu").text("Hoạt động Doanh nghiệp");
  }
});

$(".list_banner").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

$(".list_partner").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".list_cetificate").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".list_product").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".list_news").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".list_recruit").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: false,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".list_img_hor").slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: ".list_img_ver",
  vertical: false,
  autoplay: false,
  verticalSwiping: true,
  centerMode: false,
  fade: true,
});

$(".list_img_ver").slick({
  slidesToShow: 4,
  asNavFor: ".list_img_hor",
  vertical: true,
  focusOnSelect: true,
  autoplay: false,
  centerMode: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
      },
    },
  ],
});

$(".btn_add").click(function () {
  var input = $("#number_product");
  if (parseInt(input.val()) < 99) {
    input.val(parseInt(input.val()) + 1);
  }
});

$(".btn_remove").click(function () {
  var input = $("#number_product");
  if (parseInt(input.val()) > 0) {
    input.val(parseInt(input.val()) - 1);
  }
});
var i = false;
$(".btn_more_info").click(function () {
  $(this).siblings(".text_info_product").toggleClass("active");

  if (!$(".text_info_product").hasClass("active")) {
    $(this).html(
      '<i class="fa fa-caret-down" aria-hidden="true"></i> Xem Thêm'
    );
  } else {
    $(this).html('<i class="fa fa-caret-up" aria-hidden="true"></i> Ẩn Bớt');
  }
  i = !i;
});
$(".updown").click(function () {
  $(this)
    .closest(".bot_product_title")
    .siblings(".full_info_product")
    .slideToggle("slow");
  $(this).find(".arrowuse").toggleClass("up");
});

/*JS Reponsive*/
$(".hamburger").click(function () {
  $(this).toggleClass("active");
  $(".menu_mb").toggleClass("active");
  $(".overlay").toggleClass("active");
});
$(".menu_mb li").click(function () {
  var anchorHref = $(this).find("a").attr("href");
  window.location.href = anchorHref;
});
$(".overlay").click(function () {
  $(this).removeClass("active");
  $(".menu_mb").removeClass("active");
  $(".hamburger").removeClass("active");
});
$(".show_search_mb").click(function () {
  $(".search_mb").slideToggle("slow");
});
$(".close_search_mb").click(function () {
  $(".search_mb").slideToggle("slow");
});
