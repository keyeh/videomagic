let videoEl = document.querySelector('[data-video]');

class Video {
	constructor(video, parent) {
		this.video = video;
		this.duration = video.duration;
		this.parent = parent;
	}
	scroll() {
		if (
			window.scrollY >= Video1.parent.offsetTop && window.scrollY <= (Video1.parent.offsetTop + Video1.parent.offsetHeight - window.innerHeight)
		) {
			this.video.currentTime = this.video.duration * window.scrollY / this.parent.clientHeight;
		}
	}
	fullWidthOrHeight() {
		let vidwidth = this.video.getBoundingClientRect().width;
		let vidheight = this.video.getBoundingClientRect().height;
		let windowHeight = window.innerHeight;
		let windowWidth = window.innerWidth;
		let heightCSS = 'height:100vh;width: auto;';
		let widthCSS = 'width:100vw;height: auto;';
		if (windowHeight - vidheight > 0) {
			this.video.setAttribute('style',heightCSS);
		} else if (windowWidth - vidwidth > 0) {
			this.video.setAttribute('style',widthCSS);
		}
	}
}

let Video1 = new Video(videoEl,document.querySelector('.container'));

Video1.fullWidthOrHeight();

window.addEventListener('scroll', () => {
	window.requestAnimationFrame(() => Video1.scroll());
});

window.addEventListener('resize', () => {
	Video1.fullWidthOrHeight();
});
