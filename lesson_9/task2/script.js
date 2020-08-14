let f2 =document.forms.f2;
let f1 = document.forms.f1;

function subTask() {
    event.preventDefault();
    if (document.getElementById('write').value !="") {
        let ck =document.createElement('lable');
        ck.setAttribute('class', 'new')
        document.getElementById('f11').append(ck);
        let m = document.createElement('input')
        m.setAttribute("type", "checkbox");
        m.setAttribute("name", "check");
        document.querySelector('.new:last-child').append(m)
        let span = document.createElement('span');
        span = document.getElementById('write').value;
        document.querySelector('.new:last-child').append(span)
    }
    else {
        alert('Попередження! Пусте поле не можна додавати')
    }
    let all = document.querySelectorAll('.new');
    for(let i=0; i<all.length; i++) {
        all[i].addEventListener('click', function(event) {
            event.preventDefault();
            if(f1.elements.length>1) {
                all[i].remove()
            }
        })
        
    }
}
let all1 = document.querySelectorAll('.new');
    for(let i=0; i<all1.length; i++) {
        all1[i].addEventListener('click', function(event) {
            event.preventDefault();
            if(f1.elements.length>1) {
                all1[i].remove()
            }
            else{
                alert('Попередження! Останнiй task зi списку видалити не можна');
            }   
        })
        
    }




// function subTask, але трохи по iншому

// function subTask(){
//     if(document.getElementById('write').value !=""){
//     let ck = document.createElement('label');
//     ck.setAttribute('class','new');
//     let m = document.createElement('input');
//     m.setAttribute('type','checkbox');
//     m.setAttribute('name','check');
//     ck.appendChild(m)
//     newText = document.getElementById('write').value
//     ck.append(newText)
//     document.getElementById('f11').append(ck)
//     }
//     else{
//         alert('Попередження! Пусте поле не можна додавати')
//     }
// }

