// Requires a requestAnimationFrame to work
function Scratchy() {
  if ('ontouchstart' in document.documentElement) {
    this.setTouchMode();
  }
  else {
    this.setMouseMode();
  }
  // Default radius
  this.radius = 20;

  // Triggered events
  this.steps = [25, 50, 75];
  this.triggered = {};

  // Binding
  this.moveHandlerBound = this.moveHandler.bind(this);
  this.startScratchingHandlerBound = this.startScratchingHandler.bind(this);
  this.endScratchingHandlerBound = this.endScratchingHandler.bind(this);
  this.imgLoadedHandlerBound = this.imgLoadedHandler.bind(this);
}

Scratchy.prototype.setTouchMode = function() {
  this.isTouch = true;
  this.START_EVENT = 'touchstart';
  this.END_EVENT = 'touchend';
  this.MOVE_EVENT = 'touchmove';
  console.info("In touch mode");
};

Scratchy.prototype.setMouseMode = function() {
  this.isTouch = false;
  this.START_EVENT = 'mousedown';
  this.END_EVENT = 'mouseup';
  this.MOVE_EVENT = 'mousemove';
  console.info("In mouse mode");
};

Scratchy.prototype.setRadius = function(radius) {
  this.radius = radius;
}

Scratchy.prototype.init = function(container, imgUrl, coverImg) {
  trace('++ INIT');
  this.loadedImages = 0;
  if (coverImg == undefined) {
    trace('  No cover');
    this.imagesToLoad = 1;
    this.coverStyle = "color";
  }
  else {
    trace('  Cover');
    this.imagesToLoad = 2;
    this.coverStyle = "image";

    this.coverImg = new Image();
    this.coverImg.crossOrigin = '';
    this.coverImg.style.position = "absolute";
    this.coverImg.style.top = "0";
    this.coverImg.style.left = "0";
    this.coverImg.addEventListener('load', this.imgLoadedHandlerBound, false);
    this.coverImg.src = coverImg;
    trace('  Cover image node created');
  }

  // Create canvas in container and initialise canvas
  this.container = document.getElementById(container);

  // Force cursor to default
  this.container.style.cursor = "default";
  this.container.style.position = "relative";

  cnvWidth = this.container.style.width;
  cnvHeight = this.container.style.height;

  this.cnv = document.createElement('canvas');
  this.cnv.setAttribute("width", cnvWidth);
  this.cnv.setAttribute("height", cnvHeight);
  this.cnv.style.position = "absolute";
  this.cnv.style.top = "0";
  this.cnv.style.left = "0";
  this.cnv.style.cursor = "pointer";
  this.ctx = this.cnv.getContext('2d');
  this.statsCnv = document.createElement('canvas');
  this.statsCnv.setAttribute("width", cnvWidth);
  this.statsCnv.setAttribute("height", cnvHeight);
  this.statsCnv.style.position = "absolute";
  this.statsCnv.style.top = "0";
  this.statsCnv.style.left = "0";
  this.statsCtx = this.statsCnv.getContext('2d');

  this.sourceImg = new Image();
  this.sourceImg.crossOrigin = '';
  this.sourceImg.style.position = "absolute";
  this.sourceImg.style.top = "0";
  this.sourceImg.style.left = "0";
  this.sourceImg.addEventListener('load', this.imgLoadedHandlerBound, false);
  this.sourceImg.src = imgUrl;
  trace('  Source image node created');

  this.container.appendChild(this.sourceImg);
  this.container.appendChild(this.cnv);
};

Scratchy.prototype.imgLoadedHandler = function(e) {
  trace('++ Image loaded handler');
  this.isReady = ++this.loadedImages == this.imagesToLoad;
  trace('  loadedImages: ' + this.loadedImages);
  trace('  imagesToLoad: ' + this.imagesToLoad);
  trace('  loaded source: ' + e.currentTarget.src.substr(e.currentTarget.src.lastIndexOf('/')));
  if (this.isReady) {
    trace('  isReady!');
    this.reset();
    this.start();
  }
}

Scratchy.prototype.toggle = function() {
  trace('++ TOGGLE');
  if (!this.isReady) {
    trace('  Not ready!');
    console.error("Images aren't loaded yet!");
    return;
  }
  if (this.isActive) {
    this.stop();
  }
  else {
    this.start();
  }
}

Scratchy.prototype.reset = function() {
  trace('++ RESET');
  for (var i in this.steps) {
    this.triggered["step" + this.steps[i]] = false;
  }
  this.pixels = this.cnv.width * this.cnv.height;

  trace('  Drawing background');
  this.statsCtx.globalCompositeOperation = "source-over";
  this.statsCtx.fillStyle = "black";
  this.statsCtx.beginPath();
  this.statsCtx.rect(0, 0, this.cnv.width, this.cnv.height);
  this.statsCtx.fill();

  trace('  Drawing cover (' + this.coverStyle + ')');
  this.ctx.globalCompositeOperation = "source-over";
  if (this.coverStyle == "image") {
    trace('  Drawing image cover');
    this.ctx.drawImage(this.coverImg, 0, 0);
  }
  else {
    trace('  Drawing color cover');
    this.ctx.fillStyle = "black";
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.cnv.width, this.cnv.height);
    this.ctx.fill();
  }
}

