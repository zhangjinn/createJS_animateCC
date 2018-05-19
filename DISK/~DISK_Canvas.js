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


(lib.text64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEAaIAAgKICIAAIAAAKgAhEgOIAAgLICIAAIAAALg");
	this.shape.setTransform(70,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.7,-3.9,40.6,61.5);


(lib.text44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA6IAAgWIAVAAIAAAWgAgKgiIAAgXIAVAAIAAAXg");
	this.shape.setTransform(141.5,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBzQgSAAAAgTIAAg4IATAAQAIABgHAFIAAAqQAAAHAGAAIBAAAQAIAAAEgUIAVAHQgFAhgTAAgAhrBhQAQgZAFgbIAVAJQAGADgHACQgHAagPAYgAA+A6IARgQQAUATAQAcIgTAOQgMgZgWgUgAgYAnIAPgOQATAPAPAXIgSAOQgLgVgUgRgABTAdIAAgGIg7AAIAAAGIgRAAIAAiCIBdAAIAACCgAAYAHIA7AAIAAgTIg7AAgAAYgdIA7AAIAAgUIg7AAgAAYhBIA7AAIAAgUIg7AAgAg8AcIAAg8QgQAZgZASIgNgQQAngeAOgdIgsAAIAAgUIAtAAIAAgeIATAAQAIABgHAFIAAAYIAmAAIAAAUIgmAAIAAANQAaALAPAPIgMATQgLgNgSgLIAAA6g");
	this.shape_1.setTransform(121.7,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhKgCQgSAngXAbIgDgCQAcgsAQhFIgHAAQgNAAgMACIgJgJIApAAIgBg9IAXANIgIAHIAAApIANAAIAMgLIARASIgqAAIAAAbQATAJAJAHQAIAHgEAMQgGANgHgPQgHgOgMgNIAABRIABAzIgQAGIABh6gAAfAnIghAAQgNAAgLADIgJgJIBCAAIAAgpIgRAAQgNAAgKADIgJgJIAxAAIAAglIgSAAQgNAAgKACIgJgJIBAAAQATgjAGgaIAVAPQgKAEgKAOIgTAcIAdAAIAMgMIASATIhCAAIAAAlIAdAAIANgMIASASIg8AAIAAApIAqAAIAMgMIAUASIhKAAIABBKIgQAGIABhQgAAJhJQgFgOgRgXIACgDQAeARAFAJQADAJgGAJQgDAEgCAAQgEAAgDgIg");
	this.shape_2.setTransform(95.8,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYBuQgcgCgTgIQgUgHgLgKQgKgMgFgBQgFgCgMAMQgMAMgEAIIgQgPQAUgOAXgIIAAhUIgJAAQgNAAgMADIgJgJIApAAIAHgLIARANIgJAIIAABRQAJAKAQAJQARAJAeABQAfACAcgBIAygDIAAAEQgWAFAAAMQgsAAgdgCgABLBFQgGgKgMgOIgXgWQggAlgqAQIgDgDQAvgeAUgeQgYgVgZgTIADgDQAjAVATANQAPgdAGgcIhDAAQgJAAgLACIgJgJIB6AAIAQgQIASAXIgsAAQgJAkgRAdQAaAVALALQAMALgDALQgDAKgCABIgBABQgEAAgEgJgAhPhJQgEgPgOgVIADgCQASAKAIAHQAHAHgBAJQgBAIgHAFIgDACQgEAAgCgKgAAXhOQgDgMgPgTIACgCQAWALAFAGQAGAGgDAHQgCAGgEAFIgDABQgDAAgCgJg");
	this.shape_3.setTransform(70,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxBTQA0gIAZgaQAbgaAAg1IAAhKIATACQAIABgHAFIAABJQAAAjgMAXIAxAoIgQAUIgqgrQgbAlhEAQgAhlBWIgKgWQAGgCAUgKIgHiWIAWACQAIABgHAFIAFCEQAugaAbgWIAKARQgfAahSAwQgBAEgCAAQgBAAgDgDgAgohNIARgQQAVAOAQAYIgTAPQgTgagQgLg");
	this.shape_4.setTransform(44.6,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbBoIgDgWIAdAAQAEAAAAgEIAAifIinAAIAAgWIDeAAIAAAWIggAAIAACmQAAATgSAAgAhPA+IAAhrIBmAAIAABhIgXAAIAAgJIg4AAIAAATgAg4AYIA4AAIAAgyIg4AAg");
	this.shape_5.setTransform(17.9,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag3BuQgSAAAAgSIAAhbIgiAKIgHgSIApgNIAAhDIATAAQAJABgIAGIAAA2IAtgOIAAhFIASAAQAJABgIAFIAAA5IAzgQIAEgHIAVAQQABAEgGABIAABRQAAAQgRAAIgaAAIgCgTIAVAAQABAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAhEIgyAQIAABSIgTAAIAAhMIgtAOIAABaQAAAGAHAAIBzAAQARAAAEgSIADgPIAWAGIgJAbQgHATgSAAg");
	this.shape_6.setTransform(-7.8,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-0.2,185.5,62.1);


(lib.text43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOBYIAAguIhHAAIAAgQIBPhxIANAAIAABvIAXAAIAAASIgXAAIAAAugAgtAYIA7AAIAAhUg");
	this.shape.setTransform(69.8,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.5,-3.9,38.8,61.5);


(lib.text31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLA8IAAgXIAXAAIAAAXgAgLgkIAAgXIAXAAIAAAXg");
	this.shape.setTransform(130.7,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARBiIAAgFQAkAFALgBQAMAAAFgLQAGgKAJhuIhdAAQgMBBglAmQgkAngkAPIgCgDQAngZAdgnQAegoAKgyIg/AAQgOAAgLAEIgKgKIBjAAQAFglABgtIAbANIgKAHIgIA+IBaAAIAJgOIATAPIgKAJQgHBdgFASQgDATgKAKQgLAJgQAEQgGgSglgHgAAxAtQgLgRgigbIADgDQAwAVAGAKQAIAKgFAMQgCAEgDAAQgEAAgGgKgAg6hBQgHgQgTgWIACgEQAmAWACAKQACAKgHAJQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgDgLg");
	this.shape_1.setTransform(110.5,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAlBIQgUgpgBhKIiCAAIAAgXICBAAIAAgwIAWAAQALACgKAGIAAAoIBKAAIAAAXIhKAAQAFBJARAeQAOAaAKAAQAEAAABgGIACgSIAYAKIgFAaQgDASgQAAQgfgBgXgrgAhrBpIgGgbQAbgBAZgFIAAg8IgqAAIAAgTIBnAAIAAATIgoAAIAAA5QAYgDAggHIACAVQg5AMg8AKQgCAGgCAAQgCAAgCgDgAAxheIASgQQAPAIAOANIgUAPQgKgKgRgKg");
	this.shape_2.setTransform(83.7,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhjBoQAzgGAGgXIhNAAIAAgRIBPAAIAAgQIgSAAIgRAAIAAhjIBRAAIgRgKQAVgVAKgjIAVAIQAJADgMADIgEAIIBRAAIAAARIgwAAIAJARIgVAEIgKgVIgTAAQgGAMgMAPIBEAAIAABjIgcAAIAAAQIBIAAIAAARIhIAAIAAAtIgWAAIAAgtIgvAAQgEAlhEAMgAgTA6IAtAAIAAgQIgtAAgAg5AZIBzAAIAAgNIhzAAgAg5AAIBzAAIAAgOIhzAAgAg5gbIBzAAIAAgNIhzAAgAh0g8QAdgZAMglIAUAIQAIADgLADIgDAHIA9AAIAAARIggAAIAHARIgWADIgGgUIgPAAQgOAZgSAOg");
	this.shape_3.setTransform(56.5,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpBlQAwgYAUgcQgOgkAAg6IAAgJIhZAAIAAAlIBDAAIgCBGQgBAUgPAAIgbAAIgDgUIASAAQAIAAAAgIIACgrIgvAAIAAAeQAAA1gaAiIgSgPQAXgcAAgpIAAhtIBuAAIAAguIAUAAQAIABgHAGIAAAnIBQAAIAAAUIhQAAIAAAJQAAAxAIAbQASgbAOgnIAUALQAHAFgJACQgQAmgWAhQAXAhALAAQAKAAADgZIAUAKQgIArgPAAQgeAAgdguQgeAhgmATgAAshmIAPgOQARAIAMANIgPAPQgLgLgSgLg");
	this.shape_4.setTransform(29.7,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBsIgDgaQAhAKANgDQANgEAHgjIigAAIAAgUICjAAIACgaIhdAAIgEALIgVgGQAPgwAGgrIAUACQAIABgHAFIgDANIBqAAIAAAUIhtAAIgHAaIBxAAIgDAtIA1AAIAAAUIg4AAQgLA7gZAEIgQABQgQAAgSgGgABXg9IAAggIitAAIAAAgIgYAAIAAg0IDdAAIAAA0g");
	this.shape_5.setTransform(2.3,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-0.1,162.7,64.3);


(lib.text29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOBYIAAguIhIAAIAAgQIBPhxIAPAAIAABvIAWAAIAAASIgWAAIAAAugAgtAYIA7AAIAAhUg");
	this.shape.setTransform(80.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDAaIAAgKICHAAIAAAKgAhDgOIAAgLICHAAIAAALg");
	this.shape_1.setTransform(60.2,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.9,-3.9,62,61.5);


(lib.text21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOBYIAAguIhIAAIAAgQIBPhxIAPAAIAABvIAWAAIAAASIgWAAIAAAugAgtAYIA7AAIAAhUg");
	this.shape.setTransform(4.3,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.9,38.8,61.5);


(lib.shape80Hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egq9AooMAAAhRPMBV7AAAMAAABRPg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-259.9,550,520);


(lib.shape50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABujBIDAGEAg9jCIjwGA");
	this.shape.setTransform(-1.1,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-18.9,62.3,41);


(lib.shape41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABiixIGgFlAhIizIm5Ff");
	this.shape.setTransform(-1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-19.2,104.9,37.9);


(lib.shape28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBEIAAg/Ig/AAIAAgJIA/AAIAAg/IAJAAIAAA/IA/AAIAAAJIg/AAIAAA/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-6.8,13.7,13.7);


(lib.shape20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAIi2IAAFzABTi/IHRGDAg9jDInmF9");
	this.shape.setTransform(0,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-5.3,111.5,41.2);


(lib.shape19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACgifIAAE/Ik/AAIAAk/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34.1,34.1);


(lib.shape6UpOverDownHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F0000").ss(1,1,1,3,true).p("AB/h/QA1A1AABKQAABLg1A0Qg0A1hLAAQhKAAg1g1Qg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFCC00"],[0.067,1],2,-7,0,2,-7,25.7).s().p("Ah/B/Qg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhKAAg1g1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.shape5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgrCAAAMBWFAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.4,-1,553,2);


(lib.shape3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFDFFF").s().p("AhpAqIgDAAIgNgFIgHgCIAAhCIAHgDQAzgOBHAAQBIAAAzAOIAFACIAABEIgFABIgLADIhyAJg");
	this.shape.setTransform(-0.1,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,5.2,25.8,9.8);


(lib.shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F0000").ss(1,1,1,3,true).p("AcmiwQAFATAAAVQAACTjrB3IgBABIlAESIgYAXIgzBXQgvBOjiBAQlmBkn6AAQn5AAlmhkQj2hFguhjIgdhAIgFgMIAIALQBNBYD2BGQFmBkH5AAQH6AAFmhkQDwhEBPhWAZACCIgBAAQh4A9i1A1QhjAdhrAYQnYBqpsAAQorAAm1hVQihgfiQgrIh9goIgBAAQmbiSAAjCQAAgVAEgTQgEgUAAgUQAAjgIZieQIaieL3AAQL4AAIaCeQIZCeAADgIgFAoQgsDFnoCPQh/AmiLAcIhYARQmjBMoNAAQnTAAl/g8IgYgEIhogcQmgh5AAirQAAisGgh6QGgh5JLAAQJMAAGgB5QGgB6AACsQAACqmdB5AtqEDIhqgTQinggiWgsQnpiPgsjFAxiGdIAAAAIgBgBIkrjQ");
	this.shape.setTransform(4.6,70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007FFF").s().p("AtvCwQj2hGhNhYIgIgLIAAAAIgBgBIkrjPIB+AoQCQAqCgAgQG1BVIsAAQJrAAHYhqQBrgYBigdQC2g1B4g9IAAAAIlAETIgXAWQhQBWjwBEQllBkn6AAQn5AAlnhkg");
	this.shape_1.setTransform(13.4,110.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFDFFF").s().p("AtrFUIgXgEIhpgcQmgh5AAisQAAirGgh5QGgh6JLAAQJMAAGgB6QGgB5AACrQAACrmdB6IhYARQmjBLoMAAQnUAAl/g8g");
	this.shape_2.setTransform(7.1,62.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFFFDF").s().p("AscFvQj1hFgvhjIgchAIACgBQBNBYD2BGQFnBkH4AAQH7AAFlhkQDwhEBQhWIg0BXQgwBOjgBAQlnBkn5AAQn5AAlnhkgAvgAcQiggeiQgrIh+goIAAAAQmciSAAjDQAAgVAFgTQAsDGHpCPQCVAsCnAgIBrATIAXAEQF/A7HTAAQINAAGjhLIBYgRQCLgcB+gmQHpiPAsjGQAFATAAAVQAACUjrB3IgBAAQh4A9i2A1QhiAdhrAXQnYBqpsAAQorAAm1hVg");
	this.shape_3.setTransform(4.6,99.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7FBFFF").s().p("A0QGnQnpiQgsjGQgFgTAAgVQAAjeIaifQIZieL3AAQL4AAIZCeQIaCfAADeIgFAoQgsDGnpCQQh+AliLAdQGdh6AAirQAAismgh4Qmgh6pMAAQpLAAmgB6QmgB4AACsQAACsGgB6IgCAJQinggiVgsg");
	this.shape_4.setTransform(4.6,44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.9,-6.6,369,153.5);


(lib.sprite75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p43:1,p44:6,p45:11});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
		this.stop()
	}
	this.frame_1 = function() {
		/* p43text = "";
		Selection.setFocus("p43text");
		play ();
		*/
	}
	this.frame_5 = function() {
		/* if (p43text == "" || p43text >= 3 || p43 == 0)
		{
		    gotoAndPlay(2);
		} // end if
		*/
	}
	this.frame_6 = function() {
		/* Selection.setFocus("p44text");
		p44text = "";
		*/
	}
	this.frame_10 = function() {
		/* if (p44text == 0 || p44text == 3 || Number(p43text) + Number(p44text) >= 4)
		{
		    gotoAndPlay(7);
		} // end if
		*/
	}
	this.frame_11 = function() {
		/* Selection.setFocus("p45text");
		p45text = "";
		*/
	}
	this.frame_15 = function() {
		/* if (p45text == 0 || p45text == 3 || Number(p43text) + Number(p44text) + Number(p45text) > 4 || p45text == "")
		{
		    gotoAndPlay(12);
		}
		else if (Number(p43text) + Number(p44text) + Number(p45text) != 4)
		{
		    gotoAndPlay(2);
		    p44text = "";
		    p45text = "";
		} // end else if
		*/
	}
	this.frame_16 = function() {
		/* stop ();
		_root.play();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(1).call(this.frame_6).wait(4).call(this.frame_10).wait(1).call(this.frame_11).wait(4).call(this.frame_15).wait(1).call(this.frame_16).wait(1));

	// Layer 8
	this.instance = new lib.shape19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

	// Layer 7
	this.instance_1 = new lib.shape19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17));

	// Layer 6
	this.instance_2 = new lib.shape19("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-55,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

	// Layer 5
	this.text = new cjs.Text("", "26px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 31;
	this.text.parent = this;
	this.text.setTransform(56.6,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(17));

	// Layer 4
	this.text_1 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 31;
	this.text_1.parent = this;
	this.text_1.setTransform(2.6,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(17));

	// Layer 3
	this.text_2 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 31;
	this.text_2.parent = this;
	this.text_2.setTransform(-53.4,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(17));

	// Layer 2
	this.instance_3 = new lib.shape28("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(28.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17));

	// Layer 1
	this.instance_4 = new lib.shape28("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-26.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-17,146.3,34.1);


(lib.sprite62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p35:0,p36:5});

	// timeline functions:
	this.frame_0 = function() {
		/* p35text = "";
		Selection.setFocus("p35text");
		*/
		this.stop();
	}
	this.frame_4 = function() {
		/* if (p35text == "" || Number(p35text) >= Number(eval("..:p32text")) || p35text == 0)
		{
		    gotoAndPlay(1);
		} // end if
		*/
	}
	this.frame_5 = function() {
		/* p36text = "";
		Selection.setFocus("p36text");
		*/
	}
	this.frame_9 = function() {
		/* if (p36text == "" || Number(p34text) >= Number(eval("..:p32text")) || p36text == 0)
		{
		    gotoAndPlay(6);
		} // end if
		*/
	}
	this.frame_10 = function() {
		/* if (Number(p35text) + Number(p36text) == Number(eval("..:p32text")))
		{
		    stop ();
		    _parent.play();
		}
		else
		{
		    p36text = "";
		} // end else if
		*/
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(4).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// Layer 5
	this.instance = new lib.shape19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.7,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Layer 4
	this.instance_1 = new lib.shape19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.7,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// Layer 3
	this.text = new cjs.Text("", "26px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 31;
	this.text.parent = this;
	this.text.setTransform(32.4,6.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11));

	// Layer 2
	this.text_1 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 31;
	this.text_1.parent = this;
	this.text_1.setTransform(-29.1,6.1);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(11));

	// Layer 1
	this.instance_2 = new lib.shape50("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.1,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-37.8,97.7,75.3);


(lib.sprite56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p33:0,p34:5});

	// timeline functions:
	this.frame_0 = function() {
		/* p33text = "";
		Selection.setFocus("p33text");
		*/
		this.stop()
	}
	this.frame_4 = function() {
		/* if (p33text == "" || Number(p33text) >= Number(eval("..:p31text")) || p33text == 0)
		{
		    gotoAndPlay(1);
		} // end if
		*/
	}
	this.frame_5 = function() {
		/* p34text = "";
		Selection.setFocus("p34text");
		*/
	}
	this.frame_9 = function() {
		/* if (p34text == "" || Number(p34text) >= Number(eval("..:p31text")) || p33text == 0)
		{
		    gotoAndPlay(6);
		} // end if
		*/
	}
	this.frame_10 = function() {
		/* if (Number(p33text) + Number(p34text) == Number(eval("..:p31text")) && p33text != 0 && p34text != 0)
		{
		    stop ();
		    _parent.play();
		}
		else
		{
		    p34text = "";
		} // end else if
		*/
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(4).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// Layer 5
	this.instance = new lib.shape19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.8,56.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Layer 4
	this.instance_1 = new lib.shape19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.9,56.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// Layer 3
	this.text = new cjs.Text("", "26px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 31;
	this.text.parent = this;
	this.text.setTransform(28.1,42.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(5).to({x:27.9},0).wait(6));

	// Layer 2
	this.text_1 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 31;
	this.text_1.parent = this;
	this.text_1.setTransform(-28.6,42.4);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(11));

	// Layer 1
	this.instance_2 = new lib.shape50("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-1.5,92.7,75.4);


(lib.sprite42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape41("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite42, new cjs.Rectangle(-53.4,-19.2,104.9,37.9), null);


(lib.sprite40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p21:0,p22:10,p23:20});

	// timeline functions:
	this.frame_0 = function() {
		/* p21text = "";
		Selection.setFocus("p21text");
		*/
		this.stop()
	}
	this.frame_9 = function() {
		/* if (p21text != eval("/:p1ws"))
		{
		    gotoAndPlay(1);
		} // end if
		*/
	}
	this.frame_10 = function() {
		/* p22text = "";
		Selection.setFocus("p22text");
		*/
	}
	this.frame_19 = function() {
		/* if (p22text != eval("/:p2ws"))
		{
		    gotoAndPlay(11);
		} // end if
		*/
	}
	this.frame_20 = function() {
		/* p23text = "";
		Selection.setFocus("p23text");
		*/
	}
	this.frame_29 = function() {
		/* if (p23text != eval("/:p3ws"))
		{
		    gotoAndPlay(21);
		} // end if
		*/
	}
	this.frame_34 = function() {
		/* stop ();
		_root.Play();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(9).call(this.frame_19).wait(1).call(this.frame_20).wait(9).call(this.frame_29).wait(5).call(this.frame_34).wait(1));

	// Layer 10
	this.instance = new lib.shape19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(123.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// Layer 9
	this.instance_1 = new lib.shape19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// Layer 8
	this.instance_2 = new lib.shape19("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(12,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Layer 7
	this.text = new cjs.Text("", "26px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 31;
	this.text.parent = this;
	this.text.setTransform(125.6,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(35));

	// Layer 6
	this.text_1 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 31;
	this.text_1.parent = this;
	this.text_1.setTransform(69.6,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(35));

	// Layer 5
	this.text_2 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 31;
	this.text_2.parent = this;
	this.text_2.setTransform(13.7,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(35));

	// Layer 4
	this.instance_3 = new lib.text31("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-171.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// Layer 3
	this.instance_4 = new lib.text29("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(93.4,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// Layer 2
	this.instance_5 = new lib.shape28("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(96,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// Layer 1
	this.instance_6 = new lib.shape28("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(40,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.4,-18,390.7,64.7);


(lib.sprite27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p11:0,"p21":10,p31:20});

	// timeline functions:
	this.frame_0 = function() {
		/* p1text = "";
		Selection.setFocus("p1text");
		*/
	}
	this.frame_9 = function() {
		/* if (p1text != eval("/:p1ws"))
		{
		    gotoAndPlay(1);
		} // end if
		*/
	}
	this.frame_10 = function() {
		/* p2text = "";
		Selection.setFocus("p2text");
		*/
	}
	this.frame_19 = function() {
		/* if (p2text != eval("/:p2ws"))
		{
		    gotoAndPlay(11);
		} // end if
		*/
	}
	this.frame_20 = function() {
		/* p3text = "";
		Selection.setFocus("p3text");
		*/
	}
	this.frame_29 = function() {
		/* if (p3text != eval("/:p3ws"))
		{
		    gotoAndPlay(21);
		} // end if
		*/
	}
	this.frame_34 = function() {
		/* stop ();
		_root.Play();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(9).call(this.frame_19).wait(1).call(this.frame_20).wait(9).call(this.frame_29).wait(5).call(this.frame_34).wait(1));

	// Layer 8
	this.instance = new lib.text21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.8,-50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// Layer 7
	this.instance_1 = new lib.shape20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// Layer 6
	this.instance_2 = new lib.shape19("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.7,35.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Layer 5
	this.instance_3 = new lib.shape19("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.3,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// Layer 4
	this.instance_4 = new lib.shape19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-55.7,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// Layer 3
	this.text = new cjs.Text("", "26px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 31;
	this.text.parent = this;
	this.text.setTransform(57.4,21.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(35));

	// Layer 2
	this.text_1 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 31;
	this.text_1.parent = this;
	this.text_1.setTransform(1.8,21.7);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(35));

	// Layer 1
	this.text_2 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 31;
	this.text_2.parent = this;
	this.text_2.setTransform(-54.1,21.7);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-54.2,147.8,107.1);


(lib.sprite4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape3("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite4, new cjs.Rectangle(-12.9,5.2,25.8,9.8), null);


(lib.sprite2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite2, new cjs.Rectangle(-179.9,-6.6,369,153.5), null);


(lib.button81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape80Hit("synched",0);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.button13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.button11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.button9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.button7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.sprite79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p41:0,p42:5});

	// timeline functions:
	this.frame_0 = function() {
		/* Selection.setFocus("p41text");
		p41text = "";
		*/
	}
	this.frame_4 = function() {
		/* if (p41text == "" || Number(p41text) >= 4 || Number(p41text) == 0)
		{
		    gotoAndPlay(1);
		} // end if
		if (eval("/too/:p31text") == 2 && p41text != 2)
		{
		    gotoAndPlay(1);
		} // end if
		if ((eval("/too/:p31text") == 1 || eval("/too/:p31text") == 3) && (p41text != 1 && p41text != 3))
		{
		    gotoAndPlay(1);
		} // end if
		*/
	}
	this.frame_5 = function() {
		/* Selection.setFocus("p42text");
		p42text = "";
		*/
	}
	this.frame_9 = function() {
		/* if (p42text == "" || Number(p41text) + Number(p42text) > 4 || p42text == 0)
		{
		    gotoAndPlay(6);
		}
		else if (Number(p41text) + Number(p42text) != 4)
		{
		    p41text = "";
		    p42text = "";
		    gotoAndPlay(1);
		}
		else if (eval("/too/:p31text") == 2 && p41text != 2)
		{
		    gotoAndPlay(6);
		} // end else if
		*/
	}
	this.frame_10 = function() {
		/* p113.gotoandplay(2);
		*/
	}
	this.frame_14 = function() {
		/* stop ();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(4).call(this.frame_9).wait(1).call(this.frame_10).wait(4).call(this.frame_14).wait(1));

	// Layer 17
	this.instance = new lib.shape19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-47,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer 16
	this.instance_1 = new lib.shape19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Layer 7
	this.p113 = new lib.sprite75();
	this.p113.parent = this;
	this.p113.setTransform(71.6,0);

	this.timeline.addTween(cjs.Tween.get(this.p113).wait(15));

	// Layer 6
	this.text = new cjs.Text("", "26px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 31;
	this.text.parent = this;
	this.text.setTransform(-45.4,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(15));

	// Layer 5
	this.text_1 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 31;
	this.text_1.parent = this;
	this.text_1.setTransform(-104.4,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(15));

	// Layer 4
	this.instance_2 = new lib.text64("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// Layer 3
	this.instance_3 = new lib.shape28("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-77,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Layer 2
	this.instance_4 = new lib.text64("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-206.6,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// Layer 1
	this.instance_5 = new lib.text43("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-224,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.5,-18.6,308.4,62.3);


(lib.sprite63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"p31":0,p32:5,p33p34:11,p35p36:19});

	// timeline functions:
	this.frame_0 = function() {
		/* p31text = "";
		Selection.setFocus("p31text");
		*/
		//this.stop();
	}
	this.frame_4 = function() {
		/* if (p31text == "" || Number(p31text) >= 4)
		{
		    gotoAndPlay(1);
		} // end if
		*/
	}
	this.frame_5 = function() {
		/* p32text = "";
		Selection.setFocus("p32text");
		*/
	}
	this.frame_9 = function() {
		/* if (p32text == "" || Number(p32text) >= 4)
		{
		    gotoAndPlay(6);
		} // end if
		*/
	}
	this.frame_10 = function() {
		/* if (Number(p31text) + Number(p32text) != 4)
		{
		    p32text = "";
		    gotoAndPlay(1);
		}
		else if (p32text == 3)
		{
		    gotoAndPlay(20);
		    p33p34._visible = false;
		} // end else if
		*/
		this.stop()
	}
	this.frame_11 = function() {
		/* stop ();
		*/
		this.stop()
	}
	this.frame_18 = function() {
		/* if (p31text == 3 || p31text == 2)
		{
		    stop ();
		    _root.Play();
		} // end if
		*/
		//this.stop();
	}
	this.frame_19 = function() {
		/* stop ();
		if (p32text == 3)
		{
		    p33p34.gotoandstop(2);
		    p33p34._visible = false;
		} // end if
		*/
		this.stop()
	}
	this.frame_25 = function() {
		/* stop ();
		_root.play();
		*/
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(4).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(7).call(this.frame_18).wait(1).call(this.frame_19).wait(6).call(this.frame_25).wait(1));

	// Layer 20
	this.instance = new lib.shape19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(162.4,35.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26));

	// Layer 19
	this.instance_1 = new lib.shape19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.8,35.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26));

	// Layer 13
	this.p35p36 = new lib.sprite62();
	this.p35p36.parent = this;
	this.p35p36.setTransform(162.8,92.4);
	this.p35p36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.p35p36).wait(19).to({_off:false},0).wait(7));

	// Layer 7
	this.p33p34 = new lib.sprite56();
	this.p33p34.parent = this;
	this.p33p34.setTransform(59,55.9);
	this.p33p34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.p33p34).wait(11).to({_off:false},0).wait(15));

	// Layer 6
	this.text = new cjs.Text("", "26px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 31;
	this.text.parent = this;
	this.text.setTransform(164.1,21.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11).to({x:164},0).wait(15));

	// Layer 5
	this.text_1 = new cjs.Text("", "26px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 31;
	this.text_1.parent = this;
	this.text_1.setTransform(60.6,21.5);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(26));

	// Layer 4
	this.instance_2 = new lib.text44("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-136.9,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26));

	// Layer 3
	this.instance_3 = new lib.text43("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(39.2,-50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26));

	// Layer 1
	this.instance_4 = new lib.sprite42();
	this.instance_4.parent = this;
	this.instance_4.setTransform(111.8,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-54,341.6,106.8);


(lib.sprite14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
		this.stop()
	}
	this.frame_1 = function() {
		/* stop ();
		*/
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.button13();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button13(), 3);

	this.instance_1 = new lib.shape6UpOverDownHit("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* stop ();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.button11();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button11(), 3);

	this.instance_1 = new lib.shape6UpOverDownHit("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.sprite10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
		this.stop()
	}
	this.frame_1 = function() {
		/* stop ();
		*/
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.button9();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button9(), 3);

	this.instance_1 = new lib.shape6UpOverDownHit("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.sprite8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
		this.stop()
	}
	this.frame_1 = function() {
		/* stop ();
		*/
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.button7();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button7(), 3);

	this.instance_1 = new lib.shape6UpOverDownHit("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


// stage content:
(lib.DISK_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* function wsetup(i)
		{
		    if (i == "w1")
		    {
		        w1._x = 140;
		        w1._y = 34;
		    }
		    else if (i == "w2")
		    {
		        w2._x = 230;
		        w2._y = 34;
		    }
		    else if (i == "w3")
		    {
		        w3._x = 320;
		        w3._y = 34;
		    }
		    else if (i == "w4")
		    {
		        w4._x = 410;
		        w4._y = 34;
		    } // end else if
		} // End of the function
		function wnrelease()
		{
		    stopDrag ();
		    if (this.hittest(_root.p1))
		    {
		        this._x = eval("/:p1x");
		        this._y = eval("/:p1y");
		    }
		    else if (this.hittest(_root.p2))
		    {
		        this._x = eval("/:p2x");
		        this._y = eval("/:p2y");
		    }
		    else if (this.hittest(_root.p3))
		    {
		        this._x = eval("/:p3x");
		        this._y = eval("/:p3y");
		    }
		    else
		    {
		        this._x = x;
		        this._y = y;
		    } // end else if
		} // End of the function
		getURL("FSCommand:showmenu", false);
		getURL("FSCommand:trapallkeys", true);
		stop ();
		w1p = w2p = w3p = w4p = 0;
		p1x = p1._x;
		p1y = p1._y;
		p2x = p2._x;
		p2y = p2._y;
		p3x = p3._x;
		p3y = p3._y;
		wsetup("w1");
		wsetup("w2");
		wsetup("w3");
		wsetup("w4");
		*/

		this.stop()
	}
	this.frame_1 = function() {
		/* p1ws = p2ws = p3ws = 0;
		*/
	}
	this.frame_2 = function() {
		/* if (w1p == 1)
		{
		    ++p1ws;
		}
		else if (w1p == 2)
		{
		    ++p2ws;
		}
		else if (w1p == 3)
		{
		    ++p3ws;
		} // end else if
		if (w2p == 1)
		{
		    ++p1ws;
		}
		else if (w2p == 2)
		{
		    ++p2ws;
		}
		else if (w2p == 3)
		{
		    ++p3ws;
		} // end else if
		if (w3p == 1)
		{
		    ++p1ws;
		}
		else if (w3p == 2)
		{
		    ++p2ws;
		}
		else if (w3p == 3)
		{
		    ++p3ws;
		} // end else if
		if (w4p == 1)
		{
		    ++p1ws;
		}
		else if (w4p == 2)
		{
		    ++p2ws;
		}
		else if (w4p == 3)
		{
		    ++p3ws;
		} // end else if
		if (p1ws == 0 || p2ws == 0 || p3ws == 0)
		{
		    gotoAndStop(2);
		} // end if
		trace (p1ws add "," add p2ws add "," add p3ws);
		*/
	}
	this.frame_3 = function() {
		/* stop ();
		*/
		this.stop();
	}
	this.frame_4 = function() {
		/* stop ();
		w1.play();
		w2.play();
		w3.play();
		w4.play();
		*/
		this.stop();
	}
	this.frame_5 = function() {
		/* stop ();
		*/
		this.stop();
	}
	this.frame_6 = function() {
		/* stop ();
		*/
		this.stop();
	}
	this.frame_7 = function() {
		/* stop ();
		fscommand("");
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(2));

	// Layer 81
	this.instance = new lib.button81();
	this.instance.parent = this;
	this.instance.setTransform(275,260);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button81(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 79
	this.w4 = new lib.sprite14();
	this.w4.parent = this;
	this.w4.setTransform(410,34);

	this.timeline.addTween(cjs.Tween.get(this.w4).to({_off:true},8).wait(1));

	// Layer 77
	this.w3 = new lib.sprite12();
	this.w3.parent = this;
	this.w3.setTransform(320,34);

	this.timeline.addTween(cjs.Tween.get(this.w3).to({_off:true},8).wait(1));

	// Layer 75
	this.w2 = new lib.sprite10();
	this.w2.parent = this;
	this.w2.setTransform(230,34);

	this.timeline.addTween(cjs.Tween.get(this.w2).to({_off:true},8).wait(1));

	// Layer 73
	this.w1 = new lib.sprite8();
	this.w1.parent = this;
	this.w1.setTransform(140,34);

	this.timeline.addTween(cjs.Tween.get(this.w1).to({_off:true},8).wait(1));

	// Layer 72
	this.instance_1 = new lib.shape5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},8).wait(1));

	// Layer 70
	this.p1 = new lib.sprite4();
	this.p1.parent = this;
	this.p1.setTransform(97.2,81.5);

	this.timeline.addTween(cjs.Tween.get(this.p1).to({_off:true},8).wait(1));

	// Layer 68
	this.instance_2 = new lib.sprite2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.5,81,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},8).wait(1));

	// Layer 66
	this.p2 = new lib.sprite4();
	this.p2.parent = this;
	this.p2.setTransform(275.2,81.5);

	this.timeline.addTween(cjs.Tween.get(this.p2).to({_off:true},8).wait(1));

	// Layer 64
	this.instance_3 = new lib.sprite2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(274,81,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},8).wait(1));

	// Layer 62
	this.p3 = new lib.sprite4();
	this.p3.parent = this;
	this.p3.setTransform(454.2,83);

	this.timeline.addTween(cjs.Tween.get(this.p3).to({_off:true},8).wait(1));

	// Layer 60
	this.instance_4 = new lib.sprite2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(451.5,82,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},8).wait(1));

	// Layer 51
	this.instance_5 = new lib.sprite27();
	this.instance_5.parent = this;
	this.instance_5.setTransform(274.8,181.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({_off:true},5).wait(1));

	// Layer 40
	this.instance_6 = new lib.sprite40();
	this.instance_6.parent = this;
	this.instance_6.setTransform(206.9,261.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({_off:true},4).wait(1));

	// Layer 19
	this.too = new lib.sprite63();
	this.too.parent = this;
	this.too.setTransform(163.1,342.3);
	this.too._off = true;

	this.timeline.addTween(cjs.Tween.get(this.too).wait(5).to({_off:false},0).to({_off:true},3).wait(1));

	// Layer 1
	this.p4123 = new lib.sprite79();
	this.p4123.parent = this;
	this.p4123.setTransform(275,494.8);
	this.p4123._off = true;

	this.timeline.addTween(cjs.Tween.get(this.p4123).wait(6).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,276,553,111);
// library properties:
lib.properties = {
	width: 550,
	height: 520,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;