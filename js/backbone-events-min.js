(function(){var f=this,m=f.Backbone,n=Array.prototype.slice,a;a="undefined"!==typeof exports?exports:f.Backbone={};a.VERSION="0.9.2";var i=f._;!i&&"undefined"!==typeof require&&(i=require("underscore"));a.noConflict=function(){f.Backbone=m;return this};a.emulateHTTP=!1;a.emulateJSON=!1;var j=/\s+/;a=a.Events={on:function(k,d,b){var g,e,c,a,h;if(!d)return this;k=k.split(j);for(g=this._callbacks||(this._callbacks={});e=k.shift();)c=(h=g[e])?h.tail:{},c.next=a={},c.context=b,c.callback=d,g[e]={tail:a,
next:h?h.next:c};return this},off:function(a,d,b){var g,e,c,l,h,f;if(e=this._callbacks){if(!a&&!d&&!b)return delete this._callbacks,this;for(a=a?a.split(j):i.keys(e);g=a.shift();)if(c=e[g],delete e[g],c&&(d||b))for(l=c.tail;(c=c.next)!==l;)if(h=c.callback,f=c.context,d&&h!==d||b&&f!==b)this.on(g,h,f);return this}},trigger:function(a){var d,b,g,e,c,f;if(!(g=this._callbacks))return this;c=g.all;a=a.split(j);for(f=n.call(arguments,1);d=a.shift();){if(b=g[d])for(e=b.tail;(b=b.next)!==e;)b.callback.apply(b.context||
this,f);if(b=c){e=b.tail;for(d=[d].concat(f);(b=b.next)!==e;)b.callback.apply(b.context||this,d)}}return this}};a.bind=a.on;a.unbind=a.off}).call(this);
