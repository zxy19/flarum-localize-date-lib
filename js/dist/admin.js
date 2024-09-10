(()=>{var t={792:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(i,r,n){var o,a=function(t,i,r){void 0===r&&(r={});var n=new Date(t),o=function(t,i){void 0===i&&(i={});var r=i.timeZoneName||"short",n=t+"|"+r,o=e[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),e[n]=o),o}(i,r);return o.formatToParts(n)},s=function(e,i){for(var r=a(e,i),o=[],s=0;s<r.length;s+=1){var u=r[s],f=u.type,l=u.value,c=t[f];c>=0&&(o[c]=parseInt(l,10))}var h=o[3],d=24===h?0:h,m=o[0]+"-"+o[1]+"-"+o[2]+" "+d+":"+o[4]+":"+o[5]+":000",v=+e;return(n.utc(m).valueOf()-(v-=v%1e3))/6e4},u=r.prototype;u.tz=function(t,e){void 0===t&&(t=o);var i,r=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:t}),u=Math.round((a-new Date(s))/1e3/60),f=15*-Math.round(a.getTimezoneOffset()/15)-u;if(Number(f)){if(i=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(f,!0),e){var l=i.utcOffset();i=i.add(r-l,"minute")}}else i=this.utcOffset(0,e);return i.$x.$timezone=t,i},u.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),i=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return i&&i.value};var f=u.startOf;u.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return f.call(this,t,e);var i=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return f.call(i,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var r=i&&e,a=i||e||o,u=s(+n(),a);if("string"!=typeof t)return n(t).tz(a);var f=function(t,e,i){var r=t-60*e*1e3,n=s(r,i);if(e===n)return[r,e];var o=s(r-=60*(n-e)*1e3,i);return n===o?[r,n]:[t-60*Math.min(n,o)*1e3,Math.max(n,o)]}(n.utc(t,r).valueOf(),u,a),l=f[0],c=f[1],h=n(l).utcOffset(c);return h.$x.$timezone=a,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){o=t}}}()},65:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(r,n,o){var a=n.prototype;o.utc=function(t){return new n({date:t,utc:!0,args:arguments})},a.utc=function(e){var i=o(this.toDate(),{locale:this.$L,utc:!0});return e?i.add(this.utcOffset(),t):i},a.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var s=a.parse;a.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),s.call(this,t)};var u=a.init;a.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var f=a.utcOffset;a.utcOffset=function(r,n){var o=this.$utils().u;if(o(r))return this.$u?0:o(this.$offset)?f.call(this):this.$offset;if("string"==typeof r&&(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var n=(""+r[0]).match(i)||["-",0,0],o=n[0],a=60*+n[1]+ +n[2];return 0===a?0:"+"===o?a:-a}(r),null===r))return this;var a=Math.abs(r)<=16?60*r:r,s=this;if(n)return s.$offset=a,s.$u=0===r,s;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(s=this.local().add(a+u,t)).$offset=a,s.$x.$localOffset=u}else s=this.utc();return s};var l=a.format;a.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},a.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var c=a.toDate;a.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var h=a.diff;a.diff=function(t,e,i){if(t&&this.$u===t.$u)return h.call(this,t,e,i);var r=this.local(),n=o(t).local();return h.call(r,n,e,i)}}}()}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";function t(t,e){var i=t.forum.attribute("xypp.localize-date.timezone");return dayjs(e).tz(i)}function e(t){var e=t.forum.attribute("xypp.localize-date.timezone");return dayjs.tz(dayjs().format("YYYY-DD-MM 00:00:00"),e)}i.r(r),i.d(r,{_serverDateChangeAt:()=>e,_toServerTimezone:()=>t,serverDateChangeAt:()=>c,toServerTimezone:()=>l});const n=flarum.core.compat["admin/app"];var o=i.n(n),a=i(65),s=i.n(a),u=i(792),f=i.n(u);function l(e){return t(o(),e)}function c(){return e(o())}o().initializers.add("xypp/flarum-localize-date-lib",(function(){dayjs.extend(s()),dayjs.extend(f()),o().extensionData.for("xypp-localize-date-lib").registerSetting({type:"string",setting:"xypp.localize-date.timezone",default:"UTC",label:o().translator.trans("xypp-localize-date-lib.admin.timezone")})}))})(),module.exports=r})();
//# sourceMappingURL=admin.js.map