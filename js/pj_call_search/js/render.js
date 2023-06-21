// import * as MAP from './map.js';

export class Render{
    constructor(data){
        this._data = data;
        this.html = [];
        this._time1;
        this.$modal = $('#modalDetail .modal-dialog');
        // this.$modal = $('#modalDetail').find('.modal-content');
        // this._modalHtml = this.$modal.html();
        this._modalHtml = `
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="modaLabel">{{__tfcwkerMvmnCnterNm__}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row align-items-center border-bottom py-2">
                            <div class="col-3">예약 접수</div>
                            <div class="col-9">
                                <div class="row">
                                    <div class="col-4">평일</div>
                                    <div class="col-8">{{__weekdayRceptOpenHhmm__}} ~ {{__weekdayRceptColseHhmm__}}</div>
                                </div>
                                <div class="row">
                                    <div class="col-4">주말</div>
                                    <div class="col-8">{{__wkendRceptOpenHhmm__}} ~ {{__wkendRceptCloseHhmm__}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center border-bottom py-2">
                            <div class="col-3">운행 지역</div>
                            <div class="col-9">
                                <div class="row align-items-center border-bottom py-1">
                                    <div class="col-4">관내 운행</div>
                                    <div class="col-8">{{__insideOpratArea__}}</div>
                                </div>
                                <div class="row align-items-center py-1">
                                    <div class="col-4">관외 운행</div>
                                    <div class="col-8">{{__outsideOpratArea__}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center py-2">
                            <div class="col-3">이용 요금</div>
                            <div class="col-9">
                            <div class="row py-1">{{__useCharge__}}</div>
                            <div class="row py-1" id="mapInfo">
                                <div class="col-3">예상금액</div>
                                <div class="col-9">
                                    <div class="row">출발지</div>
                                    <div class="row">
                                        <span id="origin" class="mapResult"></span>
                                        <button class="btn btn-default btn-block btnMap" type="button" data="origin" data-toggle="modal" data-target="#daumPostCode" >찾기</button>
                                    </div>
                                    <div class="row">도착지</div>
                                    <div class="row">
                                        <span id="destination" class="mapResult"></span>
                                        <button class="btn btn-default btn-block btnMap" type="button" data="destination" data-toggle="modal" data-target="#daumPostCode" >찾기</button>
                                    </div>
                                    <div class="row py-1" id="totalPrice">
                                        <span id="price"></span>
                                        <button class="btn btn-default btn-block" id="btnPrice" type="button" data="price">예상금액확인</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row py-1">*해당 예상금액은 택시요금 기준입니다.<br>실제 결제금액과 다를 수 있습니다.*</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                </div>
        </div>
        `;
    }

    get modalHtml(){
        return this._modalHtml;
    }

    get data(){
        return this._data;
    }

    get time1(){
        return this._time1;
    }

    set time1(val){
        this._time1 = val;
    }

