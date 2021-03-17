$(document).ready(function () {

    $('#parent').multiselect({
        buttonWidth: 'auto',
        enableCaseInsensitiveFiltering: true,
        numberDisplayed: 4

    });
    $('#updateParent').multiselect({
        buttonWidth: 'auto',
        enableCaseInsensitiveFiltering: true,
        numberDisplayed: 4
    });
    
    $('div#myModal #mgrt').multiselect({
        buttonWidth: 'auto',
        enableCaseInsensitiveFiltering: true,
        numberDisplayed: 4,
        onChange: function(element, checked) {
            $('div').removeClass('open');
        }
    });
    
        $('div#updatemyModal #mgrt').multiselect({
        buttonWidth: 'auto',
        enableCaseInsensitiveFiltering: true,
        numberDisplayed: 4,
        onChange: function(element, checked) {
            $('div').removeClass('open');
        }
    });
    
   
    
    //$('button.multiselect').text('Task Name');

    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone: 480
    };

    var tableElement = $('#project-table');
    tableElement.dataTable({
        "bJQueryUI": true,
        "bProcessing": true,
        "bServerSide": true,
        "sServerMethod": "GET",
        "sAjaxSource": "setup/load_task_data",
        "iDisplayLength": 10,
        "aLengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
        ],
        "aaSorting": [
        [0, 'desc']
        ],
        "sPaginationType": "full_numbers",
        "oTableTools": {
            "sSwfPath": "js/swf/copy_csv_xls_pdf.swf",
            "aButtons": [
            "copy",
            "csv",
            "xls",
            {
                "sExtends": "pdf",
                "sTitle": "Report Name",
                "sPdfMessage": "Summary Info",
                "sPdfOrientation": "landscape",
                "fnClick": function (nButton, oConfig, flash) {
                    customName = 'sellsreport' + ".pdf";
                    flash.setFileName(customName);
                    this.fnSetText(flash,
                        "title:" + 'Name Of Company: ABC Construction Ltd' + "\n" +
                        "message:" + 'Report For Sales And Manegment System' + "\n" +
                        "colWidth:" + this.fnCalcColRatios(oConfig) + "\n" +
                        "orientation:" + oConfig.sPdfOrientation + "\n" +
                        "size:" + oConfig.sPdfSize + "\n" +
                        "--/TableToolsOpts--\n" +
                        this.fnGetTableData(oConfig)
                        );
                }
            },
            "print"
            ]
        },
        "fnDrawCallback": function () {
            $("a[id*='delete_']").click(function () {
                var splitedArray = $(this).attr('id').split('_');
                /*var r = confirm("Do Confirm To Delete!");
                if (!r) {
                    return false;
                }*/
                var aPos = oTable.fnGetPosition(this.parentNode.parentNode);
                var aData = oTable.fnGetData(aPos[0]);
                bootbox.confirm("Do you confirm to Delete!", function(r) {
                    if(r){
                        $.ajax({
                            type: "POST",
                            url: "setup/delete_taskdata",
                            data: "enq_id=" + splitedArray[1],
                            success: function (msg) {
                                oTable.fnDraw(false);
                            // oTable.fnDeleteRow(aPos[0]);
                            }
                        });
                    }
                })
            });

        },
        "aoColumns": [
        {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },
        {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },
        {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },
        {
            "bVisible": true, 
            "bSearchable": true, 
            "bSortable": true
        },
        {
            "bVisible": true, 
            "bSearchable": false, 
            "bSortable": false
        }
        ],

        "oLanguage": {
            "sSearch": "Search all columns:"
        },
        "sDom": '<"clear">T<"H"Cr><"clear">lfrt<"F"ip>',
        fnPreDrawCallback: function () {
            if (!responsiveHelper) {
                responsiveHelper = new ResponsiveDatatablesHelper(tableElement, breakpointDefinition);
            }
        },
        fnRowCallback: function (nRow) {
            responsiveHelper.createExpandIcon(nRow);
        }
    }).columnFilter();
    $("tfoot input").keyup(function () {
        oTable.fnFilter(this.value, $("tfoot input").index(this));
    });
    $('table#project-table').find('tr th#lastaction input').remove();
    //$('table#project-table').find('tr th#firstaction input').remove();
    //tr th#firstaction
    // $('div.ui-toolbar:first').append('<a title="Add" id="add-item" data-toggle="modal" data-target="#myModal"   href="javascript:void(0)"><span class="add  glyphicon glyphicon-plus-sign btn-lg" style="float: right;margin-top: -15px; margin-right:10px;cursor: pointer;"></span></a><span style="float: right;margin-top: -6px;margin-right: 0px;background-color: #2A6496"><input title="All-Check" type="checkbox" class="allchk"></span><span id="delete" class="glyphicon glyphicon-remove-circle btn-lg" style="float: right;margin-right: 1%;margin-top: -15px;cursor: pointer"></span> <span id="help"  style="float: right;margin-top: -15px;cursor: pointer" class="glyphicon glyphicon-info-sign btn-lg"></span>'
    /*for permission start*/
    var addContent = '';
    var deleteContent = '';
    if(parseInt($('input#insertPermission').val())){
        addContent = '<a title="Add" id="add-item" data-toggle="modal" data-target="#myModal"   href="javascript:void(0)"><span class="add  glyphicon glyphicon-plus-sign btn-lg" style="float: right; margin-top: -15px;cursor: pointer;"></span></a>';
    }
    if(parseInt($('input#deletePermission').val())){
        deleteContent = '<span id="delete" title="Dleete All" class="glyphicon glyphicon-remove-circle btn-lg" style="float: right;margin-top: -15px;cursor: pointer"></span><span  style="float: right;margin-top: 0;margin-left: 2%;background-color: #2A6496"><input title="All-Check" type="checkbox" class="allchk">';
    }
    /*for permission end*/
    $('div.ui-toolbar:first').append('<span id="help"  data-toggle="popover" title="A Title" data-content="And heres some amazing content. Its very engaging. right?"   title="Help" style="float: right;margin-right:1%;margin-top: -15px;cursor: pointer" class="glyphicon glyphicon-info-sign btn-lg"></span>'+ addContent + deleteContent +'</span> '
        );
});

