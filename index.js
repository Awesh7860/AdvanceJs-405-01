const totalCountries=document.getElementById("Totalcountries")
totalCountries.innerText=`Currently, we have ${countries_data.length} countries`
const populationOperation=()=>{
const para=document.getElementById("para")
para.innerText=`10 most populated countries in the world`
const lowerlowersection=document.getElementById("lowerlowersection")
     var totalPopulation=0;
     countries_data.map(ele=>{
        totalPopulation+=ele.population;
     })
    lowerlowersection.innerHTML=""
    countries_data.sort((a,b)=>{
        return b.population-a.population
    })
    lowerlowersection.innerHTML+=`<div class="cardsection">
    <div class="namesection">
        ${"World"}
    </div>
    <div class="graphsection">
        <div class="graphcoloursection" style="width:${100}%;height:100%;background-color:#f2a93b;"></div>
    </div>
    <div class="populationsection">${totalPopulation}</div>
</div>`
for(let i=0;i<10;i++){
    var widthPercent=countries_data[i].population*100/totalPopulation
    lowerlowersection.innerHTML+=
    `<div class="cardsection">
    <div class="namesection">
        ${countries_data[i].name}
    </div>
    <div class="graphsection">
        <div class="graphcoloursection" style="width:${widthPercent}%;height:100%;background-color:#f2a93b;"></div>
    </div>
    <div class="populationsection">${countries_data[i].population}</div>
</div>`
}
}
const languageOperation=()=>{
    const para=document.getElementById("para")
    para.innerText=`10 most spoken languages in the world`
    const lowerlowersection=document.getElementById("lowerlowersection")
    lowerlowersection.innerHTML=""

    const arroflanguages=[]
    for(let i=0;i<countries_data.length;i++){
        arroflanguages[i]=countries_data[i].languages
    }
    const flatarroflanguage=arroflanguages.flat();
    const objofflatarroflanguage={}
    flatarroflanguage.map((ele)=>{
        objofflatarroflanguage[ele]=(objofflatarroflanguage[ele]||0)+1
    })
    const objArr = Object.entries(objofflatarroflanguage)
    objArr.sort(function(a,b){
        return b[1]-a[1]
    })
    var totallanguage=0;
    objArr.map((ele)=>{
        totallanguage+=ele[1]
    })
    for(let i=0;i<10;i++){
        var perecentage=(objArr[i][1]*100)/totallanguage
        console.log(perecentage);
        lowerlowersection.innerHTML+=`
        <div class="cardsection" >
            <div class="namesection">${objArr[i][0]}</div>
            <div class="graphsection">
                <div class="graphcoloursection" style="width: ${perecentage}%; height: 80%; background-color: #f2a93b;">
                </div>
            </div>
            <div class="populationsection">${objArr[i][1]}</div>
        </div>`
    }
}
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
btn1.addEventListener("click" ,populationOperation)
btn2.addEventListener("click", languageOperation)