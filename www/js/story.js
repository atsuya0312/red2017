// This is a JavaScript file
var json1 = {
    "image":"http://onlineschoolmanagementsoftware.com/wp-content/uploads/2013/10/4-15.jpg",
    "questionid":'1',
    "qustion":"質問です",
    "anslist":[
        {"ansid":'1',"ans":"あああ"},
        {"ansid":'2',"ans":"いいい"},
        {"ansid":'3',"ans":"ううう"}
    ]
};

function setRecord(json) {
    
    
    var img = ($('<img src=' + json.image + '>'+'<div>' + json.qustion + '</div>'));
    var ans = json.anslist;
    for (var i = 0; i < ans.length; i++) {
        var d2 = ans[i];
        img.append($('<div>' + d2.ans + '</div>'));
    }
    $('#t').replaceWith(img);
   
}
