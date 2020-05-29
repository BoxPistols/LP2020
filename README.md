# LP2020

## dev setting

- if can not ignore dist folder
- do cached dist `git rm -r --cached dist`

### Set GA

```pug
link(rel='stylesheet', href="css/style.css")
//- GA
  script.
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-XXXXXXXX-Y', 'example.com');
    ga('send', 'pageview');
```

## Tree

```js
$ tree -I '*node_modules'
.
|-- README.md
|-- dist
|   |-- css
|   |   `-- style.css
|   |-- index.html
|   `-- js
|       |-- app.js
|       `-- app.js.map
|-- package.json
|-- prepros.config
|-- src
|   |-- css
|   |   |-- components
|   |   |   |-- _button.styl
|   |   |   |-- _loader.styl
|   |   |   |-- _mobile-menu.styl
|   |   |   `-- _transrate-rect.styl
|   |   |-- setting
|   |   |   `-- _base.styl
|   |   |-- style.styl
|   |   `-- utility
|   |       |-- _animation.styl
|   |       |-- _block.styl
|   |       |-- _color.styl
|   |       |-- _utility-mixin.styl
|   |       `-- _valiable.styl
|   |-- html
|   |   |-- _button.pug
|   |   |-- _footer.pug
|   |   |-- _loader-dot.pug
|   |   `-- _mobile-menu.pug
|   |-- index.pug
|   `-- js
|       `-- app.js
`-- yarn.lock
```

---

## Code BackUp

### transform

```pug
section.section
  .rect
    p rect
  .rect.translate translate
  .rect.rotate rotate
```

### Button

```pug
.content
  section.section
    cap.cap normal
    button.btn.float Button float
  section.section
    cap.cap button > text
    button.btn.slide-bgTx Button slide tx
      span.tx
  section.section
    cap.cap button include text / focus text
    button.btn.slide-bg.tip Button slide
  section.section
    cap.cap button 3D
    button.btn.cover-3d Button 3D
  section.section
    cap.cap 3D Cube Not working...
    button.btn.btn-cube
      .cube.is-default Button Default
      .cube.is-hover Button Hover
  section.section.answer
    cap.cap 3D Cube Not working!
    a.btn.cubics
      .cube.hovering Now, Hovering
      .cube.default Button
```

### menu  Hamburger

```pug
include html/_mobile-menu
```