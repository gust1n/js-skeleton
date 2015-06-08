// "Namespace" of this file
(function(win,doc,$,ns) {

	// Private methods

	// Auto run to initialize everything
	(function init() {

		// Run private startup methods
		initSettings();

		// Wait until DOM is ready
		$(function(){
			initElements();
		});

		initActions();

		//Expose ns object to global scope
		win.ns = ns;
	})();

	// Settings to be used inside namespace
	function initSettings() {
		ns.settings.exampleSetting = 1337;
	}

	function initElements() {
		ns.elements.$exampleButton = $("#elite-btn");
	}

	function initActions() {
		ns.elements.$exampleButton.on("click", handleEliteClick);
	}

	function handleEliteClick() {
		$(this).html(ns.settings.exampleSetting);
	}

	//Public methods

	ns.initializeSomething = function(){

		//Example
		var myThings = ns.components.things = {

			images: [],

			data: ns.data.somethingData,

			nextThing: function(){

			},

			changeSomething: function(i){

			}

		};

	};

	ns.loadSomething = function(){

	};

	ns.startSomethingWithParameters = function(element,fadeSpeed,interval){

	};
})(this,document,jQuery,{settings:{},data:{},components:{}});
