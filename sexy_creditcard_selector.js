(function($) {
	// generated with:  puts ActiveMerchant::Billing::CreditCardMethods::CARD_COMPANIES.to_json
	var credit_company_regexes = {"switch": /^6759\d{12}(\d{2,3})?$/, "visa": /^4\d{12}(\d{3})?$/, "diners_club": /^3(0[0-5]|[68]\d)\d{11}$/, "master": /^(5[1-5]\d{4}|677189)\d{10}$/, "forbrugsforeningen": /^600722\d{10}$/, "dankort": /^5019\d{12}$/, "laser": /^(6304[89]\d{11}(\d{2,3})?|670695\d{13})$/, "american_express": /^3[47]\d{13}$/, "solo": /^6767\d{12}(\d{2,3})?$/, "jcb": /^3528\d{12}$/, "discover": /^(6011|65\d{2})\d{12}$/, "maestro": /^(5[06-8]|6\d)\d{10,17}$/};
	
	$.fn.sexy_creditcard_selector = function(option) {
		var self = this,
			companies = $.fn.sexy_creditcard_selector.credit_companies,
			callback = $.isFunction(option) ? option : function(company) { $(option).val(company); };
		
		self.keyup(function() {
			var value = self.val().replace(/\D/g,'');

			for (var i in companies) {
				var company = companies[i];
				if (credit_company_regexes[company].test(value))
					callback(company);
			}
		});
	
		return self;
	}
	
	$.fn.sexy_creditcard_selector.credit_companies = [ "visa", "master", "american_express", "discover" ];
})(jQuery);
