# video scroll magic
![preview image](https://github.com/troychroi/videomagic/blob/master/preview.gif)

## RAF loops
* window.requestAnimationFrame(callback) - https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
* frames per second (FPS) : most screens refresh at 60 FPS
* video needs to match either the standard FPS or a lower one (requires more programming... for another time)

## Calculations & Measurements
* video duration
* video current time
* parent height
* scroll position

magic calculation:

```
video current time = (video duration) * (scroll position) / (parent height)
```

run the scroll only when scroll position is in between the bounds of the container
```
if (window.scrollY >= Video1.parent.offsetTop && window.scrollY <= (Video1.parent.offsetTop + Video1.parent.offsetHeight - window.innerHeight))
```

## Styles
* simple css styling as a fallback
* JS function ```fullWidthOrHeight()``` to have video cover background in all circumstances

Desktop:
```
video {
  width: inherit;
  height: auto;
  position: fixed;
  z-index: 0;
  opacity: .6;
}
```
Break Point (where video width is at 100%, but not wider):
```
@media only screen and (max-width: 1770px) {
  video {
    width: auto;
    height: 100vh;
    left: 50%;
    transform: translateX(-50%);
  }
}
```
JS Solution:
```
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
```
