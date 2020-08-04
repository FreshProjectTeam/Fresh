var tEl = document.getElementById("tel");
var tEl_span = document.getElementById("tit");

tEl.onblur = function () {
    var oTel = tEl.value;
    if (!/^1(3|5|8)\d{9}$/.test(oTel)) {
        tEl_span.innerHTML = "请填写正确的手机号码";
        tEl.style.border = "1px solid red";
    } else {
		tEl_span.innerHTML = "格式正确";
        tEl_span.style.color = "green";
        tEl.style.border = "1px solid black";
    }
}


   // 引入外部JS文件
  //   mounted() {
  //     const s = document.createElement('script');
  //     s.type = 'text/javascript';
  //     s.src = '../static/js/Login.js';
  //     document.body.appendChild(s);
  //  },

	var pWd = document.getElementById("pwd");
	var pWd_span = document.getElementById("tip1");
	var aDivs = document.getElementsByClassName("code")
	pWd.onkeyup = function () {
		var oPwd = pWd.value;
		for (i = 0; i < aDivs.length; i++) {
			aDivs[i].style.backgroundColor = "gray";
		};
		if (oPwd.length >= 6 ) {
			if (/^\d+$/.test(oPwd) || /^[a-z]+$/.test(oPwd) || /^[A-Z]+$/.test(oPwd)) {
				aDivs[0].style.backgroundColor = "yellow";
			}else if (/\d/.test(oPwd) && /[a-z]/.test(oPwd) && /[A-Z]/.test(oPwd)) {
				aDivs[2].style.backgroundColor = "yellow";
			} else {
				aDivs[1].style.backgroundColor = "yellow";
			}
		}
	}