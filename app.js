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
			window.requestAnimationFrame(this.scroll);
		}
	}
	fullWidthOrHeight() {
		let vidwidth = this.video.getBoundingClientRect().width;
		let vidheight = this.video.getBoundingClientRect().height;
		let windowHeight = window.innerHeight;
		let windowWidth = window.innerWidth;
		let heightCSS = 'height:'+windowHeight+'px;width: auto;';
		let widthCSS = 'width:'+windowWidth+'px;height: auto;';
		console.log(heightCSS);
		if (vidheight < windowHeight) {
			this.video.setAttribute('style',heightCSS);
		} else {
			this.video.setAttribute('style',widthCSS);
		}
	}
}

let Video1 = new Video(videoEl,document.querySelector('.container'));
Video1.fullWidthOrHeight();

window.addEventListener('scroll', () => {
	Video1.scroll();
});

window.addEventListener('resize', () => {
	Video1.fullWidthOrHeight();
});
