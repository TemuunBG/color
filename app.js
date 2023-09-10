
function restart(){
	console.log("You Dead");
	console.log("game restarted");
}
restart();
function hello(name){
	console.log("");
}
hello("");
function sum(a,b){
	console.log(a+b);
}
sum(15,20);
sum(56,150);
function too(i,d){
	if(i>d){
		console.log(i)
	}else{
		console.log(d)
	}
}
too(32,14);
var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['brown','aqua','green','red','yellow']
var btn = document.getElementsByTagName('utton')[0];
console.log(btn);
var i=-1;
function color(){
	var random = Math.floor(Math.random()*(colors.length-1));
	i++;
	body.style.backgroundColor=colors[random];
	btn.innerText = colors[random];
	if(i>=colors.length-1){
		i=-1
	}
}