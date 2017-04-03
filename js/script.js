// preloader
document.body.onload = function(){

	setTimeout(function(){
		var preloader = document.getElementById('pre-loader');
		if ( !preloader.classList.contains('done'))
		{
			preloader.classList.add('done')
		}
	},1500)

}