function MonetaryFormat ()
{
    this.style.textAlign = "right";
    var R = TextToMonetary(this.value);
    this.value = R;

    if (this.setSelectionRange)
    {
        this.focus();
        this.setSelectionRange(R.length, R.length);
    }
    else if (this.createTextRange)
    {
        var range = this.createTextRange();
        range.collapse(true);
        range.moveEnd('character', R.length);
        range.moveStart('character', R.length);
        range.select();
    }
}

function TextToMonetary (Text)
{
    var Prefix = "$";
    var OriginalStr = String(Text).replace (/\D/g, "");
    var Result = "";

    if(OriginalStr.length === 0)
    {
        Result="";
    }
    else if(OriginalStr.length > 0 && OriginalStr.length <= 3)
    {
        Result = Prefix+OriginalStr;
    }

    else if(OriginalStr.length === 4)
    {
        Result = Prefix+OriginalStr[0]+"."+OriginalStr.substr(1,OriginalStr.length-1);
    }

    else if(OriginalStr.length === 5)
    {
        Result = Prefix+OriginalStr.substr(0,2)+"."+OriginalStr.substr(2,OriginalStr.length-1);
    }
    else if(OriginalStr.length === 6)
    {
        Result = Prefix+OriginalStr.substr(0,3)+"."+OriginalStr.substr(3,OriginalStr.length-1);
    }
    else if(OriginalStr.length === 7)
    {
        Result = Prefix+OriginalStr[0]+"."+OriginalStr.substr(1,3)+"."+OriginalStr.substr(4,OriginalStr.length-1);
    }
    else if(OriginalStr.length === 8)
    {
        Result = Prefix+OriginalStr.substr(0,2)+"."+OriginalStr.substr(2,3)+"."+OriginalStr.substr(5,OriginalStr.length-1);
    }
    else if(OriginalStr.length === 9)
    {
        Result = Prefix+OriginalStr.substr(0,3)+"."+OriginalStr.substr(3,3)+"."+OriginalStr.substr(6,OriginalStr.length-1);
    }

    return Result;
}

function MonetaryToText (Text)
{
    return Text.replace("$", "").split(".").join("");
}
