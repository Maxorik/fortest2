let day_b = document.querySelector('.day_b');
let mesyac_b = document.querySelector('.mesyac_b');
let god_b = document.querySelector('.god_b');

(function(){
    let form = document.querySelector('.forma_partner');
    let whatstyle = form.getAttribute('the_style');
    let style = document.createElement('link');
    style.rel = 'stylesheet';
    
    if(whatstyle=='old'){
        style.href = './regform1.css';
    }
    else if(whatstyle=='new'){
        style.href = './regform2.css';
    }
    document.getElementsByTagName('head')[0].appendChild(style);
    
    let bootstrap = document.createElement('link');
    bootstrap.rel = 'stylesheet';
    bootstrap.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
    document.getElementsByTagName('head')[0].appendChild(bootstrap);
}())




let monthAll = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

for(let i=1; i<32; i++){
    let newOption = new Option(i, i);
    day_b.append(newOption);
}

for(let i=1; i<13; i++){
    let newOption = new Option(monthAll[i-1], i);
    mesyac_b.append(newOption);
}

for(let i=1945; i<2014; i++){
    let newOption = new Option(i, i);
    god_b.append(newOption);
}

/* Отправление данных */
(function ($) {

      var partnerRedirectUrl = "http://astrofon.ru/?partner=52779f948dee0&background_color=e5e5e5&label_color=4A4A4A&button_background_color=FF3A2D&button_text_color=F7F7F7&chan=&pb=9bb80a53#astro7-after-article-regform";
      // 
      function validateEmail(email) {
        var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern .test(email);
      }
      $(".forma_partner .country-select").change(function(){
        $('.div-phone img').attr("src", "https://astro7.ru/fileadmin/templates/images/flags/"+$(this).val()+".png" );
        kod = $(this).find("option:selected").attr("kod");
        $(".forma_partner .prefix-phone").val( kod );  
      })
      $(".forma_partner input").click(function(){
        // email = $(".forma_partner .email").val();
        $(this).css("border-color", "transparent");
      })
      $(".forma_partner select").click(function(){
        $(this).css("color", "#000");
      })
      $('.send_partner').on('click', function (event) {
          name = $(".forma_partner .name").val();
          day_b = $(".forma_partner .day_b").val();
          mesyac_b = $(".forma_partner .mesyac_b").val();
          god_b = $(".forma_partner .god_b").val();
          phone = $(".forma_partner .phone").val();
          email = $(".forma_partner .email").val();
          message = ""; //$(".forma_partner .message").val();
          country = "ru";
          proverka = true;
          if (validateEmail(email)) {
            } else {
              proverka = false;
              $(".forma_partner .email").css("border", "1px red solid");
            }
          $(".forma_partner input").each(function(){
            if ( $(this).val()=="" ) {
              proverka = false;
              $(this).css("border", "1px red solid");
            }
          })
          $(".forma_partner select").each(function(){
            if ( $(this).val()=="0" ) {
              proverka = false;
              $(this).css("color", "red");
            }
          })
          
          if (proverka) {
            dannie = {
              'eID': 'a7RegistrationsAjax',
              'action': 'Registration',
              'first_name': name,
              'last_name': '-',
              'birthday': day_b + '.' + mesyac_b + '.' + god_b,
              'sex': '-',
              'country': country,
              'phonenumber': phone.split(' ')[1],
              'email': email,
              'referer': document.referrer,
              'description': message
            };
            $.ajax({ type: 'POST', url: partnerRedirectUrl, data: dannie,
              success: function(response){
                          console.log(response);
                          // if (response['success']==true) {
                            location.href = 'https://astro7.ru/experts/gratis/';
                          // }
                    }
            });
          }
          
      })
  })(jQuery);