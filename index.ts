const input = document.getElementById('input');
const result = document.getElementById('result');
const button = Array.from(document.querySelectorAll('button')) 

button.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        const value = (e.target as HTMLButtonElement).textContent

        if(value =='AC'){
            input ? input.innerText = '0': ''
            result ? result.innerText = '': ''
        }
        if(value =="Del"){
            input ? input.innerText = input.innerText.slice(0,-1): ''
        }
        if((e.target as HTMLButtonElement).id == 'num' || (e.target as HTMLButtonElement).id == 'opr'){
            if(input?.textContent == '0'){
                input ? input.innerText = '' : ''
            }
            if(result?.textContent != ''){

                input ? input.innerText = result.textContent + value: ''
                result ? result.innerText = '': ''
            }
            else{
                input ? input.innerText += value : ''
            }
        }
        if(value == '='){
            result ? result.innerText = eval(input? input.innerText.replace('×', '*').replace('÷','/'):''): ''
        }
    })
})