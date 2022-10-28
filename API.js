fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=Spider-Man&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[10].name);
    spider = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[10].description);
    spider_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[10].thumbnail.path+'/portrait_medium.jpg');
    spider_img = JSON.parse(char_img1);
    document.getElementById('spider-img').src=spider_img;
    document.getElementById('api-for-character-spider').innerHTML=spider;
    document.getElementById('api-for-description-spider').innerHTML=spider_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=Hulk&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    hulk = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    hulk_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    hulk_img = JSON.parse(char_img1);
    document.getElementById('hulk-img').src=hulk_img;
    document.getElementById('api-for-character-hulk').innerHTML=hulk;
    document.getElementById('api-for-description-hulk').innerHTML=hulk_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=X-Man&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    xman = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    xman_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    xman_img = JSON.parse(char_img1);
    document.getElementById('xman-img').src=xman_img;
    document.getElementById('api-for-character-xman').innerHTML=xman;
    document.getElementById('api-for-description-xman').innerHTML=xman_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=thor&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    thor = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    thor_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    thor_img = JSON.parse(char_img1);
    document.getElementById('thor-img').src=thor_img;
    document.getElementById('api-for-character-thor').innerHTML=thor;
    document.getElementById('api-for-description-thor').innerHTML=thor_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=Abomination&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    abomination = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    abomination_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    abomination_img = JSON.parse(char_img1);
    document.getElementById('abomination-img').src=abomination_img;
    document.getElementById('api-for-character-abomination').innerHTML=abomination;
    document.getElementById('api-for-description-abomination').innerHTML=abomination_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=A-Bomb%20(HAS)&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    abomb = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    abomb_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    abomb_img = JSON.parse(char_img1);
    document.getElementById('abomb-img').src=abomb_img;
    document.getElementById('api-for-character-abomb').innerHTML=abomb;
    document.getElementById('api-for-description-abomb').innerHTML=abomb_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[2].name);
    aim = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[2].description);
    aim_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[2].thumbnail.path+'/portrait_medium.jpg');
    aim_img = JSON.parse(char_img1);
    document.getElementById('aim-img').src=aim_img;
    document.getElementById('api-for-character-aim').innerHTML=aim;
    document.getElementById('api-for-description-aim').innerHTML=aim_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=d&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[9].name);
    daredevil = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[9].description);
    daredevil_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[9].thumbnail.path+'/portrait_medium.jpg');
    daredevil_img = JSON.parse(char_img1);
    document.getElementById('daredevil-img').src=daredevil_img;
    document.getElementById('api-for-character-daredevil').innerHTML=daredevil;
    document.getElementById('api-for-description-daredevil').innerHTML=daredevil_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=b&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[3].name);
    baron = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[3].description);
    baron_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[3].thumbnail.path+'/portrait_medium.jpg');
    baron_img = JSON.parse(char_img1);
    document.getElementById('baron-img').src=baron_img;
    document.getElementById('api-for-character-baron').innerHTML=baron;
    document.getElementById('api-for-description-baron').innerHTML=baron_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=c&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[13].name);
    captain = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[13].description);
    captain_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[13].thumbnail.path+'/portrait_medium.jpg');
    captain_img = JSON.parse(char_img1);
    document.getElementById('captain-img').src=captain_img;
    document.getElementById('api-for-character-captain').innerHTML=captain;
    document.getElementById('api-for-description-captain').innerHTML=captain_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=f&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[1].name);
    falcon = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[1].description);
    falcon_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[1].thumbnail.path+'/portrait_medium.jpg');
    falcon_img = JSON.parse(char_img1);
    document.getElementById('falcon-img').src=falcon_img;
    document.getElementById('api-for-character-falcon').innerHTML=falcon;
    document.getElementById('api-for-description-falcon').innerHTML=falcon_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=f&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[31].name);
    franklin = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[31].description);
    franklin_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[31].thumbnail.path+'/portrait_medium.jpg');
    franklin_img = JSON.parse(char_img1);
    document.getElementById('franklin-img').src=franklin_img;
    document.getElementById('api-for-character-franklin').innerHTML=franklin;
    document.getElementById('api-for-description-franklin').innerHTML=franklin_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=g&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[60].name);
    gwen = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[60].description);
    gwen_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[60].thumbnail.path+'/portrait_medium.jpg');
    gwen_img = JSON.parse(char_img1);
    document.getElementById('gwen-img').src=gwen_img;
    document.getElementById('api-for-character-gwen').innerHTML=gwen;
    document.getElementById('api-for-description-gwen').innerHTML=gwen_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=h&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[22].name);
    hawkeye = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[22].description);
    hawkeye_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[22].thumbnail.path+'/portrait_medium.jpg');
    hawkeye_img = JSON.parse(char_img1);
    document.getElementById('hawkeye-img').src=hawkeye_img;
    document.getElementById('api-for-character-hawkeye').innerHTML=hawkeye;
    document.getElementById('api-for-description-hawkeye').innerHTML=hawkeye_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=h&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[25].name);
    hela = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[25].description);
    hela_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[25].thumbnail.path+'/portrait_medium.jpg');
    hela_img = JSON.parse(char_img1);
    document.getElementById('hela-img').src=hela_img;
    document.getElementById('api-for-character-hela').innerHTML=hela;
    document.getElementById('api-for-description-hela').innerHTML=hela_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=i&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[28].name);
    iron = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[28].description);
    iron_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[28].thumbnail.path+'/portrait_medium.jpg');
    iron_img = JSON.parse(char_img1);
    document.getElementById('iron-img').src=iron_img;
    document.getElementById('api-for-character-iron').innerHTML=iron;
    document.getElementById('api-for-description-iron').innerHTML=iron_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[53].title);
    kirbycom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[53].description);
    kirbycom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[53].thumbnail.path+'/portrait_medium.jpg');
    kirbycom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[53].isbn); 
    kirbycomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-kirby').innerHTML=kirbycomisbn;
    document.getElementById('kirbycomic-img').src=kirbycom_img;
    document.getElementById('api-for-comic-kirby').innerHTML=kirbycom;
    document.getElementById('api-for-descomic-kirby').innerHTML=kirbycom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&titleStartsWith=Spider-Man&ts=1&limit=100&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[2].title);
    spidercom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[2].description);
    spidercom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[2].thumbnail.path+'/portrait_medium.jpg');
    spidercom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[2].isbn); 
    spidercomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-spider').innerHTML=spidercomisbn;
    document.getElementById('spidercomic-img').src=spidercom_img;
    document.getElementById('api-for-comic-spider').innerHTML=spidercom;
    document.getElementById('api-for-descomic-spider').innerHTML=spidercom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&titleStartsWith=Fantastic&ts=1&limit=100&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[20].title);
    fantasticcom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[20].description);
    fantasticcom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[20].thumbnail.path+'/portrait_medium.jpg');
    fantasticcom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[20].isbn); 
    fantasticcomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-fantastic').innerHTML=fantasticcomisbn;
    document.getElementById('fantasticcomic-img').src=fantasticcom_img;
    document.getElementById('api-for-comic-fantastic').innerHTML=fantasticcom;
    document.getElementById('api-for-descomic-fantastic').innerHTML=fantasticcom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[50].title);
    marvelcom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[50].description);
    marvelcom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[50].thumbnail.path+'/portrait_medium.jpg');
    marvelcom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[50].isbn); 
    marvelcomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-marvel').innerHTML=marvelcomisbn;
    document.getElementById('marvelcomic-img').src=marvelcom_img;
    document.getElementById('api-for-comic-marvel').innerHTML=marvelcom;
    document.getElementById('api-for-descomic-marvel').innerHTML=marvelcom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[51].title);
    marvelviscom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[51].description);
    marvelviscom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[51].thumbnail.path+'/portrait_medium.jpg');
    marvelviscom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[51].isbn); 
    marvelviscomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-marvelvis').innerHTML=marvelviscomisbn;
    document.getElementById('marvelviscomic-img').src=marvelviscom_img;
    document.getElementById('api-for-comic-marvelvis').innerHTML=marvelviscom;
    document.getElementById('api-for-descomic-marvelvis').innerHTML=marvelviscom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[54].title);
    spideromcom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[54].description);
    spideromcom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[54].thumbnail.path+'/portrait_medium.jpg');
    spideromcom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[54].isbn); 
    spideromcomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-spiderom').innerHTML=spideromcomisbn;
    document.getElementById('spideromcomic-img').src=spideromcom_img;
    document.getElementById('api-for-comic-spiderom').innerHTML=spideromcom;
    document.getElementById('api-for-descomic-spiderom').innerHTML=spideromcom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[59].title);
    furycom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[59].description);
    furycom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[59].thumbnail.path+'/portrait_medium.jpg');
    furycom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[59].isbn); 
    furycomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-fury').innerHTML=furycomisbn;
    document.getElementById('furycomic-img').src=furycom_img;
    document.getElementById('api-for-comic-fury').innerHTML=furycom;
    document.getElementById('api-for-descomic-fury').innerHTML=furycom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[58].title);
    marveltailscom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[58].description);
    marveltailscom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[58].thumbnail.path+'/portrait_medium.jpg');
    marveltailscom_img = JSON.parse(char_img1);
    document.getElementById('marveltailscomic-img').src=marveltailscom_img;
    document.getElementById('api-for-comic-marveltails').innerHTML=marveltailscom;
    document.getElementById('api-for-descomic-marveltails').innerHTML=marveltailscom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[64].title);
    hulkcom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[64].description);
    hulkcom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[64].thumbnail.path+'/portrait_medium.jpg');
    hulkcom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[64].isbn); 
    hulkcomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-hulk').innerHTML=hulkcomisbn;
    document.getElementById('hulkcomic-img').src=hulkcom_img;
    document.getElementById('api-for-comic-hulk').innerHTML=hulkcom;
    document.getElementById('api-for-descomic-hulk').innerHTML=hulkcom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[65].title);
    drstrangecom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[65].description);
    drstrangecom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[65].thumbnail.path+'/portrait_medium.jpg');
    drstrangecom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[65].isbn); 
    drstrangecomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-drstrange').innerHTML=drstrangecomisbn;
    document.getElementById('drstrangecomic-img').src=drstrangecom_img;
    document.getElementById('api-for-comic-drstrange').innerHTML=drstrangecom;
    document.getElementById('api-for-descomic-drstrange').innerHTML=drstrangecom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[69].title);
    xmancom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[69].description);
    xmancom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[69].thumbnail.path+'/portrait_medium.jpg');
    xmancom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[69].isbn); 
    xmancomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-xman').innerHTML=xmancomisbn;
    document.getElementById('xmancomic-img').src=xmancom_img;
    document.getElementById('api-for-comic-xman').innerHTML=xmancom;
    document.getElementById('api-for-descomic-xman').innerHTML=xmancom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[70].title);
    humancom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[70].description);
    humancom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[70].thumbnail.path+'/portrait_medium.jpg');
    humancom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[70].isbn); 
    humancomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-human').innerHTML=humancomisbn;
    document.getElementById('humancomic-img').src=humancom_img;
    document.getElementById('api-for-comic-human').innerHTML=humancom;
    document.getElementById('api-for-descomic-human').innerHTML=humancom_des;
});

fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[73].title);
    secretcom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[73].description);
    secretcom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[73].thumbnail.path+'/portrait_medium.jpg');
    secretcom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[73].isbn); 
    secretcomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-secret').innerHTML=secretcomisbn;
    document.getElementById('secretcomic-img').src=secretcom_img;
    document.getElementById('api-for-comic-secret').innerHTML=secretcom;
    document.getElementById('api-for-descomic-secret').innerHTML=secretcom_des;
});

fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[76].title);
    antcom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[76].description);
    antcom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[76].thumbnail.path+'/portrait_medium.jpg');
    antcom_img = JSON.parse(char_img1);
    comisbn = JSON.stringify(completedata.data.results[76].isbn); 
    antcomisbn = JSON.parse(comisbn);
    document.getElementById('api-for-isbn-ant').innerHTML=antcomisbn;
    document.getElementById('antcomic-img').src=antcom_img;
    document.getElementById('api-for-comic-ant').innerHTML=antcom;
    document.getElementById('api-for-descomic-ant').innerHTML=antcom_des;
});














































fetch('https://gateway.marvel.com:443/v1/public/series?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[69].title);
    dareser = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[69].description);
    dareser_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[69].thumbnail.path+'/portrait_medium.jpg');
    dareser_img = JSON.parse(char_img1);
    document.getElementById('dareseries-img').src=dareser_img;
    document.getElementById('api-for-series-dare').innerHTML=dareser;
    document.getElementById('api-for-desseries-dare').innerHTML=dareser_des;
});


