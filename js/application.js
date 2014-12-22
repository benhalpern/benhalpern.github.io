$(document).ready(function(){
	launchAnimation()
})










function launchAnimation(){
		$(".headline h1, .headline h2").animate({"margin-left":"0"},440)
	setTimeout(function(){
		$(".profile-pic img").animate({"opacity":"1"},1200)
	},560)

}
