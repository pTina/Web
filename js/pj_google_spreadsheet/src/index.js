import { getSheetData } from "./components/googleSpreadSheet.js";
import { dataTab } from "./info.js";
import { createHeader } from "./components/headerMenu.js";
import { createTable } from "./components/table.js";

let userSelect = `${dataTab[0].main.sheetName}_${dataTab[0].sub[0].sheetName}`;

$(function () {
    createHeader(dataTab);
    getSheetData(userSelect, createTable);
})


export function setUserSelect(){
    const $headerMenu = $('.header-menu');
    const $actMain = $headerMenu.find('> ul > li[data-act="on"]');
    const mainIdx = $actMain.index();
    const subIdx = $actMain.find('.header-sub > li[data-act="on"]').index();
    const main = dataTab[mainIdx].main.sheetName;
    const sub = dataTab[mainIdx].sub[subIdx].sheetName;

    userSelect = `${main}_${sub}`;
    getSheetData(userSelect, createTable);
}