/*jQuery Masked Input Plugin*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(x){var a,e=navigator.userAgent,S=/iphone/i.test(e),i=/chrome/i.test(e),j=/android/i.test(e);x.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},x.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,v){var n,k,_,b,y,$,R;if(!t&&0<this.length){var e=x(this[0]).data(x.mask.dataName);return e?e():void 0}return v=x.extend({autoclear:x.mask.autoclear,placeholder:x.mask.placeholder,completed:null},v),n=x.mask.definitions,k=[],_=$=t.length,b=null,x.each(t.split(""),function(e,t){"?"==t?($--,_=e):n[t]?(k.push(new RegExp(n[t])),null===b&&(b=k.length-1),e<_&&(y=k.length-1)):k.push(null)}),this.trigger("unmask").each(function(){function o(){if(v.completed){for(var e=b;e<=y;e++)if(k[e]&&m[e]===c(e))return;v.completed.call(g)}}function c(e){return v.placeholder.charAt(e<v.placeholder.length?e:0)}function s(e){for(;++e<$&&!k[e];);return e}function l(e,t){var n,a;if(!(e<0)){for(n=e,a=s(t);n<$;n++)if(k[n]){if(!(a<$&&k[n].test(m[a])))break;m[n]=m[a],m[a]=c(a),a=s(a)}f(),g.caret(Math.max(b,e))}}function r(){h(),g.val()!=p&&g.change()}function u(e,t){for(var n=e;n<t&&n<$;n++)k[n]&&(m[n]=c(n))}function f(){g.val(m.join(""))}function h(e){for(var t,n=g.val(),a=-1,i=0,r=0;i<$;i++)if(k[i]){for(m[i]=c(i);r++<n.length;)if(t=n.charAt(r-1),k[i].test(t)){m[i]=t,a=i;break}if(r>n.length){u(i+1,$);break}}else m[i]===n.charAt(r)&&r++,i<_&&(a=i);return e?f():a+1<_?v.autoclear||m.join("")===d?(g.val()&&g.val(""),u(0,$)):f():(f(),g.val(g.val().substring(0,a+1))),_?i:b}var g=x(this),m=x.map(t.split(""),function(e,t){return"?"!=e?n[e]?c(t):e:void 0}),d=m.join(""),p=g.val();g.data(x.mask.dataName,function(){return x.map(m,function(e,t){return k[t]&&e!=c(t)?e:null}).join("")}),g.one("unmask",function(){g.off(".mask").removeData(x.mask.dataName)}).on("focus.mask",function(){var e;g.prop("readonly")||(clearTimeout(a),p=g.val(),e=h(),a=setTimeout(function(){g.get(0)===document.activeElement&&(f(),e==t.replace("?","").length?g.caret(0,e):g.caret(e))},10))}).on("blur.mask",r).on("keydown.mask",function(e){var t,n,a,i;g.prop("readonly")||(i=e.which||e.keyCode,R=g.val(),8===i||46===i||S&&127===i?(n=(t=g.caret()).begin,(a=t.end)-n==0&&(n=46!==i?function(e){for(;0<=--e&&!k[e];);return e}(n):a=s(n-1),a=46===i?s(a):a),u(n,a),l(n,a-1),e.preventDefault()):13===i?r.call(this,e):27===i&&(g.val(p),g.caret(0,h()),e.preventDefault()))}).on("keypress.mask",function(e){var t,n,a,i,r;g.prop("readonly")||(i=e.which||e.keyCode,r=g.caret(),e.ctrlKey||e.altKey||e.metaKey||i<32||!i||13===i||(r.end-r.begin!=0&&(u(r.begin,r.end),l(r.begin,r.end-1)),(t=s(r.begin-1))<$&&(n=String.fromCharCode(i),k[t].test(n))&&(function(e){for(var t,n,a=e,i=c(e);a<$;a++)if(k[a]){if(t=s(a),n=m[a],m[a]=i,!(t<$&&k[t].test(n)))break;i=n}}(t),m[t]=n,f(),a=s(t),j?setTimeout(function(){x.proxy(x.fn.caret,g,a)()},0):g.caret(a),r.begin<=y&&o()),e.preventDefault()))}).on("input.mask paste.mask",function(){g.prop("readonly")||setTimeout(function(){var e=h(!0);g.caret(e),o()},0)}),i&&j&&g.off("input.mask").on("input.mask",function(){var e=g.val(),t=g.caret();if(R&&R.length&&R.length>e.length){for(h(!0);0<t.begin&&!k[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<b&&!k[t.begin];)t.begin++;g.caret(t.begin,t.begin)}else{for(h(!0);t.begin<$&&!k[t.begin];)t.begin++;g.caret(t.begin,t.begin)}o()}),h()})}})}),$.fn.setCursorPosition=function(e){var t;$(this).get(0).setSelectionRange?$(this).get(0).setSelectionRange(e,e):$(this).get(0).createTextRange&&((t=$(this).get(0).createTextRange()).collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select())},$('input[type="tel"]').click(function(){"+7 (___) ___-__-__"==$(this).val()&&$(this).setCursorPosition(4)}),$('input[type="tel"]').keyup(function(){"+7 (8__) ___-__-__"==$(this).val()&&($(this).val($(this).val().replace("8","_")),$(this).mask("+7 (999) 999-99-99"),$(this).attr("placeholder","+7 (___) ___-__-__"),$(this).setCursorPosition(4))});

$(document).ready(function(){
  $(".js-butter").click(function(){
    $(this).toggleClass("active");
    $(".js-menu-mobile").slideToggle(200);
  });
  $(".js-popup-close").click(function(){
    $(this).parents(".popup").removeClass("active");
  });
  $(".js-single-popup").click(function(){
    $("#singlePopup").addClass("active");
  });
  $(".js-popup-city-open").click(function(){
    $("#popup-city").addClass("active");
  });
  $(".popup-city__item").click(function(){
    $(".js-city-current").text($(this).text());
    $(this).parents(".popup").removeClass("active");
    $(".header-city__drop").removeClass('active');
  });
  
  $(".header-city__text").click(function(){
    $(this).next(".header-city__drop").toggleClass('active');
  });
  $(".header-city__drop_btn--yes").click(function(){
    $(this).parents(".header-city__drop").removeClass('active');
  });
  
  $(".js-banner-slider").slick({
    arrows: false,
    adaptiveHeight: true
  });
  $('.faq-item__quest').click(function(){
    $(this).parents(".faq-item").toggleClass("active");
    $(this).next(".faq-item__answer").slideToggle(200);
  });
  if ($(".item-color").length > 0) {
    $(".item-color").each(function(){
      var color = "#" + $(this).data("color");
      $(this).css("background", color);
    })
  }
  $(".item-color").click(function(){
    $(this).parents(".item-colors").find(".item-color").removeClass("active");
    $(this).addClass("active");
  });

  $(".review-content__more").click(function(){
    $(this).parents(".review-content").removeClass("active");
  });

  $(".counter-minus").click(function(){
    console.log("-");
    var value = parseInt($(this).parent().find("input").val());
    value--;
    if (value == 0) {
      value = 1;
    }
    if (value < 2) $(this).parents(".cart-item__count").find(".cart-item__count_one").hide();
    $(this).parent().find("input").val(value);
  });
  $(".counter-plus").click(function(){
    console.log("+");
    var value = parseInt($(this).parent().find("input").val());
    value++;
    $(this).parent().find("input").val(value);
    $(this).parents(".cart-item__count").find(".cart-item__count_one").show();
  });

  $(".js-checkout-slider").slick({
    infinite: false,
    arrows: false,
    dots: false,
    adaptiveHeight: true
  });
  $(".js-checkout-next").click(function(){
    $(".js-checkout-slider").slick("slickNext");
    $(".checkout-step").removeClass("active");
    $(".checkout-step" + $(this).data("next")).addClass("active");
  });
  $(".js-checkout-prev").click(function(){
    $(".js-checkout-slider").slick("slickPrev");
    $(".checkout-step").removeClass("active");
    $(".checkout-step" + $(this).data("prev")).addClass("active");
  });

  function restructureReviews() { 
    if ($(".section.reviews").length) {
      if (window.innerWidth <= 768) {
        $(".review").each(function(){
          $(this).find(".rating").appendTo($(this).find(".review-link__container"));
          var h = $(this).find(".review-content").outerHeight();
          if (h > 200) {
            $(this).find(".review-content").addClass("active");
          } else {
            $(this).find(".review-content").removeClass("active");
          }    
        });
      } else {
        $(".review").each(function(){
          $(this).find(".rating").appendTo($(this).find(".review-top"));
        });
      }
    }
  }  

  function windowsSlider() {    
    if (window.innerWidth <= 980) {
      if (($(".js-items-slider").length != 0) && !($(".js-items-slider").hasClass("slick-slider"))) {
        $(".js-items-slider").slick({
          infinite: false,
          arrows: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
      if (($(".js-news-slider").length != 0) && !($(".js-news-slider").hasClass("slick-slider"))) {
        $(".js-news-slider").slick({
          infinite: false,
          arrows: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    } else {
      if (($(".js-items-slider").length != 0) && ($(".js-items-slider").hasClass("slick-slider"))){
        $(".js-items-slider").slick('unslick');
      }
      if (($(".js-news-slider").length != 0) && ($(".js-news-slider").hasClass("slick-slider"))){
        $(".js-news-slider").slick('unslick');
      }
    }

    if (window.innerWidth <= 1170) {
      if (($(".js-brands-slider").length != 0) && !($(".js-brands-slider").hasClass("slick-slider"))) {
        $(".js-brands-slider").slick({
          infinite: false,
          arrows: false,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    } else {
      if (($(".js-brands-slider").length != 0) && ($(".js-brands-slider").hasClass("slick-slider"))){
        $(".js-brands-slider").slick('unslick');
      }
    }

  }
  windowsSlider();
  restructureReviews();
  $(window).resize(function(){
    windowsSlider();
    restructureReviews();
  });

  $('.js-single-slider-for').slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-single-slider-nav'
  });
  $('.js-single-slider-nav').slick({
    infinite: false,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: '.js-single-slider-for',
    focusOnSelect: true,
  });

  if ($(".single-meta__color").length > 0) {
    $(".single-meta__color").each(function(){
      var color = "#" + $(this).data("color");
      $(this).find("i").css("background", color);
    })
  }
  $(".single-meta__color").click(function(){
    $(this).parents(".single-meta__colors").find(".single-meta__color").removeClass("active");
    $(this).addClass("active");
  });
  $(".single-meta__drop_current").click(function(){
    $(this).toggleClass("active");
    $(this).parent().toggleClass("active");
    $(this).next(".single-meta__drop_list").slideToggle(200);
  });
  $(".single-meta__drop_list li").click(function(){
    $(this).parents(".single-meta__drop_list").slideUp(200);
    $(this).parents(".single-meta__drop").removeClass("active").find(".single-meta__drop_current").removeClass("active").text($(this).text());
  });

  $(".single-tabs__btn").click(function(){
    var tab = $(this).data("tab");
    $(this).parents(".single-tabs").find(".single-tabs__btn").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".single-tabs").find(".single-tab").hide();
    $(this).parents(".single-tabs").find('.single-tab[data-tab="' + tab + '"]').show();
  });

  $(document).scroll(function(){
    if ($("#single").length > 0) {
      if ($(this).scrollTop() > $("#single").offset().top) {
        $(".single-fixed").addClass("active");
      } else {
        $(".single-fixed").removeClass("active");
      }
    }
  });

  $(".js-filter-show-more").click(function(){
    $(this).hide();
    $(this).parents(".catalog-filter__block").find(".catalog-filter__check").css("display", "flex");
  });

  $(".js-catalog-structure").click(function(){
    var data = $(this).data("structure");
    $(".js-catalog-structure").removeClass("active");
    $(this).addClass("active");
    if (data == "line") {
      $(".catalog-item").addClass("line");
    } else {
      $(".catalog-item").removeClass("line");
    }
  });

  if ($('#catalog-filter-price').length > 0) {
    var slider = document.getElementById('catalog-filter-price'),
      min = parseInt($(slider).data("min")),
      max = parseInt($(slider).data("max"));

    noUiSlider.create(slider, {
        start: [min, max],
        connect: true,
        range: {
            'min': [min, 100],
            'max': max
        }
    });  

    var dateValues = [
      document.getElementById('catalog-filter-price-for'),
      document.getElementById('catalog-filter-price-to')
    ];

    slider.noUiSlider.on('update', function (values, handle) {
      dateValues[handle].value = Math.trunc(values[handle]);
    });
  }

  function suffix(i){
    var suff = "";
    if ((i > 1)&(i < 5)) {
      suff = "а"
    } else if (i > 4) {
      suff = "ов"
    }
    return suff;
  }
  $(".js-filter-form input").change(function(){
    var count = $(".js-filter-form").find(':checkbox:checked').length;
    if (count > 0) {
      $(".js-filter-reset").show();
      $(".js-filter-submit").addClass("active").text(count + " фильтр" + suffix(count));
    } else {
      $(".js-filter-reset").hide();
      $(".js-filter-submit").removeClass("active").text("Применить фильтры");
    }  
  });
  $(".js-filter-reset").click(function(){
    $(this).hide();
    $(".js-filter-submit").removeClass("active").text("Применить фильтры");
    $(".js-filter-form").find(':checkbox:checked').prop('checked', false);
  });

  $(".js-set-review").click(function(){
    $('.js-review-form').show();
    $("html, body").animate({scrollTop: $('.js-review-form').offset().top});
    
  });


  $(".js-compare-remove-item").click(function(){
    var n = $('.compare-item').index($(this).parents(".compare-item"));
    
    $(this).parents(".compare-item").remove();
    $(".compare-table__row_td:nth-child(" + (n + 2) + ")").remove();
  });




  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
    $(".input-date").mask("99.99.99");
  });
  var myMap;
  ymaps.ready(init);
  function init() {
    if ($("#map").length != 0) {
        myMap = new ymaps.Map('map', {
        center: [55.824602, 37.503384],
        zoom: 17,
        controls: []
      }),
      myPlacemark = new ymaps.Placemark([55.824602, 37.501384], {
        hintContent: 'Старопетровский проезд, 7Ас6',
        balloonContent: 'Старопетровский проезд, 7Ас6',
      });
      myMap.geoObjects.add(myPlacemark);

      function onResizeMap() {
        if (window.innerWidth > 768) {
          myMap.setCenter([55.824602, 37.503384]);
        } else {
            myMap.setCenter([55.824602, 37.501384]);
        }
      } 
      onResizeMap();

      window.onresize = function () {
          onResizeMap();
      };
    }    
  };
});