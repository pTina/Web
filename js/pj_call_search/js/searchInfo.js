
import {KOREA_AREA} from './koreaArea.js';
import * as ds from './dataSearch.js';
import { Render } from "./render.js";

export class SearchInfo {
    constructor(){
        const self = this;

        this._KOREA_AREA = KOREA_AREA;
        this.$area1 = $('.area1');
        this.$area2 = $('.area2');
        this.$typeCar = $('.typeCar');
        this.$btnSearch = $('.btnSearch');
        this.listArea1 = [];
        this._area, this._typeCar;
        this.render;
        this._onChange = false;
        

        // 한번만 실행
        this.makeArea1();

        $(".area1").on('change', function(){
            const val = $(this).find('option:selected').attr('value');
            
            if(self.area === val){
                self.onChange = false;
                return false;
            }
            
            if(val === 'none'){
                self.area = '';
                self.$btnSearch.prop('disabled', true);

            }else{
                self.area = val;
                self.$btnSearch.prop('disabled', false);
                self.onChange = true;
                $('.typeCar input').prop('disabled', true);
            }
        })


        $('.btnSearch').on('click', ()=>{
            if(!this.onChange) return false;

            const reuslt = ds.getData('area',this.area);
            self.render = new Render(reuslt);

            self.render.getListArea();
            $('.typeCar input').prop('disabled', false)
            $('.typeCar input').prop('checked', false);
            $('#allVhcleCo').prop('checked' , true);

            this.onChange = false;
        });

        $('.typeCar input').change(function(){
            const type = $(this).attr('id');
            self.render.getFilter(type);
        })
    }

    get onChange(){
        return this._onChange;
    }

    set onChange(val){
        this._onChange = val;
    }

    get area(){
        return this._area;
    }

    set area(val){
        this._area = val;
    }

    get typeCar(){
        return this._typeCar;
    }

    set typeCar(val){
        this._typeCar = val;
    }

    // 시·도
    makeArea1(){
        const html = `<option value="{{__val__}}">{{__val__}}</option>`;
        const listHTML = [];
        $.each(this._KOREA_AREA, (idx, val)=>{
            const key = Object.keys(val)[0];
            this.listArea1.push(key);
            listHTML.push(html.replaceAll('{{__val__}}', key));
        })

        this.$area1.append(listHTML.join());
    };

    // 시·군·구
    // makeArea2(val){
    //     this.$area2.html('');
    //     this.$area2.removeAttr('disabled');

    //     const AREA1 = val;
    //     const idx = this.listArea1.findIndex(key => key === AREA1);
    //     const arr = this._KOREA_AREA[idx][val];

    //     const html = `<option value="{{__val__}}">{{__val__}}</option>`;
    //     const listHTML = [];
        
    //     for(let item of arr){
    //         listHTML.push(html.replaceAll('{{__val__}}', item));
    //     }

    //     this.$area2.append(listHTML.join());
    // };

}


