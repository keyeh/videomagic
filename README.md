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
* full width or height:
  * mimics css background size cover based on a parent (can be window or any other DOM element)
```
[width|height]: inherit;
```
