import moment from 'moment'

const UA = navigator.userAgent;

const PC_BASE_SIZE = 1920;
const IPAD_BASE_SIZE = 1024;

const doc_size = document.documentElement.clientWidth;

export default {
    isIpad() {
        return /ipad/i.test(UA);
    },
    isBigScreen() {
        return doc_size > 4000;
        //return /User-Agent/i.test(UA);
    },
    moment() {
        return moment(...arguments);
    },
    getRandomNumber(min = 0, max = 1) {
        return Math.round(min + (max - min) * Math.random());
    },
    getDeviceRemToPixelValue(rem_val) {
        let rem_base = PC_BASE_SIZE;
        if (this.isIpad()) {
            rem_base = IPAD_BASE_SIZE;
        }

        if (this.isBigScreen()) {
            return null;
        }

        return rem_val * (document.documentElement.clientWidth * 20 / rem_base);
    },
    /**
     * get device real peixel according to design doc
     * 
     * @param {any} pixel_val pixel value of design
     * @returns real pixel on device
     */
    getDeviceRealPixelValue(pixel_val) {

        if (this.isBigScreen()) {
            return pixel_val;
        }

        let rem_base = PC_BASE_SIZE;
        if (this.isIpad()) {
            rem_base = IPAD_BASE_SIZE;
        }

        let doc_size = document.documentElement.clientWidth;

        return doc_size / rem_base * pixel_val;
    },
    /**
     * a scale of number to color
     * an array of colors range
     * @param {Array} colorRange 
     * an array of numbers range
     * @param {Array} range 
     * the color of scaled
     * @returns 
     */
    colorRangeScale(colorRange, range) {
        let [colorStart, colorEnd] = colorRange;
        let [rangeStart, rangeEnd] = range;
        const rgbReg = /^rgba?\((\d{1,3}\,\d{1,3}\,\d{1,3}),?(.+)\)$/;
        const hexReg = /^\#([0-9a-f]{3,})$/;
        const isRgbStr = function(str){
            return rgbReg.test(str);
        }

        const getAlpha = function(colorStr){
            
        }

        const formatterColorHexStr = function(hexNumberStr){
            if (hexNumberStr.length === 3) {
                let s = '';
                for (let i = 0; i < 3; i++) {
                    s += hexNumberStr[i] + hexNumberStr[i];
                }

                hexNumberStr = s;
            }

            return hexNumberStr;
        }
        

        const getMatch = function (colorStr) {
            if (isRgbStr(colorStr)) {
                return [colorStr.match(rgbReg)[1].split(','), colorStr.match(rgbReg)];
            }

            let match = formatterColorHexStr(colorStr.match(hexReg)[1]);
            let ret = [];
            for(let i = 0; i < 3; i++){
                ret.push(match.slice(i* 2, (i + 1) * 2));
            }

            return [ret];
        }

        const isColorHexStr = function(str){
            return str.length === 3 || str.length === 6;
        }

        const toHexNumer = function (hexStrArr, isRegStr) {
            return hexStrArr = hexStrArr.map(item => parseInt(item, isRegStr ? 10 : 16));
        }

        colorStart = colorStart.split(/\s+/).join('');
        colorEnd = colorEnd.split(/\s+/).join('');

        let [startMatchArr, startOriginMatch] = getMatch(colorStart);
        let [endMatchArr, endOriginMatch] = getMatch(colorEnd);
        let startHexVal, endHexVal;

        if (startMatchArr) {
            let isRgb = isRgbStr(colorStart)
            startHexVal = toHexNumer(startMatchArr, isRgb);
            let alpha = 1;
            if(isRgb){
                alpha = parseFloat(startOriginMatch[2]);
            }
            startHexVal.push(alpha);
        }

        if (endMatchArr) {
            let isRgb = isRgbStr(colorEnd)
            endHexVal = toHexNumer(endMatchArr, isRgb);
            let alpha = 1;
            if(isRgb){
                alpha = parseFloat(endOriginMatch[2]);
            }
            endHexVal.push(alpha);
        }

        let mins = [];
        let diffs = [];
        let maxs = [];
        for(let i = 0; i < 4; i++){
            let _min = Math.min(startHexVal[i], endHexVal[i]);
            let _max = Math.max(startHexVal[i], endHexVal[i]);
            maxs.push(_max);
            mins.push(_min);
            diffs.push(_max - _min);
        }

        let numRange = rangeEnd - rangeStart;

        return function(num){
            if(num <= rangeStart){
                return colorStart;
            }

            if(num >= rangeEnd){
                return colorEnd;
            }

            let color = 'rgba('
            let scale = (num - rangeStart)/ numRange;
            for(let i = 0; i < 3; i++){
                let hexColor = Math.floor(diffs[i] * scale + mins[i]);
                color += hexColor + ',';
            }

            let alpha = diffs[3] * scale + mins[3];

            color += alpha + ',';

            color = color.slice(0, -1) + ')';

            return color;
        }
    }
}