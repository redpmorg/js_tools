/**
 * Validation Rules
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-07-06 10:07:27
 * @version $Id$
 */

 // var validationMessageLanguage = '';

 if (!validationMessageLanguage) {
	var validationMessageLanguage = "fr";
 }

 var validationParameters = {
	messages: {
		text: {
			notEmpty: {
				en: "This text cannot be empty!",
				fr: "Ce texte ne peut être vide!",
				ro: "Acest text nu poate fi gol!"
			},
		},
		integer: {
			valid: {
				en: "This must be a number but non zero!",
				fr: "Ce doit être un nombre, mais non nulle!",
				ro: "Acesta trebuie sa fie un numar, dar nu zero!"
			},
		},
		url: {
			valid: {
				en: "This field must be of the form:http://...!",
				fr: "Ce champ doit être de la forme:http://...!",
				ro: "Acest camp trebuie sa fie de forma: http://...!"
			},
		},
		color: {
			valid: {
				en: "This color code it seems that is not valid!",
				fr: "Ce code de couleur, il semble que est pas valable!",
				ro: "Acest cod de culoare, se pare că nu este valid!"
			}
		},
		email: {
			valid: {
				en: "Please enter a valid email!",
				fr: "S'il vous plaît entrer une adresse email valide!",
				ro: "Va rog introduceti o adresa de email valida!"
			},
			validDomain: function(d) {
				return {
					en: "Please enter a valid email on domain " + d +" !",
					fr: "S'il vous plaît entrer une adresse email valide on domaine " + d +" !",
					ro: "Va rog introduceti o adresa de email valida in domeniul " + d +" !"
				}
			}
		},
		date: {
			valid: {
				en: "Please enter a valid email!",
				fr: "S'il vous plaît entrer une adresse email valide!",
				ro: "Va rog introduceti o adresa de email valida!"
			},

AICI AM RAMAS


			greaterThan: function(d) {
				return {
					en: "Please enter a valid email on domain " + d +" !",
					fr: "S'il vous plaît entrer une adresse email valide on domaine " + d +" !",
					ro: "Va rog introduceti o adresa de email valida in domeniul " + d +" !"
				}
			}
		}
	},

	rules: {
		text: {
			notEmpty: function(v) {
				var valid = ("" != v || 0 != v.length) ? true : false;
				return {
					validity: valid,
					message: validationParameters.messages.text.notEmpty[validationMessageLanguage]
				}
			}
		},

		integer: {
			notZero: function(v) {
				var valid = (0 != v && !isNaN(v)) ? true : false;
				return {
					validity: valid,
					message: validationParameters.messages.integer.valid[validationMessageLanguage]
				}
			},
		},

		url: {
			valid: function(v) {
				var myRegExp = /^(http|https|ftp):\/\//i;
				var valid = (myRegExp.test(v)) ? true : false;
				return {
					validity: valid,
					message: validationParameters.messages.url.valid[validationMessageLanguage]
				}
			},
		},

		email:{
			valid: function(v) {
				var myRegExp = /^[A-Z0-9._%\+-]+@[A-Z0-9.-]+\.[a-z]{2,4}$/i;
				var valid = (myRegExp.test(v)) ? true : false;
				return {
					validity: valid,
					message: validationParameters.messages.email.valid[validationMessageLanguage]
				}
			},
			validDomain: function(v) {
				var validEmailDomain = "groupehn.com";
				var myRegExp = new RegExp("/^[a-zA-Z0-9._%\+-]+" + validEmailDomain + "$/", "i");
				var valid = (myRegExp.test(v)) ? true : false;
				return {
					validity: valid,
					message: validationParameters.messages.email.validDomain(validEmailDomain)[validationMessageLanguage]
				}
			}
		},

		color: {
			valid: function(v) {
				var myRegExp = /^(#):?([a-zA-Z0-9]{3,6})$/i;
				var valid = (myRegExp.test(v)) ? true : false;
				return {
					validity: valid,
					message: validationParameters.messages.color.valid[validationMessageLanguage]
				}
			}
		},

		date: {
			valid: function(v) {
				var valid = ("" != v) ? true : false;
				return {
					validity: valid,
					message: validationParameters.messages.date.valid[validationMessageLanguage]
				}
			},
			greaterThan: function(v, param) {
				var refDate = $('[name="'+ param +'"]').val();
				var myDate = new Date(v);
				refDate = new Date(refDate);
				if(("Invalid Date" !== myDate && "Invalid Date" === refDate) ||
					(("Invalid Date" !== myDate && "Invalid Date" !== refDate) && (myDate > refDate))) {
					valid = true;
				} else {
					valid = false;
				}
				return {
					validity: valid,
					message: validationParameters.messages.date.greaterThan(param)[validationMessageLanguage]
				}
			}
		},
	},
 }

 $(".submit-button").on("click", function() {
 	$(".validationMessages").prev("input, select, texarea").removeClass("input-error");
	$(".validationMessages").remove();
	var form = $(this).closest('form');
	var inp = $("input, select, texarea", form).each(function(){
		$this = $(this);
		if($this.data() && $this.data("req")) {
			var validationRules = $this.data("req");

			// rK - ruleKey, rV - ruleValue, cR - complexRule, cK - complexKey, cV - complexValue
			for(ruleId in validationRules){
				var param = null,
					rK = ruleId,
				    rV = validationRules[rK],
				    ruleObj = validationParameters.rules,
				    rule = ruleObj[rK][rV];

				// complex rule with parameter. One level nested.
				// For more use param as array.
				if ("object" == typeof rV) {
					for(cK in rV) {
						rule = ruleObj[rK][cK];
					    param = rV[cK];
					}
				}
				rule = rule($this.val(), param);
//				console.log(rule);   // Debug Rule
				if(!rule.validity) {
					$this.addClass("input-error");
					$this.after("<p class='validationMessages text-danger'>" +rule.message+ "</p>");
				}
			}
		}
	});
	if($(".validationMessages").length == 0) {
		$(form).submit();
	}
 });