# 节流与防抖 Throttle

### 防抖：

```js
 //例子1
function debounce(fn,delay=200){
	let timer = null;
	return function(){
		if(timer) clearTimeout(timer);
		timer = setTimeout(()=>{
			fn.apply(this,arguments);
			timer = null;
		},delay);
	}
}
//例子2
function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
            func.apply(context, args)
            }, wait);
        }
}
 
 //精简版
let time2;
document.getElementById('防抖').onclick = function () {
        clearTimeout(time2);
        time2=setTimeout(function () {
            //做一些快乐的事情
        },2000);
    };
```

### 节流：

```js
function throttle(func, wait) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

throttle(count,1000);

//定时器版
function throttle(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }
    }
}

//缩略版
let bool=true;
document.getElementById('节流').onclick = function () {
    if(bool){
        //做一些开心的事情
        bool=false;
        setTimeout(()=>{
            bool=true
        },2000)
    }
}

```

  


