function onClickFun() {
        var name = document.getElementById('name');
        var message = document.getElementById('message');
        if (name.value.length == 0 || message.value.length == 0)
            return;

        var b = document.createElement('b');
        var textName = document.createTextNode(name.value);
        var textMessage = document.createTextNode(message.value);

        b.appendChild(textName);

        var date = new Date();
        var strDate = date.toString();
        document.getElementById("messages").appendChild(document.createTextNode(strDate));
        document.getElementById("messages").appendChild(document.createTextNode(' '));
        document.getElementById("messages").appendChild(b);
        document.getElementById("messages").appendChild(document.createTextNode(': '));
        document.getElementById("messages").appendChild(textMessage);
        document.getElementById("messages").appendChild(document.createElement('br'));
        name.value = '';
        message.value = '';
    }