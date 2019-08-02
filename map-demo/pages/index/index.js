//index.js
let data = [{
    longitude: 113.324520,
    latitude: 23.099994,
    marker: [{
        iconPath: "/images/others.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50,
        callout: {
            content: '无AppID关联下',
            display: 'ALWAYS',
        }
    }]
}, {
    longitude: 113.324520,
    latitude: 23.077777,
    marker: [{
        iconPath: "/images/others.png",
        id: 0,
        latitude: 23.077777,
        longitude: 113.324520,
        width: 50,
        height: 50,
        callout: {
            content: '调用wx.login是受限的',
            display: 'ALWAYS',
        }
    }]
}, {
    longitude: 113.324520,
    latitude: 23.055555,
    marker: [{
        iconPath: "/images/others.png",
        id: 0,
        latitude: 23.055555,
        longitude: 113.324520,
        width: 50,
        height: 50,
        callout: {
            content: '工具的模拟返回',
            display: 'ALWAYS',
        }
    }]
}]

Page({
    onLoad: function () {
        this.setData(data[0]);
    },
    buttonTap: function (e) {
        let id = e.currentTarget.id;
        this.setData(data[id]);
    }
})
