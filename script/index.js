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
        btnCard.innerHTML =`<div onclick="btnLessionApi(${btn.level_no})" id="btn-" class="btn btn-sm btnColor"><i class="fa-solid fa-book-open"></i>Lesson ${btn.level_no}</div>`;
        btnDiv.append(btnCard);
    });
    
}
btnApi();
//  calss active

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
        hideloader();
        return;
        
    }
    


datas.forEach(data=> {
   
    // console.log(data.id);
    const lessionCard = document.createElement("div");
    lessionCard.innerHTML=`
    <div class="card my-4 m-2 w-auto h-55 bg-base-100 card-sm shadow-sm">
        <div class="card-body text-center">
            <h2 class="text-2xl font-semibold">${data.word}</h2>
            <p>Meaning /Pronounciation</p>
            <p class="text-lg text-gray-600 ">"${data.meaning}/${data.pronunciation}"</p>
            <div class="flex justify-between">
                <div id="btn-${data.id}"  onclick="detailsBtn(${data.id})" class="btn btn-sm bg-[#e9f2ff]"><i class="fa-solid fa-circle-exclamation"></i></div>
                <div class="btn btn-sm bg-[#e9f2ff]"><i class="fa-solid fa-volume-high"></i></div>
            </div>
        </div>
    </div>
    `;
    lessionSection.append(lessionCard)
});
    hideloader();
}
// search by btn and its api comes from here
const btnLessionApi =(id)=>{
    const url =`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res =>res.json())
    .then(datas=>{
        showLesson(datas.data);
        
    })
    showloader();
}
// details work
const showDetails =(data)=>{
    const showDetails = document.getElementById("modal");
    showDetails.showModal();
    console.log(data)
    showDetails.innerHTML = `

        <div class="modal-box w-auto h-auto items-center">
            <div class="card w-96 bg-base-100 card-lg shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">${data.word} (${data.pronunciation})</h2>
                    <div>
                        <p class="text-lg font-semibold">Meaning</p>
                        <p>${data.meaning}</p>
                    </div>
                    <div>
                        <p class="text-lg font-semibold">Example</p>
                        <p>${data.sentence}</p>
                    </div>
                </div>
                <p class="w-11/12 mx-auto px-2 text-xl font-bold">সমার্থক শব্দ গুলো</p>
                <div class="m-4 flex h-auto w-auto justify-between">
                    <div class="btn btn-sm bg-[#f4fafe]">${data.synonyms[0]}</div>
                    <div class="btn btn-sm bg-[#f4fafe]">${data.synonyms[1]}</div>
                    <div class="btn btn-sm bg-[#f4fafe]">${data.synonyms[2]}</div>
                </div>
            </div>
            <div class="my-2 w-4">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn btn-sm btnColor">Close</button>
                </form>
            </div>
        </div>
    `;
}

const detailsBtn=(id)=>{
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(datas =>{
        showDetails(datas.data);
    })
}
// login pannel
const getStart =()=>{
const passwordInp = document.getElementById("pass");
    if (passwordInp.value == 12345){

        document.getElementById("get").classList.remove("hidden");
        document.getElementById("gets").classList.remove("hidden");
}

}
// showloader
const showloader=()=>{
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("forloader").classList.add("hidden");
}
const hideloader = () => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("forloader").classList.remove("hidden");
}