let switchMode = document.getElementById('switch')

switchMode.onclick = function () {
    let theme = document.getElementById('rose');
    let ico = document.getElementById('ico');
    if (rose.getAttribute('href') == 'rose-theme.css') {
        theme.href = 'blue-theme.css'
        ico.href = 'blue.ico'
    } else {
        theme.href = 'rose-theme.css'
        ico.href = 'rose.ico'

    }
}
    // let buttonSwap = document.querySelector('button')
    // let bodySwap = document.querySelector('body')
    // let containerSwap = document.querySelector('main-calc')   ;
    // let itemSwap = document.querySelectorAll('div');
    // // let inputSwap = document.querySelector('');
    // console.log(itemSwap);

    // function swapTheme() {
    //     buttonSwap.classList.toggle('blue-button');
    
    //     bodySwap.classList.toggle('blue-theme')
    //     buttonSwap.classList.toggle('rose-button');
    
    // }


    function insert(num) {
        document.form.textview.value =
            document.form.textview.value + num;
    }

    function clean() {
        document.form.textview.value = "";
    }

    function equal() {
        document.form.textview.value = "";
    }

    function back() {
        let exp = document.form.textview.value;
        document.form.textview.value = exp.substring(0, exp.length - 1)
    
        console.log(exp);
    }

    function equal() {
        let exp = document.form.textview.value;
        if (exp) {
            document.form.textview.value = eval(exp);
        }
    }

