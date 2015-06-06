(function( $ ){

	$.fn.highlighter = function(options){

		var defaults = {
			palavras: [],
			negrito: true,
			color: "#FF0000"
		}

        var settings = $.extend( {}, defaults, options );

		return this.each(function(){

			var conteudo = $(this).html();
			var novo_conteudo = conteudo;

			if( settings.negrito ){
				var weight = "font-weight: bold;";
			} else {
				var weight = "font-weight: normal;";
			}

			var color = "color: " + settings.color + ";";

			$(settings.palavras).each(function(){

				var highlight = " <span style='" + weight + " " + color + "'>" + this + "</span>";
				novo_conteudo = novo_conteudo.replace(eval("/ "+this+"/g"), highlight);

			});

			$(this).html(novo_conteudo);

		});

	}

})( jQuery )