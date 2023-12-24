const pageConfig = {
    data () {
        return {
            images: [
                './img/pic1.jpg',
                './img/pic2.jpg',
                // './img/pic3.webp',
                // './img/pic4.jpg',
            ],
            time: new Date('2023-12-31 23:59:59').getTime() - Date.now(),
            activeName: '',
            userList: [
                [{
                    img: "./img/user1.jpg",
                    text: "主持人：王天豪"
                },
                {
                    img: "./img/user3.jpg",
                    text: "主持人：樊旭东"
                }],
                [{
                    img: "./img/user4.jpg",
                    text: "主持人：张绍路"
                },
                {
                    img: "./img/user6.jpg",
                    text: "主持人：陈欢"
                }],
                [{
                    img: "./img/user2.jpg",
                    text: "主持人：李涛"
                },
                {
                    img: "./img/user5.jpg",
                    text: "主持人：宋小鹏"
                }]
            ],
            imgList: Array(6).fill().map((m, idx) => `./img/img${idx + 1}.jpg`),
            imgList1: Array(6).fill().map((m, idx) => `./img/img${idx + 6}.jpg`),
            flag: false,
            isShow: true,
            current: 0
        }
    },
    created () { },
    mounted () {
        //--创建页面监听，等待微信端页面加载完毕 触发音频播放
        // document.addEventListener('DOMContentLoaded', function () {
        //     function audioAutoPlay () {
        //         var audio = document.getElementById('audio')
        //         audio.play()
        //         document.addEventListener("WeixinJSBridgeReady", function () {
        //             audio.play()
        //         }, false)
        //     }
        //     audioAutoPlay()
        // })
        // //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
        // document.addEventListener('touchstart', function () {
        //     function audioAutoPlay () {
        //         var audio = document.getElementById('audio')
        //         audio.play()
        //     }
        //     audioAutoPlay()
        // })
    },
    methods: {

        onClickLeft () {
            Toast('返回')
        },
        onClickRight () {
            console.log(this, 11111)
            this.postMessage()
        },
        postMessage () {
            this.$el.querySelector('.children').contentWindow.postMessage('主页面消息', '*')
        },
        //
        autioCotrol () {
            this.flag = !this.flag
            this.flag ? myAudio.play() : myAudio.pause()
        },

        cotrolhandle () {
            myAudio.play()
            this.flag = true
            this.isShow = !this.isShow
            if (!this.isShow) {
                this.postMessage()
            }
        },
        swipeChange (index) {
            this.current = index
        }
    },

}