//$('div#myModal button#more').live('click',function(e){
//    e.preventDefault();
//    var className   = $('span[id*="task_"]:last').attr('id');
//    var classSplitedArray   = className.split('_');
//    className = parseInt(parseInt(classSplitedArray[1])+ 1);
//    $('div#myModal div#macho').before('<span class="task" id="task_'+className +'"><div class="item_'+className+'"'+'style="border:1px solid #cccccc;padding:13px 7px 10px;margin-bottom:5px"><div class="form-group"><input style="width: 48%;float: left; margin: 1%;" class="form-control" placeholder="Task Code" id="tsk_code" name="tsk_code" type="text" required="required"><input style="width: 48%;float: left; margin: 1%;" class="form-control" placeholder="Task Name" id="tsk_name" name="tsk_name" type="text" required="required"></div><div class="form-group"><input style="width: 48%;float: left; margin: 1%;" class="form-control numeric" placeholder="Task Unit" id="tsk_unit" name="tsk_unit" type="text" required="required"><textarea style="width: 100%;float: left; margin: 1%;" class="form-control" placeholder="Task Desc" id="tsk_desc" name="mtr_desc"></textarea></div> <div style="clear:both"></div></div>'+
//        '<div id="delete_'+className +'"'+' style="width: 26px;border: 1px solid #cccccc; float: right; margin-right: -25px;margin-top: -71px;cursor:pointer"><img alt="delete" src="images/delete_red.png"></div></span>'
//        );
//})

$('div#myModal div[id*="delete_"]').live('click',function(){
    var idArray   = $(this).attr('id').split('_');
    $('span#task_'+idArray[1]).remove();
})


