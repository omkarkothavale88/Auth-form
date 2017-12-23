var jsoDemo = [
    {
        "name": "John",
        "age": 30,
        "car": null
    },
    {
        "name": "leo",
        "age": 20,
        "car": "alto"
    }
]


var clothVal2;
var allData = [];

var x;
var myname;
var percentage;
var firstname = "omkr";
var myrating = RateApp();
var name = {

    fname: 'bob',
    localName: 'home',

    mname: function () {

        return this.localName;
    }

}


getData(function (data) {
    console.log("The data is: " + data);
});


function getData(callback) {
    (function (response) {
        callback(response);
    });
}


function validate() {



    cc = "20";
    console.log("hiiiiii  " + name.localName);
    console.log("in validate");
    var x = document.getElementById("Sc").value;
    if (document.getElementById("Sc").value == "") {
        alert("Please enter your Name");
    } else {

        document.getElementById("Sc").value = x;
        console.log("hello" + x)

        displayResult();
    }

}



function displayResult() {
    var itemVal = document.getElementById("select");
    if (itemVal.selectedIndex == 0) {

        alert("Please select any one option");

    }

    if (itemVal.selectedIndex == 1) {
        console.log("in cloths");
        var val = document.getElementById("price");
        if (val.value == 0) {
            alert("Enter your amount");
        } else {
            console.log(val.value);
            clothVal2 = val.value * 1.5;
            console.log(clothVal2);
            alert("Your total price with GST is  " + clothVal2);
        }


    }



    if (itemVal.selectedIndex == 2) {
        console.log("in FOOD");
        var val = document.getElementById("price");
        if (val.value == 0) {
            alert("Enter your amount");
        } else {
            console.log(val.value);
            clothVal2 = val.value * 1.75;
            console.log(clothVal2);
            alert("Your total price with GST is  " + clothVal2);
        }


    }


    if (itemVal.selectedIndex == 3) {
        console.log("in FUEL");
        var val = document.getElementById("price");
        if (val.value == 0) {
            alert("Enter valid amount");
        } else {
            console.log(val.value);
            clothVal2 = val.value * 1.25;
            console.log(clothVal2);
            alert("Your total price with GST is  " + clothVal2);
        }


    }


}

function showName(myname) {
    v = 10;
    console.log(cc);
    console.log("in sow");
    console.log(myname);
    /*    alert(myname);*/
    return myname;
}

function show() {

    return "om";
}


document.getElementById("demo").innerHTML = show();


function getname() {
    this.firstname = "omkar k";
    this.jjj = "KOMAL k";
    console.log(this.jjj);
    return this.firstname;
    v = 111;

}


function TAKEname() {

    jjj = "KOMAL k";
    console.log(v);
    return this.firstname;

}




getname();

function getList() {

    document.getElementById("pb").value = clothVal2;
}




function RateApp() {
    console.log("Hii");
    var counter = 0;
    console.log("Hii" + counter);


    return function () {

        console.log(",," + counter);

        if (counter > 4) {
            return counter = 0;
        }

        for (; counter < 5; counter++) {

            return counter += 1;
            alert("Thanks");
        }

    };
}

function clickme() {
    console.log("Hii  click");
    document.getElementById("number").innerHTML = myrating();

}





function read(param, callback) {


    alert(param + " in read function");
    callback();
}

function changeColour() {

    if (document.getElementById('square').style.backgroundColor == "red") {

        document.getElementById('square').style.backgroundColor = "blue";

    } else {

        document.getElementById('square').style.backgroundColor = "red";

    }

}

function GETJSON() {
    for (var i = 0; i < jsoDemo.length; i++) {
        var xxx = jsoDemo[i];
        var yyy = JSON.stringify(xxx);
        console.log(xxx);
        document.getElementById("demoX").innerHTML += yyy
    }

}


function getallData() {

    allData.push(this.clothVal2);
    var itemOne = allData[0];
    console.log('value is ', itemOne);
    document.getElementById("dataZ").innerHTML = itemOne
}
