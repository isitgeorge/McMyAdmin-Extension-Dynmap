function dynmap_init() {
	$('#dynmap_tabarea').append('<p>' + dynmap_config.message + '</p>' +
	'<iframe id="dynmap_frame" style="width:100%; height:480px;" frameborder="0" src="' + dynmap_config.location + '"></iframe>' +
	'<input type="button" value="Refresh map" onclick="dynmap_refresh();" />' +
	'<input type="button" value="Open new tab" onclick="dynmap_newtab();" />');
}

function dynmap_refresh() { 
	$('#dynmap_frame').attr('src',dynmap_config.location);
}

function dynmap_newtab() { 
	window.open(dynmap_config.location);
}