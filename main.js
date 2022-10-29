let imgdiv = document.querySelectorAll(".imgdiv")
let p = document.querySelectorAll("p")
console.log(p)

for (let i = 0; i<imgdiv.length; i++){
    imgdiv[i].addEventListener("click", function(){
        imgdiv[i].style.overflow="visible"
        imgdiv[i].style.width="fit-content"
        for (let j = 0; j <imgdiv.length; j++){
            if (j!=i){
                imgdiv[j].style.overflow="hidden"
                imgdiv[j].style.width="20%"
            }
        }
        console.log(imgdiv[i])
    })
}

