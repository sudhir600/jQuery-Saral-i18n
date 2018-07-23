/* Author -  sudhir gupta (sudhirgupta.456@gmail.com) */

var fallBackLocale = 'en';

$('document').ready(function(){
	bindAll();	
	$('.lng select').change(function(){
		var locale = $(this).find("option:selected").val();
		localStorage.setItem('locale', locale);
		bindAll();
	})
})

function init_i18n(lng){
	if(!lng || lng == ''){
		lng = fallBackLocale;
	}
	$.ajax({
		type:'GET',
		url: "locales/" + lng + ".json",
	}).done(function( data ) {
		var dataKey  = 'i18n';
		var placeholderkey = 'i18n_placeholder';
		
		$('*[' + dataKey + ']').each(function(e){
			var key = $(this).attr(dataKey);
			var value = data[key];
			var node = $(this)[0]['nodeName'];
			if(node == 'INPUT' || node == 'TEXTAREA'){
				var nodeType = $(this)[0]['type'];
				nodeType == 'text' || 'button' || 'radio' || 'checkbox'	? $(this).val(value) : '';
			} else if(node == 'OPTION'){
				$(this).attr('val', value);
				$(this).html(value);
			} else{
				$(this).html(value);
			}
		});
		
		
		var placeholderkey = 'i18n_placeholder';
		$('*[' + placeholderkey + ']').each(function(e){
			var key = $(this).attr(placeholderkey);
			var value = data[key];
			$(this).attr("placeholder", data[key]);
		});
		
		
	}).fail(function(error){
		console.log(error); 
	});
}
function bindAll(){
	var locale = getLocale();
	updateLngDropDown(locale);
	init_i18n(locale);
}

function updateLngDropDown(locale){
	$('.lng select').find('option[value="'+locale+'"]').prop('selected', true);
}

function getLocale(){
	var existingLocale = localStorage.getItem('locale')
	return existingLocale != null ? existingLocale : fallBackLocale;
}

window.addEventListener("storage", function (e) {
		bindAll();
});
console.log('jQuery-saral-i18n loaded');
