import { callData } from "./callData.js";
// 성능테스트
// https://yceffort.kr/2020/12/measuring-performance-of-javascript-functions
/*
tfcwkerMvmnCnterNm				교통약자이동지원센터명
rdnmadr				소재지도로명주소 // 없는거: 3개(lnmadr는 있음)
lnmadr				소재지지번주소  // 없는거: 20개(rdnmadr는 있음) => 도로명주소, 지번주소 둘 다 없는 경우는 없음
latitude				위도
longitude				경도
carHoldCo				보유차량대수
carHoldKnd				보유차량종류
slopeVhcleCo				슬로프형휠체어차량대수
liftVhcleCo				리프트형휠체어차량대수
rceptPhoneNumber				예약접수전화번호
rceptItnadr				예약접수인터넷주소
appSvcNm				앱서비스명
weekdayRceptOpenHhmm				평일예약접수운영시작시각
weekdayRceptColseHhmm				평일예약접수운영종료시각
wkendRceptOpenHhmm				주말예약접수운영시작시각
wkendRceptCloseHhmm				주말예약접수운영종료시각
weekdayOperOpenHhmm				차량평일운행시작시각
weekdayOperColseHhmm				차량평일운행종료시각
wkendOperOpenHhmm				차량주말운행시작시각
wkendOperCloseHhmm				차량주말운행종료시각
beffatResvePd				사전예약신청기간
useLmtt				차량이용제한사항
insideOpratArea				차량관내운행지역
outsideOpratArea				차량관외운행지역
useTrget				차량이용대상
useCharge				차량이용요금
institutionNm				관리기관명
phoneNumber				관리기관전화번호
referenceDate				데이터기준일자
instt_code				제공기관코드
instt_nm				제공기관기관명
*/

const DATA = callData;

export function getData(key, value) {
    let KEY = '';
    if(key === 'area'){
        // 도로명주소
        KEY = 'rdnmadr';
    }
    const VAL = value;
    let result = [];

    if(KEY === 'rdnmadr'){
        DATA.map(value =>{
            // 도로명주소 없을 때
            if(value[KEY] === ''){
                // 지번주소 확인
                if(value.lnmadr.indexOf(VAL) > -1){
                    result.push(value);
                }
            }else{ 
                if(value[KEY].indexOf(VAL) > -1){
                    result.push(value);
                }
            }
        })
    }

    return result;
}

