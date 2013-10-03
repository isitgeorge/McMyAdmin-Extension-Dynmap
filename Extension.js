Extensions.Dynmap = {};
Extensions.Dynmap.CreateTab = true;
Extensions.Dynmap.Name = 'Dynmap Extension';
Extensions.Dynmap.Author = 'isitgeorge.com';
Extensions.Dynmap.TabTitle = 'Dynmap';
Extensions.Dynmap.Init = function () {
	$('head').append('<script type="text/javascript" src="Extensions/Dynmap/Config.js"></script>');
	$('head').append('<script type="text/javascript" src="Extensions/Dynmap/Magic.js"></script>');
	
	$(document).ready(function() {
		setTimeout(dynmap_init, 1500); //IE fix
	});
}