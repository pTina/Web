// 참고
// https://dabid.tistory.com/41
// https://asbnotebook.com/fetch-google-spread-sheet-data-using-javascript/


const _sheedId = '1BWbGqSLJOY0ltwVAb1i9jFfxbALbXZWVa6LYIUkxUDE';

export const getSheetData = (_sheetName, callback)=>{
    const sheetId = _sheedId;
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = _sheetName;
    const query = encodeURIComponent('Select *');
    const url = `${base}&sheet=${sheetName}&tq=${query}`;

    fetch(url)
        .then(response => {
            console.log(response);
            return response.text();
        })
        .then(str => {
            console.log(str);
            return JSON.parse(str.substring(47).slice(0, -2));
        })
        .then(data => callback(data))



    // ajax - jquery
    // $.ajax({
    //     url : url,          
    //     success : function(result) { 
    //         console.log(result);
    //     },
    //     error : function(request, status, error) {
    //         console.log(error)
    //     }
    // })

    // ajax - javascript
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    // xhr.send();

    // xhr.onload = () => {
        
    //     if (xhr.status == 200) {
    //         console.log(xhr.response);
    //         console.log("통신 성공");
    //     } else {
    //         console.log("통신 실패");
    //     }
    // }
}
