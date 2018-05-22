//1.翻面控制
function turn(elem) {
	var cls=elem.className;
	var n = elem.id.replace(/[^0-9]/ig, "");// var n=elem.id.split('_')[1];
	console.log(elem,n);
	if (!/photo-center/.test(cls)) {
		return resort(n);
	}
	if(/photo_front/.test(cls)){
		cls=cls.replace(/photo_front/,'photo_back');
		g("#nav"+n).className = g("#nav"+n).className.replace('i','i curr-back');
	}else{
		cls=cls.replace(/photo_back/,'photo_front');				
		g("#nav"+n).className = g("#nav"+n).className.replace(/\s*curr-back\s*/,' ');				
	}
	return elem.className=cls;
}
//2.通用函数
function g(selector){
	var method=selector.substr(0,1)=='.'?'getElementsByClassName':'getElementById';
	return document[method](selector.substr(1));
}
//3.输出所有海报
var data=data;
function addPhotos(){
	var template=g('#wrap').innerHTML;
	var html=[];
	var nav=[];
	for(s in data){
		var _html=template.replace('{{index}}',s)
			.replace('{{img}}',data[s].img)
			.replace('{{caption}}',data[s].caption)
			.replace('{{desc}}',data[s].desc);
		html.push(_html);
		nav.push("<span id='nav"+s+"' onClick='turn(g(\"#photo"+s+"\"))' class='i'></span>");
	}
	html.push("<div class='nav'>"+nav.join('')+"</div>");
	g('#wrap').innerHTML=html.join('');
	var num = random([0, data.length]);
	resort(num);
}
addPhotos();
//4.随机生成一个值，支持取值范围。 random([min,max])
function random(range){
	var max=Math.max(range[0],range[1]);
	var min=Math.min(range[0],range[1]);
	var diff=max-min;//差值 [1,6]=>5(0~5)
	var number=Math.floor(Math.random()*diff+min);
	return number;
}
//6.计算左右区分范围
function rangeSet(){
	var range={
		left:{
			x:[],
			y:[]
		},
		right:{
			x:[],
			y:[]
		}
	}
	var wrap={
		w:g('#wrap').clientWidth,
		h:g('#wrap').clientHeight
	}
	var photo={
		w:g('.photo')[0].clientWidth,
		h:g('.photo')[0].clientHeight
	}
	range.wrap=wrap;
	range.photo=photo;

	range.left.x=[0-photo.w,wrap.w/2-photo.w/2];
	range.left.y=[0-photo.h,wrap.h];
	range.right.x=[wrap.w/2+photo.w/2,wrap.w+photo.w];
	range.right.y=[0-photo.h,wrap.h];
	return range;
}
//5.海报排序
function resort(n){
	var _photo=g(".photo");
	var photos=[];
	for(var i=0,l=_photo.length;i<l;i++){
		_photo[i].className=_photo[i].className.replace(/\s*photo-center\s*/,' ');
		_photo[i].className=_photo[i].className.replace(/\s*photo_front\s*/,' ');
		_photo[i].className=_photo[i].className.replace(/\s*photo_back\s*/,' ');
		_photo[i].style.left='';
		_photo[i].style.top='';
		_photo[i].style["transform"]='rotate(360deg) scale(1.1)';
		_photo[i].className+=' photo_front';
		photos.push(_photo[i]);
	}
	var photo_center=g('#photo'+n);
	photo_center.className+=' photo-center ';
	photo_center=photos.splice(n,1)[0];
	//把海报分为左右两部分	
	var photosLeft=photos.splice(0,Math.ceil(photos.length/2));
	var photosRight=photos;
	for(var s in photosLeft){
		var photo=photosLeft[s];
		photo.style.left=random(rangeSet().left.x)+'px';
		photo.style.top=random(rangeSet().left.y)+'px';
		photo.style["transform"]="rotate("+random([-60,60])+"deg) scale(.9)"
	}
	for(var s in photosRight){
		var photo=photosRight[s];
		photo.style.left=random(rangeSet().right.x)+'px';
		photo.style.top=random(rangeSet().right.y)+'px';
		photo.style["transform"]="rotate("+random([0,180])+"deg) scale(.9)"
	}
	//控制按钮处理
	var navs=g(".i");
	for (var s = 0; s < navs.length; s++) {
		navs[s].className = navs[s].className.replace(/\s*current\s*/, "");
		navs[s].className = navs[s].className.replace(/\s*curr-back\s*/, "");
	}	
	g("#nav"+n).className+=' current';
}