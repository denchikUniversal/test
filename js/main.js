$('input[name="daterange"]').daterangepicker(
{
    locale: {
      format: 'DD-MM'
    },
    startDate: '01-02',
    endDate: '05-02'
}, 
function(start, end, label) {
    alert("Ваш отпуск будет с " + start.format('DD-MM-YYYY') + ' по ' + end.format('DD-MM-YYYY'));
});



$(document).ready(function() {
   var menuTrigger = $('#menu-trigger');
   var menu = $('#top-menu ul');

   menuTrigger.click(function(){
   	menu.slideToggle(992);
   });

   $(window).resize(function(){
   	if ($(window).width > 992){
   		menu.removeAttr('style');
   	}
   });
});

