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


(lib.text73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBbIAAgZIAYAAIAAAZgAgKAvIAAgHQAAgNADgJQADgHAFgIQAEgEAMgJQALgLAEgFQADgHAAgHQAAgNgKgJQgKgKgOAAQgNAAgKAJQgJAIgDAUIgXgEQADgYAPgOQAPgNAYAAQAaAAAQAOQAQAOAAAVQAAAMgGAKQgFAJgQANQgLAKgDAFQgEAEgBAGQgCAGAAANg");
	this.shape.setTransform(120.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA9IAAg/IgBgqIAXAMIgIAGIAABhIABAjIgQAKIABg3gAhyAHQAqgTAcgkQAcglAJgeIAUAMIgJAGQAbAoAcAUQAdAUAbAEIAAAEQgQABgHAKQgdgOgVgWQgUgVgVgkQgVAngaAXQgZAYgqAQg");
	this.shape_1.setTransform(101.5,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhwBpQAmgcALgeQALgfAAgrIgBhRIARAKIBCAAIAJgKIAQANIgJAHIAACaQgBASAQAAIATAAQAKABABgNIACgrIAFAAQABAZACALQACAJAKAHQgJAOgQABIgiAAQgXABAAgYIAAimIhEAAQABBQgEAZQgDAbgOAXQgOAXgoAZg");
	this.shape_2.setTransform(76.8,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BtQgUAAABgVIAAh0QgQANgRALIgCgDQAUgRAVgbQAVgaAOgfIAVANIgIADIgKAMIA3AAIAJgLIASATQgJABgKAJQgMAIgQAVIA3AAIAIgKIAPANIgJAHIAAAmIABAVIgNAFIAAgNIh8AAIAAA1QgBARARAAICAAAQALAAACgSIACgkIAEAAQAAAUADAMQABANAMADQgKARgUAAgAAFAXIA2AAIAAgyIg2AAgAhBAXIA6AAIAAgyIg6AAgAhEglIAEAEIA9AAIAYgpIg5AAQgSAVgOAQg");
	this.shape_3.setTransform(51.7,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhpBwQAsgWAegfIARAQIgLACQgwAegfAJgABMBoQgQgRgpgTIABgEQAeAJAXAJQAWAJgBAPQgBAIgEAAQgEAAgJgKgAhGgYIAOAIIAyAAIAAgXIhMAAQgNAAgLADIgJgIIBLAAIAAgfIgUAAQgNAAgKADIgJgJIA0AAIgBgiIAWALIgIAHIAAAQIA2AAIgBghIAWALIgJAHIAAAPIAfAAIALgLIASARIg8AAIAAAfIArAAIAOgOIAUATIhtAAIAAAXIAyAAIAKgJIAOANIgJAFQAAA1ABAPIgOAGIAAgJIhzAAIAAAGIgOAGQABgzgBgrgAAHA0IA0AAIAAgcIg0AAgAg4A0IAyAAIAAgcIgyAAgAAHASIA0AAIAAgcIg0AAgAg4ASIAyAAIAAgcIgyAAgAgbgsIA2AAIAAgfIg2AAg");
	this.shape_4.setTransform(26.5,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.1,-0.4,128.5,59.9);


(lib.text57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhJBwQAygXAUgjQASgkABg9IAXAMIgGAFQAHAxAUAfQAUAeAgAMIgBADQgPgBgGALQgZgTgQghQgQghgDgvQgGBAgbAfQgdAfgnAMgAhQBgQgJgBgDgGQgCgHADgPQADgQgBgIQgBgIgVgGIAAgEQAUADAGgFQAGgFAphgIAEACIgpBnQgBAEAAAMQAAAMACAVQADAUgIAAIgBAAgAgxAHQAWgbAOgkQANgkADgWIAXAMQgIAEgEAJIgOAhIBNAAIALgLIARATQgKACgGAFQgHAGgRAVIgDgCIAQgiIhPAAIgRAbQgJAPgTASgAhOhAQgEgSgSgSIACgDQAVALAKALQALALgJAMQgDAFgDAAQgEAAgDgLg");
	this.shape.setTransform(70.3,43.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhvADIC1AAIAUgOIAWAUIi7AAQgQAAgLADg");
	this.shape_1.setTransform(45,41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBvQAngYAQgZIAPARQgIABgQAKQgQALgcANgABdBqQgJgOgigYIACgDQAaAKAPAHQAPAIgDAPQgCAIgDAAQgDAAgEgHgAhxA0IApgLIAAhRIgGAAQgNAAgLADIgJgIIAnAAIAAgoIgBgZIAWALIgJAHIAAAvIAMAAIALgLIAQAQIgnAAIAABOIAmgMIABAEQhIAegIAMgAgpA0IAgAAIAAhUIAAgbIAMAIIAYAAIACgaIgcAAQgMAAgLADIgIgJIA7AAIABgeIAVAIIgHAGIgCAQIAkAAIAMgLIASARIhDAAIgCAaIAdAAIAHgJIAPALIgHAFIAABgIABAAIALgMIASASIh6AAQgNAAgKADgAADA0IBEAAIAAgVIhEAAgAADAZIBEAAIAAgVIhEAAgAADgBIBEAAIAAgUIhEAAgAADgbIBEAAIAAgSIhEAAg");
	this.shape_2.setTransform(20,43.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASBdIAAgFQAXADAJgBQAHgBgBgLIAAglIhyAAIAABAIgPAHIABgfIAAgoIgJAAQgMAAgLADIgJgJIApAAIAAg2IgBgvIAPAIIAzAAIAAghIg8AAQgMAAgMADIgIgJICkAAIAOgOIAVAUIhgAAIAAAhIAzAAIAIgJIAPALIgIAHIAABUIAIAAIAQgPIAUAVIgsAAIAAAvQABARgWAHQAAgLgfgIgAAEAjIA0AAIAAgpIg0AAgAg6AjIAzAAIAAgpIgzAAgAAEgMIA0AAIAAgoIg0AAgAg6gMIAzAAIAAgoIgzAAg");
	this.shape_3.setTransform(-4.9,43.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBZQANAAAVgdQAUgdAIgXIgjAAQgNAAgLADIgJgJIBIAAIAAgzIgWAAQgLAAgLADIgJgJIA1AAQAAgqgBgOIAXAMIgKAKIAAAiIAmAAIALgLIAQARIhBAAIAAAzIA0AAIAMgKIAQAQIhbAAIAPALQgIAEgKAPQgKAOgiAlIBlgGQgMgSgPgRIACgDIAcAVQAKAIAIAKQAJAJgHAMQgHALgEgKIgJgTQg2AGgcAHQgcAHgEAFgAhXBpQgLgEAFgUQAGgUgGgFQgFgGgPgEIAAgEQASACAEAAQAEgBAGgIQAFgIAohfIAEABQgmBngDAMQgEAMABASIABAYQAAAEgEAAIgIgBgAhdgLQgEgNgRgSIACgDQAiARAAALQAAAMgFAEIgDAAQgEAAgDgKgAhJhEQgEgOgPgRIACgDQAcAOADAJQAEAKgHAHQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAgDgIg");
	this.shape_4.setTransform(145.1,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguBvQAngYAQgZIAQARQgKABgPAKQgQALgcANgABdBqQgJgOgigYIACgDQAaAKAPAHQAPAIgDAPQgCAIgDAAQgDAAgEgHgAhxA0IApgLIAAhRIgGAAQgNAAgLADIgJgIIAnAAIAAgoIgBgZIAVALIgIAHIAAAvIAMAAIALgLIAQAQIgnAAIAABOIAmgMIABAEQhJAegGAMgAgpA0IAgAAIAAhUIAAgbIAMAIIAYAAIABgaIgbAAQgLAAgMADIgIgJIA7AAIABgeIAVAIIgHAGIgCAQIAkAAIAMgLIASARIhDAAIgCAaIAdAAIAHgJIAPALIgHAFIAABgIABAAIALgMIASASIh6AAQgNAAgKADgAADA0IBEAAIAAgVIhEAAgAADAZIBEAAIAAgVIhEAAgAADgBIBEAAIAAgUIhEAAgAADgbIBEAAIAAgSIhEAAg");
	this.shape_5.setTransform(120,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYBZIAAgFQAYAFALAAQAKAAADgQQADgRAChsIg5AAQgRAcgTAUIgDgCQAUggAJgYQAKgYAFgZIAVANQgHAFgRAjIA0AAIAMgLIAOAPIgJAHQgCBxgDAPQgDAPgHAGQgGAGgOAFQgFgQgbgIgAhiATIgBhZIAPAJIAJAAQAKghABgSIAVAMQgJAFgRAiIAgAAIAKgKIAPAPIgKAHQAABxABAjIgOAIIAAgVIgyAAIAAARIgOAIIABhcgAhVBRIAyAAIAAhFIgyAAgAhVAGIAyAAIAAg9IgyAAgAAXAZQgEgUgOgRIACgDQAXAQAGAMQAFAMgHAKQgDADgCAAQgEAAgCgNg");
	this.shape_6.setTransform(95.6,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAgBXIAAgEQAVADALAAQALAAAAgOIAAilIibAAIAADFIgQAGIACg0IAAh6IgBgtIAPAKICaAAIAHgKIAQANIgIAGIAACnQABAYgYAJQAAgMgigLgAguASIgBgsIAOAHIA6AAIAGgKIAPAMIgIAHIAAAjIABAZIgNAGIAAgRIg7AAIAAAPIgOAEIABgogAghAhIA7AAIAAguIg7AAgAhBg5IBdAAIANgMIATASIhhAAQgLAAgJADg");
	this.shape_7.setTransform(70.6,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAuIAAhVQgnA7g/AkIgCgEQAhgXAdgjQAfgkASgvIhMAAQgNAAgLACIgJgIIC5AAIAPgPIAVAVIhdAAIgTAnIAPAJIgIAHIAABdIABAtIgQAHIABhBgABVAfQgLgVgugpIADgDQA+AoAIAMQAHAMgFALQgDAEgCAAQgFAAgIgOg");
	this.shape_8.setTransform(45,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhnBtQATgeAGgfQAIgggBg1QAAg3gBgRIAPAJICLAAIAGgKIAQALIgHAIIAACqQABAYgXAHQgCgQgegFIAAgFQAaACAHgBQAHAAgBgNIAAgyIhBAAQAAA/ABAMIgOAGIABhRIhAAAQgGA0gjAlgAARAQIBBAAIAAgyIhBAAgAg7AQIBAAAIAAgyIg+AAIgCAygAARgoIBBAAIAAg2IhBAAgAg5goIA+AAIAAg2Ig+AAg");
	this.shape_9.setTransform(19.1,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPAzIgBg5IANAGIBIAAIAGgHIAQAKIgHAGIAABPQABATgXAHQAAgNgagGIAAgEIAaACQAKAAgBgKIAAgXIhJAAIAAAwIgOAHIABhAgAgCA2IBJAAIAAgWIhJAAgAgCAaIBJAAIAAgUIhJAAgAhRBQQAEgFAAgIIAAhaIgKAAQgIAAgLADIgIgJIAjAAIAIgKIAQANIgJAHIAABWIAkggIACADQgbAggPAagAgugYIBHAAIAAgYIgWAAQgHAAgLADIgJgJIAxAAIAAgVIgkAAQgIAAgKADIgJgJIA/AAIgBghIAXAKIgIAHIAAAQIAoAAIAOgMIAQASIhGAAIAAAVIAcAAIANgMIAQASIg5AAIAAAYIAuAAIANgNIARATIiGAAQgIAAgKADgAhMhHQgBgOgMgTIADgCQARAMAGAHQAFAHgCAHQgCAHgGAEIgDABQgEAAgBgKg");
	this.shape_10.setTransform(-5.2,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-0.4,197.7,87.9);


(lib.text55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA7IAAgxIgwAAIAAgUIAwAAIAAgwIAUAAIAAAwIAxAAIAAAUIgxAAIAAAxg");
	this.shape.setTransform(68.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.9,-0.4,24.1,59.9);


(lib.text48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJA3QgEgDABgGQgBgGAEgEQAEgEAFAAQAGAAAEAEQADAEABAGQgBAGgDADQgEAEgGAAQgFAAgEgEgAgJgjQgEgEABgGQgBgGAEgDQAEgFAFAAQAGAAAEAFQADADABAGQgBAGgDAEQgEAEgGgBQgFABgEgEg");
	this.shape.setTransform(126.3,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQBbIAAgFQAhAFALgBQAKAAAFgKQAFgKAJhlIhWAAQgMA8ghAjQghAkgiAOIgDgDQAlgXAbglQAbgkAKguIg7AAQgMAAgKADIgJgJIBbAAQAFgiAAgqIAZAMIgKAHQgCAdgEAcIBTAAIAHgNIASAOIgJAIQgGBXgEARQgDARgKAIQgJAJgQAEQgFgQgigHgAAtAqQgKgQgfgZIACgDQAtAUAGAJQAGAJgEALQgCAEgCAAQgEAAgGgJgAg2g8QgFgOgTgWIADgDQAiAVACAJQACAJgGAIQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgDgKg");
	this.shape_1.setTransform(107.5,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA1BPQgtgtgDhWIh3AAIAAgGIB3AAIgBgvIARADQAMABgRAGIABAlIA7AAIAOgOIATANQAGAFgGACIhcAAQAFBOApApQASASAKAAQAFAAABgEIALggQAEgGABAIIgGAlQAAAFAFAEQADACAAADQAAAEgIAAQgaAAgcgbgAhkBdIgNgSIAygJIAAhAIgyAAIAAgFIBSAAIANgNIAQAMQAFAEgFACIgwAAIAAA/QAcgGAcgIQAGACgFADIhjAgQgBAIgDAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBgAA5hHQgGgKgKgIQgDgDAFAAQAbAHAAAOQAAAGgGAAQgFAAgCgGg");
	this.shape_2.setTransform(82.9,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhkBwQBAgPAFgfIhOAAIAAgFIBPAAQACgIABgSIgaAAIAAALQgNAMABgLIAAhjIAOAKIBtAAIAFgIIAOAKQAGAFgKACIAABLQgNAMABgLIAAgIIgWAAIAAAaIAjAAIAPgPIASAOQAHAEgHACIhEAAIAAArQgNAMAAgLIAAgsIgtAAQgFAohMAKQgEgCAEgCgAgSA9IAsAAIAAgaIgpAAQgBAQgCAKgAg1AdIByAAIAAgRIhyAAgAg1AGIByAAIAAgSIhyAAgAg1gSIByAAIAAgSIhyAAgAhtgqQAZgZAOgwIARAJQAFADgKABIgMARIArAAIAMgNIAPAMQAGAFgGACIgzAAQAUAKAAALQAAAIgFAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQgHgSgIgJIgRAAQgPAZgTAOIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBgAgIgzQAUgaAKgkIARAJQAGAEgMAAIgJAPIAxAAIANgNIAPAMQAHAFgHACIhCAAQASALAAALQAAAJgGAAQgDAAgCgFQgCgNgJgNIgLAAQgNAVgMAJIgCABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_3.setTransform(57.3,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhxBuQAYgtAAgsIAAhWIAPAJIBVAAIgBgcIAAgcIAQADQAIACgMAIIAAANIABAeIA1AAIAPgOIASANQAGAFgGACIhWAAQAGA3AOAeQARgdAMggIASAIQAJAGgRACQgPAegSAbQAUAdAYAHQAFABACgFIAKgbQAEgEAAAFIgHAeQAAAHADACQAEAGgEADQgDACgGgBQghgFgcgmQgcAhgiAUQgFAAADgEQAhgZAZgiQgSgogEg7IhYAAIAAAtIAtAAIAHgJIAPAKQAKAEgQADQgBAggEAcQgCAPgLAGQgLAFAAgIQAAgEgHgDIgTgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAaAEQAKABACgLQADgZABgiIgxAAIAAATQAAAxgiAsIgCABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBgABChMQgGgMgQgJQgEgCAEgCQAkAGAAATQAAAGgGAAQgFAAgDgGg");
	this.shape_4.setTransform(32.3,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBkQAAgFgGgDIgNgGQgFgFAJABIAXAFQALABAHgEQAOgIADgjIiMAAIAAgGICNAAIAEglIhOAAIgDAKQgJAJgDgHIAThXIAQAGQAKAEgPAEIgGAUIBIAAIANgNIAQAMQAFAFgFACIhmAAIgHAdIBLAAIAJgJIANANQAIAGgPgBIgEAiIAdAAIAPgPIATAOQAFAFgFACIhAAAQgEAmgQAPQgOAKgOAAQgIAAAAgEgAhrg6QAAgFAIgGQAMgIADgWQACgHADAGIAAALICVAAIAIgIIATATQAIAIgOgBQgLAAgFAEIgLAIQgFAEABgFIAMgXIiXAAQgFAhgPAAQgIAAAAgIg");
	this.shape_5.setTransform(7.9,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-0.4,151.1,84.9);


(lib.text44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBbIAAgZIAYAAIAAAZgAgKAvIAAgHQAAgNADgJQADgHAFgIQAEgEAMgJQALgLAEgFQADgHAAgHQAAgNgKgJQgKgKgOAAQgNAAgKAJQgJAIgDAUIgXgEQADgYAPgOQAPgNAYAAQAaAAAQAOQAQAOAAAVQAAAMgGAKQgFAJgQANQgLAKgDAFQgEAEgBAGQgCAGAAANg");
	this.shape.setTransform(120.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA9IAAg/IgBgqIAXAMIgIAGIAABhIABAjIgQAKIABg3gAhyAHQAqgTAcgkQAcglAJgeIAUAMIgJAGQAbAoAcAUQAdAUAbAEIAAAEQgQABgHAKQgdgOgVgWQgUgVgVgkQgVAngaAXQgZAYgqAQg");
	this.shape_1.setTransform(101.5,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhwBpQAmgcALgeQALgfAAgrIgBhRIARAKIBCAAIAJgKIAQANIgJAHIAACaQgBASAQAAIATAAQAKABABgNIACgrIAFAAQABAZACALQACAJAKAHQgJAOgQABIgiAAQgXABAAgYIAAimIhEAAQABBQgEAZQgDAbgOAXQgOAXgoAZg");
	this.shape_2.setTransform(76.8,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BtQgUAAABgVIAAh0QgQANgRALIgCgDQAUgRAVgbQAVgaAOgfIAVANIgIADIgKAMIA3AAIAJgLIASATQgJABgKAJQgMAIgQAVIA3AAIAIgKIAPANIgJAHIAAAmIABAVIgNAFIAAgNIh8AAIAAA1QgBARARAAICAAAQALAAACgSIACgkIAEAAQAAAUADAMQABANAMADQgKARgUAAgAAFAXIA2AAIAAgyIg2AAgAhBAXIA6AAIAAgyIg6AAgAhEglIAEAEIA9AAIAYgpIg5AAQgSAVgOAQg");
	this.shape_3.setTransform(51.7,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhpBwQAsgWAegfIARAQIgLACQgwAegfAJgABMBoQgQgRgpgTIABgEQAeAJAXAJQAWAJgBAPQgBAIgEAAQgEAAgJgKgAhGgYIAOAIIAyAAIAAgXIhMAAQgNAAgLADIgJgIIBLAAIAAgfIgUAAQgNAAgKADIgJgJIA0AAIgBgiIAWALIgIAHIAAAQIA2AAIgBghIAWALIgJAHIAAAPIAfAAIALgLIASARIg8AAIAAAfIArAAIAOgOIAUATIhtAAIAAAXIAyAAIAKgJIAOANIgJAFQAAA1ABAPIgOAGIAAgJIhzAAIAAAGIgOAGQABgzgBgrgAAHA0IA0AAIAAgcIg0AAgAg4A0IAyAAIAAgcIgyAAgAAHASIA0AAIAAgcIg0AAgAg4ASIAyAAIAAgcIgyAAgAgbgsIA2AAIAAgfIg2AAg");
	this.shape_4.setTransform(26.5,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.1,-0.4,128.5,59.9);


(lib.text36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBbIAAgZIAYAAIAAAZgAgKAvIAAgHQAAgNADgJQADgHAFgIQAEgEAMgJQALgLAEgFQADgHAAgHQAAgNgKgJQgKgKgOAAQgNAAgKAJQgJAIgDAUIgXgEQADgYAPgOQAPgNAYAAQAaAAAQAOQAQAOAAAVQAAAMgGAKQgFAJgQANQgLAKgDAFQgEAEgBAGQgCAGAAANg");
	this.shape.setTransform(120.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA9IAAg/IgBgqIAXAMIgIAGIAABhIABAjIgQAKIABg3gAhyAHQAqgTAcgkQAcglAJgeIAUAMIgJAGQAbAoAcAUQAdAUAbAEIAAAEQgQABgHAKQgdgOgVgWQgUgVgVgkQgVAngaAXQgZAYgqAQg");
	this.shape_1.setTransform(101.5,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhwBpQAmgcALgeQALgfAAgrIgBhRIARAKIBCAAIAJgKIAQANIgJAHIAACaQgBASAQAAIATAAQAKABABgNIACgrIAFAAQABAZACALQACAJAKAHQgJAOgQABIgiAAQgXABAAgYIAAimIhEAAQABBQgEAZQgDAbgOAXQgOAXgoAZg");
	this.shape_2.setTransform(76.8,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BtQgUAAABgVIAAh0QgQANgRALIgCgDQAUgRAVgbQAVgaAOgfIAVANIgIADIgKAMIA3AAIAJgLIASATQgJABgKAJQgMAIgQAVIA3AAIAIgKIAPANIgJAHIAAAmIABAVIgNAFIAAgNIh8AAIAAA1QgBARARAAICAAAQALAAACgSIACgkIAEAAQAAAUADAMQABANAMADQgKARgUAAgAAFAXIA2AAIAAgyIg2AAgAhBAXIA6AAIAAgyIg6AAgAhEglIAEAEIA9AAIAYgpIg5AAQgSAVgOAQg");
	this.shape_3.setTransform(51.7,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhqBYQATgEBMgWIABAEQhQAfgFAIgAgnBcIBEAAIAAiYIgUAAQgMAAgLADIgJgJIBaAAIAQgOIATAUIg8AAIAACYIAjAAIAQgOIASAUIh2AAQgNAAgLADgAhoAoQAHgCAKgLQAKgKAagjQgVAEgLAEQgLAEgFAFIgMgSQALAAAQgeQASgeAGgZIAUAMIgIAHQgXAkgYAeIAugDQANgTAGgRIASANIgJAGQgoA1gcAZIBJgQIABADIgvAQQgVAGgKAJg");
	this.shape_4.setTransform(26.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.1,-0.4,128.5,59.9);


(lib.text34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUByIAAg2IhiAAIAAgaIBniTIAXAAIAACTIAfAAIAAAaIgfAAIAAA2gAgzAiIBHAAIAAhmg");
	this.shape.setTransform(6.3,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.8,47.8,75.5);


(lib.text28Down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARA5IgXgvIgSATIAAAcIgkAAIAAhxIAkAAIAAArIAkgrIAvAAIgqArIAsBGg");
	this.shape.setTransform(18.6,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeA1QgNgGgIgNQgHgOAAgUQAAgbAPgQQAQgPAbAAQAcAAAQAPQAPAPAAAcQAAATgHANQgGANgNAHQgNAHgTAAQgSAAgNgGgAgRgYQgGAIAAAQQAAASAGAHQAHAIAKAAQALAAAHgIQAGgHAAgSQAAgRgHgHQgGgHgLAAQgKAAgHAHg");
	this.shape_1.setTransform(4.7,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.9,44.4,49.1);


(lib.text25UpOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AARA5IgXgvIgSATIAAAcIgkAAIAAhxIAkAAIAAArIAkgrIAvAAIgqArIAsBGg");
	this.shape.setTransform(18.6,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgeA1QgNgGgIgNQgHgOAAgUQAAgbAPgQQAQgPAbAAQAcAAAQAPQAPAPAAAcQAAATgHANQgGANgNAHQgNAHgTAAQgSAAgNgGgAgRgYQgGAIAAAQQAAASAGAHQAHAIAKAAQALAAAHgIQAGgHAAgSQAAgRgHgHQgGgHgLAAQgKAAgHAHg");
	this.shape_1.setTransform(4.7,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.9,44.4,49.1);


(lib.text24UpOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AARA5IgXgvIgSATIAAAcIgkAAIAAhxIAkAAIAAArIAkgrIAvAAIgqArIAsBGg");
	this.shape.setTransform(18.6,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgeA1QgNgGgIgNQgHgOAAgUQAAgbAPgQQAQgPAbAAQAcAAAQAPQAPAPAAAcQAAATgHANQgGANgNAHQgNAHgTAAQgSAAgNgGgAgRgYQgGAIAAAQQAAASAGAHQAHAIAKAAQALAAAHgIQAGgHAAgSQAAgRgHgHQgGgHgLAAQgKAAgHAHg");
	this.shape_1.setTransform(4.7,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.9,44.4,49.1);


(lib.shape105Hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egq9AXcMAAAgu3MBV7AAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-150,550,300);


(lib.shape74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0080FF").ss(1,1,1).p("Ah1hCQBAAKAtAWQAlASAiAcQAeAXATAiIAGALAhAhPQgnAHgOAGAhMgbIgpgn");
	this.shape.setTransform(446.3,225.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(433.5,216.2,25.6,18);


(lib.shape56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABwBVIAAgqIhGAAIAAgQIBPhvIAKAAIAABvIAaAAIAAAQIgaAAIAAAqgAA0AbIA8AAIAAhVgAicA3IAAgRIB+AAIAAARgAicAEIAAgPIB+AAIAAAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-8.4,31.4,16.9);


(lib.shape53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiuAAIFdAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-1,37,2);


(lib.shape45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0080FF").ss(1,1,1).p("ABmBfIgMgDQglgJgfgXQgjgagcggQggglgbg7QgCAPADAoAg0hAIgwge");
	this.shape.setTransform(330.2,233.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319.1,223.3,22.4,21);


(lib.shape40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AieieIE9AAIAAE9Ik9AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,33.8,33.8);


(lib.shape38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	//this.shape.graphics.f("#0080FF").s().p("AA3EDIgggKIgMgHIgKgIIgBgCIAAACIgKAIIgMAHIgfAKIglACIhOgKIgigNIgPgJIgMgLIgGgHIgMAJIgSALIgpAPIhDAIIghgDIgpgJIgbgMIgWgQIgPgWIgEgMIgOAEIgTACIgSgBIgRgDIgQgFIgcgQIgKgLIgQgXIgFgZIACgMIAFgMIAIgMIAGgFIgGAAIgPgFIgOgGIgMgJIgRgYIgFgNIgDgbIACgNIAGgOIAIgMIAMgKIAQgIIAUgEIAQgCIgGgNIgCgSIACgPIAGgOIAJgNIAMgLIAPgJIAhgOIAlgGIAkAAIAhAIIAIAEIAFgMIALgPIAOgLIAjgQIAVgDIApgCIApAEIAkALIAPAHIAMAJIAHAHIAGgKIAKgLIANgJIAfgOIASgEIAmgFIASAAIAjAGIAcANIALAKIAAACIABgCIALgKIAcgNIAjgGIAmACIAkAHIAfAOIANAJIAKALIAFAKIAIgHIAMgJIAPgHIAlgLIAogEIAqACIAUADIAjAQIAOALIALAPIAFALIAIgDIAPgFIAjgEIAlADIATAEIAiAOIAOAJIAMALIAJANIAGAOIADAPIgDASIgGANIARACIATAEIAQAIIAMAKIAIAMIAGAOIACANIAAAOIgJAaIgHAMIgKAMIgLAJIgOAGIgPAFIgGAAIAGAFIAIAMIAFAMIACAMIgBANIgEAMIgPAXIgLALIgbAQIgRAFIgjAEIgTgCIgOgEIgEAMIgPAWIgOALIgZANIgTAHIhBAJIhDgIIgVgGIgUgJIgbgRIgDgDIgGAHIgMALIgOAJIgjANIhOAKgAjqDMIAMAJIAGADIAQAIIAbAIIBFAJIA4gGIAXgGIAMgGIAFgEIAHgHIABgFIAFAJIAJAHIAKAFIAcAIIAQACIAiABIASgCIAjgHIAfgMIANgIIALgJIAJgLIAOALIARALIAdAMIBAALIBAgCIAcgIIAYgKIAOgKIAKgMIAIgVIglAJIgMABIgVAAIglgEIAqgIIAXgJIARgJIAIgGIAMgLIARgZIAEgMIAEAHIACAHIABAIIAAAPIgFAUIARAEIAfgBIANgDIAVgKIAJgIIALgQIADgTIgBgKIgEgKIgGgKIgIgKIgMgJIAOAAIAOgDIALgGIAKgJIAIgJIAHgLIAIgYIAAgMIgHgYIgHgKIgLgJIgOgHIgQgEIgUgCIAGgQIACgQIgBgOIgGgMIgIgLIgXgSIgegNIgigFIghABIgdAGIgLAFIgGgOIgKgNIgLgKIgPgIIgfgKIgjgBIgiAEIgQAFIgcALIgKAIIgIAIIgEAJIAIABIAOAGIAFADIAIAIIAFAJIgFgEIgPgIIgQgFIgXgCIgTACIgNADIAEgDIAGgEIAKgEIAMgCIAOgBIgDgMIgFgJIgJgJIgMgIIgdgMIgigHIgSgBIgiADIgQADIgNAFIgMAGIgJAIIgGAKIgFgJIgJgIIgMgGIgOgFIgQgCIgjAAIgSABIgjAJIgeANIgMAJIgIAJIgHAKIgBAMIgFgJIgJgIIgLgHIgfgLIgkgHIgngBIgjAHIgQAFIgNAIIgKAKIgHANIgCAOIgbgKIghgEIgSAAIglAEIgiALIgPAHIgMAJIgKALIgGAMIgDANIABAPIAHARIgUABIgRAFIgNAGIgKAJIgGAKIgEALIgCAMIACAMIAEAMIANAXIATARIANAGIANADIAOAAIgLAKIgHAKIgFAKIgCAMIABALIAIAUIAIAKIAUAQIANAHIAcAHIAQABIAigHIgJgJIgFgGIgFgMIgBgGIABgGIADgGIAEALIADAFIAIAIIAFADIALAGIANAEIAfAEIARgCIgLAGIgOADIgUACIgOgBIgMgCIACAIIAHANIAJAMIALAKIANAJIAQAIIAaAHIAJACIATABIAnAAIAvgLIARgIIAYgQIAHgFg");
	this.shape.graphics.f("#0080FF").s().p("AA3EDIgggKIgMgHIgKgIIgBgCIAAACIgKAIIgMAHIgfAKIglACIhOgKIgigNIgPgJIgMgLIgGgHIgMAJIgSALIgpAPIhDAIIghgDIgpgJIgbgMIgWgQIgPgWIgEgMIgOAEIgTACIgSgBIgRgDIgQgFIgcgQIgKgLIgQgXIgFgZIACgMIAFgMIAIgMIAGgFIgGAAIgPgFIgOgGIgMgJIgRgYIgFgNIgDgbIACgNIAGgOIAIgMIAMgKIAQgIIAUgEIAQgCIgGgNIgCgSIACgPIAGgOIAJgNIAMgLIAPgJIAhgOIAlgGIAkAAIAhAIIAIAEIAFgMIALgPIAOgLIAjgQIAVgDIApgCIApAEIAkALIAPAHIAMAJIAHAHIAGgKIAKgLIANgJIAfgOIASgEIAmgFIASAAIAjAGIAcANIALAKIAAACIABgCIALgKIAcgNIAjgGIAmACIAkAHIAfAOIANAJIAKALIAFAKIAIgHIAMgJIAPgHIAlgLIAogEIAqACIAUADIAjAQIAOALIALAPIAFALIAIgDIAPgFIAjgEIAlADIATAEIAiAOIAOAJIAMALIAJANIAGAOIADAPIgDASIgGANIARACIATAEIAQAIIAMAKIAIAMIAGAOIACANIAAAOIgJAaIgHAMIgKAMIgLAJIgOAGIgPAFIgGAAIAGAFIAIAMIAFAMIACAMIgBANIgEAMIgPAXIgLALIgbAQIgRAFIgjAEIgTgCIgOgEIgEAMIgPAWIgOALIgZANIgTAHIhBAJIhDgIIgVgGIgUgJIgbgRIgDgDIgGAHIgMALIgOAJIgjANIhOAKgAjqDMIAMAJIAGADIAQAIIAbAIIBFAJIA4gGIAXgGIAMgGIAFgEIAHgHIABgFIAFAJIAJAHIAKAFIAcAIIAQACIAiABIASgCIAjgHIAfgMIANgIIALgJIAJgLIAOALIARALIAdAMIBAALIBAgCIAcgIIAYgKIAOgKIAKgMIAIgVIglAJIgMABIgVAAIglgEIAqgIIAXgJIARgJIAIgGIAMgLIARgZIAEgMIAEAHIACAHIABAIIAAAPIgFAUIARAEIAfgBIANgDIAVgKIAJgIIALgQIADgTIgBgKIgEgKIgGgKIgIgKIgMgJIAOAAIAOgDIALgGIAKgJIAIgJIAHgLIAIgYIAAgMIgHgYIgHgKIgLgJIgOgHIgQgEIgUgCIAGgQIACgQIgBgOIgGgMIgIgLIgXgSIgegNIgigFIghABIgdAGIgLAFIgGgOIgKgNIgLgKIgPgIIgfgKIgjgBIgiAEIgQAFIgcALIgKAIIgIAIIgEAJIAIABIAOAGIAFADIAIAIIAFAJIgFgEIgPgIIgQgFIgXgCIgTACIgNADIAEgDIAGgEIAKgEIAMgCIAOgBIgDgMIgFgJIgJgJIgMgIIgdgMIgigHIgSgBIgiADIgQADIgNAFIgMAGIgJAIIgGAKIgFgJIgJgIIgMgGIgOgFIgQgCIgjAAIgSABIgjAJIgeANIgMAJIgIAJIgHAKIgBAMIgFgJIgJgIIgLgHIgfgLIgkgHIgngBIgjAHIgQAFIgNAIIgKAKIgHANIgCAOIgbgKIghgEIgSAAIglAEIgiALIgPAHIgMAJIgKALIgGAMIgDANIABAPIAHARIgUABIgRAFIgNAGIgKAJIgGAKIgEALIgCAMIACAMIAEAMIANAXIATARIANAGIANADIAOAAIgLAKIgHAKIgFAKIgCAMIABALIAIAUIAIAKIAUAQIANAHIAcAHIAQABIAigHIgJgJIgFgGIgFgMIgBgGIABgGIADgGIAEALIADAFIAIAIIAFADIALAGIANAEIAfAEIARgCIgLAGIgOADIgUACIgOgBIgMgCIACAIIAHANIAJAMIALAKIANAJIAQAIIAaAHIAJACIATABIAnAAIAvgLIARgIIAYgQIAHgFg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-26.1,142.1,52.3);


(lib.shape37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0080FF").ss(1,1,1).p("AA1BBIAwAeQgbg8gggkQgcghgjgZQgfgXglgJIgMgDABlBfQACgPgDgo");
	this.shape.setTransform(320.6,174.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(309.4,164.3,22.4,21);


(lib.shape32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AByikIDnFJAhxikIjnFJ");
	this.shape.setTransform(0,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,1.6,71,35);


(lib.shape31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Egq9AAAMBV7AAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.9,-1,552,2);


(lib.shape29Hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiIBGIAAiLIERAAIAACLg");
	this.shape.setTransform(29.7,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AB3AAQAAAxgjAjQgjAigxAAQgwAAgjgiQgjgjAAgxQAAgvAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAvg");
	this.shape_1.setTransform(-0.6,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhSBUQgjgjAAgxQAAgvAjgjQAigjAwAAQAxAAAjAjQAiAjABAvQgBAxgiAjQgjAigxAAQgwAAgigig");
	this.shape_2.setTransform(-0.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-14.9,56.9,25.6);


(lib.shape27Down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AB3AAQAAAxgjAjQgjAigxAAQgwAAgjgiQgjgjAAgxQAAgvAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAvg");
	this.shape.setTransform(-0.6,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhSBUQgjgjAAgxQAAgvAjgjQAigjAwAAQAxAAAjAjQAiAjABAvQgBAxgiAjQgjAigxAAQgwAAgigig");
	this.shape_1.setTransform(-0.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-14.9,25.7,25.6);


(lib.shape26Over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4g9IBxA+IhxA9g");
	this.shape.setTransform(0.6,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-8.1,11.3,12.4);


(lib.shape22Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().p("Ag4g9IBxA+IhxA9g");
	this.shape.setTransform(0.5,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-8.1,11.4,12.4);


(lib.shape21UpOverDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,9.8).s().p("AhBAlQgdgPABgWQgBgVAdgPQAbgPAmAAQAnAAAcAPQAbAPAAAVQAAAWgbAPQgcAPgnAAQgmAAgbgPg");
	this.shape.setTransform(-0.6,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-15.2,18.9,10.5);


(lib.shape20UpOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AB3AAQAAAxgjAjQgjAigxAAQgwAAgjgiQgjgjAAgxQAAgvAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAvg");
	this.shape.setTransform(-0.6,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AhSBUQgjgjAAgxQAAgvAjgjQAigjAwAAQAxAAAjAjQAiAjABAvQgBAxgiAjQgjAigxAAQgwAAgigig");
	this.shape_1.setTransform(-0.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-14.9,25.7,25.6);


(lib.shape19UpOverDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.6,0,0,-0.6,0,16.6).s().p("AhzBuQguguAAhAQAAhAAugtQAtgtBBgBQA/AAAsAhQAsAfAOByQAOByizATQhBAAgtgug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-15.5,32.3,31.1);


(lib.shape17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAAmSQgJj/BqABQBqAAgBCTQgCCTAFBTIHFF0QAcAggWApIm7HjQgaAQgbgPIqDpCIEakZIDBjBIAZgaIC0CVAAAgaQgoAEgeAcQggAhAAAuQAAAuAgAgQAhAiAuAAQAuAAAggiQAhggAAguQAAgughghQggggguAAIgDAAIgGAAIAAATAAAmSIAAF4ApFHzIhcgv");
	this.shape.setTransform(3.1,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABFIYIqDpBIEakaIDBjBIAagaICzCVIHFF1QAcAfgWApIm7HjQgNAIgOAAQgNAAgNgHgAhZBTQAuAAAggiQAgggAAgtQAAguggghQggghguAAIgDAAIgHAAIAAl4IAAF4IAAATIAAgTIAHAAIADAAQAuAAAgAhQAgAhAAAuQAAAtggAgQggAiguAAQgvAAghgiQggggAAgtQAAguAgghQAegdAogEQgoAEgeAdQggAhAAAuQAAAtAgAgQAhAiAvAAIAAAAgAhjiMg");
	this.shape_1.setTransform(13,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiTGDIAAiVIhcgvIAAmsIEdjgIDCgJIkZEaIAAKTg");
	this.shape_2.setTransform(-40.2,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-70.4,136.8,140);


(lib.shape11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAFAFIgGgGIgDgD");
	this.shape.setTransform(-0.4,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgwAVQABAOALAJIAEADQgIgFgUATABIglIhoBUAgwAVIBihRAhHAzIABAAQAVgNABgR");
	this.shape_1.setTransform(6.2,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDA2IgDgDIADADIgDgDIAAAAQAVgNABgRQABAOALAJIAEADQgIgFgUATgAggAvIgEgDQgLgJgBgOIBihRIAOAQIAIAHIhoBUIAAAAg");
	this.shape_2.setTransform(6.2,-5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAjIgHgHIgOgQQgPgUAYAAQAPgPAQgLQAPgLANAFQANAFAGAPQAHAOgSAOIggAWQgBAJgIADIgDAAQgHAAgEgHg");
	this.shape_3.setTransform(15.4,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-16.5,22.2,18.7);


(lib.shape9Hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-3.9,-5.3,0,-3.9,-5.3,32.4).s().p("AjOCzQhWhMAAhqQAAhsBWhMQBQhHB+A+IABAAQAGAAAFgDIAAAAQBugvBTBDQBXBGABBrQACBphWBMQhNBEiGgiQgqANgmAAQhHAAg1gvg");
	this.shape.setTransform(0,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-16.9,58.7,45.3);


(lib.shape8UpOverDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAMjHQBugvBTBDQBXBGABBrQACBphWBMQhNBEiGgiQh8AmhQhIQhWhMAAhqQAAhsBWhMQBQhHB+A+IABAAAhTiYQANAoAqAJQAnAIAjgSQATgKALgR");
	this.shape.setTransform(0,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-4.7,-0.7,0,-4.7,-0.7,32.4).s().p("AjOCzQhWhMAAhqQAAhsBWhMQBQhHB+A+IABAAIgBAFIgHAVIABACIAFgHIAFgIIAIgQQBugvBTBDQBXBGABBrQACBphWBMQhNBEiGgiQgqANgmAAQhHAAg1gvgAgDhlQAWAAAVgJIABAAIAEgCIABgBQATgKALgRQgLARgTAKIgBABIgEACIgBAAQgVAJgWAAIAAAAIAAAAQgKAAgLgBIgDgBIgBAAQgqgJgNgoQANAoAqAJIABAAIADABQALABAKAAIAAAAIAAAAg");
	this.shape_1.setTransform(0,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZBpIAIgWIACgFIADgJIAJgiQAGgjgEgkIgCgIQgIgdARgYQABgFAFgBIAEgCIAGAAIACACIACACIgBAEIgGAFQgQASAGAYQAGAXgBAZIgBAMIgBAFIgBABIgBAHIgFATIAAAAIgCAJIAAAAIgBAEIgCAJIAAADIgFAIIgHAQIgHAIIgFAHg");
	this.shape_2.setTransform(1.8,-21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-32.4,60.7,61.8);


(lib.shape6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADNizQBXBGABBrQACBphWBMQhNBEiGgiQh8AmhQhIQhWhMAAhqQAAhsBWhMQBQhHB+A+IABAAIgBAFIgHAVIABACIAFgHIAFgIIAIgQQBugvBTBDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjOCzQhWhMAAhqQAAhsBWhMQBQhHB+A+IABAAIgBAFIgHAVIABACIAFgHIAFgIIAIgQQBugvBTBDQBXBGABBrQACBphWBMQhNBEiGgiQgqANgmAAQhHAAg1gvg");
	//this.shape_1.graphics.f("#0000CC").s().p("AjOCzQhWhMAAhqQAAhsBWhMQBQhHB+A+IABAAIgBAFIgHAVIABACIAFgHIAFgIIAIgQQBugvBTBDQBXBGABBrQACBphWBMQhNBEiGgiQgqANgmAAQhHAAg1gvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-23.6,60.7,47.3);


(lib.shape4UpOverDownHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AA2CGQgagFgSgMIgxghQghgVgRgVQgSgVgHgZQgHgaAFg9QADgfAOgJQAMgIAXANQAuAaArAEIBLAHQAfADgUAUQgUATgGALQgGALgCAbIgDAwQAAATACAQQABAPAMAMIgIAAIAAABIAIgBQgIAXgUAAIgHgBgABZBwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-13.5,23.8,27.1);


(lib.shape2UpOverDownHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiPA7QhUgPAjgoQAkgmBugeQBugdB0AbIALAEIAEADIAEADIADAFIABAFIABAFIAAAGQgiAXgqAKQgyAOgyAoQgVAPgXANg");
	//this.shape.graphics.f("#000").p("AiPA7QhUgPAjgoQAkgmBugeQBugdB0AbIALAEIAEADIAEADIADAFIABAFIABAFIAAAGQgiAXgqAKQgyAOgyAoQgVAPgXANg");


	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-8,40.7,16.1);


(lib.shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACojRQh0gbhuAeQhuAdgkAoQgjAnBUAPIB/AWQAYgNAUgQQAygoAygOQAqgLAigWIAAgGIgBgGIgBgEIgDgGIgEgDIgEgDgAEHjkQgugag/gKQhmgShnAPQh+AThQBXQhMBRABBtQABBtBpBCQBpBCBoADQCPAJBegnQBdgoAOggQANgggMgdQgMgeg7hJQg7hIAZghQAaghAbgOQAbgPADgVQADgVgugagAjbg4QAuAaAsAEIBLAHQAfADgUATQgUATgGALQgGALgCAcIgCAwIABAjQACAPAMAMQgLAbgZgFQgZgFgSgMQgSgMghgVQghgVgRgVQgRgVgHgaQgIgaAGg8QADgfANgJQANgIAWANgABcCuQgCgLAFgOQAQg8BHAEQAPABALAIQAfBDhmAKgADQBmIgDgGQgNgZgcgCQhHgEgRA8QgLAmAbAL");
	this.shape.setTransform(-0.8,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AA2CGQgagFgSgMIgxghQghgVgRgVQgSgVgHgZQgHgaAFg9QADgfAOgJQAMgIAXANQAuAaArAEIBLAHQAfADgUAUQgUATgGALQgGALgCAbIgDAwIACAjQABAPAMAMIgIAAIAAABIAIgBQgIAXgUAAIgHgBg");
	this.shape_1.setTransform(-16.2,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiPA7QhUgPAjgoQAkgmBugeQBugdB0AbIALAEIAEADIAEADIADAFIABAFIABAFIAAAGQgiAXgqAKQgyAOgyAoQgVAPgXANg");
	this.shape_2.setTransform(-2,-15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AgRERQhogDhphCQhphCgBhtQgBhtBMhRQBQhXB+gTQBngPBmASQA/AKAuAaQAuAagDAVQgDAVgbAPQgbAOgaAhQgZAhA7BIQA7BJAMAeQAMAdgNAgQgOAghdAoQhMAghuAAQgZAAgagCgAj+g9QgNAJgDAfQgGA8AIAaQAHAaARAVQARAVAhAVIAzAhQASAMAZAFQAZAFALgbQgMgMgCgPIgBgjIACgwQACgcAGgLQAGgLAUgTQAUgTgfgDIhLgHQgsgEgugaQgNgIgKAAQgHAAgFADgABMB9QgLAmAbALIAtAFQBmgKgfhDIgDgGQgNgZgcgCIgIAAQhAAAgQA4gAg6jOQhuAdgkAoQgjAnBUAPIB/AWQAYgNAUgQQAygoAygOQAqgLAigWIAAgGIgBgGIgBgEIgDgGIgEgDIgEgDIgLgEQg4gNg2AAQg6AAg6AQgAhJC2IAJAAIgIABg");
	this.shape_3.setTransform(-0.8,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ACakIQhmgShnAPQh+AThQBXQhMBRABBtQABBtBpBCQBpBCBoADQCPAJBegnQBdgoAOggQANgggMgdQgMgeg7hJQg7hIAZghQAaghAbgOQAbgPADgVQADgVgugaQgugag/gKgADaCcQAEgSgCgSQgCgUgJgQQgGgKgKgCQgLgIgPgBQhHgEgQA8QgFAOACALQACAVARAIQASAJAUAAIAnABIAWgDQASgFAFgTg");
	this.shape_4.setTransform(0.7,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgRERQhogDhphCQhphCgBhtQgBhtBMhRQBQhXB+gTQBngPBmASQA/AKAuAaQAuAagDAVQgDAVgbAPQgbAOgaAhQgZAhA7BIQA7BJAMAeQAMAdgNAgQgOAghdAoQhMAghuAAQgZAAgagCgABQB3QgFAOACALQACAVARAIQASAJAUAAIAnABIAWgDQASgFAFgTQAEgSgCgSQgCgUgJgQQgGgKgKgCQgLgIgPgBIgIAAQhAAAgPA4g");
	this.shape_5.setTransform(0.7,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-29.9,70.2,59.9);


(lib.sprite39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape38("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite39, new cjs.Rectangle(-71,-26.1,142.1,52.3), null);


(lib.sprite18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape17("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite18, new cjs.Rectangle(-65.2,-70.4,136.8,140), null);


(lib.sprite13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite13, new cjs.Rectangle(-30.3,-23.6,60.7,47.3), null);


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape11("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite12, new cjs.Rectangle(-2,-16.5,22.2,18.7), null);


(lib.sprite7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite7, new cjs.Rectangle(-30.3,-23.6,60.7,47.3), null);


(lib.button106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape105Hit("synched",0);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.button62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.text25UpOver("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},1).wait(2));

	// Layer 5
	this.instance_1 = new lib.text24UpOver("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19,-10.4);

	this.instance_2 = new lib.text28Down("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// Layer 4
	this.instance_3 = new lib.shape22Up("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.shape26Over("synched",0);
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.instance_5 = new lib.shape21UpOverDown("synched",0);
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_6 = new lib.shape20UpOver("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.shape27Down("synched",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.shape29Hit("synched",0);
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 1
	this.instance_9 = new lib.shape19UpOverDown("synched",0);
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-15.5,75.4,50.3);


(lib.button30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.text25UpOver("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},1).wait(2));

	// Layer 5
	this.instance_1 = new lib.text24UpOver("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19,-10.4);

	this.instance_2 = new lib.text28Down("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// Layer 4
	this.instance_3 = new lib.shape22Up("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.shape26Over("synched",0);
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.instance_5 = new lib.shape21UpOverDown("synched",0);
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_6 = new lib.shape20UpOver("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.shape27Down("synched",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.shape29Hit("synched",0);
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 1
	this.instance_9 = new lib.shape19UpOverDown("synched",0);
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-15.5,75.4,50.3);


(lib.button16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape8UpOverDown("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.shape9Hit("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-32.4,60.7,61.8);


(lib.button15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape8UpOverDown("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.shape9Hit("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-32.4,60.7,61.8);


(lib.button14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape8UpOverDown("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.shape9Hit("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-32.4,60.7,61.8);


(lib.button10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape8UpOverDown("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.shape9Hit("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-32.4,60.7,61.8);


(lib.button5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-13.5,23.8,27.1);


(lib.button3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape2UpOverDownHit("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-8,40.7,16.1);


// stage content:
(lib.COLOR_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{red:1,yellow:10,red2:66,yellow2:76,red3:85,yellow3:93});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		date.type=true;
	}
	this.frame_1 = function() {
		date.type=false;
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {

	}
	this.frame_19 = function() {
		this.stop();

	};
	this.frame_20 = function() {
		this.dispatchEvent('equationShow');
	}
	this.frame_60 = function() {
		this.dispatchEvent('changePosition')
	}
	this.frame_65 = function() {
		this.stop();
		date.type=true;
		this.dispatchEvent('partoneOver')
	}
	this.frame_66 = function() {
		/* Selection.setFocus("redtext2");
		*/
		date.type=false;
	}
	this.frame_75 = function() {
		this.stop();
	}
	this.frame_76 = function() {
		/* Selection.setFocus("yellowtext2");
		*/
	}
	this.frame_84 = function() {

		this.stop();
		this.dispatchEvent('equationShow2');
	}
	this.frame_85 = function() {

	}
	this.frame_92 = function() {

		this.stop();
	}
	this.frame_93 = function() {

	}
	this.frame_100 = function() {

		this.stop()
	}
	this.frame_105 = function() {
		this.stop()
		//this.dispatchEvent('compolete')

	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1).call(this.frame_10).wait(9).call(this.frame_19).wait(1).call(this.frame_20).wait(40).call(this.frame_60).wait(5).call(this.frame_65).wait(1).call(this.frame_66).wait(9).call(this.frame_75).wait(1).call(this.frame_76).wait(8).call(this.frame_84).wait(1).call(this.frame_85).wait(7).call(this.frame_92).wait(1).call(this.frame_93).wait(7).call(this.frame_100).wait(5).call(this.frame_105).wait(2));

	// Layer 63
	this.instance = new lib.button106();
	this.instance.parent = this;
	this.instance.setTransform(275,150);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button106(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 62
	this.instance_1 = new lib.shape53("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(411.3,274.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 61
	this.instance_2 = new lib.shape53("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(334.8,274.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 60
	this.instance_3 = new lib.shape56("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(463.3,271.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85).to({_off:false},0).to({startPosition:0},19).to({y:258.5},1).to({_off:true},1).wait(1));

	// Layer 59
	this.instance_4 = new lib.text55("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(300.8,257.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85).to({_off:false},0).to({startPosition:0},19).to({y:244.6},1).to({_off:true},1).wait(1));

	// Layer 58
	this.text = new cjs.Text("", "25px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 33;
	this.text.parent = this;
	this.text.setTransform(412.8,256.5);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(85).to({_off:false},0).wait(20).to({y:243.5},0).to({_off:true},1).wait(1));

	// Layer 57
	this.text_1 = new cjs.Text("", "25px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 35;
	this.text_1.parent = this;
	this.text_1.setTransform(336.3,256.5);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(85).to({_off:false},0).wait(20).to({y:243.5},0).to({_off:true},1).wait(1));

	// Layer 56
	this.text_2 = new cjs.Text("", "25px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 28;
	this.text_2.lineWidth = 30;
	this.text_2.parent = this;
	this.text_2.setTransform(413,190.1);
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(66).to({_off:false},0).wait(39).to({_off:true},1).wait(1));

	// Layer 55
	this.text_3 = new cjs.Text("", "25px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 28;
	this.text_3.lineWidth = 30;
	this.text_3.parent = this;
	this.text_3.setTransform(337,190.1);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(66).to({_off:false},0).wait(39).to({_off:true},1).wait(1));

	// Layer 54
	this.instance_5 = new lib.shape56("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(364.3,257.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({startPosition:0},41).wait(1).to({x:206.3},0).to({_off:true},44).wait(1));

	// Layer 53
	this.instance_6 = new lib.text55("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(201.8,243.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:false},0).to({startPosition:0},41).wait(1).to({x:43.8},0).to({_off:true},44).wait(1));

	// Layer 52
	this.instance_7 = new lib.shape53("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(235.8,273.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({startPosition:0},41).wait(1).to({x:154,y:273.6},0).to({_off:true},44).wait(1));

	// Layer 51
	this.instance_8 = new lib.shape53("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(312,273.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({startPosition:0},41).wait(1).to({x:77.8,y:273.5},0).to({_off:true},44).wait(1));

	// Layer 50
	this.text_4 = new cjs.Text("", "25px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 28;
	this.text_4.lineWidth = 33;
	this.text_4.parent = this;
	this.text_4.setTransform(155.7,242.5);
	this.text_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(85).to({_off:false},0).wait(8).to({_off:true},12).wait(2));

	// Layer 49
	this.text_5 = new cjs.Text("", "25px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 28;
	this.text_5.lineWidth = 35;
	this.text_5.parent = this;
	this.text_5.setTransform(79.3,242.5);
	this.text_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(85).to({_off:false},0).wait(8).to({_off:true},12).wait(2));

	// Layer 48
	this.text_6 = new cjs.Text("", "25px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 28;
	this.text_6.lineWidth = 33;
	this.text_6.parent = this;
	this.text_6.setTransform(155.7,242.5);
	this.text_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(66).to({_off:false},0).wait(19).to({x:156,y:190.1,lineWidth:30},0).wait(20).to({x:155.7,y:242.5,lineWidth:33},0).to({_off:true},1).wait(1));

	// Layer 47
	this.text_7 = new cjs.Text("", "25px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 28;
	this.text_7.lineWidth = 35;
	this.text_7.parent = this;
	this.text_7.setTransform(79.3,242.5);
	this.text_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_7).wait(66).to({_off:false},0).wait(19).to({x:80,y:190.1,lineWidth:30},0).wait(20).to({x:79.3,y:242.5,lineWidth:35},0).to({_off:true},1).wait(1));

	// Layer 46
	this.text_8 = new cjs.Text("", "25px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 28;
	this.text_8.lineWidth = 33;
	this.text_8.parent = this;
	this.text_8.setTransform(313.7,242.5);
	this.text_8._off = true;

	this.instance_9 = new lib.shape53("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(411,286.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_8}]},20).to({state:[{t:this.text_8}]},42).to({state:[{t:this.text_8}]},3).to({state:[{t:this.text_8}]},1).to({state:[{t:this.text_8}]},10).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.text_8}]},20).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text_8).wait(20).to({_off:false},0).wait(42).to({x:155.7},0).wait(4).to({x:156,y:190.1,lineWidth:30},0).wait(10).to({_off:true},9).wait(20).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 45
	this.text_9 = new cjs.Text("", "25px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 28;
	this.text_9.lineWidth = 35;
	this.text_9.parent = this;
	this.text_9.setTransform(237.3,242.5);
	this.text_9._off = true;

	this.instance_10 = new lib.shape53("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(334.8,286.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_9}]},20).to({state:[{t:this.text_9}]},42).to({state:[{t:this.text_9}]},3).to({state:[{t:this.text_9}]},1).to({state:[{t:this.text_9}]},10).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.text_9}]},20).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text_9).wait(20).to({_off:false},0).wait(42).to({x:79.3},0).wait(4).to({x:80,y:190.1,lineWidth:30},0).wait(10).to({_off:true},9).wait(20).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 44
	this.text_10 = new cjs.Text("", "25px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 28;
	this.text_10.lineWidth = 30;
	this.text_10.parent = this;
	this.text_10.setTransform(314,190.1);
	this.text_10._off = true;

	this.instance_11 = new lib.shape40("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(411,204.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_10}]},1).to({state:[{t:this.text_10}]},9).to({state:[{t:this.text_10}]},10).to({state:[{t:this.text_10}]},42).to({state:[{t:this.text_10}]},3).to({state:[{t:this.instance_11}]},1).to({state:[]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text_10).wait(1).to({_off:false},0).wait(61).to({x:156},0).wait(3).to({_off:true},1).wait(41));

	// Layer 43
	this.text_11 = new cjs.Text("", "25px 'Arial'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 28;
	this.text_11.lineWidth = 30;
	this.text_11.parent = this;
	this.text_11.setTransform(238,190.1);
	this.text_11._off = true;

	this.instance_12 = new lib.shape40("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(335.5,203.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_11}]},1).to({state:[{t:this.text_11}]},9).to({state:[{t:this.text_11}]},10).to({state:[{t:this.text_11}]},42).to({state:[{t:this.text_11}]},3).to({state:[{t:this.instance_12}]},1).to({state:[]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text_11).wait(1).to({_off:false},0).wait(61).to({x:80},0).wait(3).to({_off:true},1).wait(41));

	// Layer 42
	this.instance_13 = new lib.shape40("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(312,204.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({_off:true},61).wait(45));

	// Layer 41
	this.instance_14 = new lib.shape40("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(236.9,204);

	this.instance_15 = new lib.sprite39();
	this.instance_15.parent = this;
	this.instance_15.setTransform(378.6,194.5,1.443,1.744);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},61).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},9).to({state:[{t:this.instance_15}]},1).to({state:[]},9).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(62).to({_off:false},0).wait(4).to({scaleX:1,scaleY:1,x:246.3,y:157.7},0).wait(10).to({x:463.1,y:258.6},0).to({_off:true},9).wait(22));

	// Layer 40
	this.instance_16 = new lib.shape37("synched",0);
	this.instance_16.parent = this;

	this.instance_17 = new lib.shape74("synched",0);
	this.instance_17.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},66).to({state:[{t:this.instance_17}]},10).to({state:[]},9).wait(22));

	// Layer 39
	this.instance_18 = new lib.sprite39();
	this.instance_18.parent = this;
	this.instance_18.setTransform(144.8,160.7);
	this.instance_18._off = true;

	this.instance_19 = new lib.text36("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(172.6,144.4);

	this.instance_20 = new lib.text73("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(392.5,247.4);

	this.instance_21 = new lib.text48("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(306.1,224.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},8).to({state:[{t:this.instance_18}]},1).to({state:[]},10).to({state:[{t:this.instance_19}]},46).to({state:[{t:this.instance_20}]},10).to({state:[{t:this.instance_21}]},9).to({state:[]},20).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).wait(9).to({x:407.4,y:248.6},0).to({_off:true},10).wait(87));

	// Layer 38
	this.instance_22 = new lib.shape37("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-101.5,3);

	this.instance_23 = new lib.shape45("synched",0);
	this.instance_23.parent = this;

	this.instance_24 = new lib.text34("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(364,116.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},9).to({state:[]},10).to({state:[{t:this.instance_24}]},46).to({state:[]},40).wait(1));

	// Layer 37
	this.instance_25 = new lib.text36("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(71.1,147.4);

	this.instance_26 = new lib.text44("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(334.5,236.4);

	this.instance_27 = new lib.text48("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(64.1,243.8);

	this.instance_28 = new lib.text57("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(305.1,174.8);

	this.instance_29 = new lib.shape32("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(374.5,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},9).to({state:[{t:this.instance_27}]},10).to({state:[{t:this.instance_28}]},42).to({state:[{t:this.instance_29}]},4).to({state:[]},40).wait(1));

	// Layer 36
	this.instance_30 = new lib.text34("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(265,116.3);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({_off:false},0).to({startPosition:0},60).wait(1).to({x:107},0).to({_off:true},44).wait(1));

	// Layer 35
	this.instance_31 = new lib.shape32("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(275.5,149.8);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({_off:false},0).to({startPosition:0},60).wait(1).to({x:117.5},0).to({_off:true},44).wait(1));

	// Layer 34
	this.instance_32 = new lib.shape31("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(275,107);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({_off:true},64).wait(1).to({_off:false},0).to({_off:true},41).wait(1));

	// Layer 27
	this.instance_33 = new lib.button30();
	this.instance_33.parent = this;
	this.instance_33.setTransform(477.3,73.4);
	new cjs.ButtonHelper(this.instance_33, 0, 1, 2, false, new lib.button30(), 3);

	this.instance_34 = new lib.button62();
	this.instance_34.parent = this;
	this.instance_34.setTransform(477.3,73.4);
	new cjs.ButtonHelper(this.instance_34, 0, 1, 2, false, new lib.button62(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33}]}).to({state:[]},1).to({state:[{t:this.instance_34}]},64).to({state:[]},1).wait(41));

	// Layer 25
	this.pentong = new lib.sprite18();
	this.pentong.parent = this;
	this.pentong.setTransform(151.5,72.2,0.138,0.138);

	this.timeline.addTween(cjs.Tween.get(this.pentong).to({_off:true},64).wait(1).to({_off:false},0).to({_off:true},41).wait(1));

	// Layer 23
	this.instance_35 = new lib.button16();
	this.instance_35.parent = this;
	this.instance_35.setTransform(151.5,65.5);
	new cjs.ButtonHelper(this.instance_35, 0, 1, 2, false, new lib.button16(), 3);

	this.instance_36 = new lib.shape8UpOverDown("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(151.5,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35}]}).to({state:[{t:this.instance_36}]},1).to({state:[]},63).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[]},40).wait(1));

	// Layer 21
	this.color1 = new lib.sprite7();
	this.color1.parent = this;
	this.color1.setTransform(151.5,71.2);

	this.timeline.addTween(cjs.Tween.get(this.color1).to({_off:true},64).wait(1).to({_off:false},0).wait(1).to({_off:true},40).wait(1));

	// Layer 19
	this.instance_37 = new lib.button15();
	this.instance_37.parent = this;
	this.instance_37.setTransform(316.9,65.5);
	new cjs.ButtonHelper(this.instance_37, 0, 1, 2, false, new lib.button15(), 3);

	this.instance_38 = new lib.shape8UpOverDown("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(316.9,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37}]}).to({state:[{t:this.instance_38}]},1).to({state:[]},63).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[]},40).wait(1));

	// Layer 17
	this.color3 = new lib.sprite13();
	this.color3.parent = this;
	this.color3.setTransform(316.9,71.2);

	this.timeline.addTween(cjs.Tween.get(this.color3).to({_off:true},64).wait(1).to({_off:false},0).wait(1).to({_off:true},40).wait(1));

	// Layer 15
	this.instance_39 = new lib.button14();
	this.instance_39.parent = this;
	this.instance_39.setTransform(234.2,65.5);
	new cjs.ButtonHelper(this.instance_39, 0, 1, 2, false, new lib.button14(), 3);

	this.instance_40 = new lib.shape8UpOverDown("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(234.2,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[{t:this.instance_40}]},1).to({state:[]},63).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[]},40).wait(1));

	// Layer 13
	this.color2 = new lib.sprite13();
	this.color2.parent = this;
	this.color2.setTransform(234.2,71.2);

	this.timeline.addTween(cjs.Tween.get(this.color2).to({_off:true},64).wait(1).to({_off:false},0).wait(1).to({_off:true},40).wait(1));

	// Layer 11
	this.xiguan = new lib.sprite12();
	this.xiguan.parent = this;
	this.xiguan.setTransform(49.1,44.5);

	this.timeline.addTween(cjs.Tween.get(this.xiguan).to({_off:true},64).wait(1).to({_off:false},0).to({_off:true},41).wait(1));

	// Layer 9
	this.instance_41 = new lib.button10();
	this.instance_41.parent = this;
	this.instance_41.setTransform(399.1,64.5);
	new cjs.ButtonHelper(this.instance_41, 0, 1, 2, false, new lib.button10(), 3);

	this.instance_42 = new lib.shape8UpOverDown("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(399.1,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41}]}).to({state:[{t:this.instance_42}]},1).to({state:[]},63).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[]},40).wait(1));

	// Layer 7
	this.color4 = new lib.sprite7();
	this.color4.parent = this;
	this.color4.setTransform(399.1,70.2);

	this.timeline.addTween(cjs.Tween.get(this.color4).to({_off:true},64).wait(1).to({_off:false},0).wait(1).to({_off:true},40).wait(1));

	// Layer 5
	this.instance_43 = new lib.button5();
	this.instance_43.parent = this;
	this.instance_43.setTransform(35.5,66.5);
	new cjs.ButtonHelper(this.instance_43, 0, 1, 2, false, new lib.button5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({_off:true},1).wait(64).to({_off:false},0).to({_off:true},1).wait(41));

	// Layer 4
	this.instance_44 = new lib.shape4UpOverDownHit("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(35.5,66.5);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({_off:false},0).to({_off:true},63).wait(2).to({_off:false},0).to({_off:true},40).wait(1));

	// Layer 3
	this.instance_45 = new lib.button3();
	this.instance_45.parent = this;
	this.instance_45.setTransform(49.8,45.2);
	new cjs.ButtonHelper(this.instance_45, 0, 1, 2, false, new lib.button3(), 3);

	this.instance_46 = new lib.shape2UpOverDownHit("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(49.8,45.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45}]}).to({state:[{t:this.instance_46}]},1).to({state:[]},63).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[]},40).wait(1));

	// Layer 2
	this.instance_47 = new lib.shape1("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(51.7,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({_off:true},64).wait(1).to({_off:false},0).to({_off:true},41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,177.9,552,80.2);
// library properties:
lib.properties = {
	width: 550,
	height: 300,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;