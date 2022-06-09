var input = document.getElementById('input');
var result = document.getElementById('result');
var button = Array.from(document.querySelectorAll('button'));
button.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        var value = e.target.textContent;
        if (value == 'AC') {
            input ? input.innerText = '0' : '';
            result ? result.innerText = '' : '';
        }
        if (value == "Del") {
            input ? input.innerText = input.innerText.slice(0, -1) : '';
        }
        if (e.target.id == 'num' || e.target.id == 'opr') {
            if ((input === null || input === void 0 ? void 0 : input.textContent) == '0') {
                input ? input.innerText = '' : '';
            }
            if ((result === null || result === void 0 ? void 0 : result.textContent) != '') {
                input ? input.innerText = result.textContent + value : '';
                result ? result.innerText = '' : '';
            }
            else {
                input ? input.innerText += value : '';
            }
        }
        if (value == '=') {
            result ? result.innerText = eval(input ? input.innerText.replace('×', '*').replace('÷', '/') : '') : '';
        }
    });
});
