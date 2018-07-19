/* Author -  sudhir gupta (sudhirgupta.456@gmail.com) */

var fallBackLocale = 'en';

function init_i18n(lng){
	if(!lng || lng == ''){
		lng = fallBackLocale;
	}
	$.ajax({
		type:'GET',
		url: "locales/" + lng + ".json",
	}).done(function( data ) {
		console.log(data);
		var dataKey  = 'i18n';
		$('*[' + dataKey + ']').each(function(e){
			var key = $(this).attr(dataKey);
			var value = data[key];
			$(this).html(value);
		});
		
		var placeholderkey  = 'i18n_placeholder';
		$('*[' + placeholderkey + ']').each(function(e){
			var key = $(this).attr(placeholderkey);
			var value = data[key];
			$(this).attr("placeholder", data[key]);
		});
	}).fail(function(error){
		//load fallback if locale file doesn't exists.
		console.log('fail fallBackLocale is' + fallBackLocale); 
		init_i18n(fallBackLocale);
		setTimeout(function(){
			console.log('settime run');
			updateLngDropDown(fallBackLocale);
		},2000);
		//console.log(error); 
	});
}
function bindAll(){
	var locale = getLocale();	
	updateLngDropDown(locale);
	init_i18n(locale);
}

$('document').ready(function(){
	bindAll();
	// var existingLocale = getLocale();	
	//updateLngDropDown(existingLocale);
	// init_i18n(existingLocale);
	
	$('.lng select').change(function(){
		console.log('call me');
		var locale = $(this).find("option:selected").val();
		localStorage.setItem('locale', locale);
		//$(this).find('option[value="'+locale+'"]').attr('selected', true);
		bindAll();
	})
})


window.addEventListener("storage", function (e) {
		bindAll();
		//console.log('called from LS change');
		//var locale = getLocale();
		//init_i18n(locale);
		//updateLngDropDown(locale);
		//console.log('local change detected');
});

function updateLngDropDown(locale){
	$('document').on('load', function(){
		alert("The paragraph was clicked.");
		$('.lng select').find('option[value="'+locale+'"]').attr('selected', true);
	});
	
}

function getLocale(){
	var existingLocale = localStorage.getItem('locale')
	return existingLocale != null ? existingLocale : fallBackLocale;
}

console.log('jQuery-saral-i18n loaded');
