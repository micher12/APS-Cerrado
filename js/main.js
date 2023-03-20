$(function(){
//jquery
  var mobileAtivado = false;//tag global mobile

  //ativar menu mobile
  verificarMobile()
  function verificarMobile(){
    var mobileBtn = $('.mobile__button');
    var line1 = $('.mobile__button .line1');
    var line2 = $('.mobile__button .line2');
    var line3 = $('.mobile__button .line3');
    var mobile = $('.menu__mobile');
    var link = $('.menu__mobile a');
    var animando = false;

    mobileBtn.click(function(){
      if(animando) return
      animando = true;

      if(mobileAtivado){

        mobileAtivado = false;
        line1.css("transform","rotate(0deg)").css("top","4px");
        line2.css("display","block")
        line3.css("transform","rotate(0deg)").css("top","24px");
        $('.mobile__button span').css("background-color","transparent")  
        mobile.toggle('slide',{direction: 'up'},'slow',function(){
          animando = false;
        });

      }else{

        mobileAtivado = true;
        line1.css("transform","rotate(45deg)").css("top","50%");
        line2.css("display","none")
        line3.css("transform","rotate(-45deg)").css("top","50%");
        $('.mobile__button span').css("background-color","rgb(255 0 0 / 50%)")
        mobile.toggle('slide',{direction: 'up'},'slow',function(){
          animando = false;
        });
      }
    });

    link.click(function(){
      if(animando) return
      animando = true;

      if(mobileAtivado){
        mobileAtivado = false;
        line1.css("transform","rotate(0deg)").css("top","4px");
        line2.css("display","block")
        line3.css("transform","rotate(0deg)").css("top","24px");
        $('.mobile__button span').css("background-color","transparent")  
        mobile.toggle('slide',{direction: 'up'},'slow',function(){
          animando = false;
        });
      }else{
        mobileAtivado = true;
        line1.css("transform","rotate(45deg)").css("top","50%");
        line2.css("display","none")
        line3.css("transform","rotate(-45deg)").css("top","50%");
        $('.mobile__button span').css("background-color","rgb(255 0 0 / 50%)")
        mobile.toggle('slide',{direction: 'up'},'slow',function(){
          animando = false;
        });
      };
    });
    
  };

  //efeito destaque
  $(window).scroll(function() {
    $('.cerrado__content b').each(function(){
      var posicao_elemento = $(this).offset().top;
      var posicao_scroll = $(window).scrollTop();
      var altura_tela = $(window).height();
      
      if (posicao_scroll + altura_tela > posicao_elemento) {
        $(this).animate({
            
            opacity: 1,

        }, 1800);
      }
    });
  });

  //animação scrolling
  navegation($('nav a'),0);
  navegationFooter($('.footer__single a'),0)
  function navegation(el,res){
      el.click(function(event){
        var ancora = $(this)
        var calculo = $(ancora.attr('href')).offset().top

        if(res){
          animar = calculo-res;
        }else{
          animar = calculo;
        }

        $('html,body').stop().animate({
          scrollTop: animar
        },1000);

        event.preventDefault();
      });
  }
  function navegationFooter(el,res){
    el.click(function(event){
      var ancora = $(this)
      var calculo = $(ancora.attr('href')).offset().top

      if(res){
        animar = calculo-res;
      }else{
        animar = calculo;
      }

      $('html,body').stop().animate({
        scrollTop: animar
      },1000);

      event.preventDefault();
    });
}

  //ajustar responsivo
  resizeMenu()
  function resizeMenu(){
    $(window).resize(function(){
      if($(window).width() > 790){
        if(mobileAtivado){
          var mobile = $('.menu__mobile');
          var line1 = $('.mobile__button .line1');
          var line2 = $('.mobile__button .line2');
          var line3 = $('.mobile__button .line3');

          mobileAtivado = false;
          mobile.css("display","none");
          line1.css("transform","rotate(0deg)").css("top","4px");
          line2.css("display","block");
          line3.css("transform","rotate(0deg)").css("top","24px");
          $('.mobile__button span').css("background-color","transparent")  ;
        };
      };
    });
  };

});//fim do jquery

//js normal

//chart js (grafico Plugin)
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Sobre proteção', 'Sem proteção'],
    datasets: [{
      data: [8.21,91.79],
      borderColor: '#fff',
      backgroundColor: [
        '#4ede74',
        '#BE3455',
      ],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
        title: {
            display: true,
            color: '#fff',
            text: 'Área em proteção %',
            font: {
                size: 20
            }
        },
        legend: {
            labels: {
                font: {
                    size: 14
                },
                color: "#fff",
            }
        },
    },
    layout: {
        padding: 20,
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

AOS.init();//iniciar aos - fadeEffect Plugin