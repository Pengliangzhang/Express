const {generate, all} = require('simple-random-message')

export default function responseMsg() {
    let my_list = all();
    console.log(my_list);
    console.log(all());
}