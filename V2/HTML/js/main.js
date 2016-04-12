(function( $ ){

//// ---> Проверка на существование элемента на странице
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

//	Phone Mask
$(function() {

  if($('#user_phone').exists()){

    $('#user_phone').each(function(){
      $(this).mask("(99) 999-99-99");
    });

  }

  if($('.phone_form').exists()){

    var form = $('.phone_form'),
      btn = form.find('.btn_submit');

    form.find('.rfield').addClass('empty_field');

    setInterval(function(){

      if($('#user_phone').exists()){
        var pmc = $('#user_phone');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field');
        } else {
            pmc.removeClass('empty_field');
        }
      }

      var sizeEmpty = form.find('.empty_field').size();

      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }

    },200);

    btn.click(function(){
      if($(this).hasClass('disabled')){
        return false
      } else {
        form.submit();
      }
    });

  }

});

})( jQuery );


function pay() {
  var number = $("#user_phone").val();
  var price = $("#user_price").val();
  //
  if (!number) {
    $(number).focus();
    alert("Вы не ввели номер абонента!");
    return;
  }
  if (!price) {
    $(price).focus();
    alert("Вы не ввели сумму пополнения!");
    return;
  }
  alert("Было совершено пополнение баланса абонента +375 " + number + " на сумму " + price + " руб.");
}
