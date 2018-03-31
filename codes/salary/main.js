/**
 * Created by zcRescuer on 2017/1/15.
 */
$(function () {
    var myChart = echarts.init($("#chart")[0]);
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    $.ajax({
        url: "/echarts/codes/01salary/data/dataOnlySalary.txt",
        success: function (data) {
            var data = JSON.parse(data);
            option.series = data;
            myChart.setOption(option);
        },
        error: function (err) {
            console.log(err);
        }
    });

});