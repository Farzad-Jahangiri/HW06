const tgVideo=document.getElementById("videoSRC");

const objListLaptop=[
  {
    srcVideo:'FA0031DX.mp4',
    srcImage:'I-a4vELC6haeuBSi.jpg',
    model:'لپ تاپ ایسوس FX506LH',
    processor:'Intel Core i5 10300H نسل 10',
    ram:'8GB DDR4',
    hard:'512GB SSD',
    display:'۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر',
    graphics:'NVIDIA GeForce GTX 1650 4GB',
    os:'Nothing',
    weight:'2.4 pounds',
    battery:'2H',
    price:'34,800$',
    dataCellIndex:"0"
  },
  {
    srcVideo:'FX506LH.mp4',
    srcImage:'KOZRabsQkvMfbk8n.jpg',
    model:'Victus 15-FA0031DX',
    processor:'Intel Core i5 نسل 12',
    ram:'16GB DDR4',
    hard:'512GB SSD',
    display:'1920x1080","۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر',
    graphics:'NVIDIA GeForce GTX 1650 4GB',
    os:'Nothing',
    weight:'2.4 pounds',
    battery:'2H',
    price:'44,299$',
    dataCellIndex:1
  },
  {
    srcVideo:'FA0031DX.mp4',
    srcImage:'I-a4vELC6haeuBSi.jpg',
    model:'لپ تاپ ایسوس FX506LH',
    processor:'Intel Core i5 10300H نسل 10',
    ram:'8GB DDR4',
    hard:'512GB SSD',
    display:'۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر',
    graphics:'NVIDIA GeForce GTX 1650 4GB',
    os:'Nothing',
    weight:'2.4 pounds',
    battery:'2H',
    price:'34,800$',
    dataCellIndex:2
  },
  {
    srcVideo:'FX506LH.mp4',
    srcImage:'KOZRabsQkvMfbk8n.jpg',
    model:'Victus 15-FA0031DX',
    processor:'Intel Core i5 نسل 12',
    ram:'16GB DDR4',
    hard:'512GB SSD',
    display:'1920x1080","۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر',
    graphics:'NVIDIA GeForce GTX 1650 4GB',
    os:'Nothing',
    weight:'2.4 pounds',
    battery:'2H',
    price:'44,299$',
    dataCellIndex:3
  },
  {
    srcVideo:'FA0031DX.mp4',
    srcImage:'I-a4vELC6haeuBSi.jpg',
    model:'لپ تاپ ایسوس FX506LH',
    processor:'Intel Core i5 10300H نسل 10',
    ram:'8GB DDR4',
    hard:'512GB SSD',
    display:'۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر',
    graphics:'NVIDIA GeForce GTX 1650 4GB',
    os:'Nothing',
    weight:'2.4 pounds',
    battery:'2H',
    price:'34,800$',
    dataCellIndex:4
  },
  {
    srcVideo:'FX506LH.mp4',
    srcImage:'KOZRabsQkvMfbk8n.jpg',
    model:'Victus 15-FA0031DX',
    processor:'Intel Core i5 نسل 12',
    ram:'16GB DDR4',
    hard:'512GB SSD',
    display:'1920x1080","۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر',
    graphics:'NVIDIA GeForce GTX 1650 4GB',
    os:'Nothing',
    weight:'2.4 pounds',
    battery:'2H',
    price:'44,299$',
    dataCellIndex:5
  },
  {
    srcVideo:'FA0031DX.mp4',
    srcImage:'I-a4vELC6haeuBSi.jpg',
    model:'لپ تاپ ایسوس FX506LH',
    processor:'Intel Core i5 10300H نسل 10',
    ram:'8GB DDR4',
    hard:'512GB SSD',
    display:'۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر',
    graphics:'NVIDIA GeForce GTX 1650 4GB',
    os:'Nothing',
    weight:'2.4 pounds',
    battery:'2H',
    price:'34,800$',
    dataCellIndex:6
  },
  {
    srcVideo:'FX506LH.mp4',
    srcImage:'KOZRabsQkvMfbk8n.jpg',
    model:'Victus 15-FA0031DX',
    processor:'Intel Core i5 نسل 12',
    ram:'16GB DDR4',
    hard:'512GB SSD',
    display:'1920x1080","۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر',
    graphics:'NVIDIA GeForce GTX 1650 4GB',
    os:'Nothing',
    weight:'2.4 pounds',
    battery:'2H',
    price:'44,299$',
    dataCellIndex:7
  }
]



const table = document.getElementById("productList");
const dataListModel=document.getElementById("laptopMdl");
const dataListProcessor=document.getElementById("proce");
const dataListRAM=document.getElementById("Ram");
const dataListHardDisk=document.getElementById("HardDisk");
const dataListDisplay=document.getElementById("Display");

