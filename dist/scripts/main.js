(function () {
    $(".font-toggle button").on('click', function(){
    	$("#your-message").removeClass('permmark');
    	$("#your-message").removeClass('indieflower');
    	$("#your-message").removeClass('gloria');
    	$("#your-message").addClass($(this).data('font'));
    });
})();