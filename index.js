function result() {
    var student = {
        123456 : {
            name: "Jyoti Chakma",
            result: "Selected",
            unit: "A"
        },
        234567 : {
            name: "Binoy Chakma",
            result: "Not Selected!",
            unit: "B"
        },
        345678 : {
            name: "Sipu Chakma",
            result: "Waiting",
            unit: "C"
        },
        456789 : {
            name: "Sourav Chakma",
            result: "Selected",
            unit: "D"
        }
    }

    var roll = document.getElementById('roll').value;
    var definition = student[roll];

    var output = document.getElementById("output");
    var again = document.getElementById("again");
    var print = document.getElementById("print");

    if(definition==undefined) {
        output.innerHTML=`<br>The Roll is not applied<br>`;
        again.innerHTML=`<input type="button" name="" onclick="window.location.reload()" value="Search Again">`;
    } else {
        if(definition.result=="Selected") {
            output.innerHTML=`<div style="background-color: #12475f; border: 5px solid green; padding: 15px 20px; margin: 5px 30px;"><p>Name  : ${definition.name}<br>Result : ${definition.result}<br>Unit: ${definition.unit}</p></div>`;
            again.innerHTML=`<input type="button" name="" onclick="window.location.reload()" value="Search Again">`;
            print.innerHTML=`<input type="button" name="" onclick="window.print()" value="Print">`
        } else {
            output.innerHTML=`<div style="background-color: #12475f; border: 5px solid red; padding: 15px 20px; margin: 5px 30px;"><p>Name  : ${definition.name}<br>Result : ${definition.result}</p></div>`;
            again.innerHTML=`<input type="button" name="" onclick="window.location.reload()" value="Search Again">`;
        }
    };

}
