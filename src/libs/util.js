/* import axios from 'axios';
import env from '../../build/env';
import semver from 'semver';
import packjson from '../../package.json'; */

let util = {

};

//上面的用没用的不知道，底下的都是用的的 这个是js模糊查询的
util.search =function(data, argumentObj) {
    let res = data;
    let dataClone = data;
    for (let argu in argumentObj) {
        if (argumentObj[argu].length > 0) {
            res = dataClone.filter(d => {
                return d[argu].indexOf(argumentObj[argu]) > -1;
            });
            dataClone = res;
        }
    }
    return res;
}
//util.ajaxUrl="https://authoritymserv.jiayecaifu.com:8023/AuthorityM_Serv"
util.ajaxUrl=""
export default util;
