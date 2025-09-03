function getId(id){
    return document.getElementById(id);
}
function createAudio(){
    return document.createElement("audio");
}
function AppendChild(parent,child){
    parent.append(child)
}
function styleChild(childColor,drumId){
        //for(let i=0;i<childColorArr.length;i++){
        let drumChild=getId(drumId);
        drumChild.style.backgroundColor=childColor;
    }

function listenToclick(drumObj,sound){
    drumObj.addEventListener("click",()=>{sound.play()})
}

function changeVolume(sound,slide){
    slide.addEventListener("input",()=>{
       sound.volume=slide.value/100;
    })
}
function AllInOne(src,id,slide){
      const drumObj=getId(id);
      const sound=createAudio()
      sound.src=src;
      changeVolume(sound,slide);
      AppendChild(drumObj,sound);
      listenToclick(drumObj,sound);
}

function playAll(src,id,color,slide){
    const srcLen=src.length;
    for(let i=0;i<srcLen;i++){
        AllInOne(src[i],id[i],slide);
        styleChild(color[i],id[i]);
    }
}
const src=["audio/mixkit-negative-tone-interface-tap-2569.wav",
"audio/mixkit-drum-joke-accent-579.wav",
"audio/mixkit-short-bass-hit-2299.wav",
"audio/mixkit-knocking-sub-bass-2300.wav",
"audio/mixkit-hand-tribal-drum-562.wav",
"audio/mixkit-fail-drum-and-xylophone-568.wav",
"audio/mixkit-spring-metal-hit-2302.wav"
];

const drumId=[
    "negative-tone",
    "drum-joke",
    "short-bass-hit",
    "knocking-sub-bass",
    "hand-tribal-drum",
    "fail-drum-and-xylophone",
    "spring-metal-hit"
];//7

const childBackgroundColor=[
    "rgb(125,25,147)",
    "rgb(25,125,147)",
    "rgb(147,25,125)",
    "rgb(147,125,25)",
    "rgb(125,147,25)",
    "rgb(25,147,125)",
    "rgb(125,25,147)"
]

const slide=getId("slide");
const sound=document.getElementsByClassName("wav")
console.log(sound)
playAll(src,drumId,childBackgroundColor,slide);