function innerHtmlProducs() {
  let dataCellIndex=0
  for (const _laptop of objListLaptop) {
    const trTable=`<tr data-cell-index=${dataCellIndex}>
                        <th>${_laptop.model}</th>
                        <th><img class="img-laptop" src="image/${_laptop.srcImage}" alt="image"></th>
                        <th>${_laptop.processor}</th>
                        <th>${_laptop.ram}</th>
                        <th>${_laptop.hard}</th>
                        <th>${_laptop.display}</th>
                        <th>${_laptop.graphics}</th>
                        <th>${_laptop.os}</th>
                        <th>${_laptop.weight}</th>
                        <th>${_laptop.battery}</th>
                        <th>${_laptop.srcImage}</th>
                        <th><button id="BtnBuyNow${dataCellIndex}" class="btn-buy">Buy now</button></th>
                    </tr>`;
    table.insertAdjacentHTML('beforeend',trTable);
    dataCellIndex++;
  }
  changeOptionDataList(objListLaptop);
}

innerHtmlProducs();

function changeOptionDataList(_laptopObject){
  dataListModel.innerHTML="";
  for (const _laptop of _laptopObject) {
    // console.log(_laptop.model);
    dataListModel.insertAdjacentHTML('beforeend',`<option value="${_laptop.model}">`);
    dataListProcessor.insertAdjacentHTML('beforeend',`<option value="${_laptop.processor}">`);
    dataListRAM.insertAdjacentHTML('beforeend',`<option value="${_laptop.ram}">`);
    dataListHardDisk.insertAdjacentHTML('beforeend',`<option value="${_laptop.hard}">`);
    dataListDisplay.insertAdjacentHTML('beforeend',`<option value="${_laptop.display}">`);
  }
  
  
}

changeVideo();


const laptopModelInput = document.getElementById("laptopModel");
let __laptopModel=undefined;
const processor = document.getElementById("processor");
let _processor=undefined;
const RAM = document.getElementById("ram");
let _ram=undefined;
const HardDisk = document.getElementById("Hard");
let _HardDisk=undefined;
const Display = document.getElementById("display");
let _display=undefined;

function SearchLaptop(_laptopModelInput=__laptopModel,laptopProcessorInput=_processor,laptopRamInput=_ram,laptopHardInput=_HardDisk,laptopDisplayInput=_display){
  let listLaptop=[];
  if(_laptopModelInput!=undefined && laptopProcessorInput!=undefined && laptopRamInput!=undefined && laptopHardInput!=undefined && laptopDisplayInput!=undefined){
    for (const _laptop of objListLaptop) {
        if(_laptopModelInput===_laptop.model && laptopProcessorInput===_laptop.processor && laptopRamInput===_laptop.ram && laptopHardInput===_laptop.hard && laptopDisplayInput===_laptop.display){
          listLaptop.push(_laptop);
        }
    }
    table.innerHTML=`<tr class="headerTB">
    <th>Laptop Model</th>
    <th>Picture</th>
    <th>Processor</th>
    <th>RAM</th>
    <th>Lard disk</th>
    <th>Display</th>
    <th>Graphics</th>
    <th>OS</th>
    <th>Weight</th>
    <th>Battery</th>
    <th>Price</th>
    <th>Purchase</th>
</tr>`

for (let index = 0; index < listLaptop.length; index++) {
  table.insertAdjacentHTML('beforeend', `<tr data-cell-index=${listLaptop[index].dataCellIndex}>
  <th>${listLaptop[index].model}</th>
  <th><img class="img-laptop" src="image/${listLaptop[index].srcImage}" alt="image"></th>
  <th>${listLaptop[index].processor}</th>
  <th>${listLaptop[index].ram}</th>
  <th>${listLaptop[index].hard}</th>
  <th>${listLaptop[index].display}</th>
  <th>${listLaptop[index].graphics}</th>
  <th>${listLaptop[index].os}</th>
  <th>${listLaptop[index].weight}</th>
  <th>${listLaptop[index].battery}</th>
  <th>${listLaptop[index].srcImage}</th>
  <th><button id="BtnBuyNow${listLaptop[index].dataCellIndex}" class="btn-buy">Buy now</button></th>
</tr>`);
}
  }
  changeVideo();
}

function changeVideo(){
  const trs = document.querySelectorAll("#productList tbody tr[data-cell-index]");
  trs.forEach((tr) => {
    tr.addEventListener("click", (event) => {
        const indexVideo=event.currentTarget.getAttribute("data-cell-index");
        tgVideo.src="videos/"+objListLaptop[indexVideo].srcVideo;
    });
  });
}



laptopModelInput.addEventListener("input", function() {
  __laptopModel = laptopModelInput.value;
  // console.log(__laptopModel);
  SearchLaptop();
});

processor.addEventListener("input", function() {
  _processor = processor.value;
  // console.log(_processor);
  SearchLaptop();  
});

RAM.addEventListener("input", function() {
  _ram = RAM.value;
  // console.log(_ram);
  SearchLaptop(); 
});

HardDisk.addEventListener("input", function() {
  _HardDisk = HardDisk.value;
  // console.log(_HardDisk);
  SearchLaptop();
});

Display.addEventListener("input", function() {
  _display = Display.value;
  // console.log(_display);
  SearchLaptop();
});