fetch('https://gateway.marvel.com:443/v1/public/series?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[10].title);
    spiderser = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[10].description);
    spiderser_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[10].thumbnail.path+'/portrait_medium.jpg');
    spiderser_img = JSON.parse(char_img1);
    document.getElementById('spiderseries-img').src=spiderser_img;
    document.getElementById('api-for-series-spider').innerHTML=spiderser;
    document.getElementById('api-for-desseries-spider').innerHTML=spiderser_des;
});


fetch('https://gateway.marvel.com:443/v1/public/series?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[28].title);
    avengerser = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[28].description);
    avengerser_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[28].thumbnail.path+'/portrait_medium.jpg');
    avengerser_img = JSON.parse(char_img1);
    document.getElementById('avengerseries-img').src=avengerser_img;
    document.getElementById('api-for-series-avenger').innerHTML=avengerser;
    document.getElementById('api-for-desseries-avenger').innerHTML=avengerser_des;
});

fetch('https://gateway.marvel.com:443/v1/public/series?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[47].title);
    captainser = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[47].description);
    captainser_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[47].thumbnail.path+'/portrait_medium.jpg');
    captainser_img = JSON.parse(char_img1);
    document.getElementById('captainseries-img').src=captainser_img;
    document.getElementById('api-for-series-captain').innerHTML=captainser;
    document.getElementById('api-for-desseries-captain').innerHTML=captainser_des;
});