    getListArea(){
        const $base = $('#boxListItem');
        if(this.data.length === 0){
            $base.addClass('isEmpty');
        }else{  
            if($base.hasClass('isEmpty')){
                $base.removeClass('isEmpty');
            }
        }
        this.data.forEach((el, idx) => {
            this.val = el;
            const url = this.val.rceptItnadr;
            let URL = '예약접수';
            let dis = 'pointer';
            if(url.indexOf('http') < 0){
                URL = '없음';
                dis = 'dis';
            }

            this.html.push(`
                <div class="border border-dark listItem" id="listItem-${idx}">
                    <div class="row align-items-center">
                        <div class="name pointer col" data-toggle="modal" data-target="#modalDetail">${this.val.tfcwkerMvmnCnterNm}</div>
                        <div class="time col">
                            <div class="row time_weekday">
                            <div class="col-4">평일</div>
                            <div class="col-8">${this.val.weekdayOperOpenHhmm} ~ ${this.val.weekdayOperColseHhmm}</div>
                            </div>
                            <div class="row time_weekend">
                            <div class="col-4">주말</div>
                            <div class="col-8">${this.val.wkendOperOpenHhmm} ~ ${this.val.wkendOperCloseHhmm}</div>
                            </div>
                        </div>
                        <div class="col tell">
                            <span class="tellNumber">${this.val.phoneNumber}</span>
                            <span class="pointer btnCopy"><i class="bi bi-clipboard"></i></span>
                            <input class="clip_target" type="text" style="z-index: -999; position:absolute;"/>
                        </div>
                        <div class="homepage col">
                            <a class="${dis}" href="${this.val.rceptItnadr}" target="black">${URL}</a>
                        </div>
                    </div>
                    <div class="row itemTypeCar">
                        <div class="col-3 empty"></div>
                        <div class="col-3 my-2">
                            <div class="row type_car _slopeVhcleCo">
                                <div class="col-4">슬로프</div>
                                <div class="col-8">${this.val.slopeVhcleCo}</div>
                            </div>
                            <div class="row type_car _liftVhcleCo">
                                <div class="col-4">리프트</div>
                                <div class="col-8">${this.val.liftVhcleCo}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });

        $('#boxListItem').html('');
        $('#boxListItem').append(this.html.join(''));

        this.initCopy();
        this.initDetail();
    }

    getFilter(type){
        if(Render.time1){
            setTimeout(Render.time1);
            $('.tell').removeClass("bgOn");
        }

        const TYPE = type; 
        $('.type_car').removeClass('bgOn');

        if(TYPE === 'allVhcleCo'){
            $('.listItem').removeClass('hide');
            return false;
        }
        
        $(`._${TYPE}`).addClass('bgOn');
        this.data.forEach((val, idx) =>{
            const $el = $(`.listItem-${idx}`);
            if(val[TYPE] === '0'){
                $el.addClass("hide");
            }else{
                $el.hasClass('hide') ?  $el.removeClass("hide") : '';
            }
        })
    }

    initCopy(){
        const copyYes = 'bi-clipboard-check';
        const copyNo = 'bi-clipboard';

        $('.btnCopy').on('click', function(){
            Render.time1 ? setTimeout(Render.time1) : '';
            const $this = $(this);
            const $parent = $this.parent();
            const $tellNumber = $(this).prev();
            const $clipInput = $(this).next();
            const num = $tellNumber.text();
            $clipInput.val(num);
            $clipInput.select();

            try{
                const result = document.execCommand('copy');

                if(result){
                    $parent.addClass('bgOn');
                    $this.find('i').removeClass(copyNo);
                    $this.find('i').addClass(copyYes);
                    Render.time1 = setTimeout(()=>{
                        $parent.removeClass('bgOn');
                        $this.find('i').removeClass(copyYes);
                        $this.find('i').addClass(copyNo);
                    }, 1500);
                }else{
                    alert('복사 오류');
                }

            }catch(err){
                alert('죄송합니다. 클립보드 복사 지원이 되지 않습니다.');
            }
            
            
        })
    }

    getDetail(obj){
    }

    initDetail(){
        const self = this;
        
        $('.name').on("click", (e)=>{
            const $target = $(e.target);
            const idx = $target.parents('.listItem').index();
            const keys = ['tfcwkerMvmnCnterNm', 'weekdayRceptOpenHhmm', 'weekdayRceptColseHhmm', 'wkendRceptOpenHhmm', 'wkendRceptCloseHhmm', 'insideOpratArea', 'outsideOpratArea', 'useCharge'];

            setModalHtml(idx, keys);
        })

        function setModalHtml(idx, keys){
            const IDX  = idx;
            const KEYS = keys;
            let result = self.modalHtml;
            KEYS.forEach((key) => {
                let _val = self.data[IDX][key];
                let val = '';
                if(key === 'outsideOpratArea'){
                    if(_val.indexOf('+')>-1){
                        val = _val.replaceAll('+', ',');
                    }else{
                        val = _val;
                    }
                }else{
                    val = _val;
                }

                result = result.replace(`{{__${key}__}}`, val);
                
            })

            // console.log(self.$modal);
            self.$modal[0].innerHTML = result;
            // self.$modal.append(result);

            // const option = {
            //     origin: '127.11015314141542,37.39472714688412',
            //     destination : '127.10824367964793,37.401937080111644'
            // };

            // const map = new MAP.mapData(option);
            // MAP.mapData;


        }
    }
}