$('#myModal span#remove').live('click',function(){
    $('option', $('#myModal #parent')).each(function(element) {
        $('#myModal #parent').multiselect('deselect', $(this).val());
    });
    $('#myModal div#selectedTask span.removeImg').html('');
})



$('div#myModal input#add').live('click',function(e){
    var error = 0;
    var  name = new Array();
    var optionVal = '';
    $('div#myModal div[class*="item_"] input#tsk_name').each(function(i,v){
        name[i] = {};
        if($(v).val()){
            if(optionVal != ''){
                optionVal  =  optionVal + '&' + $(v).val();
            }else{
                optionVal  =  optionVal + $(v).val();
            }
            name[i]['tsk_name_'+i] =  $(v).val();
        }else{
            error = 1;
        }
    })

    var  code = new Array();
    $('div#myModal div[class*="item_"] input#tsk_code').each(function(i,v){
        code[i] = {};
        if($(v).val()){
            code[i]['tsk_code_'+i] =  $(v).val();
        }else{
            error = 1;
        }
    })

    var  desc = new Array();
    $('div#myModal div[class*="item_"] textarea#tsk_desc').each(function(i,v){
        desc[i] = {};
        if($(v).val()){
            desc[i]['tsk_desc_'+i] =  $(v).val();
        }
    })

    var  unit = new Array();
    $('div#myModal select#mgrt').each(function(i,v){
        unit[i] = {};
         if($(v).find('option:selected').val()){
            unit[i]['tsk_unit_'+i] =  $(v).find('option:selected').val();
        }
    })

    if(!error){
        e.preventDefault();

        var  newArray  = {};
        newArray ['name'] = name;
        newArray ['code'] = code;
        newArray ['desc'] = desc;
        newArray ['unit'] = unit;
        newArray ['parent'] = $('select#parent option:selected').val();

        $.post('setup/addtask', {
            data: newArray
        }, function (data) {
            data = $.parseJSON(data);
            if (data.success) {
                if(optionVal.indexOf("&")!== -1){
                    var splitedArray  = optionVal.split('&');
                    $(splitedArray).each(function(i,v){
                        $('ul.multiselect-container').append('<li><a href="javascript:void(0);"><label class="radio"><input type="radio" value="'+ data.Name[v]  +'"> '+ v + '</label></a></li>');
                        $('select#parent').append('<option value="'+ data.Name[v]  +'">'+ v + '</option>');
                        $('select#updateParent').append('<option value="'+ data.Name[v]  +'">'+ v + '</option>');
                    })
                }else{
                    $('ul.multiselect-container').append('<li><a href="javascript:void(0);"><label class="radio"><input type="radio" value="'+ data.Name[optionVal]  +'"> '+ optionVal + '</label></a></li>');
                    $('select#parent').append('<option value="'+ data.Name[optionVal]  +'">'+ optionVal + '</option>');
                    $('select#updateParent').append('<option value="'+ data.Name[optionVal]  +'">'+ optionVal + '</option>');
                }
                bootbox.alert(data.success, function() { });
                $('option', $('#parent')).each(function(element) {
                    $('#parent').multiselect('deselect', $(this).val());
                });
                $('#parent').multiselect('rebuild');
                $('#mgrt').multiselect('rebuild');
                $('#updateParent').multiselect('rebuild');

                //alert(data.success);
                $('div#myModal span.task').remove();
                oTable.fnDraw(false);
                $('#myModal div#selectedTask span.removeImg').html('');
                $('button#close').click();
            }else{
                bootbox.alert(data.error , function() { });
                $('div#myModal input#tsk_name').each(function(i,v){
                    if($(v).val() == data.errorVal ){
                        $(this).css({
                            'border-color': 'red'
                        });
                    }else{
                        $(this).css({
                            'border-color': ''
                        });
                    }
                })
                $('div#myModal input#tsk_code').each(function(i,v){
                    if($(v).val() == data.errorVal ){
                        $(this).css({
                            'border-color': 'red'
                        });
                    }else{
                        $(this).css({
                            'border-color': ''
                        });
                    }
                })
            }
        });
    }

})

