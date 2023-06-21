class HeaderListData {
    // separator의 디폴트 값은 , (구분자)
    // 구분자가 다를 때 separator값을 받아서 사용할 수 있으므로 변경 없이 동작할 수 있게 할 수 있다.
    constructor(source, separator = ','){
        // 한 줄씩 하나로 만들겠다.
        const rawData = source.split('\n');

        // rowData의 첫 번째 값에 key 정보가 담겨 있음
        // separator 값을 기준으로 자른다.
        this.headers = rawData[0].split(separator);
        this.rows = rawData
                    .filter((row, index) => index > 0)  // key 정보가 들어있는 header 정보를 제외한 데이터를 사용하겠다.
                    .map(row => row.split(separator));  // separaotr를 기준으로 잘라 배열로 만듬
    }

    // 항상 데이터를 변환할 땐 map 연산을 수행한다.
    row = index => this.rows[index]
        .map((row, index) => [this.headers[index], row]);

    // 데이터가 몇 건인지 알려줌
    get length (){
        return this.row.length  
    }

    // 몇 개의 속성으로 이루져있는지 알려줌
    get columnLength(){
        return this.headers.length;
    }
}

// 클래스에서 생성자가 없으면
// 부모 클래스의 생성자를 사용하게 된다.
// MakeObject => 부모가 문자열을 객체로 바꾼 것을 밖으로 내보내는 형태를 규격으로 만드는 역할
export default class MakeObject extends HeaderListData{
    toObject = index => this
        .row(index)
        .reduce((a, [key,value]) => ({...a, [key]: value}),{});

    toAllObject = () =>
        Array(this.length)  // 배열 연산에 체이닝을 걸기 위해 Array를 만듬(데이터 만큼의 크기로) 데이터가 아무것도 없는 원소가 만들어지므로 순회할 수 없음
            .fill(0)    // 데이터를 0으로 값을 채워넣는다. 순회와 같은 연산을 수행할 수 있도록
            .map((item, index) => this.toObject(index))
}