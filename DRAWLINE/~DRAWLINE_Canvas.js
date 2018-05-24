(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sprite8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{check:0,drawline:4,clearline:7});

	// timeline functions:
	this.frame_0 = function() {
		/* x_y0 = -1 * eval("/:c") / eval("/:xN");
		if (eval("/:yN") == 0)
		{
		    nAngle = 90;
		}
		else
		{
		    y_x0 = eval("/:c") / eval("/:yN");
		    tanValue = Math.abs(Number(y_x0) / Number(x_y0));
		    nAngle = Math.atan(Number(tanValue)) * 180 / 3.141593;
		    if (Number(x_y0 * y_x0) > 0)
		    {
		        nAngle = 180 - nAngle;
		    } // end if
		} // end else if
		nAngle = 360 - nAngle;
		sY = "";
		if (eval("/:yN") != 1)
		{
		    sY = String(eval("/:yN"));
		} // end if
		sX = "";
		if (eval("/:xN") != 1)
		{
		    sX = String(eval("/:xN"));
		} // end if
		sC = "";
		if (eval("/:c") > 0)
		{
		    sC = "+" add String(eval("/:c"));
		}
		else if (eval("/:c") < 0)
		{
		    sC = "-" add String(Math.abs(eval("/:c")));
		} // end else if
		/:Problem = sY add "y = " add sX add "x" add sC;
		startY = getProperty("/start", _y);
		startX = getProperty("/start", _x);
		endX = getProperty("/end", _x);
		endY = getProperty("/end", _y);
		x1 = (startX - 220) / 20;
		y1 = (220 - startY) / 20;
		x2 = (endX - 220) / 20;
		y2 = (220 - endY) / 20;
		wuca = eval("/:diff");
		if (Math.abs(Number(eval("/:yN")) * Number(y1) - (Number(eval("/:xN")) * Number(x1) + Number(eval("/:c")))) < Math.abs(wuca) && Math.abs(Number(eval("/:yN")) * Number(y2) - (Number(eval("/:xN")) * Number(x2) + Number(eval("/:c")))) < Math.abs(wuca))
		{
		    if (right != 1)
		    {
		        call("drawline");
		        right = 1;
		    } // end if
		}
		else if (right == 1)
		{
		    right = 0;
		    call("clearline");
		} // end else if
		*/
	}
	this.frame_1 = function() {
		/* gotoAndPlay(1);
		*/
	}
	this.frame_4 = function() {
		/* setProperty("/myline", _x, Number(x_y0 * 20) + 220);
		setProperty("/myline", _y, 220);
		setProperty("/myline", _rotation, nAngle);
		fscommand("1", "1");
		*/
	}
	this.frame_7 = function() {
		/* setProperty("/myline", _x, 600);
		setProperty("/myline", _y, 600);
		setProperty("/myline", _x, 600);
		setProperty("/myline", _y, 600);
		fscommand("0", "0");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(3).call(this.frame_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.text33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAjQgJgLAAgYQAAgOADgKQAEgJAFgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgLAAgHgJgAgKgcQgGAIAAAUQAAAVAFAHQAEAHAHAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgGAAgEAGg");
	this.shape.setTransform(1.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,12.9,30.7);


(lib.text32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFArIAAhCQgDADgGAEIgLAFIAAgJQAJgFAGgGQAGgFADgGIAHAAIAABVg");
	this.shape.setTransform(4.9,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,15.5,30.7);


(lib.text31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcArQABgEABgEQACgFAFgGQAEgFAKgIQAMgLAGgGQAEgGAAgHQABgGgFgEQgEgFgIABQgGgBgFAFQgFAFABAHIgMgBQABgMAIgGQAIgGAKAAQANAAAHAGQAIAHgBAKQAAAGgCAEQgCAGgFAEQgEAFgMAKIgMALIgDAGIAoAAIAAAKg");
	this.shape.setTransform(5.2,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,17.3,30.7);


(lib.text30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAlQgHgHgBgKIAKgCQACAJAFAEQAEAEAGAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAIgGACIABgJIABAAQAGAAAGgDQAFgEAAgHQAAgGgEgEQgEgDgFAAQgGAAgEAEQgEADgCAIIgKgCQACgKAHgGQAGgGALAAQAGAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIABAEAFQAEAGAAAIQAAALgIAIQgIAIgMAAQgLAAgIgHg");
	this.shape.setTransform(5.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,17.4,30.7);


(lib.text29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIArIAAgUIglAAIAAgKIAmg3IAJAAIAAA3IAMAAIAAAKIgMAAIAAAUgAgSANIAaAAIAAgmg");
	this.shape.setTransform(5.1,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,17.3,30.7);


(lib.text28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAkQgHgGgBgLIAKgBQACAIAFAEQAEAFAGAAQAGAAAGgHQAFgFAAgJQAAgJgFgFQgFgFgHAAQgFAAgEACQgFADgCACIgJgBIAIgrIAqAAIAAAKIgiAAIgFAXQAIgGAHAAQAMABAHAHQAJAHgBAMQABAMgIAJQgHAKgOAAQgMAAgHgHg");
	this.shape.setTransform(5.4,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,17.4,30.7);


(lib.text27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAiQgIgKAAgWQAAgYAJgLQAIgKANAAQAKAAAGAGQAHAFABAKIgLABQgBgGgDgDQgEgEgGAAQgEAAgEACQgFAEgDAHQgDAHAAANQAEgGAGgDQAFgCAFAAQALAAAHAHQAHAHAAAMQAAAIgDAHQgDAHgHAEQgGAEgHAAQgNAAgIgKgAgKABQgFAFAAAIQAAAGACAFQADAFAEACQAEADADAAQAHAAAFgFQAFgGAAgJQAAgJgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape.setTransform(5.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,17.3,30.7);


(lib.text26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPArQABgKADgPQAEgPAHgLQAGgOAJgJIgqAAIAAgLIA3AAIAAAJQgIAIgJAPQgHANgEAQQgDAKgBAOg");
	this.shape.setTransform(5.4,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,17.4,30.7);


(lib.text25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAkQgHgHAAgMQAAgIAEgGQAEgEAIgCQgHgDgDgEQgDgFAAgGQAAgJAHgHQAHgGAKAAQALAAAHAHQAHAGAAAJQAAAGgDAFQgEAEgGADQAIACAEAFQAEAGAAAIQAAALgIAHQgHAIgNAAQgMAAgIgIgAgMAFQgFAFAAAHQAAAFADAEQACAEAEADQAEACAEAAQAIAAAFgFQAEgFAAgHQAAgIgFgFQgFgFgHAAQgHAAgFAFgAgJgeQgEADAAAGQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGQAAgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape.setTransform(5.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,17.4,30.7);


(lib.text24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAmQgGgFgCgLIAKgBQACAIADADQAEADAGAAQAEAAADgCQAEgCACgEQADgEABgGIACgNIAAgCQgDAFgGADQgFADgGAAQgLAAgHgIQgHgGAAgNQAAgNAHgIQAIgIAMAAQAHAAAHAFQAHAEAEAIQADAJAAAQQAAAPgDAKQgEAKgHAFQgHAFgJAAQgKAAgGgGgAgLgdQgFAGAAAJQAAAJAFAFQAEAEAHAAQAHAAAFgEQAEgFAAgKQAAgJgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape.setTransform(5.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_1.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,17.4,30.7);


(lib.text23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAjQgIgLAAgYQAAgOADgKQADgJAHgFQAFgFAJAAQAHAAAFADQAGADADAFQADAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgLAAgIgJgAgKgcQgGAIAAAUQAAAVAFAHQAFAHAGAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgHAAgDAGg");
	this.shape.setTransform(12,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFArIAAhCQgDADgGAEIgLAFIAAgJQAJgFAGgGQAGgFADgGIAHAAIAABVg");
	this.shape_1.setTransform(4.9,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_2.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,24.6,30.7);


(lib.text22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAjQgJgLAAgYQAAgOADgKQAEgJAFgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgMAAgGgJgAgKgcQgGAIAAAUQAAAVAFAHQAEAHAHAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgGAAgEAGg");
	this.shape.setTransform(8,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFArIAAhCQgDADgGAEIgLAFIAAgJQAJgFAGgGQAGgFADgGIAHAAIAABVg");
	this.shape_1.setTransform(0.9,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,20.2,30.7);


(lib.text21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAmQgGgFgCgLIAKgBQACAIADADQAEADAGAAQAEAAADgCQAEgCACgEQADgEABgGIACgNIAAgCQgDAFgGADQgFADgGAAQgLAAgHgIQgHgGAAgNQAAgNAHgIQAIgIAMAAQAHAAAHAFQAHAEAEAIQADAJAAAQQAAAPgDAKQgEAKgHAFQgHAFgJAAQgKAAgGgGgAgLgdQgFAGAAAJQAAAJAFAFQAEAEAHAAQAHAAAFgEQAEgFAAgKQAAgJgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape.setTransform(1.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,13,30.7);


(lib.text20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAkQgHgHAAgMQAAgIAEgGQAEgEAIgCQgHgDgDgEQgDgFAAgGQAAgJAHgHQAHgGAKAAQALAAAHAHQAHAGAAAJQAAAGgDAFQgEAEgGADQAIACAEAFQAEAGAAAIQAAALgIAHQgHAIgNAAQgMAAgIgIgAgMAFQgFAFAAAHQAAAFADAEQACAEAEADQAEACAEAAQAIAAAFgFQAEgFAAgHQAAgIgFgFQgFgFgHAAQgHAAgFAFgAgJgeQgEADAAAGQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGQAAgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape.setTransform(1.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,13,30.7);


(lib.text19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPArQAAgKAEgPQAEgPAHgLQAGgOAIgJIgpAAIAAgLIA3AAIAAAJQgJAIgHAPQgJANgDAQQgDAKgBAOg");
	this.shape.setTransform(1.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,13,30.7);


(lib.text18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAiQgIgKAAgWQAAgYAJgLQAIgKANAAQAKAAAGAGQAHAFABAKIgLABQgBgGgDgDQgEgEgGAAQgEAAgEACQgFAEgDAHQgDAHAAANQAEgGAGgDQAFgCAFAAQALAAAHAHQAHAHAAAMQAAAIgDAHQgDAHgHAEQgGAEgHAAQgNAAgIgKgAgKABQgFAFAAAIQAAAGACAFQADAFAEACQAEADADAAQAHAAAFgFQAFgGAAgJQAAgJgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape.setTransform(1.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,12.9,30.7);


(lib.text17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAkQgIgGgBgLIAMgBQABAIAEAEQAFAFAGAAQAGAAAGgHQAFgFAAgJQAAgJgFgFQgFgFgHAAQgFAAgFACQgDADgCACIgKgBIAHgrIAqAAIAAAKIghAAIgEAXQAHgGAIAAQALABAIAHQAHAHABAMQgBAMgGAJQgJAKgNAAQgMAAgHgHg");
	this.shape.setTransform(1.4,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,13,30.7);


(lib.text16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIArIAAgUIglAAIAAgKIAmg3IAJAAIAAA3IAMAAIAAAKIgMAAIAAAUgAgSANIAaAAIAAgmg");
	this.shape.setTransform(1.1,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,12.9,30.7);


(lib.text15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAlQgHgHgBgKIAKgCQACAJAFAEQAEAEAGAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAIgGACIABgJIABAAQAGAAAGgDQAFgEAAgHQAAgGgEgEQgEgDgFAAQgGAAgEAEQgEADgCAIIgKgCQACgKAHgGQAGgGALAAQAGAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIABAEAFQAEAGAAAIQAAALgIAIQgIAIgMAAQgLAAgIgHg");
	this.shape.setTransform(1.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,13,30.7);


(lib.text14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbArQAAgEABgEQACgFAFgGQAEgFAJgIQAOgLAEgGQAGgGAAgHQgBgGgEgEQgFgFgGABQgIgBgEAFQgEAFgBAHIgKgBQABgMAHgGQAIgGALAAQAMAAAHAGQAHAHAAAKQAAAGgCAEQgCAGgFAEQgEAFgMAKIgLALIgFAGIApAAIAAAKg");
	this.shape.setTransform(1.2,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,12.9,30.7);


(lib.text13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFArIAAhCQgDADgGAEIgLAFIAAgJQAJgFAGgGQAGgFADgGIAHAAIAABVg");
	this.shape.setTransform(0.9,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,11.1,30.7);


(lib.shape11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("EAg2AABIAAAuIBpgnEAieAACIhogwIAAAvIBYAAAfaABIBcAAAfQhiIAABjIjIAAIjIAAIjIAAIjIAAIjJAAIjIAAIjIAAIjIAAIjIAAIjHAAIAADIIBjAAAcIABIAAhjAZAhiIAABjAV4ABIAAhjASwhiIAABjEAAAggjIAAgsIAAAsIAAAAIAuAAIgmhpEAAAgiYIAAAMIAAAGIAAA3EAAAggjIguAAIAuhjAAA/OIAAAAIAAAHIAAgHIAAhVEAAAggjIAABVAAA/HIAADBIBjAAAAA/OIBjAAABj4+IhjAAIAADIIBjAAAAA4+IAAjIABjyuIhjAAIAADIIBjAAAAAvmIAADIIBjAAABjpWIhjAAIAADIIBjAAAAApWIAAjIAAAyuIAAjIAsghiIAABjIDIAAIAAhjAywhiIAABjIDIAAIAAhjAvoABIDIAAA5AhiIAABjIDIAAIAAhjA/QhiIAABjIDIAAIAAhjEgieAADIAGgCIDIAAA8IABIDIAAA14ABIDIAAAPnABIAAhjAMfhiIAABjAJXABIAAhjAGPhiIAABjABjjGIhjAAIAADHIjIAAIjIAAIjIAAADHABIAAhjAmQhiIAABjAjIhiIAABjABjGRIhjAAIAADIIBjAAAAAGRIAAjIABjPpIhjAAIAADIIBjAAABjMhIhjAAIAADIABjV5IhjAAIAADIIBjAAAAAV5IAAjIAAAMhIAAjIAAAjGIAAjIABjcJIhjAAIAADIIBjAAEAAAAiZIAAjIAAAcJIAAjI");
	this.shape.setTransform(220.1,219.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AP9QwIBZAAIhZAAIAAgvIBpAwIABAGIhqAngAw2vzIgBgsIgBg4IABA4IgBAsIguAAIAuhkIAAgGIAIAAIAnBqgAw3wfg");
	this.shape_1.setTransform(328.1,112.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.2,443.4,442.2);


(lib.shape9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eh0ZAAAMDozAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-746,-1,1492,2);


(lib.shape5UpOverDownHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.shape2UpOverDownHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("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BkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAUKq7IhkAAIAAhkASmkrIBkAAIAABkIBkAAIBkAAIBkAAIBkAAIBkAAIAABkIBkAAIAADHIBkAAIAAhkAY2krIBkAAIAABkIAABkIBkAAAVukrIBkAAIAABkIAABkIBkAAIAAhkIAAhkARCsfIAABkIhkAAIAABkIBkAAARC0TIAABkIhkAAIAABkIBkAAAdiBkIAABkIBkAAIAAhkIBkAAIAAjHIhkAAEAisABkIiCAAIAABkIBaAAAfGDIIBkAAIAABkIBuAAEAiEAGQIhaAAIAABkICCAAEAgqAEsIAABkIhkAAIAABkIBkAAIAABkIBaAAAdiGQIBkAAIAAhkIhkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAAdiJYIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAfGK8IBkAAIAABkIBQAAAfGEsIBkAAAfGDIIAABkAdiDIIAABkIhkAAIAABkIBkAAAXSBkIAABkIBkAAIAAhkIhkAAIAAjHIhkAAIhkAAIAADHIBkAAIAAhkAaaBkIAABkIBkAAIAAhkIhkAAIAAjHIhkAAAY2DIIBkAAIAABkIBkAAIAAhkIBkAAAb+BkIAAhkAY2AAIAABkIBkAAAUKjHIAABkIhkAAIhkAAIAADHIBkAAIAAhkAVuhjIAAhkIAAhkASmhjIAAhkIhkAAIAABkIhkAAIhkAAIAADHIBkAAIAAhkARCBkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAASmDIIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkICMAAASmjHIBkAAAUKEsIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIAAhkAUKGQIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkARCGQIBkAAIAAhkIhkAAIAABkIAABkIBkAAIAAhkIBkAAARCJYIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAUKJYIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgASmK8IBkAAIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAAVuJYIAAhkIBkAAIAABkgASmEsIBkAAAXSK8IBkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAAVuK8IBkAAASmDIIAABkARCDIIAABkIhkAAIAABkIBkAAAaaOEIAABkIBkAAIBkAAIAABkIAABkIBkAAIAAhkIBkAAIAABkIBkAAAXSOEIBkAAIAAhkIhkAAIAABkIAABkIBkAAIAAhkIBkAAAXSRMIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAaaRMIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAY2SwIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIB4AAAUKMgIAABkIBkAAIAAhkIAAhkAUKOEIAABkIBkAAIAAhkIBkAAARCOEIBkAAIAAhkIhkAAIAABkIAABkIBkAAIAAhkIBkAAARCRMIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAUKRMIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAUKMgIhkAAIAAhkASmSwIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIBQAAAUKUUIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIAAhkAUKV4IAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBuAAARCV4IBkAAIAAhkIhkAAIAABkIAABkIBkAAIAAhkIBkAAARCZAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAUKZAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgASmakIBkAAIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAAVuZAIAAhkIBkAAIAABkgASmUUIBkAAAXSakIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIB4AAAY2akIBkAAIAABkIBkAAIBkAAIBkAAIBkAAIB4AAAVuakIBkAAASmSwIAABkARCSwIAABkIhkAAIAABkIBkAAAfGakIBkAAIAABkIAABkICMAAAb+akIBkAAIAABkIAABkIBkAAIAAhkIAAhkAdiBkIhkAAARCK8IAABkIhkAAIAABkIBkAAASmkrIAABkARCkrIAABkIhkAAIAABkEAPeggzIhkAAIAABkIBkAAIAAhkIAAhkEAN6giXIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIhkAAIhkAAIAADHIBkAAIAAhkEAKygiXIAABkIBkAAIAAhkEAKyggzIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAAKy9rIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAMW8HIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAEAJOgiXIAABkIBkAAEAHqgiXIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkEAHqggzIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAEAEigiXIAABkIBkAAIAAhkEAEiggzIAABkIBkAAIAAhkIBkAAAEi9rIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAGG8HIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAAHq6jIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkAEi4/IBkAAIAAhkIhkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIhkAAIAADHIBkAAIAAhkAEi13IAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAGG0TIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkAGG6jIBkAAAGG8HIAABkAEi8HIAABkIhkAAIAABkIBkAAEAC+ggzIhkAAIAABkIBkAAIAAhkIAAhkEABagiXIAABkIjHAAIAABkIBkAAEgBtgiXIAABkIhkAAIAABkIAABkIBkAAIAABkIBkAAABa9rIAABkIBkAAIAAhkgAht/PIAABkIDHAAIAAhkEgDRggzIhkAAIAABkIBkAAIBkAAEgDRggzIAAhkEgE1giXIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIBkAAEgH9giXIAABkIBkAAIAAhkEgH9ggzIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIDHAAIAAhkAn99rIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAmZ8HIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIBkAAAk16jIAABkIhkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAAmZ4/IhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAAmZ4/IAAhkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIBkAAIBkAAAn913IAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIAABkIBkAAAn93bIAABkAmZ6jIBkAAABa0TIBkAAIAAhkIhkAAAmZ8HIAABkAn98HIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAABaxLIAAhkIAAhkABaxLIBkAAIAAhkIhkAAABaxLIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkAgJsfIhkAAIAABkIAABkIBkAAAhtuDIAABkIhkAAIAABkIBkAAIDHAAIAAhkIAAhkIjHAAIhkAAIAABkIhkAAIhkAAIAABkIBkAAIBkAAIAABkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIhkAAIAADHIBkAAIAAhkABasfIBkAAIAAhkIhkAAIAAhkAhtxLIDHAAAC+uDIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkgAhtvnIAABkAk1xLIAABkIBkAAIAAhkIBkAAAmZxLIhkAAIAABkIBkAAIAAhkIAAhkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAAn9uDIAABkIBkAAIAAhkIBkAAIAABkIAABkIAABkIBkAAIAABkIAABkIBkAAIBkAAAn9vnIAABkAmZxLIBkAAAk1pXIAABkIBkAAIBkAAIAABkIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAAmZpXIhkAAIAABkIBkAAIAAhkIAAhkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAAn9mPIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAAn9nzIAABkAmZkrIBkAAIAABkIBkAAIAABkIBkAAIAADHIDHAAIAAjHIBkAAIAAhkIhkAAAmZpXIBkAAAC+pXIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAAhkgAC+mPIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkAn9sfIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAAEimPIAABkIBkAAIAABkIhkAAIAABkIhkAAAEiyvIhkAAIAAhkIBkAAgEAEiggzIhkAAAC+krIBkAAIAABkIhkAAgAEimPIhkAAAn90TIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAEgJhgiXIAABkIBkAAEgLFgiXIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkIBkAAEgLFggzIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAEgONgiXIAABkIBkAAIAAhkEgONggzIAABkIBkAAIAAhkIBkAAAuN9rIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAsp8HIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAEgPxgiXIAABkIBkAAEgRVgiXIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkEgRVggzIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAEgUdgiXIAABkIBkAAIAAhkEgUdggzIAABkIBkAAIAAhkIBkAAA0d9rIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAy58HIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkAxV6jIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAhkAy54/IhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAAy54/IAAhkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAhkA0d13IAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAA0d3bIAABkAy56jIBkAAAy58HIAABkA0d8HIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAEgWBgiXIAABkIBkAAEgXlgiXIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAhkEgXlggzIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAEgatgiXIAABkIBkAAIAAhkEgatggzIAABkIBkAAIAAhkIBkAAA6t9rIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgA5J8HIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIAABkIhkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAEgcRgiXIAABkIBkAAEgd1giXIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkEgd1ggzIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkIhkAAIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAhkEgg9giXIAABkIBkAAIAAhkEgg9ggzIAABkIBkAAIAAhkIBkAAEgihgfPIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAEgg9gdrIAABkIBkAAIAABkIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAhkEgihgdrIBkAAA916jIAABkIhkAAIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAEgg9gajIAABkIhkAAEgihgXbIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAhkA/Z6jIhkAAIh4AAEgiXgV3IBaAAIAABkIBkAAIAABkIhkAAIAABkIhuAAA/Z6jIBkAAEgg9gcHIAABkEgihgSvIBkAAIAAhkIhuAAEgihgPnIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAEgg9gODIAABkIBkAAIAABkIhkAAIAABkIhkAAEgiXgMfIBaAAIAABkIhkAAEgiXgODIBaAAEgihgHzIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAhkEgg9gGPIAABkIBkAAIAABkIBkAAIAABkIBkAAEgihgErIBkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAhkEgihgGPIBkAAAuNBkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAjHIhkAAAspDIIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAAhkA0dBkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAAy5DIIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAAvxGQIhkAAIAABkIBkAAIAAhkIAAhkIBkAAIAABkIBkAAIAAhkIAAhkAxVEsIAABkIhkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIhkAAA0dGQIBkAAIAAhkIhkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIAABkIBkAAA0dJYIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAy5K8IBkAAIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIDHAAIAAhkIAAhkIBkAAIAAhkAy5EsIBkAAAuNK8IBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAABkIBkAAIBkAAIAAhkIhkAAIAABkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkIBkAAIAAhkIAAhkAspK8IBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAAhkIBkAAIAABkIBkAAAvxK8IBkAAAy5DIIAABkA0dDIIAABkIhkAAIAABkIBkAAA6tBkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAA5JDIIBkAAIAABkIBkAAIAAhkIBkAAEgihgBjIBkAAIAAhkIhaAAEgg9gBjIBkAAEgg9ABkIAABkIBkAAIAAhkIhkAAIAAjHEgihADIIBkAAIAABkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIhkAAIhkAAIAABkIBkAAIAAhkIAAhkIhkAAIAABkIhkAAIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIhkAAIAAhkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAAhkIAAhkEgihABkIBkAAA91DIIAAhkIhkAAIAAhkA91DIIBkAAIAAhkIBkAAA/ZDIIBkAAIAABkIhkAAgEgihAGQIBkAAIAAhkIhuAAEgiXAH0IBaAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkIBkAAIAAhkIAAhkEgiXAJYIBaAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkA5JK8IBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIBkAAIAAhkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAA6tEsIhkAAIAAhkIBkAAgA3lMgIAABkIhkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIAAhkA5JOEIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIBkAAIBkAAA5JOEIAAhkIhkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIAABkIBkAAA6tRMIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAA6tPoIAABkA5JMgIBkAAA91OEIAABkIBkAAIBkAAEgiXAMgIBaAAIAAhkIhuAAEgg9AOEIAABkIBkAAIAAhkIhkAAIhuAAEgihAPoIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAAhkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAA/ZOEIAAhkIhkAAIAABkEgg9ARMIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAEgiXASwIBaAAIAABkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIBkAAIBkAAIBkAAIBkAAIAAhkIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIBkAAEgiXARMIBaAAA/ZSwIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIBkAAIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAA/ZOEIBkAAA91UUIAABkIhkAAIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIBkAAIAAhkIAAhkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAEgihAV4IBkAAIAAhkIhuAAEgihAXcIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAIAAhkIBkAAIBkAAIBkAAIBkAAIBkAAIBkAAIAAhkIAAhkIBkAAIAAhkIBkAAIAABkIBkAAEgiXAZAIBaAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkA91UUIhkAAIAAhkAspakIBkAAIAABkIAABkIBkAAIAAhkIAAhkIBkAAIAABkIAABkIBkAAIAAhkIAAhkIBkAAIBkAAIAAhkIBkAAIAABkIDHAAIAAhkIAAhkIBkAAIAAhkIhkAAA5JK8IAABkAKyBkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAAMWDIIBkAAIAABkIBkAAIAAhkIBkAAAEiBkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAAGGDIIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAIAABkIBkAAIAABkIhkAAIhkAAIAABkIBkAAIAABkIBkAAIBkAAAHqEsIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIAAhkAEiJYIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAHqJYIAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAGGK8IBkAAIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAAJOJYIAAhkIBkAAIAABkgAGGEsIBkAAAKyK8IBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkAJOK8IBkAAAGGDIIAABkAEiDIIAABkIhkAAIAAhkIhkAAAC+DIIAAhkIBkAAAC+PoIAAhkIBkAAIAAhkIBkAAIBkAAIAABkIBkAAIAAhkIAAhkAC+SwIAAhkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkIhkAAAC+V4IAAhkIBkAAIAAhkIhkAAABaakIBkAAIAAhkIhkAAAC+XcIAABkIBkAAIAABkIBkAAIAAhkIhkAAIAAhkgAjRakIBkAAIAABkIBkAAAKyOEIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAh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");
	this.shape.setTransform(221,220);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-1,448,442);


(lib.sprite10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape9("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite10, new cjs.Rectangle(-746,-1,1492,2), null);


(lib.button6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape5UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.button3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape2UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.sprite7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button6();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button6(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite7, new cjs.Rectangle(-2.4,-2.4,4.9,4.9), null);


(lib.sprite4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button3();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite4, new cjs.Rectangle(-2.4,-2.4,4.9,4.9), null);


// stage content:
(lib.DRAWLINE_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* yN = 1;
		xN = 3;
		c = 1;
		diff = 0.200000;
		*/
	}
	this.frame_1 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
		/* right = 0;
		stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 52
	this.text = new cjs.Text("", "20px 'Arial'", "#FF0000");
	this.text.lineHeight = 22;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(16,16.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1));

	// Layer 51
	this.instance = new lib.text33("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(212,220.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 50
	this.instance_1 = new lib.text23("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(201.5,411.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer 49
	this.instance_2 = new lib.text24("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.5,391.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 48
	this.instance_3 = new lib.text25("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(204.5,371.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

	// Layer 47
	this.instance_4 = new lib.text26("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(204.5,351.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1));

	// Layer 46
	this.instance_5 = new lib.text27("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(204.5,331.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1));

	// Layer 45
	this.instance_6 = new lib.text28("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(204.5,311.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(1));

	// Layer 44
	this.instance_7 = new lib.text29("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(204,291.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(1));

	// Layer 43
	this.instance_8 = new lib.text30("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(204.5,271.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(1));

	// Layer 42
	this.instance_9 = new lib.text31("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(204.5,251.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(1));

	// Layer 41
	this.instance_10 = new lib.text32("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(204.5,232.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(1));

	// Layer 40
	this.instance_11 = new lib.text22("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(205,11.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(1));

	// Layer 39
	this.instance_12 = new lib.text21("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(207,32.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(1));

	// Layer 38
	this.instance_13 = new lib.text20("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(207,52.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).wait(1));

	// Layer 37
	this.instance_14 = new lib.text19("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(207,72.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(1));

	// Layer 36
	this.instance_15 = new lib.text18("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(207,92.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(1));

	// Layer 35
	this.instance_16 = new lib.text17("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(207,112.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(1));

	// Layer 34
	this.instance_17 = new lib.text16("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(207,132.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).wait(1));

	// Layer 33
	this.instance_18 = new lib.text15("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(207,152.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).wait(1));

	// Layer 32
	this.instance_19 = new lib.text14("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(207,172.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).wait(1));

	// Layer 31
	this.instance_20 = new lib.text13("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(207,192.8);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).wait(1));

	// Layer 30
	this.instance_21 = new lib.text32("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(194,224.8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(1));

	// Layer 29
	this.instance_22 = new lib.text31("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(174,224.8);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).wait(1));

	// Layer 28
	this.instance_23 = new lib.text30("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(151,224.8);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({_off:false},0).wait(1));

	// Layer 27
	this.instance_24 = new lib.text29("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(132,224.8);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).wait(1));

	// Layer 26
	this.instance_25 = new lib.text28("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(112,224.8);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).wait(1));

	// Layer 25
	this.instance_26 = new lib.text27("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(93,224.8);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).wait(1));

	// Layer 24
	this.instance_27 = new lib.text26("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(73,224.8);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({_off:false},0).wait(1));

	// Layer 23
	this.instance_28 = new lib.text25("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(54,224.8);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).wait(1));

	// Layer 22
	this.instance_29 = new lib.text24("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(34,224.8);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({_off:false},0).wait(1));

	// Layer 21
	this.instance_30 = new lib.text23("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(11,224.8);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({_off:false},0).wait(1));

	// Layer 20
	this.instance_31 = new lib.text22("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(416,224.6);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({_off:false},0).wait(1));

	// Layer 19
	this.instance_32 = new lib.text21("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(396,224.6);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({_off:false},0).wait(1));

	// Layer 18
	this.instance_33 = new lib.text20("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(376,224.6);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({_off:false},0).wait(1));

	// Layer 17
	this.instance_34 = new lib.text19("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(356,224.6);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).wait(1));

	// Layer 16
	this.instance_35 = new lib.text18("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(336,224.6);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).wait(1));

	// Layer 15
	this.instance_36 = new lib.text17("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(315,224.6);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({_off:false},0).wait(1));

	// Layer 14
	this.instance_37 = new lib.text16("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(296,224.6);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({_off:false},0).wait(1));

	// Layer 13
	this.instance_38 = new lib.text15("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(276,224.6);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({_off:false},0).wait(1));

	// Layer 12
	this.instance_39 = new lib.text14("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(256,224.6);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({_off:false},0).wait(1));

	// Layer 11
	this.instance_40 = new lib.text13("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(237,224.6);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({_off:false},0).wait(1));

	// Layer 10
	this.instance_41 = new lib.shape11("synched",0);
	this.instance_41.parent = this;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1).to({_off:false},0).wait(1));

	// Layer 8
	this.myline = new lib.sprite10();
	this.myline.parent = this;
	this.myline.setTransform(1366.9,274);
	this.myline._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myline).wait(1).to({_off:false},0).wait(1));

	// Layer 6
	this.set_ = new lib.sprite8();
	this.set_.parent = this;
	this.set_.setTransform(548.8,416.3);
	this.set_._off = true;

	this.timeline.addTween(cjs.Tween.get(this.set_).wait(1).to({_off:false},0).wait(1));

	// Layer 4
	this.end = new lib.sprite7();
	this.end.parent = this;
	this.end.setTransform(341.3,340.9,1.633,1.633);
	this.end._off = true;

	this.timeline.addTween(cjs.Tween.get(this.end).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.start = new lib.sprite4();
	this.start.parent = this;
	this.start.setTransform(300.1,341.9,1.633,1.633);
	this.start._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_42 = new lib.shape1("synched",0);
	this.instance_42.parent = this;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 440,
	height: 440,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;