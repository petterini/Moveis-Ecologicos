var banners = ["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var banner = 0;

function trocaBanner(){
	banner = (banner + 1) % 2;
	document.querySelector("h2#mensagem").textContent = banners[banner];
}
setInterval(trocaBanner, 1000);