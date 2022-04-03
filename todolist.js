
function newElement() {	
	// tạo node li
	var div = document.createElement('div')
	var li = document.createElement("li");
	// lấy giá trị người dùng nhập
	var inputValue = document.getElementById("input__value").value;
	// tạo đối tượng text node
	var t = document.createTextNode(inputValue);
	// gán text node cho thẻ li vừa tạo
	div.appendChild(t)
	li.appendChild(div);
	// kiểm tra nếu text node rỗng thì cảnh báo, nếu không thì thêm vào trong thẻ ul
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		document.getElementById("list").appendChild(li);
	}
	document.getElementById("input__value").value = "";
	var bts = document.createElement('button');
	var txt = document.createTextNode("V");
	var bts__choose = document.createElement('button');
	var check = document.createTextNode("X");
	bts__choose.type = "checkbox";
	bts__choose.name = "check__succes";
	bts.name = "button__succes";
	bts.appendChild(txt);
	li.appendChild(bts);
	bts__choose.appendChild(check);
	li.appendChild(bts__choose);
	var button = document.getElementsByName('button__succes');
	for (var i = 0; i < button.length; i++) {
   
		button[i].addEventListener("click", function () {
			var parents = this.parentElement;
			parents.style="color:rgb(38, 189, 189)";
			
			
		})		
	}
	var succes = document.getElementsByName('check__succes');
	for (var i = 0; i < button.length; i++) {
   
		succes[i].addEventListener("click", function () {
			var parents = this.parentElement;
			parents.remove();
			
			
		})		
	}
	
	
		
	
	
}

