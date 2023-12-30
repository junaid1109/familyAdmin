! function(i) {
	"use strict";

	function a() {}
	a.prototype.init = function() {
		i(".select2").select2(), i(".select2-limiting").select2({
			maximumSelectionLength: 2
		});
	}, i.AdvancedForm = new a, i.AdvancedForm.Constructor = a
}(window.jQuery),
function() {
	"use strict";
	window.jQuery.AdvancedForm.init()
}();

