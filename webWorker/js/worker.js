
var str = 1;
var intt = setInterval(function(){
    ++str;
    postMessage(str);
    console.log(str);
},1000);
onmessage =function (evt){
    var d = evt.data;//通过evt.data获得发送来的数据
    postMessage('nimei');//将获取到的数据发送会主线程
}
