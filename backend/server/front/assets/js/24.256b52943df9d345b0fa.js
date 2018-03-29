webpackJsonp([24],{141:function(r,e,t){t(720);var a=t(1)(t(603),t(809),"data-v-e19cf3ae",null);r.exports=a.exports},296:function(r,e,t){"use strict";function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{min:{type:Number,default:0},max:{type:Number,default:1},step:{type:Number,default:.01},value:{type:Number,default:0},type:String,name:String,size:String,isFullwidth:Boolean,disabled:Boolean,vertical:Boolean},data:function(){return{realValue:this.value}},beforeMount:function(){if(this.max<this.min)throw"Unexpected range setting: Maximum cannot be less than minimum";this.update(this.value)},mounted:function(){this.$el.style.setProperty("--low",this.low),this.$el.style.setProperty("--high",this.high)},watch:{realValue:function(r,e){Number(r)!==Number(e)&&(this.$el.style.setProperty("--high",this.high),this.$emit("change",r))},value:function(r){this.update(r)}},methods:{update:function(r){r>this.max?this.realValue=this.max:r<this.min?this.realValue=this.min:this.realValue=r}},computed:{low:function(){return"0%"},high:function(){return(this.realValue-this.min)/(this.max-this.min)*100+"%"},classObject:function(){var r,e=this.type,t=this.size,n=this.isFullwidth;return r={slider:!0},a(r,"is-"+e,e),a(r,"is-"+t,t),a(r,"is-fullwidth",n),r}}}},354:function(r,e,t){e=r.exports=t(115)(!0),e.push([r.i,'input[type=range].slider{--height:8px;border:none;border-radius:290486px;display:block;height:var(--height);padding:0;margin:0;cursor:pointer;outline:none;background:#dbdbdb;-webkit-tap-highlight-color:transparent}input[type=range].slider.is-small{--height:4px}input[type=range].slider.is-medium{--height:12px}input[type=range].slider.is-large{--height:16px}input[type=range].slider.is-fullwidth{width:100%}input[type=range].slider:focus{outline:none}input[type=range].slider::-moz-focus-outer{border:none}input[type=range].slider,input[type=range].slider::-webkit-slider-runnable-track,input[type=range].slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}input[type=range].slider::-webkit-slider-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#fff;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px hsla(0,0%,7%,.1);transform:translateZ(0);transition:.1165s ease-in-out;box-sizing:border-box}input[type=range].slider::-webkit-slider-thumb:hover{transform:scale(1.25)}input[type=range].slider::-webkit-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}input[type=range].slider::-webkit-slider-runnable-track{display:flex;align-items:center;height:var(--height);border-radius:290486px;--track-background:linear-gradient(90deg,transparent var(--low),$text 0%,$text var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background);transform:translateZ(0);transition:.1165s}input[type=range].slider::-moz-range-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#fff;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px hsla(0,0%,7%,.1);transform:translateZ(0);transition:.1165s ease-in-out;box-sizing:border-box}input[type=range].slider::-moz-range-thumb:hover{transform:scale(1.25)}input[type=range].slider::-moz-range-thumb:active{cursor:grabbing}input[type=range].slider::-moz-range-progress:focus{outline:0;border:0}input[type=range].slider::-moz-range-track{background:transparent}input[type=range].slider::-moz-range-progress{display:flex;align-items:center;width:100%;height:var(--height);border-radius:290486px;background-color:#4a4a4a}input[type=range].slider::-ms-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#fff;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px hsla(0,0%,7%,.1);transform:translateZ(0);transition:.1165s ease-in-out;box-sizing:border-box}input[type=range].slider::-ms-thumb:hover{-ms-transform:scale(1.25);transform:scale(1.25)}input[type=range].slider::-ms-thumb:active{cursor:grabbing}input[type=range].slider::-ms-tooltip{display:none}input[type=range].slider.is-white::-webkit-slider-thumb{border-color:#fff}input[type=range].slider.is-white::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-white::-moz-range-thumb{border-color:#fff}input[type=range].slider.is-white::-moz-range-progress{background-color:#fff}input[type=range].slider.is-white::-ms-thumb{border-color:#fff}input[type=range].slider.is-white::-ms-fill-lower{background-color:#fff}input[type=range].slider.is-black::-webkit-slider-thumb{border-color:#0a0a0a}input[type=range].slider.is-black::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-black::-moz-range-thumb{border-color:#0a0a0a}input[type=range].slider.is-black::-moz-range-progress{background-color:#0a0a0a}input[type=range].slider.is-black::-ms-thumb{border-color:#0a0a0a}input[type=range].slider.is-black::-ms-fill-lower{background-color:#0a0a0a}input[type=range].slider.is-light::-webkit-slider-thumb{border-color:#f5f5f5}input[type=range].slider.is-light::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-light::-moz-range-thumb{border-color:#f5f5f5}input[type=range].slider.is-light::-moz-range-progress{background-color:#f5f5f5}input[type=range].slider.is-light::-ms-thumb{border-color:#f5f5f5}input[type=range].slider.is-light::-ms-fill-lower{background-color:#f5f5f5}input[type=range].slider.is-dark::-webkit-slider-thumb{border-color:#363636}input[type=range].slider.is-dark::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-dark::-moz-range-thumb{border-color:#363636}input[type=range].slider.is-dark::-moz-range-progress{background-color:#363636}input[type=range].slider.is-dark::-ms-thumb{border-color:#363636}input[type=range].slider.is-dark::-ms-fill-lower{background-color:#363636}input[type=range].slider.is-primary::-webkit-slider-thumb{border-color:#3273dc}input[type=range].slider.is-primary::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-primary::-moz-range-thumb{border-color:#3273dc}input[type=range].slider.is-primary::-moz-range-progress{background-color:#3273dc}input[type=range].slider.is-primary::-ms-thumb{border-color:#3273dc}input[type=range].slider.is-primary::-ms-fill-lower{background-color:#3273dc}input[type=range].slider.is-info::-webkit-slider-thumb{border-color:#3273dc}input[type=range].slider.is-info::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-info::-moz-range-thumb{border-color:#3273dc}input[type=range].slider.is-info::-moz-range-progress{background-color:#3273dc}input[type=range].slider.is-info::-ms-thumb{border-color:#3273dc}input[type=range].slider.is-info::-ms-fill-lower{background-color:#3273dc}input[type=range].slider.is-success::-webkit-slider-thumb{border-color:#23d160}input[type=range].slider.is-success::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-success::-moz-range-thumb{border-color:#23d160}input[type=range].slider.is-success::-moz-range-progress{background-color:#23d160}input[type=range].slider.is-success::-ms-thumb{border-color:#23d160}input[type=range].slider.is-success::-ms-fill-lower{background-color:#23d160}input[type=range].slider.is-warning::-webkit-slider-thumb{border-color:#ffdd57}input[type=range].slider.is-warning::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-warning::-moz-range-thumb{border-color:#ffdd57}input[type=range].slider.is-warning::-moz-range-progress{background-color:#ffdd57}input[type=range].slider.is-warning::-ms-thumb{border-color:#ffdd57}input[type=range].slider.is-warning::-ms-fill-lower{background-color:#ffdd57}input[type=range].slider.is-danger::-webkit-slider-thumb{border-color:#ff3860}input[type=range].slider.is-danger::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),$color 0%,$color var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-danger::-moz-range-thumb{border-color:#ff3860}input[type=range].slider.is-danger::-moz-range-progress{background-color:#ff3860}input[type=range].slider.is-danger::-ms-thumb{border-color:#ff3860}input[type=range].slider.is-danger::-ms-fill-lower{background-color:#ff3860}input[type=range].slider[orient=vertical]{-webkit-writing-mode:bt-lr;-ms-writing-mode:bt-lr;writing-mode:bt-lr;-webkit-appearance:slider-vertical;height:200px;width:var(--height);-webkit-transform-origin:0 0;position:relative;top:0;left:0}input[type=range].slider[orient=vertical].is-white::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #fff;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-white::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-black::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #0a0a0a;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-black::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-light::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #f5f5f5;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-light::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-dark::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #363636;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-dark::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-primary::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #3273dc;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-primary::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-info::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #3273dc;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-info::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-success::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #23d160;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-success::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-warning::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ffdd57;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-warning::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-danger::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ff3860;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-danger::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),$color 0,$color var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}',"",{version:3,sources:["/home/kristofg/gits/TempHum-Supervisor-Sys/backend/front/node_modules/vue-bulma-slider/src/Slider.vue"],names:[],mappings:"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",file:"Slider.vue",sourcesContent:["\ninput[type=range].slider{--height: 8px;border:none;border-radius:290486px;display:block;height:var(--height);padding:0;margin:0;cursor:pointer;outline:none;background:#dbdbdb;-webkit-tap-highlight-color:transparent\n}\ninput[type=range].slider.is-small{--height: 4px\n}\ninput[type=range].slider.is-medium{--height: 12px\n}\ninput[type=range].slider.is-large{--height: 16px\n}\ninput[type=range].slider.is-fullwidth{width:100%\n}\ninput[type=range].slider:focus{outline:none\n}\ninput[type=range].slider::-moz-focus-outer{border:none\n}\ninput[type=range].slider::-webkit-slider-runnable-track,input[type=range].slider::-webkit-slider-thumb,input[type=range].slider{-webkit-appearance:none;appearance:none\n}\ninput[type=range].slider::-webkit-slider-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box\n}\ninput[type=range].slider::-webkit-slider-thumb:hover{transform:scale(1.25)\n}\ninput[type=range].slider::-webkit-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing\n}\ninput[type=range].slider::-webkit-slider-runnable-track{display:flex;align-items:center;height:var(--height);border-radius:290486px;--track-background: linear-gradient(to right, transparent var(--low), $text calc(0%), $text var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background);transform:translateZ(0);transition:0.1165s\n}\ninput[type=range].slider::-moz-range-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box\n}\ninput[type=range].slider::-moz-range-thumb:hover{transform:scale(1.25)\n}\ninput[type=range].slider::-moz-range-thumb:active{cursor:grabbing\n}\ninput[type=range].slider::-moz-range-progress:focus{outline:0;border:0\n}\ninput[type=range].slider::-moz-range-track{background:transparent\n}\ninput[type=range].slider::-moz-range-progress{display:flex;align-items:center;width:100%;height:var(--height);border-radius:290486px;background-color:#4a4a4a\n}\ninput[type=range].slider::-ms-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box\n}\ninput[type=range].slider::-ms-thumb:hover{-ms-transform:scale(1.25);transform:scale(1.25)\n}\ninput[type=range].slider::-ms-thumb:active{cursor:grabbing\n}\ninput[type=range].slider::-ms-tooltip{display:none\n}\ninput[type=range].slider.is-white::-webkit-slider-thumb{border-color:#fff\n}\ninput[type=range].slider.is-white::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-white::-moz-range-thumb{border-color:#fff\n}\ninput[type=range].slider.is-white::-moz-range-progress{background-color:#fff\n}\ninput[type=range].slider.is-white::-ms-thumb{border-color:#fff\n}\ninput[type=range].slider.is-white::-ms-fill-lower{background-color:#fff\n}\ninput[type=range].slider.is-black::-webkit-slider-thumb{border-color:#0a0a0a\n}\ninput[type=range].slider.is-black::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-black::-moz-range-thumb{border-color:#0a0a0a\n}\ninput[type=range].slider.is-black::-moz-range-progress{background-color:#0a0a0a\n}\ninput[type=range].slider.is-black::-ms-thumb{border-color:#0a0a0a\n}\ninput[type=range].slider.is-black::-ms-fill-lower{background-color:#0a0a0a\n}\ninput[type=range].slider.is-light::-webkit-slider-thumb{border-color:#f5f5f5\n}\ninput[type=range].slider.is-light::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-light::-moz-range-thumb{border-color:#f5f5f5\n}\ninput[type=range].slider.is-light::-moz-range-progress{background-color:#f5f5f5\n}\ninput[type=range].slider.is-light::-ms-thumb{border-color:#f5f5f5\n}\ninput[type=range].slider.is-light::-ms-fill-lower{background-color:#f5f5f5\n}\ninput[type=range].slider.is-dark::-webkit-slider-thumb{border-color:#363636\n}\ninput[type=range].slider.is-dark::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-dark::-moz-range-thumb{border-color:#363636\n}\ninput[type=range].slider.is-dark::-moz-range-progress{background-color:#363636\n}\ninput[type=range].slider.is-dark::-ms-thumb{border-color:#363636\n}\ninput[type=range].slider.is-dark::-ms-fill-lower{background-color:#363636\n}\ninput[type=range].slider.is-primary::-webkit-slider-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-primary::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-primary::-moz-range-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-primary::-moz-range-progress{background-color:#3273dc\n}\ninput[type=range].slider.is-primary::-ms-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-primary::-ms-fill-lower{background-color:#3273dc\n}\ninput[type=range].slider.is-info::-webkit-slider-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-info::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-info::-moz-range-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-info::-moz-range-progress{background-color:#3273dc\n}\ninput[type=range].slider.is-info::-ms-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-info::-ms-fill-lower{background-color:#3273dc\n}\ninput[type=range].slider.is-success::-webkit-slider-thumb{border-color:#23d160\n}\ninput[type=range].slider.is-success::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-success::-moz-range-thumb{border-color:#23d160\n}\ninput[type=range].slider.is-success::-moz-range-progress{background-color:#23d160\n}\ninput[type=range].slider.is-success::-ms-thumb{border-color:#23d160\n}\ninput[type=range].slider.is-success::-ms-fill-lower{background-color:#23d160\n}\ninput[type=range].slider.is-warning::-webkit-slider-thumb{border-color:#ffdd57\n}\ninput[type=range].slider.is-warning::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-warning::-moz-range-thumb{border-color:#ffdd57\n}\ninput[type=range].slider.is-warning::-moz-range-progress{background-color:#ffdd57\n}\ninput[type=range].slider.is-warning::-ms-thumb{border-color:#ffdd57\n}\ninput[type=range].slider.is-warning::-ms-fill-lower{background-color:#ffdd57\n}\ninput[type=range].slider.is-danger::-webkit-slider-thumb{border-color:#ff3860\n}\ninput[type=range].slider.is-danger::-webkit-slider-runnable-track{--track-background: linear-gradient(to right, transparent var(--low), $color calc(0%),  $color var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-danger::-moz-range-thumb{border-color:#ff3860\n}\ninput[type=range].slider.is-danger::-moz-range-progress{background-color:#ff3860\n}\ninput[type=range].slider.is-danger::-ms-thumb{border-color:#ff3860\n}\ninput[type=range].slider.is-danger::-ms-fill-lower{background-color:#ff3860\n}\ninput[type=range].slider[orient=vertical]{-webkit-writing-mode:bt-lr;-ms-writing-mode:bt-lr;writing-mode:bt-lr;-webkit-appearance:slider-vertical;height:200px;width:var(--height);-webkit-transform-origin:0 0;position:relative;top:0;left:0\n}\ninput[type=range].slider[orient=vertical].is-white::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #fff;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-white::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-black::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #0a0a0a;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-black::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-light::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #f5f5f5;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-light::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-dark::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #363636;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-dark::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-primary::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #3273dc;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-primary::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-info::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #3273dc;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-info::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-success::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #23d160;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-success::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-warning::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ffdd57;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-warning::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-danger::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ff3860;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-danger::-webkit-slider-runnable-track{display:block;--track-background: linear-gradient(to top, transparent var(--low), $color 0,  $color var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\n"],sourceRoot:""}])},356:function(r,e,t){var a=t(354);"string"==typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);t(116)("15cd154c",a,!0)},359:function(r,e,t){t(356);var a=t(1)(t(296),t(363),null,null);r.exports=a.exports},363:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement;return(r._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:r.realValue,expression:"realValue"}],class:r.classObject,attrs:{type:"range",min:r.min,max:r.max,step:r.step,name:r.name,orient:r.vertical&&"vertical",disabled:r.disabled,number:""},domProps:{value:r.realValue},on:{__r:function(e){r.realValue=e.target.value}}})},staticRenderFns:[]}},603:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(10),n=t(359),i=t.n(n);e.default={components:{Tooltip:a.a,Slider:i.a},data:function(){return{value:23}},computed:{per:function(){return this.value+"%"}},methods:{update:function(r){this.value=Number(r)}}}},679:function(r,e,t){e=r.exports=t(115)(!0),e.push([r.i,".button[data-v-e19cf3ae]{margin:5px 0 0}p[data-v-e19cf3ae]{margin-bottom:20px}.tooltip-value[data-v-e19cf3ae]{width:100%}","",{version:3,sources:["/home/kristofg/gits/TempHum-Supervisor-Sys/backend/front/client/views/components/Slider.vue"],names:[],mappings:"AACA,yBAAyB,cAAc,CACtC,AACD,mBAAmB,kBAAkB,CACpC,AACD,gCAAgC,UAAU,CACzC",file:"Slider.vue",sourcesContent:["\n.button[data-v-e19cf3ae]{margin:5px 0 0\n}\np[data-v-e19cf3ae]{margin-bottom:20px\n}\n.tooltip-value[data-v-e19cf3ae]{width:100%\n}\n"],sourceRoot:""}])},720:function(r,e,t){var a=t(679);"string"==typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);t(116)("23054cdc",a,!0)},809:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("div",{staticClass:"tile is-ancestor"},[t("div",{staticClass:"tile is-parent is-4"},[t("article",{staticClass:"tile is-child box"},[t("h1",{staticClass:"title"},[r._v("Styles")]),r._v(" "),t("div",{staticClass:"block styles-box"},[t("p",[t("slider",{attrs:{value:15,max:100,step:1,"is-fullwidth":""}})],1),r._v(" "),t("p",[t("slider",{attrs:{type:"primary",value:30,max:100,step:10,"is-fullwidth":""}})],1),r._v(" "),t("p",[t("slider",{attrs:{type:"info",value:45,max:100,step:5,"is-fullwidth":""}})],1),r._v(" "),t("p",[t("slider",{attrs:{type:"success",value:60,max:100,step:20,"is-fullwidth":""}})],1),r._v(" "),t("p",[t("slider",{attrs:{type:"warning",value:75,max:100,step:25,"is-fullwidth":""}})],1),r._v(" "),t("p",[t("slider",{attrs:{type:"danger",value:90,max:100,step:10,"is-fullwidth":""}})],1)])])]),r._v(" "),t("div",{staticClass:"tile is-parent is-4"},[t("article",{staticClass:"tile is-child box"},[t("h1",{staticClass:"title"},[r._v("Sizes")]),r._v(" "),t("div",{staticClass:"block"},[t("p",[t("slider",{attrs:{size:"small",value:15,max:100,"is-fullwidth":""}})],1),r._v(" "),t("p",[t("slider",{attrs:{size:"",value:30,max:100,"is-fullwidth":""}})],1),r._v(" "),t("p",[t("slider",{attrs:{size:"medium",value:45,max:100,"is-fullwidth":""}})],1),r._v(" "),t("p",[t("slider",{attrs:{size:"large",value:60,max:100,"is-fullwidth":""}})],1)])])]),r._v(" "),t("div",{staticClass:"tile is-parent is-4"},[t("article",{staticClass:"tile is-child box"},[t("h1",{staticClass:"title"},[r._v("Dynamics")]),r._v(" "),t("div",{staticClass:"block"},[t("p",[t("tooltip",{attrs:{type:"success",label:r.per,placement:"top",always:""}},[t("span",{staticClass:"tooltip-value"})]),r._v(" "),t("slider",{attrs:{type:"success",size:"large",value:r.value,max:100,step:1,"is-fullwidth":""},on:{change:r.update}})],1),r._v(" "),t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:r.value,expression:"value"}],staticClass:"input",attrs:{type:"number",min:"0",max:"100",number:""},domProps:{value:r.value},on:{input:function(e){e.target.composing||(r.value=e.target.value)}}})])])])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=24.256b52943df9d345b0fa.js.map