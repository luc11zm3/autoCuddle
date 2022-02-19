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
var hentaivn_cookie = '_ga=GA1.1.1944780186.1644012812; viewz1=0; user_id=342221; user_pass=-%E2%98%89%E2%9D%A5c--ec%E2%98%86e%40%E0%BF%90e%E2%98%89%E2%99%A5%E2%98%85%DB%B5%E2%9C%BFc%DB%B5%E2%98%89%E2%98%86-%E2%99%A5e%DB%B5_%E2%98%86e%E2%9C%BF%E2%98%86%E0%BF%90; user_name=Bao_Ngoc; user_ava=http%3A%2F%2Fanh.upanhmoi.net%2Fimages%2F1200%2F2022%2F01%2F19%2F1642608068-nguoiyeubao.png; capbac=7; user_nhom=89; user_upload=0; _ga_KWGNBG0QW0=GS1.1.1645214601.91.1.1645218951.0';
        form.append(id, value);
            res = await axios({
                    method: "post",
                    url: "https://hentaivn.moe/forum/my_waifu.php",
                    data: form,
                    headers: {...form.getHeaders(), cookie: hentaivn_cookie}
                }); 
        console.log(`Completed ${value} for ${id}`);
        }
