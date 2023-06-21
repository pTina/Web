// 2022-05-12
// 객체를 형태가 다른 객체로 변환하기

// sourceObject, groupInfo를 사용하여 targetObject로 바꾸기!

const sourceObject = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
};

const targetObject = {
    aGroup:{
        a:1,
        b:2,
    },
    bGroup:{
        c:3,
        d:4,
        e:5,
    }
};

// 그룹정보를 갖고 있는 메타 정보가 필요함
// 그룹이름: [그룹에 들어갈 속성 배열]
const groupInfo = {
    aGroup: ['a', 'b'],
    bGroup: ['c', 'd', 'e'],
};

function makeGroup(source, info){
    // merge함수
    // a의 속성을 모두 펼치고, b의 속성을 모두 펼쳐서 하나의 객체를 반환하는 함수
    // => reduce함수임을 파악할 수 있어야 한다.
    const merge = (a, b) => ({...a, ...b});
    // console.log(Object.keys(info));
    return Object.keys(info)    // 객체의 key값만 뽑아서 문자열로 변환한 배열을 리턴함
        .map(group => ({ [group] : info[group]
            .map(k => ({ [k]: source[k]}))
            .reduce(merge, {})
        }))
        .reduce(merge, {});
}

console.log(makeGroup(sourceObject, groupInfo))

// 객체를 만들 때 computed property(연산 프로퍼티)를 사용하는 연습을 많이 해야한다.