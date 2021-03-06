import {Candle} from '../core.js'

/**
 * 
 * @param obj
 * @param label
 */
export default (obj, label) => {
    if (Candle.functions.type(label,{'type':'string'})) {
        switch (label) {
            case 'warn':
                return console.log('⚠️ | ' + obj);
            case 'err':
                return console.log('⛔ | ' + obj);
            case 'dev':
                return console.log('ℹ️ | ' + obj);
            default:
                return console.log(obj)
        }
    }
}