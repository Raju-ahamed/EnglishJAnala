// btn api work
const btnApi=()=>{
    const url =`https://openapi.programming-hero.com/api/levels/all`;
    fetch(url)
    .then(res => res.json())
    .then(datas =>{
        callBtn(datas.data);
    })
}
const callBtn = (btns)=>{
    btns.forEach(btn => {
        // console.log(btn);
        const btnDiv = document.getElementById("btn-section");
        const btnCard =document.createElement("div");
        btnCard.innerHTML =`<div onclick="btnLessionApi(${btn.level_no})" class="btn btn-sm btnColor"><i class="fa-solid fa-book-open"></i>Lesson ${btn.level_no}</div>`;
        btnDiv.append(btnCard);
    });
}
btnApi();
// lesson api
const lessionApi =()=>{
    const url =`https://openapi.programming-hero.com/api/words/all`;
    fetch(url)
    .then(res=>res.json())
    .then(allDatas=>{
        showLesson(allDatas.data);
    })
}
const showLesson = (datas)=>{
    // mt file
    const mt = document.getElementById("make-mt");
    mt.innerHTML="";
    const lessionSection = document.getElementById("lession-secton");
    lessionSection.innerHTML="";
    if(datas.length === 0){
        mt.innerHTML=`
        <div id="make-mt" class="gap-2 w-11/12 mx-auto bg-[#F8F8F8] my-10">
        <div class="text-center h-40">
            <p class="py-6 text-sm text-[#ababab]">There is no word here......</p>
            <p class="text-3xl">PLZZZ....Select another Lesson!!!!</p>
        </div>
    </div>
        `;
    }
datas.forEach(data=> {
    // console.log(data);
    const lessionCard = document.createElement("div");
    lessionCard.innerHTML=`
    <div class="card my-4 m-2 w-auto h-55 bg-base-100 card-sm shadow-sm">
        <div class="card-body text-center">
            <h2 class="text-2xl font-semibold">${data.word}</h2>
            <p>Meaning /Pronounciation</p>
            <p class="text-lg text-gray-600 ">"${data.meaning}/${data.pronunciation}"</p>
            <div class="flex justify-between">
                <div class="btn btn-sm bg-[#e9f2ff]"><i class="fa-solid fa-circle-exclamation"></i></div>
                <div class="btn btn-sm bg-[#e9f2ff]"><i class="fa-solid fa-volume-high"></i></div>
            </div>
        </div>
    </div>
    `;
    lessionSection.append(lessionCard)
});
}
// search by btn and its api comes from here
const btnLessionApi =(id)=>{
    const url =`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res =>res.json())
    .then(datas=>{
        showLesson(datas.data);
    })
}