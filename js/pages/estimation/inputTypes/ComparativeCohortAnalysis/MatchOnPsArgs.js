define([
	'knockout', 
	'databindings',
], function (ko) {

	function MatchOnPsArgs(data) {
		var self = this;
        data = data || {};
        
        self.caliper = ko.observable(data.caliper === 0 ? 0 : data.caliper || 0.2).extend({ numeric: 2});
        self.caliperScale = ko.observable(data.caliperScale || "standardized logit");
        self.maxRatio = ko.observable(data.maxRatio === 0 ? 0 : data.maxRatio || 1).extend({ numeric: 0});
        self.stratificationColumns = (data.stratificationColumns && Array.isArray(data.stratificationColumns)) ? data.stratificationColumns : [];
        self.attr_class = data.attr_class || "args";
	}
	
	return MatchOnPsArgs;
});