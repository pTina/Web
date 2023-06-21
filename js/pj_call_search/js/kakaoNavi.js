
// 카카오네비 api 문서
// https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js#supported-browser
// 도메인 등록
// https://developers.kakao.com/docs/latest/ko/getting-started/app#platform

// import $export from "core-js/modules/_export";



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

const REST_API_KEY = 'a296f869f92b1a4919ba690e84991602';
const URL = 'https://apis-navi.kakaomobility.com/v1/directions?car_type=2&{{option}}';


class NaviData {
    constructor(obj) {
        this._obj = obj;
        this._data;
        this._origin;
        this._destination;

        this.KakaoNavi(this.getOption(this._obj));
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    getOption(object) {
        let option = '';
        Object.entries(object).forEach(([key, value]) => {
            option += `${key}=${value}&`;
        });

        return option.slice(0, -1);
    }

    KakaoNavi(opt) {
        const self = this;
        const req = new Request(URL.replace('{{option}}', opt), {
            method: "GET",
            headers: new Headers({
                "Authorization": `KakaoAK ${REST_API_KEY}`
            })
        });

        fetch(req)
            .then(response => response.json())
            .then((data) => {
                self.data = data;
                const distance = self.data.routes[0].summary.distance
                const fare = self.data.routes[0].summary.fare;

                const result = {
                    'dist': distance,
                    'fare': fare
                };

                observer.notify("setSummary", result);
                
            })
            .catch(err => console.log(err));

    }
}





// function initSearchMap() {
//     $(document).on('click', '.btnMap', (e) => {
//         const $this = $(e.target);
//         console.log($this.attr('data')); // origin, destination
//         KakaoMap();
//     })
// }


// 주소 검색 API
// https://postcode.map.daum.net/guide

// 카카오맵 API 위도경도 알아내기
// https://programmers-sosin.tistory.com/entry/Python-Kakao-API%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%A3%BC%EC%86%8C%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%9C%84%EB%8F%84-%EA%B2%BD%EB%8F%84-%EC%95%8C%EC%95%84%EB%82%B4%EA%B8%B0-1
// 카카오맵API
// https://apis.map.kakao.com/web/guide/#routeurl
// import kakaoMap from "https://dapi.kakao.com/v2/maps/sdk.js?appkey=c9396da6d2318a0e00615c4923dbdc04";

// const container = $('#');
// var options = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3
// };

// var map = new kakao.maps.Map(container, options);

