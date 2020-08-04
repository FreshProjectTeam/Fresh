var tEl = document.getElementById("tel");
var tEl_span = document.getElementById("tit");

tEl.onblur = function () {
    var oTel = tEl.value;
    if (!/^1(3|5|8)\d{9}$/.test(oTel)) {
        tEl_span.innerHTML = "请填写正确的手机号码";
        tEl_span.style.color = "red";
    } else {
        tEl_span.innerHTML = "格式正确";
        tEl_span.style.color = "green";
    }
}
