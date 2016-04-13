function deleteBuddy(delBtn) {
    $("#dialog-confirm").html("Are you sure ?");
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Modal",
        height: 250,
        width: 400,
        buttons: {
            "Sure": function () {
                var buddyLi = delBtn.parentNode.parentNode.parentNode;
                $(buddyLi).remove();
                $(this).dialog('close');
            },
            "No!": function () {
                $(this).dialog('close');
            }
        }
    });
}

function sortByName() {
    var buddyLiNodeList = $("#buddylist > li").get();
    tinysort(buddyLiNodeList, { selector: "[name=fullname]" });
}

function showDetails(e) {
    $(e.nextElementSibling).toggle();
}

$(function() {
    var dialog, form;
    var username = $('#username');
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var email = $('#email');
    var dob = $('#dob');
    var notes = $('#notes');
    var allFields = $([]).add(username).add(firstname).add(lastname);

    function createTitlesDiv() {
        var buddyTitleDiv = document.createElement("div");
        $(buddyTitleDiv).addClass("buddytitle");
        var statusSpan = document.createElement("span");
        $(statusSpan).attr("name", "status");
        $(statusSpan).text("[*]");
        $(statusSpan).addClass("online");
        $(buddyTitleDiv).append(statusSpan);
        var fullnameSpan = document.createElement("span");
        $(fullnameSpan).attr("name", "fullname");
        $(fullnameSpan).text(firstname.val() + " " + lastname.val());
        $(buddyTitleDiv).append(fullnameSpan);
        $(buddyTitleDiv).click(function () {
            showDetails(buddyTitleDiv);
        });
        var delBtn = document.createElement("button");
        $(delBtn).text("x");
        var delSpan = document.createElement("span");
        $(delSpan).css("float", "right");
        $(delSpan).append(delBtn);
        $(buddyTitleDiv).append(delSpan);
        $(delBtn).click(function () {
            deleteBuddy(delBtn);
        });
        return buddyTitleDiv;

    }

    function createTr(nodeName, nodeLabel, nodeValue){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        $(td1).attr("name",nodeName);
        $(td1).text(nodeLabel);
        var td2 = document.createElement("td");
        $(td2).text(nodeValue);
        tr.appendChild(td1);
        tr.appendChild(td2);
        return tr;

    }

    function createDetailDiv(){
        var buddyDetailDiv = document.createElement("div");
        var tbl = document.createElement("table");
        var nametr = document.createElement("tr");
        var nametd = document.createElement("td");
        buddyDetailDiv.appendChild(tbl);
        $(tbl).append(createTr("username","username", $(username).val()));
        $(tbl).append(createTr("firstname","Firstname", $(firstname).val()));
        $(tbl).append(createTr("lastname","Lastname", $(lastname).val()));
        $(tbl).append(createTr("email","Email Id", $(email).val()));
        $(tbl).append(createTr("dob","Date Of Birth", $(dob).val()));
        $(tbl).append(createTr("notes","Bio", $(notes).val()));
        $(buddyDetailDiv).addClass("buddydetails");
        return buddyDetailDiv;
    }

    function addBuddy() {
        var buddyLi = document.createElement("li");
        var buddyTitleDiv = createTitlesDiv();
        var buddyDetailDiv = createDetailDiv();
        buddyLi.appendChild(buddyTitleDiv);
        buddyLi.appendChild(buddyDetailDiv);
        $("#buddylist").append(buddyLi);
        $( dialog ).dialog( "close" );
    }
    dialog = $( "#add-buddy-form" ).dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true,
        buttons: {
            "Add buddy": addBuddy,
            Cancel: function() {
                dialog.dialog( "close" );
            }
        },
        close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
        }
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        addBuddy();
    });

    $( "#add-buddy-button" ).button().on( "click", function() {
        dialog.dialog( "open" );
    });

    $(function () {
        $("#buddylist").sortable();
        $("#buddylist").disableSelection();
    });

    $("#searchkey").keyup(function () {
        var searchKey = $("#searchkey").val().toLowerCase();
        $("#buddylist > li").each(function() {
            var actualName = $(this).find("[name=fullname]").text().toLowerCase();
            if (actualName.indexOf(searchKey) == -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});
 