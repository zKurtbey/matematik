

tabloyukle();

function tabloyukle(){

    let tablo = document.cookie;

    if(tablo == ""){

        document.querySelector(".tablo").style.display="none";

    } else{

        let cookiesArray = document.cookie.split("; ");

        cookiesArray.sort((a, b) => {
        
            let valueA = parseFloat(a.split("=")[1]);
        
            let valueB = parseFloat(b.split("=")[1]);
        
            return valueA - valueB;
        
        });

        let [birinci, puan] = cookiesArray[cookiesArray.length - 1].split("=");

        document.querySelector(".bir").querySelector("b").textContent = " " + birinci;

        document.querySelector(".bir").querySelector("i").textContent = " " + puan + " Puan";

        if(cookiesArray[cookiesArray.length - 2] != null){
        
            let [ikinci, ikincipuan] = cookiesArray[cookiesArray.length - 2].split("=");

            document.querySelector(".iki").querySelector("b").textContent = " " + ikinci;

            document.querySelector(".iki").querySelector("i").textContent = " " + ikincipuan + " Puan";
        
        } else{

            document.querySelector(".iki").querySelector("b").textContent = " Boş";

        }

        if(cookiesArray[cookiesArray.length - 3] != null){

            let [ucuncu, ucuncupuan] = cookiesArray[cookiesArray.length - 3].split("=");

            document.querySelector(".uc").querySelector("b").textContent = " " + ucuncu;

            document.querySelector(".uc").querySelector("i").textContent = " " + ucuncupuan + " Puan";

        } else{

            document.querySelector(".uc").querySelector("b").textContent = " Boş";

        }

    }

}

var soru = document.querySelector("#secilen");

document.querySelector("#isimgonder").addEventListener("click", ()=>{

    var isim = document.querySelector("#yarisacak").value;

    if(isim == ""){

        alert("Lütfen bir isim giriniz.");

    } else{

        if(isim.trim(" ") == ""){

            alert("Lütfen geçerli bir isim giriniz.")

        } else{
        
            baslat(isim);
            
        }
        
    }


});

let puan = 0;

