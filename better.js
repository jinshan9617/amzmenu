var menuData = [
	{
		name: "A",
		child: [
			{
				name: "A-1",
				child: []
			},
			{
				name: "A-2",
				child: []
			},
			{
				name: "A-3",
				child: []
			},
			{
				name: "A-4",
				child: []
			},
			{
				name: "A-5",
				child: []
			}
		]
	},
	{
		name: "B",
		child: [
			{
				name: "B-1",
				child: []
			},
			{
				name: "B-2",
				child: []
			},
			{
				name: "B-3",
				child: []
			},
			{
				name: "B-4",
				child: []
			},
			{
				name: "B-5",
				child: []
			}
		]
	},
	{
		name: "C",
		child: [
			{
				name: "C-1",
				child: []
			},
			{
				name: "C-2",
				child: []
			},
			{
				name: "C-3",
				child: []
			},
			{
				name: "C-4",
				child: []
			},
			{
				name: "C-5",
				child: []
			}
		]
	},
	{
		name: "D",
		child: [
			{
				name: "D-1",
				child: []
			},
			{
				name: "D-2",
				child: []
			},
			{
				name: "D-3",
				child: []
			},
			{
				name: "D-4",
				child: []
			},
			{
				name: "D-5",
				child: []
			}
		]
	},
	{
		name: "E",
		child: [
			{
				name: "E-1",
				child: []
			},
			{
				name: "E-2",
				child: []
			},
			{
				name: "E-3",
				child: []
			},
			{
				name: "E-4",
				child: []
			},
			{
				name: "E-5",
				child: []
			}
		]
	},
	{
		name: "F",
		child: [
			{
				name: "F-1",
				child: []
			},
			{
				name: "F-2",
				child: []
			},
			{
				name: "F-3",
				child: []
			},
			{
				name: "F-4",
				child: []
			},
			{
				name: "F-5",
				child: []
			}
		]
	}];

function createtab(home, father, obj){
	var len = obj.length;
	if(len){
		var menuDiv = document.createElement("div");
		home.appendChild(menuDiv);
		menuDiv.id = father.id + "_child";
		menuDiv.className = "menuDiv";
		for(var i=0; i<len; i++){
			var tabData = obj[i];
			var tabDiv = document.createElement("div");
			tabDiv.id = tabDiv.innerText = tabData.name;
			tabDiv.className = "tabDiv";
			menuDiv.appendChild(tabDiv);
			createtab(home, tabDiv, tabData.child);
		}
	}
}

function show(d){
    var brothers = d.parentElement.children;
    for(var i=0,l=brothers.length; i<l; i++){
        var brother_child = document.getElementById(brothers[i].id + "_child");
        if(!brother_child) continue;
        brother_child.style.display = "none";
    }
    if(document.getElementById(d.id + "_child")){
        document.getElementById(d.id + "_child").style.display = "block";
    }
}

function deferShow(d){
    var defer = setTimeout((function(d){
        return function(){
            show(d);
        };
    })(d), 200);
    d.onmouseleave = function(e){
        clearTimeout(defer);
    };
}

function direction(){
    var x = y = 0;
    function getdirection(e){
        if(x==y&&x==0) return false;
        var newX = e.pageX;
        var newY = e.pageY;
        var direction = {
            x: newX-x,
            y: newY-y
        };
        return direction;
    }
    return getdirection;
}

function betterShow(d){
    var d_child = document.getElementById(d.id + "_child");
    var height = d.offsetHeight
}

function main(){
    var menu = document.getElementById("menu");
    createtab(menu, menu, menuData);
    document.getElementById("menu_child").style.display = "block";


    menu.onmouseover = function(e){
        var target = e.target;
        //show(target);
        deferShow(target);
    };
/*
    menu.onmousemove = function(e){
        console.log(e)
    };
*/
}

main();
