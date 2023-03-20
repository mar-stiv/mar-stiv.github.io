var my_screen = document.getElementById("iphone_screen");

var curr_design_num;

function random_design_num() {
    Math.random() >= 0.5 ? curr_design_num = 1 : curr_design_num = 0;
}
random_design_num()
console.log(curr_design_num)


/*
*Timer
*/
var start_time_design0;
var end_time_design0;
var total_time_design0;
var test0_done = false;

var start_time_design1;
var end_time_design1;
var total_time_design1;
var test1_done = false;


function end_timer() {
    if (curr_design_num == 0) {
        end_time_design0 = Date.now();
        total_time_design0 = (end_time_design0 - start_time_design0) / 1000;
        test0_done = true;
    } else {
        end_time_design1 = Date.now();
        total_time_design1 = (end_time_design1 - start_time_design1) / 1000;
        test1_done = true;
    }

    /*IF BOTH TEST DONE SUMMARY & SEND TO HOME 
    ELSE CHANGE CURR_TEST_NUM AND RESTART TES*/
    if (test0_done && test1_done) {
        my_screen.innerHTML = `
        <p>Design0 took you ${total_time_design0} second to complete</p>
        <p>Design1 took you ${total_time_design1} second to complete</p>
        <a href="home/home.html">Continue</a>`
            ;
    } else {
        alert("You will now do the same for the second design")
        curr_design_num == 0 ? curr_design_num = 1 : curr_design_num = 0;
        get_login_register_screen()
    }
}

/*
*Start screeen --> login_register screen
*/
function get_login_register_screen() {
    if (curr_design_num == 0) { start_time_design0 = Date.now() }
    else { start_time_design1 = Date.now() }

    // Change the HTML content of the div
    my_screen.innerHTML = `<h1>Welcome</h1>` +
        "<form>" +
        `<img src="logo.png" id="company_logo" alt="Company Logo">` +
        "<input type=\"text\" placeholder=\"Username\">" +
        "<input type=\"password\" placeholder=\"Password\">" +
        `<button class="alt_button" id="login_button" onclick="login_alter(event)">Login</button>` +
        "<button id=\"register_button\" onclick=\"get_registration_form()\">Register</button>" +
        "</form>";
}

/*
* warn user on login attempt that they have to register first
*/
function login_alter(event) {
    event.preventDefault();
    alert(`Please Register First`);
}

/*
*login_register screen --> registration form
*/
function get_registration_form() {

    my_screen.innerHTML = "<h1>Registration Details</h1>" +
        "<form>" +
        "<input class=\"reg_input\" type=\"text\" placeholder=\"First Name\" required>" +
        "<input class=\"reg_input\" type=\"text\" placeholder=\"Last Name\" required>" +
        "<input class=\"reg_input\" type=\"date\" name=\"Date of Birth\" required>" +
        "<input class=\"reg_input\" type=\"email\" placeholder=\"Email Address\" required>" +
        "<input class=\"reg_input\" type=\"text\" placeholder=\"Username\" required>" +
        "<input class=\"reg_input\" type=\"password\" placeholder=\"Password\" required>" +
        "<input class=\"reg_input\" type=\"password\" placeholder=\"Confirm Password\" required>" +
        "<button id=\"confirm_reg\" onclick=\"regInputCheck(event)\">Confirm Registration</button>" +
        `<button class="alt_button" onclick="get_login_register_screen()">Back</button>`
    "</form>";
}

function regInputCheck(event) {
    event.preventDefault();

    var inputComplete = true;
    var inputFields = document.getElementsByClassName("reg_input");
    console.log(`InputFields: ${inputFields.length}`);

    for (let index = 0; index < inputFields.length; index++) {
        if (!inputFields[index].value) { inputComplete = false; }
    }

    if (inputComplete) {
        get_pet_selector();
    } else { alert("Input Incomplete;") }
}


/*
* find correct pet selector
*/
function get_pet_selector() { curr_design_num == 0 ? get_pet_selector0() : get_pet_selector1(1) }

