    
$(function() {
    new WOW().init();
    startEffect();
  $('#datepicker').datepicker({
    onSelect: function(dateText, inst) {
        inst.show();
        // console.log($(this).datepicker("getDate"));

    }
    
  });

  $('#datepicker').datepicker("setDate", new Date(2023, 08, 02));
  $('#datepicker').datepicker('option','disabled',true);

  $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', 
        gallery:{
                    enabled:true
                },

        zoom: {
            enabled: true, 

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function(openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        
        fixedContentPos: true,
       

    });

    $('.m-d .item').click(function(){

        // console.log($(this).data('val'));
        window.navigator.clipboard.writeText($(this).data('val')).then(() => {
            // 복사가 완료되면 호출된다.
            alert("계좌번호가 클립보드에 저장되었습니다.");
        });
    });

    $('#link-copy').click(function(){
        window.navigator.clipboard.writeText('https://seungwony.github.io').then(() => {
            // 복사가 완료되면 호출된다.
            alert("주소가 클립보드에 저장되었습니다.");
        });
    });

    var total = $('.tour-slider img').length, // get the number of slides
    rand = Math.floor( Math.random() * total ); // random number
    $(".variable").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        initialSlide: rand,
        responsive: [
            {
            breakpoint: 720,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
      });

});

var startEffect = function() {
	if ($(".wrapper #lottieBox").length == 0) {
		$.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', function () {

			$(".wrapper").prepend('<div id="lottieBox" class="lottie_box"></div>');

			setTimeout(() => {
				starStart();
			}, 1000);


            
			const width = $('.wrapper').innerWidth(),
				height = $('.content.main').innerHeight()+100,
				starCont = document.getElementById("lottieBox"),
				starSizes = ["Small", "Medium", "Large"],
				// starSizes = ["Large"]
				starTypes = ["star"],
				// starTypes = ["round", "star", "sharp"],
				starPiece = 25;

			function starStart(){
				for(let i=0; i<starPiece; i++){
					let starPieceSpan = document.createElement("span");
					let starSizeIndex = Math.ceil(Math.random() * starSizes.length) -1;       //0,1,2 랜덤으로 출력하기
					let starSize = starSizes[starSizeIndex];
					let starTypeIndex = Math.ceil(Math.random() * starTypes.length) -1;
					let starType = starTypes[starTypeIndex];
			
					gsap.set(starPieceSpan, {attr: {class: starType + starSize}, x: range(-50, width), y: range(-100, -200) })
					
					starCont.appendChild(starPieceSpan);
					staring(starPieceSpan);
				}
			}
			
			// 눈의 범위 설정하기 
			function range(min, max) {
				return min + Math.random() * (max - min)
			};
			
			// 눈 애니메이션 설정하기
			function staring(elem){
				gsap.to(elem, {duration: range(15, 20), y: height, ease: "none", repeat:-1, delay: -1000});
				gsap.to(elem, {duration: range(4, 8), x: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut});
				gsap.to(elem, {duration: range(2, 8), rotation: range(0, 360), repeat: -1, yoyo: true, ease:Sine.easeInOut, delay: -1000});
			}
		});
	}

	
}
