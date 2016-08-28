$(document).ready(function() {
    $("#searchBtn").click(function(){
        var keywordVal = $("#keyword").val();
        $.ajax({
            url:"serverjson.php?number=" + keywordVal,
            type:"GET",
            dataType:"json",
            success:function(){
                $("#createResult").html(data.msg);
            },
            error:function(){
                $("#createResult").html("error: " + data.msg);
            }
        });
    });
    $("#saveBtn").click(function() {
        $.ajax({
            url:"serverjson.php",
            type:"POST",
            data:{"name":"$('#staffName').val()"},
            dataType:"json",
            success:function(){
                $("#createResult").html(data.msg);
            },
            error:function(){
                $("#createResult").html("error: " + data.msg);
            }
        });
    });
});