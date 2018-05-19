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


(lib.sprite2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{check:1,drawABline:3,drawBCline:4,drawCDline:5,drawDAline:6,clearABline:8,clearBCline:9,clearCDline:10,clearDAline:11,get_len:13});

	// timeline functions:
	this.frame_0 = function() {
		/* A_nowX = 0;
		A_nowY = 0;
		B_nowX = 0;
		B_nowY = 0;
		C_nowX = 0;
		C_nowY = 0;
		D_nowX = 0;
		D_nowY = 0;
		stop ();
		*/
	}
	this.frame_1 = function() {
		/* if (Number(A_nowX) == Number(eval("/:AX")) && Number(A_nowY) == Number(eval("/:AY")) && Number(B_nowX) == Number(eval("/:BX")) && Number(B_nowY) == Number(eval("/:BY")))
		{
		    call("drawABline");
		} // end if
		if (Number(C_nowX) == Number(eval("/:CX")) && Number(C_nowY) == Number(eval("/:CY")) && Number(B_nowX) == Number(eval("/:BX")) && Number(B_nowY) == Number(eval("/:BY")))
		{
		    call("drawBCline");
		} // end if
		if (Number(D_nowX) == Number(eval("/:DX")) && Number(D_nowY) == Number(eval("/:DY")) && Number(C_nowX) == Number(eval("/:CX")) && Number(C_nowY) == Number(eval("/:CY")))
		{
		    call("drawCDline");
		} // end if
		if (Number(D_nowX) == Number(eval("/:DX")) && Number(D_nowY) == Number(eval("/:DY")) && Number(A_nowX) == Number(eval("/:AX")) && Number(A_nowY) == Number(eval("/:AY")))
		{
		    call("drawDAline");
		} // end if
		stop ();
		*/
	}
	this.frame_3 = function() {
		/* setProperty("/lineAB", _x, eval("/:ABspecial_dot_x"));
		setProperty("/lineAB", _y, eval("/:ABspecial_dot_y"));
		n1 = getProperty("/pointB", _x) - getProperty("/pointA", _x);
		n2 = getProperty("/pointB", _y) - getProperty("/pointA", _y);
		call("get_len");
		setProperty("/lineAB", _xscale, x);
		setProperty("/lineAB", _rotation, eval("/:ABline_rotation"));
		*/
	}
	this.frame_4 = function() {
		/* setProperty("/lineBC", _x, eval("/:BCspecial_dot_x"));
		setProperty("/lineBC", _y, eval("/:BCspecial_dot_y"));
		n1 = getProperty("/pointC", _x) - getProperty("/pointB", _x);
		n2 = getProperty("/pointC", _y) - getProperty("/pointB", _y);
		call("get_len");
		setProperty("/lineBC", _xscale, x);
		setProperty("/lineBC", _rotation, eval("/:BCline_rotation"));
		*/
	}
	this.frame_5 = function() {
		/* setProperty("/lineCD", _x, eval("/:CDspecial_dot_x"));
		setProperty("/lineCD", _y, eval("/:CDspecial_dot_y"));
		n1 = getProperty("/pointD", _x) - getProperty("/pointC", _x);
		n2 = getProperty("/pointD", _y) - getProperty("/pointC", _y);
		call("get_len");
		setProperty("/lineCD", _xscale, x);
		setProperty("/lineCD", _rotation, eval("/:CDline_rotation"));
		*/
	}
	this.frame_6 = function() {
		/* setProperty("/lineDA", _x, eval("/:DAspecial_dot_x"));
		setProperty("/lineDA", _y, eval("/:DAspecial_dot_y"));
		n1 = getProperty("/pointA", _x) - getProperty("/pointD", _x);
		n2 = getProperty("/pointA", _y) - getProperty("/pointD", _y);
		call("get_len");
		setProperty("/lineDA", _xscale, x);
		setProperty("/lineDA", _rotation, eval("/:DAline_rotation"));
		*/
	}
	this.frame_8 = function() {
		/* setProperty("/lineAB", _x, 600);
		setProperty("/lineAB", _y, 600);
		*/
	}
	this.frame_9 = function() {
		/* setProperty("/lineBC", _x, 600);
		setProperty("/lineBC", _y, 600);
		*/
	}
	this.frame_10 = function() {
		/* setProperty("/lineCD", _x, 600);
		setProperty("/lineCD", _y, 600);
		*/
	}
	this.frame_11 = function() {
		/* setProperty("/lineDA", _x, 600);
		setProperty("/lineDA", _y, 600);
		*/
	}
	this.frame_13 = function() {
		/* num = Number(n1 * n1) + Number(n2 * n2);
		rang = 1;
		Z1 = 0;
		Z2 = num;
		x = 0;
		if (Number(rang) < Number(num))
		{
		    while (!(Number(x * x - num) > 0 && Number(x * x - num) < Number(rang) || Number(x * x - num) < 0 && Number(-1 * rang) < Number(x * x - num)))
		    {
		        x = (Number(Z1) + Number(Z2)) / 2;
		        if (Number(num) < Number(x * x))
		        {
		            Z2 = x;
		            continue;
		        } // end if
		        Z1 = x;
		    } // end while
		} // end if
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(2).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(2).call(this.frame_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.text20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAoIAAgCIACAAQAEAAACgCIACgCIABgIIAAgzIAAgHIgDgDQgBgCgFAAIgCAAIAAgCIBBAAIAAAYIgCAAQgBgJgDgEQgEgDgFgCQgEgBgJAAIgHAAIAAAgIACAAQAHAAADgFQADgEABgKIADAAIAAApIgDAAQAAgHgDgEQgCgEgDgCQgDgBgFAAIAAAWQAAAHABABIACACIAEABIAFAAQALAAAHgFQAGgFADgLIACAAIgDAag");
	this.shape.setTransform(1.9,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.7,23.4,31.1);


(lib.text17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnAoIAAgCIACAAIAGgBIACgDQABgCAAgGIAAgzQAAgGgBgCIgCgCQgCgCgEAAIgCAAIAAgCIAkAAQANAAAIAEQALAFAFAKQAGAJAAALQAAAJgCAHQgEAHgDAEQgFAFgFADQgGADgIABIgKABgAgJAbIABAGIACACIAEAAQAJAAAFgGQAHgJAAgTQAAgPgFgJQgEgHgFgCQgFgCgJAAg");
	this.shape.setTransform(2.2,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.7,24.1,31.1);


(lib.text14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAkQgKgFgFgJQgGgKAAgLQAAgKAGgKQAGgKALgGQAKgGAKAAQAIAAAKAEIAHACIADgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIACAAIAAAcIgCAAQgDgLgHgGQgHgFgJAAQgHAAgGAEQgGAEgDAHQgDAJAAALQAAAKACAIQADAJAGAFQAEAEAKAAQAHAAAGgDQAHgEAHgIIAAAHQgHAHgHADQgIAEgJAAQgMAAgKgGg");
	this.shape.setTransform(2.2,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.7,24.1,31.1);


(lib.text11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkAoIAAgCIAIgBIADgDIAAgIIAAgzIAAgIIgDgDIgIgBIAAgCIAlAAQAOAAAGADQAFACAEAFQADAFAAAFQAAAGgEAFQgEAEgLADQALABAFAEQAHAFAAAJQAAAJgIAGQgIAHgRAAgAgGAaIAAADQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAQAEAAAEgCQAEgCACgEQACgEAAgFQAAgFgDgEQgCgFgFgCQgEgBgIAAgAgGgDQAHAAAEgCQAEgCACgDQACgEAAgFQAAgFgCgDQgCgEgEgCQgEgBgHAAg");
	this.shape.setTransform(1.9,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.7,23.4,31.1);


(lib.shape23Hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxLRMMAAAgiXMAiXAAAMAAAAiXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-110,220,220);


(lib.shape4UpOverDownHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.shape3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPArIAPhVIARBVg");
	this.shape.setTransform(110,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqgPIBVAPIhVAQg");
	this.shape_1.setTransform(216.5,110.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AQzAAIAAAyIBkAAANrAAIAAAyIBkAAIAAgyAKjAAIAAAyIBkAAIAAgyAMHAyIBkAAAPPAyIBkAAAB9u1IgyAAIAABkIAyAAAB9rtIgyAAIAABkIAyAAABLtRIAABkAB9olIgyAAIAABkIAyAAABLnBIAABkIAyAAAB9j5IgyAAIAABkIAyAAABLldIAABkABLqJIAABkAlEAAIAAAyIBkAAIAAgyAoMAAIAAAyIBkAAIAAgyAmoAyIBkAAArUAAIAAAyIBkAAIAAgyAucAAIAAAyIBkAAIAAgyAs4AyIBkAAApwAyIBkAAAHbAAIAAAyIBkAAIAAgyAETAAIAAAyIBkAAIAAgyAF3AyIBkAAACvAyIhkAAIAABkIAyAAAB9gxIgyAAIAABjIhjAAIhkAAIhkAAACvAAIAAAyAh8AAIAAAyAgYAyIAAgyAB9D6IgyAAIAABkIAyAAABLCWIAABkAB9ImIgyAAIAABkIAyAAAB9HCIgyAAIAABkAB9LuIgyAAIAABkIAyAAABLKKIAABkAETAyIhkAAABLFeIAABkABLiVIAABkAB9QaIgyAAIAABkAB9O2IgyAAIAABkABLNSIAABkAI/AyIBkAAABLx9IAADIAyWAyID6AA");
	this.shape_2.setTransform(102.5,105);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-11,237,232);


(lib.shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("APoxVIAABkIBkAAIAAhkAPovxIAABkIBkAAIAAhkAPorFIBkAAIAAhkIhkAAgARMspIAAhkAPouNIAABkIhkAAIAABkIBkAAIAABkIBkAAIAAhkAMgxVIAABkIBkAAIAAhkAMgvxIAABkIBkAAIAAhkIBkAAAJYvxIAABkIBkAAIAAhkIhkAAIhkAAIAABkIAABkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAAJYxVIAABkAK8vxIAAhkAJYspIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkAJYuNIAABkAK8rFIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkAK8vxIBkAAAMgphIAABkIBkAAIAABkIAABkIBkAAIBkAAIAAhkAMgn9IAABkIBkAAIBkAAIAABkIAABkIBkAAIAAhkAJYn9IBkAAIAAhkIhkAAIAABkIAABkIBkAAIAAhkIBkAAAJYjRIBkAAIAAhkIhkAAIAABkIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAAhkAMgjRIBkAAIAABkIhkAAIAADHIBkAAIAAjHIBkAAIAADHIBkAAIAAjHAK8jRIBkAAAMgk1IhkAAIAAhkIBkAAgAJYmZIAABkIhkAAIAABkIAABkIBkAAIAADHIBkAAIAAjHIAAhkAK8phIBkAAAK8rFIAABkAJYrFIAABkIhkAAIAABkIBkAAARMC+IAABkIAABkIAABkIAABkIAABkIAABkIAABkIAABkIAABkIhkAAIhkAAIAAhkIAAhkIhkAAIAABkIAABkIhkAAIhkAAIAAAUARMC+IhkAAIAABkIBkAAARMBaIAABkAPoBaIAABkIhkAAIAABkIBkAAIAABkIBkAAAK8C+IhkAAIAABkIBkAAIAAhkIAAhkIBkAAIAABkIBkAAIAAhkIBkAAAMgC+IAABkIBkAAIAABkIBkAAIAABkIBkAAAK8EiIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAAJYBaIAABkIhkAAIhkAAIAABkIBkAAIAABkIBkAAIBkAAIBkAAIAABkIBkAAIAABkIAABkIBkAAIBkAAAK8C+IBkAAAMgHqIAABkIBkAAIBkAAIAABkIAABkIBkAAAJYGGIAABkIBkAAIAAhkIAAhkAJYHqIAABkIBkAAIAAhkIBkAAAK8MWIAAhkIhkAAIAABkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAAMgMWIBkAAIAABkIBkAAIAABkIBkAAAMgKyIhkAAIAAhkIBkAAgAJYJOIAABkIhkAAIAABkIBkAAIAABkIAABkIBkAAIAAhkIBkAAIAAhkAJYEiIAABkAGQxVIAABkIBkAAIAAhkAGQvxIAABkIBkAAIBkAAADIvxIBkAAIAAhkADIxVIAABkIAABkIBkAAIAAhkIBkAAAEsrFIAAhkIhkAAIAABkIBkAAIBkAAIAAhkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIBkAAAGQrFIBkAAIBkAAAGQspIhkAAIAAhkIBkAAgADIuNIAABkIhkAAIAABkIBkAAIAABkIAABkIBkAAIAAhkIBkAAIAAhkABkxVIAABkIAABkIBkAAAjHxVIAABkIBkAAIAAhkAjHvxIAABkIBkAAIAAhkIDHAAIBkAAAhjrFIAAhkIhkAAIAABkIBkAAIDHAAIAABkIBkAAIBkAAIAAhkAhjspIDHAAIAAhkIjHAAgAjHuNIAABkIhkAAIAABkIAABkIBkAAIBkAAIDHAAIAABkIAABkIAABkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAADHIAABkIAABkIBkAAAjHmZIBkAAIDHAAIBkAAIAAhkIhkAAIjHAAIAAhkIAAhkAjHn9IAABkIAABkIhkAAIAABkIBkAAIAABkIBkAAIDHAAIAADHIBkAAIBkAAIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAAhjn9IAABkIAABkIDHAAIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAAjHphIAABkIBkAAAhjk1IhkAAIAABkIBkAAgAhjjRIDHAAIAABkIBkAAIBkAAIAADHIAABkIhkAAIAABkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAIAAhkADIjRIBkAAIAABkIBkAAIAADHIBkAAIBkAAAEsk1IAAhkIBkAAIAABkgAjHrFIAABkAmPxVIAABkIBkAAIAAhkAmPvxIAABkIBkAAIAAhkIBkAAApXvxIAABkIBkAAIAAhkIhkAAIhkAAIAABkIAABkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAApXxVIAABkAnzvxIAAhkApXspIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAApXuNIAABkAnzrFIBkAAIAABkIBkAAIAABkIAABkIAABkIhkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAjHIAAhkAnzvxIBkAAAsfxVIAABkIBkAAIAAhkAsfvxIAABkIBkAAIBkAAAuDxVIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIBkAAIAAhkIBkAAIAABkIAABkIBkAAIBkAAAxLvxIBkAAIAAhkAxLuNIBkAAIAAhkIBkAAIBkAAAvnuNIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAAhkAxLrFIBkAAIAAhkIhkAAAvnrFIBkAAIAAhkIhkAAIAAhkAuDrFIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIBkAAIBkAAAsfphIAABkIBkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAADHIAABkIBkAAIAABkIBkAAIAAhkIAAhkIDHAAIAABkIAABkIBkAAIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAAsfn9IAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIBkAAIAADHIBkAAIBkAAIAABkIBkAAIDHAAIBkAAIAAhkIAAjHIAAhkAuDphIAABkIBkAAAxLn9IBkAAIAAhkIhkAAAxLmZIBkAAIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIAADHIBkAAIBkAAIAABkIBkAAIAABkIAABkIBkAAIBkAAIDHAAIAABkIAABkIBkAAIBkAAIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIhkAAIhkAAIAAAUAvnphIBkAAIAAhkAvnmZIAAhkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAADHIAABkIBkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIAAhkIAAhkIDHAAIAABkIBkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkAxLjRIBkAAIAAhkIhkAAAvnjRIBkAAIAAhkIhkAAIAAhkAsfphIhkAAAuDjRIBkAAIAABkIBkAAIAADHIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIDHAAIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkAnzk1IAAhkIBkAAIAABkgAvnrFIAABkApXC+IAABkIBkAAIAABkIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIhkAAIhkAAIhkAAIhkAAIhkAAIhkAAIhkAAIhkAAApXBaIAABkAsfhtIAADHIBkAAIBkAAAvnBaIBkAAIAAjHIhkAAIAAhkAxLBaIBkAAIAAjHIhkAAAxLEiIBkAAIAAhkIhkAAAvnEiIBkAAIAAhkIhkAAIAAhkAsfC+IAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAsfhtIhkAAIAAhkAuDEiIBkAAIAABkIBkAAIAABkIAABkIAABkIBkAAIAAhkIAAhkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkIDHAAIAABkIAABkIAABkIjHAAAsfGGIAABkIBkAAIBkAAIAAhkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIBkAAIAABkIDHAAIBkAAIAABkIBkAAIAABkIhkAAIhkAAAsfHqIAABkIBkAAIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIAABkAuDGGIAABkIBkAAAxLHqIBkAAIAAhkIhkAAAxLJOIBkAAIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIDHAAIBkAAIAABkAvnGGIBkAAIAAhkAvnJOIAAhkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkAxLMWIBkAAIAAhkIhkAAAvnMWIBkAAIAAhkIhkAAIAAhkAsfGGIhkAAAuDMWIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIAABkIhkAAIAABkAq7GGIAAhkIBkAAIAABkgAvnEiIAABkAhjKyIAAhkIDHAAIAABkgAmPPeIAABkAnzRCIAAhkIBkAAAsfPeIAABkAsfN6IAABkIBkAAIAABkAuDN6IAABkIBkAAAxLPeIBkAAIAAhkIhkAAAvnRCIhkAAAvnPeIBkAAIAABkIhkAAgAuDN6IhkAAIAAhkAsfN6IhkAAAPoPeIAABkAOEPeIhkAAIhkAAIAABkAOERCIhkAAAOEPeIBkAAAuDMWIAABk");
	this.shape.setTransform(110,111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,222,224);


(lib.sprite6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite6, new cjs.Rectangle(-2.4,-2.4,4.9,4.9), null);


(lib.sprite5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite5, new cjs.Rectangle(-2.4,-2.4,4.9,4.9), null);


(lib.button24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape23Hit("synched",0);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.button21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.button18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.button15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.button12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.button9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.sprite22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
	}
	this.frame_1 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.button21();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button21(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.text20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer 1
	this.dot = new lib.sprite6();
	this.dot.parent = this;
	this.dot.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-10.7,26.8,31.1);


(lib.sprite19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
	}
	this.frame_1 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.button18();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.text17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer 1
	this.dot = new lib.sprite6();
	this.dot.parent = this;
	this.dot.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-10.5,26,31.1);


(lib.sprite16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
	}
	this.frame_1 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.button15();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.text14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer 1
	this.dot = new lib.sprite6();
	this.dot.parent = this;
	this.dot.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-10.5,26,31.1);


(lib.sprite13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
	}
	this.frame_1 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.button12();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button12(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.text11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.5,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer 1
	this.dot = new lib.sprite6();
	this.dot.parent = this;
	this.dot.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-10.5,28.3,31.1);


(lib.sprite10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
	}
	this.frame_1 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.button9();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button9(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 3
	this.text = new cjs.Text("A", "bold 12px 'Times New Roman'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 17;
	this.text.parent = this;
	this.text.setTransform(3.5,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Layer 1
	this.dot = new lib.sprite6();
	this.dot.parent = this;
	this.dot.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-8.8,24.9,19.7);


// stage content:
(lib.MIANJI1_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {

	}
	this.frame_1 = function() {

	}
	this.frame_2 = function() {
		/* stop ();
		*/
		this.stop()
	}
	this.frame_3 = function() {
		/* stop ();
		fscommand("");
		*/
		this.stop()
	}
	this.frame_4 = function() {
		/* gotoAndPlay(2);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer 42
	this.instance = new lib.button24();
	this.instance.parent = this;
	this.instance.setTransform(110,110);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button24(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(2));

	// Layer 37
	this.pointE = new lib.sprite22();
	this.pointE.parent = this;
	this.pointE.setTransform(205.9,180.3);

	this.timeline.addTween(cjs.Tween.get(this.pointE).to({_off:true},4).wait(1));

	// Layer 32
	this.pointD = new lib.sprite19();
	this.pointD.parent = this;
	this.pointD.setTransform(187.4,180.4);

	this.timeline.addTween(cjs.Tween.get(this.pointD).to({_off:true},4).wait(1));

	// Layer 27
	this.pointC = new lib.sprite16();
	this.pointC.parent = this;
	this.pointC.setTransform(168.9,180.4);

	this.timeline.addTween(cjs.Tween.get(this.pointC).to({_off:true},4).wait(1));

	// Layer 22
	this.pointB = new lib.sprite13();
	this.pointB.parent = this;
	this.pointB.setTransform(148.9,180.4);

	this.timeline.addTween(cjs.Tween.get(this.pointB).to({_off:true},4).wait(1));

	// Layer 17
	this.pointA = new lib.sprite10();
	this.pointA.parent = this;
	this.pointA.setTransform(131,180);

	this.timeline.addTween(cjs.Tween.get(this.pointA).to({_off:true},4).wait(1));

	// Layer 15
	this.A = new lib.sprite5();
	this.A.parent = this;
	this.A.setTransform(170,100);

	this.timeline.addTween(cjs.Tween.get(this.A).wait(5));

	// Layer 13
	this.E = new lib.sprite5();
	this.E.parent = this;
	this.E.setTransform(60,150);

	this.timeline.addTween(cjs.Tween.get(this.E).wait(5));

	// Layer 11
	this.D = new lib.sprite5();
	this.D.parent = this;
	this.D.setTransform(180,140);

	this.timeline.addTween(cjs.Tween.get(this.D).wait(5));

	// Layer 9
	this.C = new lib.sprite5();
	this.C.parent = this;
	this.C.setTransform(70,130);

	this.timeline.addTween(cjs.Tween.get(this.C).wait(5));

	// Layer 7
	this.B = new lib.sprite5();
	this.B.parent = this;
	this.B.setTransform(80,60);

	this.timeline.addTween(cjs.Tween.get(this.B).wait(5));

	// Layer 6
	this.instance_1 = new lib.shape3("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

	// Layer 2
	this.set_ = new lib.sprite2();
	this.set_.parent = this;
	this.set_.setTransform(548.8,416.3);

	this.timeline.addTween(cjs.Tween.get(this.set_).wait(5));

	// Layer 1
	this.instance_2 = new lib.shape1("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94,99,246.3,234);
// library properties:
lib.properties = {
	width: 220,
	height: 220,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;