let form = document.querySelector('.forma_partner');
let whatstyle = form.getAttribute('the_style');
let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './regform.css';
    document.getElementsByTagName('head')[0].appendChild(style);
    
    let bootstrap = document.createElement('link');
    bootstrap.rel = 'stylesheet';
    bootstrap.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
    document.getElementsByTagName('head')[0].appendChild(bootstrap);
function sethtml(){
    whatstyle = form.getAttribute('the_style');
    if(whatstyle=='new'){
        form.innerHTML = '<div class="decor"><div class="form-inner"><div><div class="col-left"><div><textarea type="text" class="question" style="height:250px;" placeholder="Напишите ваш вопрос гадалке"></textarea></div><div><input type="text" class="name" value="" placeholder="Имя"></div><div class="div-phone"><img src="https://astro7.ru/fileadmin/templates/images/flags/ru.png" style="width:16px; height:11px;" alt=""><span><select class="country-select" data-size="5" data-tabindex="6"><option value="az" kod="+994 ">Азербайджан</option><option value="am" kod="+374 ">Армения</option><option value="by" kod="+375 ">Беларусь</option><option value="ge" kod="+995 ">Грузия</option><option value="il" kod="+972 ">Израиль</option><option value="kz" kod="+77 ">Казахстан</option><option value="kg" kod="+996 ">Киргизия</option><option value="lv" kod="+371 ">Латвия</option><option value="lt" kod="+370 ">Литва</option><option value="md" kod="+373 ">Молдова</option><option value="ru" kod="+7 " selected="">Россия</option><option value="tj" kod="+992 ">Таджикистан</option><option value="tm" kod="+993 ">Туркмения</option><option value="tr" kod="+90 ">Турция</option><option value="uz" kod="+998 ">Узбекистан</option><option value="ua" kod="+380 ">Украина</option><option value="ee" kod="+372 ">Эстония</option></select></span><input type="text" class="prefix-phone" disabled="" value="+7 "><input type="number" class="phone" value="" placeholder="Телефон"></div></div><div class="col-right"><div class="date_b"><select class="day_b" data-size="5"><option value="0">День</option></select><select class="mesyac_b" data-size="5"><option value="0">Месяц</option></select><select class="god_b" data-size="5" data-tabindex="5"><option value="0">Год</option></select></div><input type="email" class="email" placeholder="e-mail" inputmode="email"></div></div><button class="btn send_partner">Отправить</button><div style="margin-top: 14px; font-size: 10px;line-height: 15px;"><input type="checkbox" checked="" disabled="" style="height: 14px; width: 14px; margin: 0; padding: 0; line-height: 10px; float: left;    margin-right: 4px;"><span class="rules">Я принимаю <a href="https://www.liveexpert.ru/help/terms" target="_blank">условия</a> пользовательского соглашения</span></div></div></div></form>';
        
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
    }
    
    else if(whatstyle=='old'){
        form.innerHTML = '<div class="form_new"><div id="form-messages" class="form"><div id="le-popup-wrapper"><div class="le-form-wrapper" style="max-width: 450px;"><div class="le-text-wrapper" style="text-align: center;color: #666;font-size: 15px;font-family: "PTSans",sans-serif;"><p><span style="color: #ffffff;"><strong>Напишите Ваш вопрос гадалке</strong></span></p><form id="le-custom-form"><div style="margin-bottom: 10px;"><textarea name="topic" rows="5" id="topic_title" style="width: 90%;display: inline-block;background: #fff;border: 1px solid #ccc;border-radius: 4px;box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);padding: 8px 10px;line-height: 40px;font-size: 1.1em;font-family: Roboto,"PT Sans",sans-serif;color: #2b2b2b;" required="" minlength="15" placeholder=""></textarea></div><div style="margin-bottom: 10px;"><p><span style="color: #ffffff;"><strong>Укажите Ваш Email</strong></span></p><input type="email" name="email" id="topic_email" style="width: 90%;display: inline-block;background: #fff;border: 1px solid #ccc;border-radius: 4px;box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);padding: 0 10px;height: 40px;line-height: 46px;font-size: 1.1em;font-family: Roboto,"PT Sans",sans-serif;color: #2b2b2b;" required="" maxlength="60" placeholder="" inputmode="email"></div><div style="margin-bottom: 10px;"><p><span style="color: #ffffff;"><strong>Укажите Ваше имя</strong></span></p><input type="text" name="name" id="topic_name" style="width: 90%;display: inline-block;background: #fff;border: 1px solid #ccc;border-radius: 4px;box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);padding: 0 10px;height: 40px;line-height: 46px;font-size: 1.1em;font-family: Roboto,"PT Sans",sans-serif;color: #2b2b2b;" required="" maxlength="48" placeholder=""></div><div style="margin-bottom: 10px;"><p><span style="color: #ffffff;"><strong>Ваша дата рождения</strong></span></p><input type="text" name="birthdate" id="topic_birthday" style="width: 90%;display: inline-block;background: #fff;border: 1px solid #ccc;border-radius: 4px;box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);padding: 0 10px;height: 40px;line-height: 46px;font-size: 1.1em;font-family: Roboto,"PT Sans",sans-serif;color: #2b2b2b;" required="" maxlength="48" placeholder=""></div><div style="margin-bottom: 10px;"><p><span style="color: #ffffff;"><strong>Ваш телефон</strong></span></p><input type="number" name="phone" id="topic_phone" style="width: 90%;display: inline-block;background: #fff;border: 1px solid #ccc;border-radius: 4px;box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);padding: 0 10px;height: 40px;line-height: 46px;font-size: 1.1em;font-family: Roboto,"PT Sans",sans-serif;color: #2b2b2b;"></div> <div style="margin-bottom: 10px;"><input type="submit" value="ОТПРАВИТЬ" id="le-submit" style="background: #FFE35F; color: #000;sans-serif;font-size: 16px;text-transform: uppercase;border-radius: 5px;padding: 9px 58px;display: inline-block;margin-bottom: 0;font-weight: normal;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;border: 1px solid transparent;white-space: nowrap; line-height: 1.42857143;"><p>Не забудьте проверить вашу почту.</p><p style="font-size: 7px;color: grey;">*для получения бесплатных ответов Ваш E-mail будет автоматически зарегистрирован на LiveExpert. ru, проходя регистрацию вы соглашаетесь с данным <a href="https://www.liveexpert.ru/help/terms" target="_blank" rel="nofollow noopener noreferrer">пользовательским соглашением</a>.</p></div><input type="hidden" name="category" value="10"></form></div><div id="success-message" style="display: none;"></div><div id="error-message" style="display: none;"><p>Произошла ошибка!<br>Пожалуйста, попробуйте позже.</p></div></div></div></div></div></form>';
    }
}

sethtml();

let btn_new = document.querySelector('.btn_new');
let btn_old = document.querySelector('.btn_old');

btn_old.addEventListener('click', function(){
    form.removeAttribute('the_style');
    form.setAttribute('the_style', 'old');
    sethtml();
})

btn_new.addEventListener('click', function(){
    form.removeAttribute('the_style');
    form.setAttribute('the_style', 'new');
    sethtml();
})

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