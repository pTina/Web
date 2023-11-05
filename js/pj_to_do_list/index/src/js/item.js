import { Drag } from './drag.js?x';
import { firebase } from './firebase.js';
import  { listItem } from './listItem.js';

const remove = firebase.remove;
const update = firebase.update;
const ref = firebase.ref;

// 데이터 삭제
function removeItemData(id) {
    const db = firebase.getDatabase();
    remove(ref(db, `items/${id}`));
    console.log('Remove');
}

function allDelteData(){
    const db = firebase.getDatabase();
    firebase.remove(ref(db));
}
    
// 상태변화
function chageItemData(id, obj) {
    const db = firebase.getDatabase();
    update(ref(db, `items/${id}`), obj);
}

{/* <div class="mark pointer">
                        <i class="fa-regular fa-star"></i>
                    </div> */}
{/* <div class="check pointer"><i class="fa-solid fa-check"></i></div> */}

class Item {
    constructor(input, id){
        this.inputVal = input;
        this._check = false;
        this._mark = false;
        this._id = id;
        // this._wrap = null;
        this._idx = 0;
        this._html = `
            <div class="listItem bxShadow" id="${this._id}">
                <input class="chk_state" type="checkbox" id="chk_${this._id}" alt="${this._id}번째 ${this.inputVal} 완료상태 버튼"/>
                <label for="chk_${this._id}">
                    <div class="content">
                        <div class="todo NanumPS">${this.inputVal}</div>

                        <input class="chk_mark" type="checkbox" id="chk_mark_${this._id}" alt="${this._id}번째 ${this.inputVal} 즐겨찾기 버튼"/>
                        <label class="mark pointer" for="chk_mark_${this._id}"><i class="fa-regular fa-star"></i></label>
                    </div>
                </label>
                
                <button type="button" class="btnClose pointer" alt="${this.inputVa} 삭제 버튼">
                    <i class="fa-regular fa-x"></i>
                </button>
            </div>
        `;
    }

    get id(){
        return this._id;
    }

    get html(){ 
        return  this._html;
    }

    set html(value){
        return this._html = value;
    }

    get check(){
        return this._check;
    }

    set check(value){
        this._check = value;
    }

    get mark(){
        return this._mark;
    }

    set mark(value){
        this._mark = value;
    }

    get idx(){
        return this._idx;
    }

    set idx(value){
        this._idx = value;
    }

    // get wrap(){
    //     return this._wrap;
    // }

    // set wrap(value){
    //     this._wrap = value;
    // }

    // initItem(wrap, re){
    initItem (re){
        console.log('initItem');
        const _self = this;
        const $wrap = $(`#${this.id}`);
        this.idx = $(`#${this.id}`).index();

        if($wrap === undefined){
            console.log(`$wrap: ${$wrap}}이 없어요.`);
            return false;
        };

        // drag
        // const drag = new Drag(this);
        if(!re){
            listItem.addListItem(this);
        }

        const $check = $wrap.find('.chk_state');
        const $mark = $wrap.find('.chk_mark');
        const $btnClose = $wrap.find('.btnClose');
        // let thisCurIdx = $wrap.index();

        function onClickCheck(state){
            _self.check = state;
            $(`#chk_${_self.id}`).prop('checked', _self.check);
            try{
                chageItemData(_self._id, {'_check': _self.check});
                // console.log('_check 상태 변화 완료');
            }catch(e){
                console.error(e);
                console.log('STATE CHECK ERROR:(');
            }
        }
        $check.on('keyup', function (e) {
            e.stopImmediatePropagation();
            if (e.keyCode === 13){
                const state = $(this).prop('checked') ? false : true;
                onClickCheck(state);
            }
        })

        $check.on('change', function(){
            const state = $(this).prop('checked');
            onClickCheck(state);
        })


        function onClickCheckMark(state){
            // const $input = el.closest('.listItem').find('.chk_mark');
            _self.mark = state;
            $(`#chk_mark_${_self.id}`).prop('checked', _self.mark);

            try{
                chageItemData(_self._id, {'_mark': _self.mark});
                // console.log('_mark 상태 변화 완료:)');
            }catch(e){
                console.error(e);
                console.log('_mark ERROR:(');
            }
        }

        $mark.on('keyup', function (e) {
            e.stopImmediatePropagation();
            if (e.keyCode === 13){
                const state = $(this).prop('checked') ? false : true;
                onClickCheckMark(state);
            };
        })
        $mark.on('change', function(){
            const state = $(this).prop('checked');
            onClickCheckMark(state);
        })


        $btnClose.on('click', () => {
            // LISTITEM.removeListItem(this.id);
            // const idx = self.listItem.findIndex(i => i.id === this.id);
            // self.listItem.splice(idx,1);
            
            try{
                removeItemData(this.id);
                listItem.removeListItem(this.id);
                $wrap.remove();
                // console.log('삭제 완료:)');

            }catch(e){
                console.error(e);
                console.log('삭제 ERROR:(');
            }
            
        })

        $wrap.find('.check, .mark').on('click', () => {
            // console.log(`id: ${_self.id}, 완료: ${_self.check}, 즐찾: ${_self.mark}`);
            this.html = $wrap[0].outerHTML;
            try{
                chageItemData(_self._id, {'_html': $wrap[0].outerHTML});
                // console.log('_html 상태 변화 완료:)');

            }catch(e){
                console.error(e);
                console.log('_html ERROR:(');
            }
        })

    }
};

export {chageItemData, Item, allDelteData};