$('a#add-item').live('click', function () {
    $('div#myModal div.modal-body input:text').css({'border-color': ''});
    $('div#myModal div.modal-body input#tsk_name').val('');
    $('div#myModal div.modal-body input#tsk_code').val('');
    $('div#myModal div.modal-body textarea#tsk_desc').val('');
    $('div#myModal div.modal-body input#tsk_unit').val('');

})

$('a.umodal').live('click', function () {
    var splitedArray = $(this).attr('id').split('_');
    $.ajax({
        type: "POST",
        url: "setup/tsk_edit_modal",
        data: "edit_id=" + splitedArray[1],
        dataType: "json",
        success: function (data) {
            $(data).each(function (i, v) {
                $('option', $('#updateParent')).each(function(element) {
                    $('#updateParent').multiselect('deselect', $(this).val());
                });
                if(v.parent_id){
                    $('#updateParent').multiselect('select', v.parent_id);
                    $('#updatemyModal div#selectedTask span.removeImg').html('<span style="cursor: pointer" id="remove" class="glyphicon glyphicon-remove"></span>');

                }else{
                    $('#updateParent').multiselect('select', " ");
                    $('#updatemyModal div#selectedTask span.removeImg').html('');
                }

                $('div#updatemyModal div.modal-body input#tsk_name').val(v.tsk_name);
                $('div#updatemyModal div.modal-body input#tsk_code').val(v.tsk_code);
                $('div#updatemyModal div.modal-body textarea#tsk_desc').val(v.tsk_desc);
               // $('div#updatemyModal div.modal-body input#tsk_unit').val(v.tsk_unit);
                $('div#updatemyModal div.modal-body input#tsk_id').val(v.tsk_id);
               
                if(v.tsk_unit){
               $('div#updatemyModal div.modal-body select#mgrt').multiselect('select', v.tsk_unit);
                }
                

                $('div#updatemyModal input#tsk_name').css({
                    'border-color': ''
                });
                $('div#updatemyModal input#tsk_code').css({
                    'border-color': ''
                });
            });
        }
    });
})

$('div#updatemyModal input#update').live('click', function (e) {
    var error = 1;
    if(($('div#updatemyModal div.modal-body input#tsk_name').val() != '') && ($('div#updatemyModal div.modal-body input#tsk_code').val()!='')){
        e.preventDefault();
        var error = 0;
    }

    if(!error){
        $.ajax({
            url: 'setup/updatetaskoperation',
            async: false,
            dataType: "json",
            data: {
                tsk_name: $.trim($('div#updatemyModal div.modal-body input#tsk_name').val()),
                tsk_code: $.trim($('div#updatemyModal div.modal-body input#tsk_code').val()),
                tsk_desc: $.trim($('div#updatemyModal div.modal-body textarea#tsk_desc').val()),
                tsk_unit: $.trim($('div#updatemyModal div.modal-body select#mgrt option:selected').val()),
                tsk_id : $('div#updatemyModal div.modal-body input#tsk_id').val(),
                tsk_primary_id : $('select#updateParent option:selected').val()
            },
            type: "POST",
            success: function (data) {
                if (data.success) {
                    bootbox.alert(data.success, function() { });
                    //alert(data.success);
                    oTable.fnDraw(false);
                    $('button#close').click();
                    return false;
                } else {
                    bootbox.alert(data.error, function() { });
                    $('div#updatemyModal input#tsk_name').each(function(i,v){
                        if($(v).val() == data.errorVal ){
                            $(this).css({
                                'border-color': 'red'
                            });
                        }else{
                            $(this).css({
                                'border-color': ''
                            });
                        }
                    })
                    $('div#updatemyModal input#tsk_code').each(function(i,v){
                        if($(v).val() == data.errorVal ){
                            $(this).css({
                                'border-color': 'red'
                            });
                        }else{
                            $(this).css({
                                'border-color': ''
                            });
                        }
                    })
                    //alert(data.error);
                    return false;
                }
            }
        })
    }
})

