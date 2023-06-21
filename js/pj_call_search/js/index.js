
// 인증키(인코딩)
// 9MswFkR%2FWc5ryIBw8t3NNcK00kpfKSLFKLPbDGvy8L3ebhId5ngHI2xXmGMM3YhK5yutxy7mi1YLizOuaXpaDQ%3D%3D
// var data = {
//     serviceKey: 'UTF-8로 인코딩된 인증키',
//     s_page: 0,
//     s_list: 1,
//     type: 'json',
//     instt_nm: 'UTF-8로 인코딩된 value'
// };

// $.ajax({
//     post: 'get',
//     url: 'http://api.data.go.kr/openapi/tn_pubr_public_tfcwker_mvmn_cnter_api',
//     data: data,
//     dataType: 'jsonp',
//     success: function(data){
//          console.log(data);
//     }
// });

// 2022-05-05
// 데이터가 총 157개로 매우 적음
// API 이용하여 데이터를 얻은 후 json으로 저장 후 사용
// const serviceKey = '9MswFkR%2FWc5ryIBw8t3NNcK00kpfKSLFKLPbDGvy8L3ebhId5ngHI2xXmGMM3YhK5yutxy7mi1YLizOuaXpaDQ%3D%3D';
// var xhr = new XMLHttpRequest();
// var url = 'http://api.data.go.kr/openapi/tn_pubr_public_tfcwker_mvmn_cnter_api';
// var queryParams = '?' + encodeURIComponent('serviceKey') + '='+serviceKey; 
// queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); 
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000');

// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         console.log(this.responseText);
//         // console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');

import {SearchInfo} from './searchInfo.js';
// import {mapData, initSearchMap} from './map.js';

$(document).ready(()=>{
    const searchInfo = new SearchInfo();
    // const option = {
    //     origin: '127.11015314141542,37.39472714688412',
    //     destination : '127.10824367964793,37.401937080111644'
    // };

    // const map = new mapData(option);
    // initSearchMap();
   
})
