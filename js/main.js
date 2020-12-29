$(document).ready(function(){
	$('#wp_change_link').click(function(){
		$('#wp_brows').click();
	})

	$('.wp_ion_th').click(function(){
		console.log("fade out fun");
		$('.wp_sm_cols').fadeToggle();
	});

	$('#searchId').css("display","none");

	$('#serchIcon').click(function(){
		$('#searchId').fadeToggle();
	})



	$(window).resize(function() {
		 if (  $(window).width() < 767 ){
			$('.wp_sm_cols').fadeOut();
			$('.nav-pills-custom .nav-link').click(function(){
				$('.wp_sm_cols').fadeOut();
			})
		 } else{
		 	$('.wp_sm_cols').fadeIn();	
		 }

	})


	if (  $(window).width() < 767 ){
		$('.wp_sm_cols').fadeOut();
		$('.nav-pills-custom .nav-link').click(function(){
			$('.wp_sm_cols').fadeOut();
		})
	}else{
	 	$('.wp_sm_cols').fadeIn();
	}

})