fetch('https://gateway.marvel.com:443/v1/public/series?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[77].title);
    deadpoolser = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[77].description);
    deadpoolser_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[77].thumbnail.path+'/portrait_medium.jpg');
    deadpoolser_img = JSON.parse(char_img1);
    document.getElementById('deadpoolseries-img').src=deadpoolser_img;
    document.getElementById('api-for-series-deadpool').innerHTML=deadpoolser;
    document.getElementById('api-for-desseries-deadpool').innerHTML=deadpoolser_des;
});








































fetch('https://gateway.marvel.com:443/v1/public/events?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].title);
    civileve = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    civileve_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    civileve_img = JSON.parse(char_img1);
    document.getElementById('civilevent-img').src=civileve_img;
    document.getElementById('api-for-events-civil').innerHTML=civileve;
    document.getElementById('api-for-desevents-civil').innerHTML=civileve_des;
});


fetch('https://gateway.marvel.com:443/v1/public/events?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[1].title);
    houseeve = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[1].description);
    houseeve_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[1].thumbnail.path+'/portrait_medium.jpg');
    houseeve_img = JSON.parse(char_img1);
    document.getElementById('houseevent-img').src=houseeve_img;
    document.getElementById('api-for-events-house').innerHTML=houseeve;
    document.getElementById('api-for-desevents-house').innerHTML=houseeve_des;
});

fetch('https://gateway.marvel.com:443/v1/public/events?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[2].title);
    evolveeve = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[2].description);
    evolveeve_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[2].thumbnail.path+'/portrait_medium.jpg');
    evolveeve_img = JSON.parse(char_img1);
    document.getElementById('evolveevent-img').src=evolveeve_img;
    document.getElementById('api-for-events-evolve').innerHTML=evolveeve;
    document.getElementById('api-for-desevents-evolve').innerHTML=evolveeve_des;
});