$('input.allchk').live('click', function () {
    var nodes = $('#project-table').dataTable().fnGetNodes();
    if ($(this).attr('checked')) {
        $('input.chk', nodes).attr("checked", true);
    } else {
        $('input.chk', nodes).attr("checked", false);
    }
})

$('span#delete').live('click', function () {
    var oTable = $('#project-table').dataTable();
    if ($('input.chk:checked', oTable.fnGetNodes()).length) {
        /*var r = confirm("Do Confirm To Delete!");
        if (!r) {
            return false;
        }*/
        bootbox.confirm("Do you confirm to Delete!", function(r) {
            if(r){
                var sData = $('input.chk:checked', oTable.fnGetNodes()).serialize();
                var aTrs = oTable.fnGetNodes();
                for (var i = 0; i < aTrs.length; i++) {
                    if ($('input.chk:checked', aTrs[i]).val()) {
                        $.ajax({
                            type: "POST",
                            url: "setup/delete_all_task_data",
                            data: "enq_id=" + $('input.chk:checked', aTrs[i]).attr('id'),
                            success: function (msg) {
                                oTable.fnDraw(false);
                            }
                        });
                    }
                }
            }
        })
    } else {
        bootbox.alert("Row Select First!", function() { });
        //alert('Row Select First');
        return false;
    }
})

$('div#myModal div.modal-body button#addTask').live('click',function(){
    $.ajax({
        url: 'setup/maketasktree',
        async: false,
        type: "POST",
        success: function (data) {
            $('div#taskListModal div.taskTree').html('<div id="conten" style="border: 1px solid green;padding: 16px;margin-bottom: 16px;">' + data + '</div>')
        }
    })
})

$('div#taskListModal div.taskTree #conten a.add').live('click',function(){

    var taskId  = $(this).attr('id');
    $('option', $('#myModal #parent')).each(function(element) {
        $('#myModal #parent').multiselect('deselect', $(this).val());
    });
    if(taskId){
        $('#myModal #parent').multiselect('select', taskId);
    }else{
        $('#myModal #parent').multiselect('select', " ");
    }
    $('#myModal div#selectedTask span.removeImg').html('<span style="cursor: pointer" id="remove" class="glyphicon glyphicon-remove"></span>');
    $('div#taskListModal button#close').click();

})

$('a#add-item').live('click',function(){
    $('option', $('#parent')).each(function(element) {
        $('#parent').multiselect('deselect', $(this).val());
    });
    $('#parent').multiselect('rebuild');
    $('#updateParent').multiselect('rebuild');

    //alert(data.success);
    $('div#myModal span.task').remove();
    $('#myModal div#selectedTask span.removeImg').html('');
})



$('div#updatemyModal div.modal-body button#updateTask').live('click',function(){
    $.ajax({
        url: 'setup/maketasktree',
        async: false,
        type: "POST",
        success: function (data) {
            $('div#taskListModal div.taskTree').html('<div id="conten" style="border: 1px solid green;padding: 16px;margin-bottom: 16px;">' + data + '</div>')
        }
    })
})

$('div#taskListModal div.taskTree #conten a.add').live('click',function(){

    var taskId  = $(this).attr('id');
    $('option', $('#updatemyModal #updateParent')).each(function(element) {
        $('#updatemyModal #updateParent').multiselect('deselect', $(this).val());
    });
    if(taskId){
        $('#updatemyModal #updateParent').multiselect('select', taskId);
    }else{
        $('#updatemyModal #updateParent').multiselect('select', " ");
    }
    $('#updatemyModal div#selectedTask span.removeImg').html('<span style="cursor: pointer" id="remove" class="glyphicon glyphicon-remove"></span>');
    $('div#taskListModal button#close').click();

})


$('#updatemyModal span#remove').live('click',function(){
    $('option', $('#updatemyModal #updateParent')).each(function(element) {
        $('#updatemyModal #updateParent').multiselect('deselect', $(this).val());
    });
    $('#updatemyModal div#selectedTask span.removeImg').html('');
})

