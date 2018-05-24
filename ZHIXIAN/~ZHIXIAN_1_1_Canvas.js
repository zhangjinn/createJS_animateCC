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


(lib.sprite1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{check:1,drawline:5,clearline:9});

	// timeline functions:
	this.frame_0 = function() {
		/* x1 = 0;
		y1 = 0;
		x2 = 0;
		y2 = 0;
		stop ();
		*/
	}
	this.frame_1 = function() {
		/* if (x1 == eval("/:dot1_x") && y1 == eval("/:dot1_y") && x2 == eval("/:dot2_x") && y2 == eval("/:dot2_y") || x1 == eval("/:dot2_x") && y1 == eval("/:dot2_y") && x2 == eval("/:dot1_x") && y2 == eval("/:dot1_y"))
		{
		    call("drawline");
		}
		else
		{
		    call("clearline");
		} // end else if
		*/
	}
	this.frame_2 = function() {
		/* gotoAndPlay(1);
		*/
	}
	this.frame_5 = function() {
		/* setProperty("/myline1", _x, eval("/:special_dot_x"));
		setProperty("/myline1", _y, eval("/:special_dot_y"));
		setProperty("/myline1", _rotation, eval("/:line_rotation"));
		setProperty("/myline2", _x, eval("/:special_dot_x"));
		setProperty("/myline2", _y, eval("/:special_dot_y"));
		setProperty("/myline2", _rotation, eval("/:line_rotation") + 180);
		*/
	}
	this.frame_9 = function() {
		/* setProperty("/myline1", _x, 600);
		setProperty("/myline1", _y, 600);
		setProperty("/myline2", _x, 600);
		setProperty("/myline2", _y, 600);
		*/
	}
	this.frame_27 = function() {
		/* startY = getProperty("/start", _y);
		startX = getProperty("/start", _x);
		endX = getProperty("/end", _x);
		endY = getProperty("/end", _y);
		x1 = (startX - 110) / 10;
		y1 = (110 - startY) / 10;
		x2 = (endX - 110) / 10;
		y2 = (110 - endY) / 10;
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(3).call(this.frame_5).wait(4).call(this.frame_9).wait(18).call(this.frame_27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.text7Over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHANQAEgCACgDQABgEAAgGIgHAAIAAgQIAPAAIAAAQQAAAIgDAFQgDAFgGADg");
	this.shape.setTransform(6.7,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,-3.9,10,39.8);


(lib.shape21 = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AQzAAIAAAyIBkAAANrAAIAAAyIBkAAIAAgyAKjAAIAAAyIBkAAIAAgyAMHAyIBkAAAPPAyIBkAAAB9u1IgyAAIAABkIAyAAAB9rtIgyAAIAABkIAyAAABLtRIAABkAB9nBIgyAAIAABkIAyAAAB9olIgyAAIAABkAB9j5IgyAAIAABkIAyAAABLldIAABkABLqJIAABkAlEAAIAAAyIBkAAIAAgyAoMAAIAAAyIBkAAIAAgyAmoAyIBkAAArUAAIAAAyIBkAAIAAgyAucAAIAAAyIBkAAIAAgyAs4AyIBkAAApwAyIBkAAAHbAAIAAAyIBkAAIAAgyAETAAIAAAyIBkAAIAAgyAF3AyIBkAAACvAAIAAAyIBkAAAB9gxIgyAAIAABjIBkAAABLAyIAABkIAyAAAh8AAIAAAyIBkAAIAAgyAB9D6IgyAAIAABkIAyAAABLCWIAABkAgYAyIBjAAAB9HCIgyAAIAABkIAyAAABLImIAABkIAyAAAB9LuIgyAAIAABkIAyAAABLKKIAABkABLFeIAABkABLiVIAABkAjgAyIBkAAAB9O2IgyAAIAABkIAyAAABLQaIAABkAI/AyIBkAAABLNSIAABkABLx9IAADIAyWAyID6AA");
	this.shape_2.setTransform(102.5,105);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-11,237,232);


(lib.shape14Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.shape5Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.shape3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eh0ZAAAMDozAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-746,-1,1492,2);


(lib.shape2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("APoxVIAABkIBkAAIAAhkAPovxIAABkIBkAAIAAhkAPospIAABkIBkAAIAAhkIhkAAIhkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIAABkIAABkIAABkIAADHIAABkIAABkIAABkIAABkIAABkIAABkIAABkIAABkIAABkIAABkIhkAAIhkAAIAAhkIAAhkIhkAAIAABkIAABkIhkAAIhkAAIAAAUARMuNIAABkAPouNIAABkAMgxVIAABkIBkAAIAAhkAMgvxIAABkIBkAAIAAhkIBkAAAJYvxIAABkIBkAAIAAhkIhkAAIhkAAIAABkIAABkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAAJYxVIAABkAK8vxIAAhkAJYspIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAAJYuNIAABkAK8rFIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAAK8vxIBkAAAMgphIAABkIBkAAIAABkIAABkIBkAAIBkAAAMgn9IAABkIBkAAIBkAAIAABkIAABkIBkAAAJYn9IBkAAIAAhkIhkAAIAABkIAABkIBkAAIAAhkIBkAAAJYk1IAABkIBkAAIAAhkIhkAAIAAhkIhkAAIAABkgAOEjRIAAhkIhkAAIAABkIBkAAIBkAAIAABkIBkAAAMgk1IAAhkIhkAAIAABkgAK8jRIBkAAIAABkIBkAAIBkAAIAADHIBkAAAK8phIBkAAARMrFIAABkAK8rFIAABkAJYrFIAABkIhkAAIAABkIBkAAARMC+IhkAAIAABkIBkAAAPoBaIAABkIhkAAIAABkIBkAAIAABkIBkAAAMghtIAADHIBkAAIAAjHIAAhkAJYBaIBkAAIAAjHIhkAAIAADHIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAAJYC+IAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAAK8EiIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAAK8htIBkAAAMgGGIAABkIBkAAIAABkIAABkIBkAAIBkAAAMgHqIAABkIBkAAIBkAAIAABkIAABkIBkAAAJYHqIBkAAIAAhkIhkAAIAABkIAABkIBkAAIAAhkIBkAAAJYMWIBkAAIAAhkIhkAAIAABkIAABkIAABkIBkAAIAAhkIBkAAIAAhkIAAhkIBkAAIAABkIBkAAIAABkIBkAAAMgMWIBkAAIAABkIBkAAIAABkIBkAAAK8MWIBkAAAMgKyIhkAAIAAhkIBkAAgAJYJOIAABkIhkAAIAABkIBkAAAK8GGIBkAAAK8EiIAABkAJYEiIAABkIhkAAIAABkIBkAAAK8jRIAABkAJYjRIAABkIhkAAIAADHIAABkIBkAAAGQxVIAABkIBkAAIAAhkAGQvxIAABkIBkAAIBkAAADIvxIBkAAIAAhkADIxVIAABkIAABkIBkAAIAAhkIBkAAADIrFIBkAAIAAhkIhkAAIAABkIAABkIBkAAIBkAAIAAhkIAAhkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAADHIBkAAIBkAAAGQrFIBkAAIBkAAAEsrFIBkAAAGQspIhkAAIAAhkIBkAAgADIuNIAABkIhkAAIAABkIBkAAABkxVIAABkIAABkIBkAAAjHxVIAABkIBkAAIAAhkAjHvxIAABkIBkAAIAAhkIDHAAIBkAAAjHrFIBkAAIAAhkIhkAAIAABkIAABkIBkAAIDHAAIAABkIAABkIAABkIAABkIBkAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIhkAAIAADHIBkAAIBkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAIAAhkAhjrFIDHAAIAABkIBkAAIAABkIBkAAIAAhkIAAhkAhjspIDHAAIAAhkIjHAAgAjHuNIAABkIhkAAIAABkIAABkIBkAAIAABkIBkAAIAAhkIAAhkAjHmZIBkAAIDHAAIBkAAIAAhkIhkAAIjHAAIAABkIAABkIDHAAIBkAAIAAhkIBkAAIAAhkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAAjHn9IAABkIAABkIhkAAIAABkIBkAAIAABkIBkAAIDHAAIAADHIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIBkAAAhjjRIAAhkIhkAAIAABkIBkAAIDHAAIAABkIBkAAIAAhkIBkAAIAABkIAADHIAABkIBkAAIAABkIBkAAIBkAAAmPxVIAABkIBkAAIAAhkAmPvxIAABkIBkAAIAAhkIBkAAApXvxIAABkIBkAAIAAhkIhkAAIhkAAIAABkIAABkIBkAAIBkAAIAAhkIBkAAIAABkIBkAAIAAhkIBkAAApXxVIAABkAnzvxIAAhkApXspIAABkIBkAAIAAhkIBkAAIAABkIBkAAIBkAAApXuNIAABkAnzrFIBkAAIAABkIBkAAIAABkIAABkIAABkIhkAAIAABkIBkAAIAABkIBkAAIAADHIBkAAIAAjHIAAhkAnzvxIBkAAAsfxVIAABkIBkAAIAAhkAsfvxIAABkIBkAAIBkAAAuDxVIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIAABkIBkAAIAAhkIBkAAIAABkIAABkIBkAAIBkAAAxLvxIBkAAIAAhkAxLuNIBkAAIAAhkIBkAAIBkAAAvnuNIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAAhkAxLrFIBkAAIAAhkIhkAAAvnrFIBkAAIAAhkIhkAAIAAhkAuDrFIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAhkIBkAAIBkAAIBkAAAsfphIAABkIBkAAIAABkIAABkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAADHIAABkIBkAAIAABkIBkAAIAAhkIAAhkIDHAAIAABkIAABkIBkAAIAABkIhkAAIAABkIAABkIBkAAIBkAAIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIhkAAIhkAAIAAAUAsfn9IAABkIBkAAIBkAAIAABkIAABkIBkAAIAABkIBkAAIAADHIBkAAIBkAAIAABkIBkAAIDHAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkAuDphIAABkIBkAAAxLn9IBkAAIAAhkIhkAAAxLmZIBkAAIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIAADHIBkAAIBkAAIAABkIBkAAIAABkIAABkIBkAAIBkAAIAABkIAABkIDHAAIAABkIjHAAIAABkIDHAAIBkAAIAABkIBkAAIAABkIBkAAIAABkAvnphIBkAAIAAhkAvnmZIAAhkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAADHIAABkIBkAAIAABkIBkAAIBkAAIAABkIAABkIBkAAIDHAAIBkAAIAABkIAABkIhkAAIAABkIAABkIAABkIAABkIjHAAIhkAAIhkAAIhkAAIhkAAIhkAAIhkAAIhkAAIhkAAAxLjRIBkAAIAAhkIhkAAAvnjRIBkAAIAAhkIhkAAIAAhkAsfphIhkAAAuDjRIBkAAIAABkIBkAAIAADHIAABkIhkAAIAABkIBkAAIAAhkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIDHAAIBkAAIAABkIBkAAIAABkIhkAAIhkAAAnzk1IAAhkIBkAAIAABkgAvnrFIAABkApXC+IAABkIBkAAIAABkIAABkIAABkIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkApXBaIAABkAsfhtIAADHIBkAAIBkAAAvnBaIBkAAIAAjHIhkAAIAAhkAxLBaIBkAAIAAjHIhkAAAxLEiIBkAAIAAhkIhkAAAvnEiIBkAAIAAhkIhkAAIAAhkAsfhtIhkAAIAAhkAuDBaIBkAAIAABkIhkAAgAuDEiIBkAAIAABkIBkAAIAABkIAABkIAABkIBkAAIAAhkIAAhkIBkAAIBkAAIAABkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIAABkAsfGGIAABkIBkAAIBkAAIAAhkIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIhkAAIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIDHAAIBkAAIAABkAsfHqIAABkIBkAAIBkAAIBkAAIAABkIhkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkAuDGGIAABkIBkAAAxLHqIBkAAIAAhkIhkAAAxLJOIBkAAIBkAAIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIAABkAvnGGIBkAAIAAhkAvnJOIAAhkIBkAAIAABkIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIBkAAIAABkAxLMWIBkAAIAAhkIhkAAAvnMWIBkAAIAAhkIhkAAIAAhkAsfGGIhkAAAuDMWIBkAAIAABkIBkAAIAABkIBkAAIAABkAq7GGIAAhkIBkAAIAABkgAvnEiIAABkAhjEiIDHAAIAABkIjHAAgAsfPeIAABkAsfN6IAABkIBkAAIAABkAuDN6IAABkIBkAAAxLPeIBkAAIAAhkIhkAAAvnRCIhkAAAvnPeIBkAAIAABkIhkAAgAuDN6IhkAAIAAhkAsfN6IhkAAAPoPeIAABkAMgPeIBkAAIBkAAAOERCIhkAAAK8RCIAAhkIBkAAAuDMWIAABk");
	this.shape.setTransform(110,111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,222,224);


(lib.sprite4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape3("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite4, new cjs.Rectangle(-746,-1,1492,2), null);


(lib.button19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.text = new cjs.Text("", "12px 'Arial'", "#FF0000");

	this.text.textAlign = "right";
	this.text.lineHeight = 13;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(-3.4,-26.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.text_1 = new cjs.Text("", "12px 'Arial'", "#FF0000");
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 26;
	this.text_1.parent = this;
	this.text_1.setTransform(6,-26.5);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({_off:false},0).wait(3));

	// Layer 2
	this.instance = new lib.text7Over("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-9,-29);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.shape14Up("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.button12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.text = new cjs.Text("", "12px 'Arial'", "#0000FF");
	//this.text.text='8'
	this.text.textAlign = "right";
	this.text.lineHeight = 13;
	this.text.lineWidth = 24;
	this.text.parent = this;
	this.text.setTransform(-2.2,-24.2);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.text_1 = new cjs.Text("", "12px 'Arial'", "#0000FF");
	//this.text_1.text='8'
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 24;
	this.text_1.parent = this;
	this.text_1.setTransform(7.5,-24.5);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({_off:false},0).wait(3));

	// Layer 2
	this.instance = new lib.text7Over("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.5,-26);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.shape5Up("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.01,1.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.9,4.9);


(lib.sprite20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button19();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button19(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite20, new cjs.Rectangle(-31,-32.9,64.8,39.8), null);


(lib.sprite13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button12();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button12(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite13, new cjs.Rectangle(-28.3,-29.9,61.9,39.8), null);


// stage content:
(lib.ZHIXIAN_1_1_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{make_int:4});

	// timeline functions:
	this.frame_0 = function() {
		/* dot1_x = -2;
		dot1_y = -2;
		dot2_x = 1;
		dot2_y = -2;
		*/
	}
	this.frame_1 = function() {
		/* tan0 = 0;
		tan1 = "0.017455064928218";
		tan2 = "0.034920769491748";
		tan3 = "0.052407779283041";
		tan4 = "0.06992681194351";
		tan5 = "0.087488663525924";
		tan6 = "0.105104235265676";
		tan7 = "0.122784560902905";
		tan8 = "0.140540834702391";
		tan9 = "0.158384440324536";
		tan10 = "0.176326980708465";
		tan11 = "0.194380309137718";
		tan12 = "0.212556561670022";
		tan13 = "0.230868191125563";
		tan14 = "0.249328002843181";
		tan15 = "0.267949192431123";
		tan16 = "0.286745385758808";
		tan17 = "0.30573068145866";
		tan18 = "0.324919696232906";
		tan19 = "0.344327613289665";
		tan20 = "0.363970234266202";
		tan21 = "0.383864035035416";
		tan22 = "0.404026225835157";
		tan23 = "0.424474816209605";
		tan24 = "0.445228685308536";
		tan25 = "0.466307658154999";
		tan26 = "0.487732588565861";
		tan27 = "0.509525449494429";
		tan28 = "0.531709431661479";
		tan29 = "0.554309051452769";
		tan30 = "0.577350269189626";
		tan31 = "0.60086061902756";
		tan32 = "0.624869351909327";
		tan33 = "0.649407593197511";
		tan34 = "0.674508516842427";
		tan35 = "0.70020753820971";
		tan36 = "0.726542528005361";
		tan37 = "0.753554050102794";
		tan38 = "0.781285626506718";
		tan39 = "0.809784033195007";
		tan40 = "0.83909963117728";
		tan41 = "0.869286737816227";
		tan42 = "0.90040404429784";
		tan43 = "0.932515086137662";
		tan44 = "0.965688774807074";
		tan45 = 1;
		*/
	}
	this.frame_2 = function() {
		/* if (dot1_x == dot2_x)
		{
		    line_rotation = 90;
		}
		else
		{
		    right_tan = (dot2_y - dot1_y) / (dot2_x - dot1_x);
		    tan_base = right_tan;
		    if (tan_base < 0)
		    {
		        tan_base = tan_base * -1;
		    } // end if
		    if (tan_base > 1)
		    {
		        tan_base = 1 / tan_base;
		    } // end if
		    for (x = 0; x < 45 && !(eval("/:tan" add x) - tan_base >= 0 && eval("/:tan" add x) - tan_base < 0.02 || eval("/:tan" add x) - tan_base <= 0 && eval("/:tan" add x) - tan_base > -0.02); x = x + 1)
		    {
		    } // end of for
		    if (right_tan * right_tan > 1)
		    {
		        x = 90 - x;
		    } // end if
		    if (right_tan < 0)
		    {
		        x = 180 - x;
		    } // end if
		    line_rotation = 360 - x;
		} // end else if
		*/
	}
	this.frame_3 = function() {
		/* special_dot_x = 110 + dot1_x * 10;
		special_dot_y = 110 - dot1_y * 10;
		*/
	}
	this.frame_4 = function() {
		/* setProperty("/start", _x, int(getProperty("/start", _x) / 10 + 0.5) * 10);
		setProperty("/start", _y, int(getProperty("/start", _y) / 10 + 0.5) * 10);
		setProperty("/end", _x, int(getProperty("/end", _x) / 10 + 0.5) * 10);
		setProperty("/end", _y, int(getProperty("/end", _y) / 10 + 0.5) * 10);
		/start:Tx1 = int((getProperty("/start", _x) - 110) / 10);
		/set:x1 = eval("/start:Tx1");
		/start:Ty1 = int((110 - getProperty("/start", _y)) / 10);
		/set:y1 = eval("/start:Ty1");
		/end:Tx2 = int((getProperty("/end", _x) - 110) / 10);
		/set:x2 = eval("/end:Tx2");
		/end:Ty2 = int((110 - getProperty("/end", _y)) / 10);
		/set:y2 = eval("/end:Ty2");
		*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay(5);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer 16
	this.instance = new lib.shape21("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// Layer 12
	this.end = new lib.sprite20();
	this.end.parent = this;
	this.end.setTransform(170,180);

	this.timeline.addTween(cjs.Tween.get(this.end).wait(6));

	// Layer 10
	this.start = new lib.sprite13();
	this.start.parent = this;
	this.start.setTransform(150.6,180.4);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(6));

	// Layer 8
	this.myline1 = new lib.sprite4();
	this.myline1.parent = this;
	this.myline1.setTransform(1002.3,118.4);

	this.timeline.addTween(cjs.Tween.get(this.myline1).wait(6));

	// Layer 6
	this.myline2 = new lib.sprite4();
	this.myline2.parent = this;
	this.myline2.setTransform(1001.5,146.8);

	this.timeline.addTween(cjs.Tween.get(this.myline2).wait(6));

	// Layer 4
	this.instance_1 = new lib.sprite1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(295.6,194.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6));

	// Layer 3
	this.instance_2 = new lib.shape2("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

	// Layer 1
	this.set_ = new lib.sprite1();
	this.set_.parent = this;
	this.set_.setTransform(548.8,416.3);

	this.timeline.addTween(cjs.Tween.get(this.set_).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94,99,1763.3,234);
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