// page2 start

var room = 1;
function household_details() {

    room++;
    var objTo = document.getElementById('household_details')
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = ' <form class=" row form-items justify-content-center "><div class="col-md-3 "><div class="form-group"> <input type="text" class="form-control" placeholder="First name" name="Fname"></div></div><div class="col-md-3 "><div class="form-group">  <input type="text" class="form-control" placeholder="Last name" name="Lname"></div></div><div class="col-md-3 "><div class="form-group">  <input type="date" class="form-date" placeholder="" name="dob"></div></div><div class="col-md-2 "><div class="form-group"><div class="input-group"> <div class="input-group-btn"> <a class="btn btn-danger" type="button" onclick="remove_household_details(' + room + ');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </a></div></div></div></div><div class="clear"></div></form>';

    objTo.appendChild(divtest)
}
function remove_household_details(rid) {
    $('.removeclass' + rid).remove();
}

// page2 end

// page19 start

window.onload = function () {
    //Reference the DropDownList.
    const ddlYears = document.getElementById("ddlYears");
    const eletric = document.getElementById("eletric");
    const plumbing = document.getElementById("plumbing");
    const acsystem = document.getElementById("ac-system");
    //Determine the Current Year.
    const currentYear = (new Date()).getFullYear();

    //Loop and add the Year values to DropDownList.
    for (let i = 1980; i <= currentYear; i++) {
        const option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        ddlYears.appendChild(option);
    }

    //Loop and add the Year values to DropDownList.
    for (let i = 1980; i <= currentYear; i++) {
        const option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        eletric.appendChild(option);
    }
    for (let i = 1980; i <= currentYear; i++) {
        const option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        plumbing.appendChild(option);
    }
    for (let i = 1980; i <= currentYear; i++) {
        const option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        acsystem.appendChild(option);
    }
};

// page19 end