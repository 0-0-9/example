$(document).ready(function() {
    $("#searchBtn").click(function() {
        var keywordVal = $("#keyword").val();
        $.ajax({
            url: "serverjson.php?number=" + keywordVal,
            type: "GET",
            dataType: "json",
            success: function(data) {
                if (data.success) {
                    $("#searchResult").html(data.msg);
                } else {
                    $("#searchResult").html("error: " + data.msg);
                }
            },
            error: function(xhr) {
                alert("出错！错误代码" + xhr.status);
            }
        });
    });
    $("#saveBtn").click(function() {
        $.ajax({
            url: "serverjson.php",
            type: "POST",
            data: {
                name: $('#staffName').val(),
                number: $('#staffNum').val(),
                sex: $('#staffSex').val(),
                job: $('#staffJob').val()
            },
            dataType: "json",
            success: function(data) {
                if (data.success) {
                    $("#createResult").html(data.msg);
                } else {
                    $("#createResult").html("error: " + data.msg);
                }
            },
            error: function(xhr) {
                alert("出错！错误代码" + xhr.status);
            }
        });
    });
});