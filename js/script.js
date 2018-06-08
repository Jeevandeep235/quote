
$('document').ready(function(){
	var authorText='';
	var quotedBy='';
	function getQuote(){
	$.ajax({
		url:'https://api.forismatic.com/api/1.0/',
		jsonp: 'jsonp',
		dataType: 'jsonp',
		data:{
			method:'getQuote',
			lang: 'en',
			format: 'jsonp'
		},
		success:function(response){
			authorText=response.quoteText;
			//alert(authorText);
			quotedBy=response.quoteAuthor;
			$('#author').text(authorText);
			if(quotedBy){
				$('#quotedBy').text("Quoted by: " +quotedBy);
			}else{
				$('#quotedBy').text("Quoted by unknown ");
			}
		}
	});
}
getQuote();
$('#quote').on('click',function(){
	getQuote();
});
$('#share').on('click',function(){
	//getQuote();
	window.open('https://twitter.com/intent/tweet?text=' +encodeURIComponent(authorText +'--unknown by'+quotedBy));
});

})