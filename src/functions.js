

export function toUrlParams(obj){

    let params = new URLSearchParams();

    for( let item in obj){
        params.append( item, obj[item]);
    }

    return '?' + params.toString();
}