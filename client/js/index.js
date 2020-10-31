let d = new Date();
let year = d.getFullYear();
let flag_stack = false
let flag_projects = false

document.querySelector(".copy").innerHTML = '&copy; Copyright ' + year + ', Maksim Litovchenko'

document.querySelector("#stack").addEventListener('click', () => {
    if (!flag_stack) {document.querySelector(".stack").style.display = 'grid'}
    else {document.querySelector(".stack").style.display = 'none'}
    flag_stack = !flag_stack
})


document.querySelector("#projects").addEventListener('click', () => {
    if (!flag_projects) {document.querySelector('.projects').style.display = 'grid'}
    else {document.querySelector('.projects').style.display = 'none'}
    flag_projects = !flag_projects
})