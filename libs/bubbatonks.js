(function (e, t) { 
	e.fn.bubbaTonks = function (e, t, n, r) { 
		if (typeof n == "undefined") { 
			n = false } var i = null; if (typeof r != "undefined") { 
				i = this.find(r).first() } 
		else { i = this.children().first() } 
		if (i.length == 0) { 
			i = this.contents() } 
			var s = i.top; 
			var o = null; 
			this.scroll(function () { 
				var r = i.offset().top; 
				if (r > s) { 
					if (n && o == "up") { 
						s = r; return } o = "up"; 
						e(r - s || 0) } 
					else { 
						if (n && o == "down") { 
							s = r; return } o = "down"; 
							t(s - r || 0) } s = r }) } 
})(jQuery)