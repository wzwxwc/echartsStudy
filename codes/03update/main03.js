window.onload = function () {
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '60%',
                data: [
                    {value: 235, name: '视频广告'},
                    {value: 274, name: '联盟广告'},
                    {value: 310, name: '邮件营销'},
                    {value: 335, name: '直接访问'},
                    {value: 400, name: '搜索引擎'}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    var btn = document.getElementsByTagName("input")[0];
    btn.onclick = function () {
        $("#main").css("width", 600);
        $("#main").css("height", 400);
        // var optionUpdate = {
        //     series: [
        //         {
        //             name: '访问来源',
        //             radius: '60%'
        //         }
        //     ]
        // };
        // myChart.setOption(optionUpdate);
        //调整
        myChart.resize();
    }
};