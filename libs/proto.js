$(document).ready( function() {

// Animate on landing

	$('#article').animate({top: '270'})
    $("#bgphoto").animate({zoom:'90%'});



// Set the searchbox text to the value of the section headers as they scroll

	$('.section h1, .section h2').waypoint(function(direction) { 
		$('#searchbox').html( $(this).html() ); 					// when the .sectiontitle elements hit the top of the screen +50 pixels
	}, {offset: 50});												// Find #searchbox and make it's internal text equal to the internal text of the .sectiontitle element


// This swaps search & edit icons on scroll

	var scrollDist = 0;
	$(document).bubbaTonks(function(dist){
				
		console.log('down '+ dist+' scrollDist:'+scrollDist);
		$('#edit').animate({ top :'-30px'}, 100, function() {$('#searchboxicon').animate({top: '-6px'}, 100);});
	},
	
	function(dist){
		
		console.log('up '+ dist+' scrollDist:'+scrollDist);
		$('#searchboxicon').animate({ top :'-60px'}, 100, function() {$('#edit').animate({top: '7px'}, 100);});
	},
	true,
	'#article');




// This allows users to start editing

	$('#edit').click(function(){

		var curTitle = $('#searchbox').html();
		var parentatt = $(".section h2:contains("+curTitle+"),.section h1:contains("+curTitle+")").parent().attr('mockTemplate');
		
		$('#article,#bgphoto').hide();
		$('#'+parentatt).show();
		$("#logo, #searchboxicon, #searchbox, #edit").hide();
		$("#back, #context, #progressive-icon").show();
})

//Exit editing
    $('#back').click(function(){
		$("#logo, #searchboxicon, #searchbox, #edit").show();
		$("#back, #context, #progressive-icon, #sfMock, textarea").hide();
		$('#article,#bgphoto').show();
		$('.mock').hide();

})




// This allows users to search
	$('#searchboxicon').click(function(){
		$('#logo, #edit, #searchbox').hide();
		$('#exit, #overlay, hr.line').show();
		$('#topbar').css({'border-style': 'solid', 'border-width': '0px 0px 1px 0px', 'border-color': '#CCC'});
		$('div#searchbox').show()
		$('textarea#searchbox-hidden').show();
		$('textarea#searchbox-hidden').html("Search Wikipedia")
		$('textarea').css({'background-color': 'white', 'line-height': '13px'});

	})
	
	$('#exit').click(function(){
		$('#logo, #edit, #searchbox').show();
		$('#exit, #overlay, hr.line').hide();
		$('#topbar').css({'border-style': '', 'border-width': '', 'border-color': ''});
		$('textarea#searchbox-hidden').hide();

	})



//Left-drawer

	$('#logo').click(function(){
		$('#left-drawer').show();
		$('#topbar').hide();
		$('div#article, div#bgphoto').animate({top:'+=10%' , left: '80%', zoom: '50%',overflow:'hidden'});
		$('.WikiFont-li, .WikiFont-ul').fadeIn('slow');
	});


//Exit Left-drawer

	$('#article, #bgphoto').click(function(){
		$('#topbar').show('slow');
		$('div#article, div#bgphoto').animate({top:'-=10%' , left: '0%', zoom: '100%',overflow:'auto'});
		$('.WikiFont-li, .WikiFont-ul').fadeOut('slow');
		$('#left-drawer').hide(2000);
	});


});
