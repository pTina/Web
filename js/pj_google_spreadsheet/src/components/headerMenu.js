import { setUserSelect } from "../index.js";

const $headerMenu = $('.header-menu');
export const createHeader = (_data)=>{
    const data = _data;
    let html = '';
    $.each(data, (idx, item)=>{
        const act = idx === 0 ? 'data-act="on"' : '';
        if(item.sub.length > 0){
            const sub = item.sub.map((el, idx) => {
                const act = idx === 0 ? 'data-act="on"' : '';
                return `<li ${act}><div>${el.txt}</div></li>`
            });
            html += `
                <li ${act}>
                    <div>${item.main.txt}</div>
                    <ul class="header-sub d-flex">
                        ${sub.join('')}
                    </ul>
                </li>
            `;
        }else{
            html += `
                <li ${act}>
                    <div>${item.main.txt}</div>
                </li>
            `;
        }
    })

    $headerMenu.find('> ul').append(html);

    $headerMenu.find('> ul > li > div').on('click', onClickMenu);
    $headerMenu.find('.header-sub > li > div').on('click', onClickSub);
}

function onClickMenu(){
    $(this).parent().attr('data-act', 'on').siblings().removeAttr('data-act');
    // speak($(this).text());
    setUserSelect();
}

function onClickSub(){
    $(this).parent().attr('data-act', 'on').siblings().removeAttr('data-act');
    setUserSelect();
}

const synth = window.speechSynthesis;

function speak(str){
    const msg = new SpeechSynthesisUtterance();
    synth.cancel();
    msg.text = str;
    // msg.voice = window.speechSynthesis.getVoices()[2];
    synth.speak(msg);
}

