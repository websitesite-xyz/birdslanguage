var sentences = [
'Cui-cui',
'Pio-pio',
'Tweet tweet',
'Chun-chun',
'Pip-pip',
'Tjiep Tjiep',
'Chip chip',
'Jick-jick',
'Tsiou tsiou',
'Check check',
'Chick chirik',
'Piep piep',
'Churulic churulic',
'Piju piju',
'Kvitt kvitt',
'Tsoo-ghoo-roo-ghoo',
'Cocorico',
'Kikeriki',
'Gaggalagó',
'Chicchirichi',
'Kok-e-kok-ok',
'Ko-ki-oh',
'Rap rap',
'Quack quack',
'Prääks Prääks',
'Coin Coin',
'Mac Mac',
'Vak Vak',

]


$(document).ready(function() {


	function shuffle(database) {
		return database[Math.floor(Math.random() * database.length)];
	}


	$('h1').click(function() {
		$('h1').text(shuffle(sentences));
	})

	

})