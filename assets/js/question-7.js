const tgVideo=document.getElementById("videoSRC");
const videoListLaptop=['FX506LH.mp4','FA0031DX.mp4','FX506LH.mp4','FA0031DX.mp4']
const nameListImgLaptop = ['I-a4vELC6haeuBSi.jpg','KOZRabsQkvMfbk8n.jpg','I-a4vELC6haeuBSi.jpg','KOZRabsQkvMfbk8n.jpg'];
const modelListLaptop = ['لپ تاپ ایسوس FX506LH','Victus 15-FA0031DX','لپ تاپ ایسوس FX506LH','Victus 15-FA0031DX'];
const processorListLaptop = ['Intel Core i5 10300H نسل 10','Intel Core i5 نسل 12','Intel Core i5 10300H نسل 10','Intel Core i5 نسل 12'];
const ramListLaptop = ['8GB DDR4','16GB DDR4','8GB DDR4','16GB DDR4'];
const hardListLaptop = ['512GB SSD','512GB SSD','512GB SSD','512GB SSD'];
const displayListLaptop = ["۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر","1920x1080","۳۵۹.۸x۲۵۶x۲۴.۹ میلی‌متر","1920x1080"];
const graphicsListLaptop = ['NVIDIA GeForce GTX 1650 4GB',"NVIDIA GeForce GTX 1650 4GB",'NVIDIA GeForce GTX 1650 4GB',"NVIDIA GeForce GTX 1650 4GB"];
const osListLaptop = ['Nothing','Nothing','Nothing','Nothing'];
const weightListLaptop = ['2.4 pounds','2.4 pounds','2.4 pounds','2.4 pounds'];
const batteryListLaptop = ["2H","2H","2H","2H"];
const priceListLaptop = ['34,800$','44,299$','34,800$','44,299$']
let model = "";
let picture = "";
let processor = '';
let ram = "";
let hard = "";
let display = "";
let graphics = "";
let os = "none";
let weight = '';
let battery = '';
let price = "";
let idBtnBuyNow = "";
let dataCellIndex = '';

const table = document.getElementById("productList");
const dataListModel=document.getElementById("laptopMdl");
const dataListProcessor=document.getElementById("proce");
const dataListRAM=document.getElementById("Ram");
const dataListHardDisk=document.getElementById("HardDisk");
const dataListDisplay=document.getElementById("Display");

function innerHtmlProducs() {
  for (let index = 0; index < nameListImgLaptop.length; index++) {
    let model = modelListLaptop[index];
    let picture = nameListImgLaptop[index];
    let processor = processorListLaptop[index];
    let ram = ramListLaptop[index];
    let hard = hardListLaptop[index];
    let display = displayListLaptop[index];
    let graphics = graphicsListLaptop[index];
    let os = osListLaptop[index];
    let weight = weightListLaptop[index];
    let battery = batteryListLaptop[index];
    let price = priceListLaptop[index];
    let idBtnBuyNow = index;
    let dataCellIndex = index;
    
    const trTable=`<tr data-cell-index=${dataCellIndex}>
                        <th>${model}</th>
                        <th><img class="img-laptop" src="image/${picture}" alt="image"></th>
                        <th>${processor}</th>
                        <th>${ram}</th>
                        <th>${hard}</th>
                        <th>${display}</th>
                        <th>${graphics}</th>
                        <th>${os}</th>
                        <th>${weight}</th>
                        <th>${battery}</th>
                        <th>${price}</th>
                        <th><button id="${idBtnBuyNow}" class="btn-buy">Buy now</button></th>
                    </tr>`

    table.insertAdjacentHTML('beforeend', trTable);
    dataListModel.insertAdjacentHTML('beforeend',`<option value="${model}">`);
    dataListProcessor.insertAdjacentHTML('beforeend',`<option value="${processor}">`);
    dataListRAM.insertAdjacentHTML('beforeend',`<option value="${ram}">`);
    dataListHardDisk.insertAdjacentHTML('beforeend',`<option value="${hard}">`);
    dataListDisplay.insertAdjacentHTML('beforeend',`<option value="${display}">`);
    
}
}

innerHtmlProducs();


const trs = document.querySelectorAll("#productList tbody tr[data-cell-index]");
  trs.forEach((tr) => {
    tr.addEventListener("click", (event) => {
        console.log(event.currentTarget.getAttribute("data-cell-index"));
        const indexVideo=event.currentTarget.getAttribute("data-cell-index");
        tgVideo.src="videos/"+videoListLaptop[indexVideo];
    });
  });


