// 카카오네비 api 문서
// https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js#supported-browser
// 도메인 등록
// https://developers.kakao.com/docs/latest/ko/getting-started/app#platform
// const URL = `https://apis-navi.kakaomobility.com/v1/priority=RECOMMEND&car_type=1&car_fuel=GASOLINE`;
// const INFO = `origin=127.11015314141542,37.39472714688412&destination=127.10824367964793%2C37.401937080111644`;
// origin
// 127.11015314141542,37.39472714688412
// destination
// 127.10824367964793,37.401937080111644
// const option = {
//     method : 'GET',
//     headers : new Headers({
//         "Authorization": `KakaoAK ${REST_API_KEY}`
//     }),
//     mode: 'no-cors',
//     body: JSON.stringify({
//         origin : '127.11015314141542,37.39472714688412',
//         destination : '127.10824367964793,37.401937080111644'
//     })
// }
// fetch(URL)
//     .then((res)=>{
//         res
//     })
// console.log(JSON.stringify({origin : '127.11015314141542,37.39472714688412',
//          destination : '127.10824367964793,37.401937080111644'}))
// const url2 = 'https://apis-navi.kakaomobility.com/v1/directions?origin=127.11015314141542,37.39472714688412&destination=127.10824367964793,37.401937080111644&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false';
// const req = new Request(url2, {
//     method: "GET",
//     headers: new Headers({ 
//         "Authorization": `KakaoAK ${REST_API_KEY}`
//     })
// });
// fetch(req)
//     .then(response => response.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch(err => console.log(err));
// const obj = {
//     origin: 'ee',
//     destination: 'bb'
// };
function KakaoNavi(obj) {
    const _obj = obj;
    const REST_API_KEY = 'a296f869f92b1a4919ba690e84991602';
    const URL = 'https://apis-navi.kakaomobility.com/v1/directions?{{option}}';
    function getOption(object) {
        let option = '';
        Object.entries(object).forEach(([key, value])=>{
            option += `${key}=${value}&`;
        });
        return option.slice(0, -1);
    }
    const req = new Request(URL.replace('{{option}}', getOption(_obj)), {
        method: "GET",
        headers: new Headers({
            "Authorization": `KakaoAK ${REST_API_KEY}`
        })
    });
    fetch(req).then((response)=>response.json()
    ).then((data)=>{
        console.log(data);
    }).catch((err)=>console.log(err)
    );
}

//# sourceMappingURL=index.9fb40cf5.js.map
