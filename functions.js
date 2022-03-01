function makeCoffee(){
    window.open("coffee.html", 'popUpWindow','height=560,width=480,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
}


// function filterProject(){
//     var select = document.getElementById('projectsDropdown');
//     var value = select.options[select.selectedIndex].value;

//     const values = []
//     for (i = 0; i < select.length; i++) {
//         values.push(select.options[i].value);
//     }
//     console.log(values)


//     for (j = 0; j < values.length; j++){
//         if (value == "all"){
//             if (values[j] != "all"){
//                 let selected = document.getElementById(values[j]);
//                 selected.style.display = "block";
//             }
//         }
//         if (values[j] != value && values[j] != "all" && value != "all"){
//                 let nonSelected = document.getElementById(values[j]);
//                 nonSelected.style.display = "none";
//                 let selected = document.getElementById(value);
//                 selected.style.display = "block";
//         }   

//     }

// }

function filterProject(){
    var select = document.getElementById('projectsDropdown');
    var value = select.options[select.selectedIndex].value;

    const values = []
    for (i = 0; i < select.length; i++) {
        values.push(select.options[i].value);
    }
    console.log(values)


    for (j = 0; j < values.length; j++){
        console.log(value)
        if (value == "all"){
            let selectedValue = document.getElementsByClassName(values[j]);
            for (k = 0; k < selectedValue.length; k++){
                selectedValue[k].classList.remove('hide');
                selectedValue[k].classList.add('show');
                }
            }
        
        if(values[j] == value && value != "all"){
            let selectedValue = document.getElementsByClassName(value);
            for (k = 0; k < selectedValue.length; k++){
                selectedValue[k].classList.remove('hide');
                selectedValue[k].classList.add('show');
            }
        }
        
        if(values[j] != value && values[j] != "all" && value != "all"){
            let selectedValue = document.getElementsByClassName(values[j]);
            for (k = 0; k < selectedValue.length; k++){
                selectedValue[k].classList.remove('show');
                selectedValue[k].classList.add('hide');
            }
        }
    }
}