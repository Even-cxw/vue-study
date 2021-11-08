## 小浦聆听坊问卷调查

### 打开index.html查看demo

### 若出现卡顿情况，动画取消即可 将参数isAnimation 设置为false

1. 在head标签中引入css样式
```javascript
<link rel="stylesheet" href="css/index.css">
```

2. 引入index.js
```javascript
<script src="./index.js"></script>
```

3. 初始化组件,定义function, 在组件渲染完后会自动调用
``` javascript
function initQuestionPage() {
    var even = new Even({
        el:'.question',
        rateTextRight: '非常满意',
        bizSceneCode: '111',
        uuid: '222',
        confirmBtn:function(params) {
            console.log('params', params)
            console.log('点击了提交按钮')
        }
    });
}
```

>>>

参数   说明    类型   必填  默认值

linkUrl: 小浦聆听坊链接  String  必填

bizSceneCode: 问卷code  String  必填

uuid: 场景id  String  必填

isAnimation: 动画参数  Boolean  默认值 true

el: 插入节点元素  String|HTMLElement  默认值：body

rateTextLeft: 评分左侧tip  String  默认值：非常不满意

rateTextRight: 评分右侧tip  String  默认值：非常满意

linkText： 链接提示语   String   默认值：赢588刷卡金

confirmBtn： 点击提交立刻执行函数  Funtion  

>>>


```javascript
//小浦聆听坊链接
// bizSceneCode 场景coude
// uuid 第三方平台唯一标识；
https://172.29.24.150/1/recon/xpltf/index.html?bizSceneCode=XPCJ202103101036271070&uuid=xxx

```

