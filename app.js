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
}

let Video1 = new Video(videoEl,document.querySelector('.container'));

window.addEventListener('scroll', () => {
	Video1.scroll();
});
