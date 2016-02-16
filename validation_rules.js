/**
 * General Validation Rules
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-07-06 10:07:27
 * @version $Id$
 */
 var validationMessageLanguage = !validationMessageLanguage ? "fr" : validationMessageLanguage;
 var validationConstraints = {
	errorContainer: function(m, s) {
		if("undefined" !== typeof s) {
			s.parent().addClass('has-error');
		}
		return "<p class='validationMessages text-danger input-group'>" +m+ "</p>";
	},
	messages: {
		text: {
			notEmpty: {
				en: "This text cannot be empty!",
				fr: "Ce texte ne peut être vide!",
				ro: "Acest text nu poate fi gol!"
			},
		},
		integer: {
			notZero: {
				en: "This must be a number but non zero!",
				fr: "Ce doit être un nombre, mais non nulle!",
				ro: "Acesta trebuie sa fie un numar, dar nu zero!"
			},
			isValid: {
				en: "This must be a number!",
				fr: "Ce doit être un nombre!",
				ro: "Acesta trebuie sa fie un numar!"
			},
		},
		url: {
			isValid: {
				en: "This field must be of the form: www. ...!",
				fr: "Ce champ doit être de la forme: www. ...!",
				ro: "Acest camp trebuie sa fie de forma: www. ...!"
			},
			notEmpty: {
				en: "This field must be of the form: www. ...!",
				fr: "Ce champ doit être de la forme: www. ...!",
				ro: "Acest camp trebuie sa fie de forma: www. ...!"
			},
		},
		color: {
			isValid: {
				en: "This color code it seems that is not valid!",
				fr: "Ce code de couleur, il semble que est pas valable!",
				ro: "Acest cod de culoare, se pare că nu este valid!"
			}
		},
		email: {
			isValid: {
				en: "Please enter a valid email!",
				fr: "S'il vous plaît entrez une adresse email valide !",
				ro: "Va rog introduceti o adresa de email valida!"
			},
			validDomain: function(d) {
				return {
					en: "Please enter a valid email on domain &lt;" + d +"&gt; !",
					fr: "S'il vous plaît entrez une adresse email valide on domaine &lt;" + d +"&gt; !",
					ro: "Va rog introduceti o adresa de email valida in domeniul &lt;" + d +"&gt; !"
				}
			}
		},
		date: {
			isValid: {
				en: "Please enter a valid date!",
				fr: "S'il vous plaît entrez une date valide !",
				ro: "Va rog introduceti o data valida!"
			},
			smallerThan: function(d) {
				return {
					en: "Please enter a date smaller than &lt;" + d +"&gt; !",
					fr: "S'il vous plaît entrez une date plus petit que &lt;" + d +"&gt; !",
					ro: "Va rog introduceti o data mai mica decat &lt;" + d +"&gt; !"
				}
			}
		},
		password: {
			areTheSame: {
				en: "Password and confirmation are not the same!",
				fr: "Mot de passe et la confirmation ne sont pas la même chose!",
				ro: "Confirmarea parolei nu este identica!"
			},
			notEmpty: {
				en: "This password cannot be empty!",
				fr: "Ce mod de passe ne peut être vide!",
				ro: "Aceasta parola nu poate fi goala!"
			}
		},

		select: {
			notEmpty: {
				en: "You must choose a value!",
				fr: "Vous devez choisir une valeur!",
				ro: "Trebuie sa alegeti o valoare!"
			}
		},

		customSelect: {
			notEmpty: {
				en: "You must choose a value!",
				fr: "Vous devez choisir une valeur!",
				ro: "Trebuie sa alegeti o valoare!"
			}
		},

		oneOfTwo: {
			mustFill: function(f) {
				return {
					en: "Please complete with adequate contents this field or &lt;" + f +"&gt; !",
					fr: "S'il vous plaît compléter avec contenus adéquate ce champ ou &lt;" + f +"&gt; !",
					ro: "Va rog completati cu valori adecvate acest camp sau &lt;" + f +"&gt; !"
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
					message: validationConstraints.messages.text.notEmpty[validationMessageLanguage]
				}
			}
		},

		integer: {
			notZero: function(v) {
				var valid = (0 != v && !isNaN(v)) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.integer.notZero[validationMessageLanguage]
				}
			},
			isValid: function(v) {
				var valid = ("" != v && !isNaN(v)) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.integer.isValid[validationMessageLanguage]
				}
			},
		},

		url: {
			isValid: function(v) {
				var myRegExp = /^(www)./i;
				var valid = (v == '' || myRegExp.test(v)) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.url.isValid[validationMessageLanguage]
				}
			},
			notEmpty: function(v) {
				var myRegExp = /^(www)./i;
				var valid = (myRegExp.test(v)) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.url.isValid[validationMessageLanguage]
				}
			},
		},

		email:{
			isValid: function(v) {
				var myRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{2,4}$/i;
				var valid = (myRegExp.test(v)) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.email.isValid[validationMessageLanguage]
				}
			},
			validDomain: function(v) {
				var validEmailDomain = "groupehn.com";
				var validEmail = validationConstraints.rules.email.isValid(v).validity;
				var valid = (validEmail && validEmailDomain == v.split('@').pop()) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.email.validDomain(validEmailDomain)[validationMessageLanguage]
				}
			}
		},

		color: {
			isValid: function(v) {
				var myRegExp = /^(#):?([a-zA-Z0-9]{3,6})$/i;
				var valid = (myRegExp.test(v)) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.color.isValid[validationMessageLanguage]
				}
			}
		},

		dateSimple: {
			isValid: function(v) {
				if("" !== v){
					var dateArray = v.split("-");
					var newDate = new Date(dateArray[2], dateArray[1], dateArray[0]);
					var valid = ("Invalid Date" != newDate) ? true : false;
				} else {
					valid = true;
				}
				return {
					validity: valid,
					message: validationConstraints.messages.date.isValid[validationMessageLanguage],
					dateObj: newDate
				}
			}
		},

		dateComplex: {
			smallerThan: function(v, param) {
				var refDate = $('[name="'+ param +'"]').val();
				var d = validationConstraints.rules.dateSimple;

				var myDate  = d.isValid(v).dateObj;
				refDate = d.isValid(refDate).dateObj;

				var valid = true;
				var mess = validationConstraints.messages.date.smallerThan(param)[validationMessageLanguage];

				if('undefined' == typeof myDate || 'Invalid Date' == myDate || 'Invalid Date' == refDate) {
					valid = false;
					mess = validationConstraints.messages.date.isValid[validationMessageLanguage];
				} else if( 'Invalid Date' == myDate && 'undefined' == typeof refDate ) {
					valid = true;
				} else if( myDate > refDate ) {
					valid = false;
				}

				return {
					validity: valid,
					message: mess
				}
			}
		},

		password: {
			areTheSame: function(currentPassword, param) {
				var comparedPassword = $('[name$="\\[' + param + '\\]"]').val();
				var valid = (currentPassword == comparedPassword);
				return {
					validity: valid,
					message: validationConstraints.messages.password.areTheSame[validationMessageLanguage]
				}
			},
			notEmpty: function(v) {
				var valid = ("" != v || 0 != v.length) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.password.notEmpty[validationMessageLanguage]
				}
			},
		},

		select: {
			notEmpty: function(v) {
				var valid = (0 != v) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.select.notEmpty[validationMessageLanguage]
				}
			}
		},

		customSelect: {
			notEmpty: function(v, param) {
				selectElementsIsDisable = new Array();
				for(var i = 0; i < param.length; i++ ) {
					selectElementsIsDisable[i] = $("#"+param[i]).prop('disabled');
					if(0 != $("#"+param[i]).val() && !$("#"+param[i]).prop('disabled')) {
						v = $("#"+param[i]).val();
					}
				}
				var oneIsVisible = selectElementsIsDisable.indexOf(false)
				var valid = (0 != v && -1 != oneIsVisible) ? true : false;
				return {
					validity: valid,
					message: validationConstraints.messages.customSelect.notEmpty[validationMessageLanguage]
				}
			}
		},

		oneOfTwo: {
			mustFill: function(v, param) {
				var refField = $('[name$="\\['+ param[0] +'\\]"]').val(), rule;
				switch(param[1]) {
					case 'integer':
					rule = validationConstraints.rules.integer ;
					break;
					case 'text':
					rule = validationConstraints.rules.text;
					break;
				}
				return {
					validity: (rule.isValid(v).validity || rule.isValid(refField).validity),
					message: validationConstraints.messages.oneOfTwo.mustFill(param[0])[validationMessageLanguage]
				}
			}
		},
	}
 };

 var validationAction = function(form) {
	$(".validationMessages").prev("input, select, texarea").parent().removeClass("has-error");
	$(".validationMessages").remove();
	$("input, select, texarea", $(form)).each(function(){
		var $this = $(this);
		if($this.data() && $this.data("req")) {
			var validationConstraint = $this.data("req");

			// rK - ruleKey, rV - ruleValue, cR - complexRule, cK - complexRuleKey, cV - complexRuleValue
			for(ruleId in validationConstraint){
				var param = null,
				rK = ruleId,
				rV = validationConstraint[rK],
				ruleObj = validationConstraints.rules,
				rule = ruleObj[rK][rV],
				ruleValidity = true,
				ruleMessages = "";

				// First check for complex rule with parameter.
				// One level nested. For more use param as array.
				if ("object" == typeof rV) {
					for(cK in rV) {
						rule = ruleObj[rK][cK];
						param = rV[cK];
						rValid = rule($this.val(), param).validity;
						rMess  = rule($this.val(), param).message;
						if(!(ruleValidity && rValid)) {
							ruleValidity = rValid;
							ruleMessages += rMess;
						}
					}
				} else {
					ruleValidity = rule($this.val()).validity;
					ruleMessages += rule($this.val()).message;
				}
				// console.log(ruleValidity); console.log(ruleMessages);   // Debug Rule
				if(!ruleValidity) {
					var mess = validationConstraints.errorContainer(ruleMessages, $this);
					if($this.next().hasClass('selectize-control')) {
						$this.next().after(mess);
					} else {
						$this.after(mess);
					}
				}
			}
		}
	});
return (0 == $(".validationMessages").length) ? true : false;
}