function baslat(isim){
    
    const sorular = [
        {soru : "1 + 1 kaç yapar?", cevap : "2", yanlis : ["3","0","4"]}, 
        {soru : "Harezmi'nin bulduğu sayı nedir?", cevap : "0", yanlis : ["1", "i", "-1"]},
        {soru : "Deltoit kaç kenarlıdır?", cevap : "4", yanlis : ["7", "5", "2"]},
        {soru : "Üçgenin iç açıları toplamı kaçtır?", cevap : "180", yanlis : ["120", "145", "360"]},
        {soru : "Üçgenin alan formülü nedir?", cevap : "Taban * yükseklik / 2", yanlis : ["Alt taban + yükseklik / 2", "Pi * alt taban / 2", "Çevre * uzun kenar / 2"]}, 
        {soru : "Yamuğun alan formülü nedir?", cevap : "((Üst kenar + alt kenar) / 2) * yükseklik", yanlis : ["((Üst kenar + alt kenar) * 2) / yükseklik", "(Üst kenar - alt kenar) * yükseklik * 2", "(Üst kenar / 2) * (alt kenar + yükseklik)"]},
        {soru : "Dikdörtgenin alan formülü nedir?", cevap : "Uzun kenar * kısa kenar", yanlis : ["Yükseklik * çevre", "Uzun kenar * pi", "Kısa kenar * uzun kenar / 2"]},
        {soru : "Yamuğun çevre formülü nedir?", cevap : "Bütün kenarların toplamı", yanlis : ["Yükseklik / 2", "Üst kenar * 2", "Alt kenar + üst kenar / 2"]},
        {soru : "'2^3' yazısındaki '^' neyi ifade eder?", cevap : "Üslü ifade", yanlis : ["Karekök", "İki çıkarma", "İkiyle çarpma"]},
        {soru : "Üçgenin dış açıları toplamı kaçtır?", cevap : "360", yanlis : ["180", "320", "120"]},
        {soru : "Dikdörtgenin dış açıları toplamı kaçtır?",  cevap : "360", yanlis : ["180", "90", "120"]},
        {soru : "Karenin bir açısı kaç derecedir?", cevap : "90", yanlis : ["80", "120", "45"]},
        {soru : "Bir kenarı 30cm olan bir karenin çevresi kaç cm'dir?",  cevap : "120", yanlis : ["75", "85", "180"]},
        {soru : "5'in ikili kombinasyonu kaçtır?", cevap : "10", yanlis : ["5", "50", "15"]},
        {soru : "Karenin iç açıları toplamı kaçtır?", cevap : "360", yanlis : ["90", "180", "270"]},
        {soru : "8 kenarlı düzgün bir cismin her bir açısı kaç derecedir?", cevap : "135", yanlis : ["120", "100", "108"]},
        {soru : "5 kenarlı düzgün bir cismin her bir açısı kaç derecedir?", cevap : "108", yanlis : ["120", "90", "75"]},
        {soru : "7 kenarlı bir cismin iç açıları toplamı kaç derecedir?", cevap : "900", yanlis : ["960", "1080", "1020"]},
        {soru : "Dairenin alan formülü nedir?", cevap : "Pi * r^2", yanlis : ["Pi * r * 2", "Pi * r / 3", "Pi * 360"]},
        {soru : "Pi sayısı yaklaşık olarak kaça eşittir?", cevap : "3,14", yanlis : ["3,21", "2,13", "3,4"]},
        {soru : "10 kenarlı düzgün bir cismin dış açıları toplamı kaç derecedir?", cevap : "360", yanlis : ["1800", "480", "720"]},
        {soru : "Düzgün bir cismin verilen kenar sayısından iç açıları toplamını bulma formülü nedir?", cevap : "(Kenar sayısı - 2) * 180", yanlis : ["Kenar sayısı / 2 * 360", "(Kenar sayısı - 2) * 360", "Kenar sayısı * 180"]},
        {soru : "İç açılarından biri 120 olan düzgün bir cismin herhangi bir dış açısı kaçtır?", cevap : "60", yanlis : ["80", "100", "120"]},
        {soru : "Dik üçgenin uzun kenarının uzunluğunu bulma formülü nedir?", cevap : "Diğer kenarların karesinin toplamının karekökü", yanlis : ["Taban * yükseklik / 2", "Kenarlar toplamı / 2", "Kenarlar çarpımı / 3"]},
        {soru : "Bir kenarı 8cm olan eşkenar üçgenin diğer kenarlarından biri kaç cm'dir?", cevap : "8", yanlis : ["18", "7", "4"]},
        {soru : "Karesi 196 olan sayı kaçtır?", cevap : "13", yanlis : ["14", "16", "18"]},
        {soru : "n=2120513664800790253539677313137965097135330918669739874876522884425419822192953572604543957853144550543299308528152782351004280540006585446163977609483042476127757655581165623971024036878498518274613105037866315442871254527494237734606519519702337833399\nn,253 basamaklı 2 treoktogintilyon, 120 dooktogintilyon sayısı olmak üzere (3 üssü n) 8 sayısı veriliyor. Bu sayıya 'a' diyelim, yani a=(3 üssü n) 8 olsun,\nb=55801173123655464364858943795512606247545285081165701401920499187099710397571\n77 basamaklı 55 kattuorvigintilyon, 801 trevigintilyon sayısı veriliyor. b asal olmayan bir tamsayıdır. b'nin farklı tüm asal çarpanları göz önüne alınıyor. b'nin farklı asal çarpanları a'yı tam bölen var mı varsa hangisi ya da hangileri listeleyebilir misiniz?", cevap : "2", yanlis : ["15", "1", "7"]},
        {soru : "Alanı 36 olan karenin bir kenarı kaç cm'dir?", cevap : "6", yanlis : ["4", "9", "12"]},
        {soru : "1500'ün yarısı kaçtır?", cevap : "750", yanlis : ["125", "875", "650"]},
    ];

    let pas = 3;

    document.querySelector(".yarisan").textContent = "Yarışan: " + isim;

    document.querySelector("#isim").style.display="none";

    document.querySelector("#soru").style.display="flex";

    var timer = 0;
    
    document.querySelector(".sure").textContent = timer;

    let intervalId = setInterval(function() {

        timer += 1;

        document.querySelector(".sure").textContent = timer;

        if(timer == 60){

            clearInterval(intervalId);

            bitti(isim, puan);

        } else if(timer >= 55){

            document.querySelector(".sure").style.color="red";
            
        } else if(timer >= 50){
            
            document.querySelector(".sure").style.color="tomato";
            
        }  else if(timer >= 45){
            
            document.querySelector(".sure").style.color="orange";
            
        }
        
    }, 1000);

    soruyaz(isim, puan, intervalId, pas, sorular);

}

