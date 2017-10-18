(function () {
    $(".font-toggle button").on('click', function(){
    	$("#your-message").removeClass('permmark');
    	$("#your-message").removeClass('indieflower');
    	$("#your-message").removeClass('gloria');
    	$("#your-message").addClass($(this).data('font'));
    });




    var canvas = document.querySelector("#signature-pad");

	var signaturePad = new SignaturePad(canvas);
	
	$("#btn-clear").on('click',function() {
		signaturePad.clear();
	});



    var entries = [
    	{

	    	"name":"Alan",
	    	"message":"Get well soon!"
    	},

    	{
	    	"name":"Dan",
	    	"message":"Get well soon!"
    	},

    	{

	    	"name":"Joel",
	    	"message":"Get well soon!"
    	}
    ];

    var fontclasses = [
    	"gloria",
    	"indieflower",
    	"permmark"
    ];

	function doEntries() {
		$("#entries").fadeIn();
		$("#entries").html("");
		for (var i = 0; i< 3; i++) {

			var randfont = fontclasses[Math.floor(Math.random() * fontclasses.length)];
			entry = entries[i];
			console.log(entry);
			var div = $("<div/>");

				div.addClass('item').addClass('col-md-6').addClass(randfont);
				div.append("<span class='message'>"+entry.message+"</span>");
				div.append("<br> <span class='name'>"+entry.name+"</span");
				
				console.log(div);
			$("#entries").append(div);

		}
	}


$( "#cast-form" ).submit(function( event ) {
  
  	$("#entries").fadeOut();

	var userMsg = $("#your-message").val();
	var userName = $("#your-name").val();

	entries.unshift({"name":userName, "message" : userMsg});

	doEntries();

  event.preventDefault();
});



doEntries();









})();