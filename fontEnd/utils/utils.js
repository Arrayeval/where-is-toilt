import {Dimensions, PixelRatio} from "react-native"
export default  utils = {
    size: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    pixel: 1 / PixelRatio.get(),
    get: function (url, successCallBack, failCallBack) {
        fetch(url)
        .then((res) => res.json())
        .then((resJson) => {
            successCallBack(resJson)
        })
        .catch(err => {
            failCallBack(err)
        })
    }
}