function soruyaz(isim, puan, intervalId, pas, sorular){

    document.querySelector(".bitir").addEventListener("click", ()=>{

        bitti(isim, puan);

        clearInterval(intervalId);

    });
    
    document.querySelector(".pas").addEventListener("click", ()=>{

        if(pas != 0){

            pas = pas - 1;

            if(pas == 0){

                document.querySelector(".pas").style="background-color: gray; box-shadow: 0 0 1svw gray; border: 1px solid gray";

            }

            soruyaz(isim, puan, intervalId, pas, sorular)

        }

    });

    document.querySelector(".sure").style.display="flex";

    document.querySelector(".pas").textContent = "Pas (" + pas + ")";

    document.querySelector(".puan").textContent = "Puan: " + puan;

    document.querySelectorAll(".cevap").forEach(cvp => {
        
        cvp.remove();

    });

    var secenekler = [];
    
    for (let i = 0; i < 4; i++){
        
        var yeni = document.createElement("h3");

        yeni.classList.add("cevap");
        
        document.querySelector(".secenek").appendChild(yeni);

        secenekler.push(yeni);
    
    }

    var dogruCevabinKoyulacagiSecenek = secenekler[Math.floor(Math.random() * secenekler.length)];

    var dogruCevabinKoyulacagiSeceneginKonumu = secenekler.indexOf(dogruCevabinKoyulacagiSecenek);

    secenekler.splice(dogruCevabinKoyulacagiSeceneginKonumu, 1);

    var soru = sorular[Math.floor(Math.random() * sorular.length)];

    var sorununKonumu = sorular.indexOf(soru);
    
    var yazilanSoru = sorular[sorununKonumu].soru;

    document.querySelector(".sorubaslik").textContent = yazilanSoru;

    var dogruCevap = sorular[sorununKonumu].cevap;

    if(dogruCevap == "750"){

        document.querySelector("#joker").style.display="flex";

        document.querySelector(".yagiz").addEventListener("click", ()=>{

            document.querySelector("#yagizjoker").style.display="flex";

            let video = document.querySelector("#yagizjokervideo");

            video.play();

            setTimeout(() => {
                
                document.querySelector("#yagizjoker").style.display="none";

                document.querySelector("#joker").style.display="none";

            }, 6000);

        });

    }

    document.querySelectorAll(".cevap")[dogruCevabinKoyulacagiSeceneginKonumu].textContent = dogruCevap;

    const dogruTiklandi = ()=>{

        puan++;
    
        soruyaz(isim, puan, intervalId, pas, sorular);
    
    }

    const yanlisTiklandi = ()=>{

        clearInterval(intervalId);
        
        bitti(isim, puan);
    
    }

    document.querySelectorAll(".cevap")[dogruCevabinKoyulacagiSeceneginKonumu].addEventListener("click", dogruTiklandi);

    for (let cevap = 0; cevap < 3; cevap++) {
        
        var yanlis = sorular[sorununKonumu].yanlis[cevap];

        var yanlisCevapSecenegi = secenekler[Math.floor(Math.random() * secenekler.length)];

        var yanlisCevapSecenegininKonumu = secenekler.indexOf(yanlisCevapSecenegi);
        
        secenekler[yanlisCevapSecenegininKonumu].textContent = yanlis;
        
        yanlisCevapSecenegi.addEventListener("click", yanlisTiklandi);
        
        secenekler.splice(yanlisCevapSecenegininKonumu, 1);

    }

    sorular.splice(sorununKonumu, 1);

}

function bitti(isim, puan){

    document.cookie = `${isim}=${puan}; expires=2020 12:00:00 UTC; path=/`;

    tabloyukle();

    let video = document.querySelector("#iyiilerledim");

    video.play();

    document.querySelector("#soru").style.display="none";

    document.querySelector("#isim").style.display="none";

    document.querySelector(".sure").style.display="none";

    document.querySelector("#bitis").style.display="flex";

    document.querySelector(".kapat").addEventListener("click", ()=>{

        video.pause();

        video.currentTime = 0;

        document.querySelector("#isim").style.display="flex";

        document.querySelector("#bitis").style.display="none";

    });

}
