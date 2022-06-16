const info_sub = document.querySelector('.info_subtitle')

window.addEventListener('scroll', function() {
	if (pageYOffset >= 300){
		info_sub.textContent = 'Мы доставляем электронику, товары из IKEA и других зарубежных магазинов, а также сложные технологические товары для физических и юридических лиц.'
		info_sub.style.animation = 'opacity 3s'
	}
})