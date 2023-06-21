const $table = $('.contents .table');
const $title = $('.contents .title');
let col = true;

const state = [
    {
        txt: '진행중',
        key: 'ing'
    },
    {
        txt:  '1차완료',
        key: 'new'
    },
    {
        txt: '제출완료',
        key: 'done'
    }
];

export const createTable = (_data)=>{
    if(_data.status !== "ok"){ alert('구글 스프레드시트와 연결되지 않았습니다.') }
    const data = _data.table;
    console.log(data);
    if(col){
        createCols(data.cols);
        col = false;
    }

    createRows(data.rows);
}

const createCols = (_data)=>{
    const data = _data;
    let html = '';

    for(let item of data){
        html += `
            <div class="col">${item.label}</div>
        `
    }

    $title.append(`
        <div class="row row1">
            ${html}
        </div>
    `);
}

const createRows = (_data)=>{
    const data = _data;
    let html = '';
    $.each(data, (idx, item)=>{
        const temp = item.c.map((el, i) => {
            if(el !== null){
                if(el.v !== null){
                    if(i === 0){
                        const stateIdx = state.findIndex(state => state.txt === el.v);
                        return `<div class="col" data-state="${state[stateIdx].key}"></div>`

                    }else{
                        return `<div class="col">${el.v}</div>`
                    }

                }else{
                    if(i === 4){ // 바로가기
                        return `<div class="col" data-empty="true"></div>`
                    }
                }
            }else{
                if(i === 0){ // 완료여부
                    return `<div class="col" data-state="false"></div>`
                }
            }
        });
        html += `
            <div class="row">${temp.join('')}</div>
        `;
    })
    $table.html(html);
}