Scratchy.prototype.computeRatio = function() {
  trace('++ COMPUTE RATIO');
  var hits = 0;
  var imageData = this.statsCtx.getImageData(0,0, this.cnv.width, this.cnv.height).data;

  for (var i = 0, n = imageData.length; i < n; i = i + 4) {
    if (imageData[i] + imageData[i+1] + imageData[i+2] + imageData[i+3] === 0) {
      hits++;
    }
  }
  this.unveiledRatio = (hits / this.pixels) * 100;

  for (var i in this.steps) {
    var step = this.steps[i];
    if (this.unveiledRatio > step && !this.triggered["step" + step]) {
      // TODO(labas): trigger proper events?
      switch (step) {
        case 25:
          Enabler.counter("25% unveiled");
          break;
        case 50:
          Enabler.counter("50% unveiled");
          break;
        case 75:
          Enabler.counter("75% unveiled");
          break;
      }
      this.triggered["step" + step] = true;
    }
  }
}

/**
 * Enables the scratching feature.
 */
Scratchy.prototype.start = function() {
  trace('++ START');
  if (!this.isReady) {
    trace('  Not ready!');
    console.error("Images aren't loaded yet!");
    return;
  }

  if (this.isActive) {
    trace('  Not active!');
    return;
  }

  this.container.addEventListener(this.START_EVENT, this.startScratchingHandlerBound, false);
  this.container.addEventListener(this.END_EVENT, this.endScratchingHandlerBound, false);
  this.isActive = true;
};

/**
 * Stops the scratching feature.
 */
Scratchy.prototype.stop = function() {
  trace('++ STOP');
  if (!this.isReady) {
    trace('  Not ready!');
    console.error("Images aren't loaded yet!");
    return;
  }
  if (this.isScratching) {
    this.endScratchingHandler(null);
  }
  if (!this.isActive) {
    return;
  }
  this.statsCtx.closePath();
  this.ctx.closePath();
  this.container.removeEventListener(this.START_EVENT, this.startScratchingHandlerBound, false);
  this.container.removeEventListener(this.END_EVENT, this.endScratchingHandlerBound, false);
  this.isActive = false;
};

Scratchy.prototype.startScratchingHandler = function(e) {
  e.preventDefault();
  this.isScratching = true;
  window.addEventListener(this.MOVE_EVENT, this.moveHandlerBound, false);

  this.updatePosition(e);

  this.statsCtx.globalCompositeOperation = "destination-out";
  this.statsCtx.lineJoin = 'round';
  this.statsCtx.lineCap = 'round';
  this.statsCtx.strokeStyle = "black";
  this.statsCtx.lineWidth = this.radius * 2;

  this.statsCtx.beginPath();
  this.statsCtx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false);
  this.statsCtx.closePath();
  this.statsCtx.fill();

  this.statsCtx.beginPath();
  this.statsCtx.moveTo(this.posX, this.posY);

  this.ctx.globalCompositeOperation = "destination-out";
  this.ctx.lineJoin = 'round';
  this.ctx.lineCap = 'round';
  this.ctx.strokeStyle = "black";
  this.ctx.lineWidth = this.radius * 2;

  this.ctx.beginPath();
  this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false);
  this.ctx.closePath();
  this.ctx.fill();

  this.ctx.beginPath();
  this.ctx.moveTo(this.posX, this.posY);
};

Scratchy.prototype.endScratchingHandler = function(e) {
  if (e != null) {
    e.preventDefault();
  }
  window.removeEventListener(this.MOVE_EVENT, this.moveHandlerBound, false);
  this.isScratching = false;
  this.computeRatio();
};

Scratchy.prototype.moveHandler = function(e) {
  e.preventDefault();
  this.updatePosition(e);
  if (this.posX > this.container.clientWidth || this.posX < 0 ||
     this.posY > this.container.clientHeight || this.posY < 0) {
    // If we go outside the scratching position we should stop scratching
    // to avoid side effects like mouseup outside the area.
    this.endScratchingHandler(e);
    return;
  }
  this.statsCtx.lineTo(this.posX, this.posY);
  this.statsCtx.stroke();
  this.ctx.lineTo(this.posX, this.posY);
  this.ctx.stroke();
}

Scratchy.prototype.updatePosition = function(e) {
  var posX, poxY;
  if (this.isTouch) {
    var touch = e.touches[0] || e.changedTouches[0];
    posX = touch.pageX;
    posY = touch.pageY;
  }
  else {
    e = e || window.e; // IE-ism
    posX = e.clientX;
    posY = e.clientY;
  }
  // Transfer coordinates in container's
  this.posX = posX - this.container.offsetLeft;
  this.posY = posY - this.container.offsetTop;
}
