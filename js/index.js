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
                    img: "./img/user.webp",
                    text: "主持人：樊旭东"
                }],
                [{
                    img: "./img/user.webp",
                    text: "主持人：张绍路"
                },
                {
                    img: "./img/user.webp",
                    text: "主持人：陈欢"
                }],
                [{
                    img: "./img/user.webp",
                    text: "主持人：李涛"
                },
                {
                    img: "./img/user.webp",
                    text: "主持人：宋小鹏"
                }]
            ]
        }
    },
    created () { },
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
    },

}