/*
*registration form --> pet_selector
*/
function get_pet_selector0() {

    my_screen.innerHTML = "<table>" +
        "<tr class=\"row\">" +
        "<td><img src=\"pet1.gif\" alt=\"Image 1\" class=\"pet_img\">" +
        "<button id=\"pet1_selector\" onclick=\"get_pet_naming_screen('pet1')\" class=\"select_pet_btn\">Select</button></td>" +
        "<td><img src=\"pet2.gif\" alt=\"Image 1\" class=\"pet_img\">" +
        "<button id=\"pet2_selector\" onclick=\"get_pet_naming_screen('pet2')\" class=\"select_pet_btn\">Select</button></td>" +
        "</tr>" +
        "<tr class=\"row\">" +
        "<td><img src=\"pet3.gif\" alt=\"Image 1\" class=\"pet_img\">" +
        "<button id=\"pet3_selector\" onclick=\"get_pet_naming_screen('pet3')\" class=\"select_pet_btn\">Select</button></td>" +
        "<td><img src=\"pet4.gif\" alt=\"Image 1\" class=\"pet_img\">" +
        "<button id=\"pet4_selector\" onclick=\"get_pet_naming_screen('pet4')\" class=\"select_pet_btn\">Select</button></td>" +
        "</tr>" +
        "<tr class=\"row\">" +
        "<td><img src=\"pet5.gif\" alt=\"Image 1\" class=\"pet_img\">" +
        "<button id=\"pet5_selector\" onclick=\"get_pet_naming_screen('pet5')\" class=\"select_pet_btn\">Select</button></td>" +
        "<td><img src=\"pet6.gif\" alt=\"Image 1\" class=\"pet_img\">" +
        "<button id=\"pet6_selector\" onclick=\"get_pet_naming_screen('pet6')\" class=\"select_pet_btn\">Select</button></td>" +
        "</tr>" +
        "<tr class=\"row\">" +
        "<td><img src=\"pet7.gif\" alt=\"Image 1\" class=\"pet_img\">" +
        "<button id=\"pet7_selector\" onclick=\"get_pet_naming_screen('pet7')\" class=\"select_pet_btn\">Select</button></td>" +
        "<td><img src=\"pet8.gif\" alt=\"Image 1\" class=\"pet_img\">" +
        "<button id=\"pet8_selector\" onclick=\"get_pet_naming_screen('pet8')\" class=\"select_pet_btn\">Select</button></td>" +
        "</tr>" +
        "</table>" +
        `<button class="alt_button" onclick="get_registration_form()">Back</button>`
}

function get_pet_naming_screen(pet_number) {
    var selected_pet = `<img src="${pet_number}.gif" alt="Image 1" class="naming_img">`;

    my_screen.innerHTML = `
                <h1>Your new Pet</h1>
                <p style="margin: 10% 5% 0% 5%; font-size:70%;">This little fellow will be your companion during your habit formation process.
                He will perform habits with you, remind you when a habit should be done and make the experience fun overall.
                Give your new friend a name and confirm your registration as last step:</p>
                <form>
                ${selected_pet}
                <input id="naming_field" type="text" placeholder="Pet Name" required>
                <button id="done_button" onclick="namingInputCheck(event)">Confirm</button>
                <button class="alt_button" onclick="get_pet_selector()">Back</button>
                </form>"`;
}

/*
*registration form --> pet_selector
*/
function get_pet_selector1(petNum) {
    console.log(petNum);

    my_screen.innerHTML = `
    <h1>Select Your Pet & Name Them</h1>
    <div id="selection_container">
    <img src="pet${petNum}.gif" alt="Image 1" id="selector_img">
    <br>
    <button id="back_button" onclick="prevPet(${petNum})"><-Previous</button>
    <button id="next_button" onclick="nextPet(${petNum})">Next -></button>
    </div>
    <form>
    <input id="naming_field" type="text" placeholder="Enter Pet Name" required>
    <button onclick="namingInputCheck(event)">Confirm Registration</button>
    <button class="alt_button" onclick="get_registration_form()">Back</button>
    </form>`
}

function nextPet(currPetNum) {
    console.log("next")
    currPetNum >= 8 ? get_pet_selector1(1) : get_pet_selector1(currPetNum + 1);
}

function prevPet(currPetNum) {
    currPetNum <= 1 ? get_pet_selector1(8) : get_pet_selector1(currPetNum - 1);
}

function namingInputCheck(event) {
    event.preventDefault()

    var namingComplete = true;
    var inputField = document.getElementById("naming_field").value

    inputField ? end_timer() : alert("Please Name Your Pet!");
}