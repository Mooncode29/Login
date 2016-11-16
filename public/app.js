(function(){
	"use strict";
	console.log('start');
	var app = {
		init :function(){
			$('form').on('submit', this.recupInput.bind(this));
		},

		recupInput:function(event){
			event.preventDefault();
			var infos = {
				username : $('[name=username]').val(),
				password :$('[name=password]').val()
			};
			
			$.ajax({
				type:"POST",
				url: $('form').attr('action'),
				data:infos,
				success: function(data){
					console.log(data);
					$('body').html(data);
				}
			})
		},
		
	};

	$(document).ready(function(){
		app.init();
	});

})();