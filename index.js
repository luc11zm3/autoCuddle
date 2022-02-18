const axios = require("axios");
const FormData = require("form-data");
//cuddle
setInterval(async function(){
let id = [
        'vuotve_2997', 'vuotve_3517', 'vuotve_3729', 
        'vuotve_1799', 'vuotve_3234', 'vuotve_2306',
        'vuotve_3413', 'vuotve_1930','vuotve_3094', 
        'vuotve_3244', 'vuotve_2443', 'vuotve_2290',
        'vuotve_2129', 'vuotve_2345'
    ]
    for (var i = 0; i < id.length; i++) {
        await cuddling(id[i], '👋Vuốt ve')
    }
},259200000);
//shower
setInterval(async function(){
let id = [
'tamwaifu_2997', 'tamwaifu_3517',
'tamwaifu_3729', 'tamwaifu_1799',
'tamwaifu_3234', 'tamwaifu_2306',
'tamwaifu_3413', 'tamwaifu_1930',
'tamwaifu_3094', 'tamwaifu_3244', 
'tamwaifu_2443', 'tamwaifu_2290', 
'tamwaifu_2129', 'tamwaifu_2345'
]
    for (var i = 0; i < id.length; i++) {
        await cuddling(id[i], '💦Tắm')
    }
},10000);
//
async function cuddling(id, value){
var form = new FormData();
var hentaivn_cookie = process.env.cookie;
        form.append(id, value);
            res = await axios({
                    method: "post",
                    url: "https://hentaivn.moe/forum/my_waifu.php",
                    data: form,
                    headers: {...form.getHeaders(), cookie: hentaivn_cookie}
                }); 
        console.log(`Completed ${value} for ${id}`);
        }

