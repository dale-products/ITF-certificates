
const allButt = document.querySelectorAll("button");
const fileDir = [
    "certificate Cloud computing",
    "DATABASE AND software development",
    "Comtia iT Fundamentals",
    "Microsoft 365",
    "network certificate itf",
    "setting up and using computer"

]

for(let i = 0;i < allButt.length;i++){
    let butt = allButt[i];
    butt.addEventListener("click",(e) => {
        download(e.target.value);

    });
}




function download(value){
    value = Number(value);
    let file = fileDir[value];
    
    location.href = `./pdfs/${file}.rar`
    alert(file)

}

