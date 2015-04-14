//全局变量
var station = false,
    machine = false,
    source = false;
var parameter = new Array("parameter_1", "parameter_2", "parameter_3", "parameter_4");


//开始函数
$(document).ready(function () {
    //开始页面隐藏机器列表
    machineHide();
    //开始页面隐藏电源列表
    sourceHide();
    //开启站点,设备,电源点击功能
    $(".stationGet").click(stationGet);
    $(".machineGet").click(machineGet);
    $(".sourceGet").click(sourceGet);
    //定时获取数据
    setInterval(paraRefresh, 3000);
    setInterval(updatedata, 2000);
    //没有用到---------------------------------------------------
//    //开启修改功能
//    doOperate();
//    //取消修改
//    cancerOperate();
    //ajax
    $(".source").click(function () {
        var sms = machine + "_" + source + "_";
        $.ajax({
            type: "GET",
            //有问题==========================================================================
            url: "./fetch?" + sms + "current=&" + sms + "voltage=&" + sms + "state=",
            dataType: "json",
            success: function (data) {
                //获取成功之后把值写进去
                paraShow(sms, data);
            },
            error: function (jqXHR) {
                alert("获取失败 " + jqXHR.status);
            }
        });
    });
    //    $("#submit").click(function () {
    //        var p1 = $("#parameter_1").val(),
    //            p2 = $("#parameter_2").val(),
    //            p3 = $("#parameter_3").val();
    //        if ($.isNumeric(p1) && $.isNumeric(p2) && $.isNumeric(p3)) {
    //            $.ajax({
    //                type: "GET",
    //                url: "http://soutrol.crimro.me/update?",
    //                dataType: "json",
    //                data: {
    //                    //求拓展===============================================================================
    //                    machine_1_source_1_current: $("parameter_2").val(),
    //                    machine_1_source_1_voltage: $("parameter_2").val(),
    //                    machine_1_source_1_brake: $("parameter_2").val(),
    //                },
    //                success: function (data) {
    //                    if (data.state === "success") {
    //                        paraModified();
    //                        alert("修改成功");
    //                    } else {
    //                        alert("修改失败");
    //                    }
    //                },
    //                error: function (jqXHR) {
    //                    alert("发送失败 " + jqXHR.status);
    //                }
    //            });
    //        } else {
    //            alert("请输入数字");
    //        }
    //    });
});


//machineBox和sourceBox的隐藏
function machineHide() {
    $(".machineBox").css("display", "none");
    $("#operatingBox").css("display", "none");
//    没有用到---------------------------------------------------
//    $("#submitBox").css("display", "none");
}

function sourceHide() {
    $(".sourceBox").css("display", "none");
    $("#operatingBox").css("display", "none");
//    没有用到---------------------------------------------------
//    $("#submitBox").css("display", "none");
}

//machineBox和sourceBox的点击开启和其他地方的隐藏并且记录设备source的获取
function stationGet() {
    machineHide();
    sourceHide();
    $(this).next().css("display", "block");
//    没有用到---------------------------------------------------
//    $("#operationBox").css("display", "none");
    //清空参数值
    paraClear();
    //确认站点
    station = $(this).parent().attr("id");
    var stat = Number(station) + 1;
    $("#stat").html(stat);
    //设备和电源置空
    machine = false;
    $("#faci").html("");
    source = false;
    $("#sourceName").val("电源 ");
}

function machineGet() {
    sourceHide();
    $(this).next().css("display", "block");
//    没有用到---------------------------------------------------
//    $("#operationBox").css("display", "none");
    //清空参数值
    paraClear();
    //确认设备
    var mac = $(this).parent().attr("class");
    machine = mac.split(" ", 2)[1];
    var faci = Number(machine.split("_", 2)[1]);
    $("#faci").html(faci);
    //电源置空
    source = false;
    $("#sourceName").val("电源 ");
}

function sourceGet() {
//    没有用到---------------------------------------------------
//    $("#operationBox").css("display", "block");
    //确认电源
    var sou = $(this).attr("class");
    source = sou.split(" ", 2)[1];
    var sour = Number(source.split("_", 2)[1]);
    $("#sourceName").val("电源 " + sour);
}


//电源参数页面清零
function paraClear() {
    $(".txt").val("");
}

//电源参数显示
function paraShow(sms, data) {
    var c = sms + "current",
        v = sms + "voltage",
        b = sms + "state";
    //要改----------------------------------------------------------------------------
    $("#parameter_1").val(data.data[c]);
    $("#parameter_2").val(data.data[v]);
    $("#parameter_3").val(data.data[b]);
}

//电源参数自动刷新
function paraRefresh() {
    if (!station) {
      // alert("请选择 站点！");
    } else if (!machine) {
      // alert("请选择 设备！");
    } else if (!source) {
       // alert("请选择 电源！");
    } else {
        var sms = machine + "_" + source + "_";
        $.ajax({
            type: "GET",
            //有问题==========================================================================
            url: "./fetch?" + sms + "current=&" + sms + "voltage=&" + sms + "state=",
            dataType: "json",
            success: function (data) {
                //获取成功之后把值写进去
                paraShow(sms, data);
            },
            error: function (jqXHR) {
                alert("获取失败 " + jqXHR.status);
            }
        });
    }
}


//    没有用到---------------------------------------------------
////开启电源参数修改
//function doOperate() {
//    $("#operate").click(function () {
//        $(".txt").attr("disabled", false);
//        $("#submitBox").css("display", "block");
//    });
//}

//取消电源修改
function cancerOperate() {
    $("#cancer").click(paraModified);
}

//    没有用到---------------------------------------------------
////确认修改
//function paraModified() {
//    paraRefresh();
//    $(".txt").attr("disabled", "disabled");
//    $("#submitBox").css("display", "none");
//}



//update data
function updatedata() {
    if (!station) {
      // alert("请选择 站点！");
    } else if (!machine) {
      // alert("请选择 设备！");
    } else if (!source) {
       // alert("请选择 电源！");
    } else {
        var sms = machine + "_" + source + "_";
        $.ajax({
            type: "GET",
            //有问题==========================================================================
            url: "./rand",
            dataType: "json",
           
        });
    }
}