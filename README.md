## Sexy Credit Card Selector

When a valid credit card number is input to a text field, this jquery plugin calls a callback with the credit card company name. This allows for easy auto selecting of the credit card type when the user enters their credit card number.
	
### Example

```javascript
$('#credit_card_number').sexy_creditcard_selector(function(company){ alert("nice " + company + " card"); });
```

you can also pass a string or jQuery object:

```javascript
$('#credit_card_number').sexy_creditcard_selector('#credit_card_type');
// same as...
$('#credit_card_number').sexy_creditcard_selector(function(company){ $('#credit_card_type').val(company); });
```

### Configuration

```javascript
$.fn.sexy_creditcard_selector.credit_companies = [
	"switch",
	"visa",
	"diners_club",
	"master",
	"forbrugsforeningen",
	"dankort",
	"laser",
	"american_express",
	"solo",
	"jcb",
	"discover",
	"maestro"
]; // defaults to [ "visa", "master", "american_express", "discover" ]
```
