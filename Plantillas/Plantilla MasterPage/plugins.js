





// ========================= TOP-NAV ========================= //
var igd_menu_top = function () {
	var that = this;
	
	this.show_hide_menu = function () {
		var top_nav        = $('#top-nav'),
			 initial_height = top_nav.height();
		
		if (Modernizr.csstransitions) {
			top_nav.on('mouseover', function () {
				$(this).css('height', 233)
			})
			top_nav.on('mouseout', function () {
				$(this).css('height', initial_height)
			})
		} else {
			var ie_menu_top = new ie_menuTop([top_nav, initial_height]);
		}
	}

	this.show_hide_menu();
}














// ========================= INIT FUNCTIONS ========================= //
var fnHandler = function (listFunctions, listElements) {
	var that      = this;
	this.listEle  = listElements;
	this.listFns  = listFunctions;
	this.fnsState = [];

	this.init = function () {
		for (var i in that.listEle) {
			that.fnsState.push(false);
		}
		function scrollHandler () {
			for (var a in that.listEle) {
				var elementsClass = $('#' + that.listEle[a]).attr('class');
				if (elementsClass.indexOf('inview') != -1 && !that.fnsState[a]) {
					that.listFns[a].init();
					that.fnsState[a] = true;
				} else if (elementsClass.indexOf('inview') == -1 && that.fnsState[a]) {
					that.listFns[a].stopActions();
					that.fnsState[a] = false;
				}
			}
		}
		$(window).on('scroll', scrollHandler);
		scrollHandler();
	}

	this.init();
}


$(function() {
	/* --- once initiated only  --- */
	var menu            = new igd_menu_top();



	/* --- started several times --- */



});