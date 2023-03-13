var my_screen = document.getElementById("iphone_screen");

/*
*Timer
*/
var start_time;
var end_time;

function end_timer() {
    end_time = Date.now();
    var total_time = (end_time - start_time) / 1000;

    alert(`It took you ${total_time} second to complete registration`)
}

/*
*Start screeen --> login_register screen
*/
function get_login_register_screen() {
    start_time = Date.now();

    // Change the HTML content of the div
    my_screen.innerHTML = "<h1>Welcome</h1>" +
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
        "<input type=\"text\" placeholder=\"First Name\">" +
        "<input type=\"text\" placeholder=\"Last Name\">" +
        "<input type=\"date\" name=\"Date of Birth\">" +
        "<input type=\"email\" placeholder=\"Email Address\">" +
        "<input type=\"text\" placeholder=\"Username\">" +
        "<input type=\"password\" placeholder=\"Password\">" +
        "<input type=\"password\" placeholder=\"Confirm Password\">" +
        "<button id=\"confirm_reg\" onclick=\"get_pet_selector()\">Confirm Registration</button>" +
        `<button class="alt_button" onclick="get_login_register_screen()">Back</button>`
    "</form>";
}

/*
*registration form --> pet_selector
*/
function get_pet_selector() {

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
                <input type="text" placeholder="Pet Name">
                <button id="done_button" onclick="end_timer()">Confirm</button>
                <button class="alt_button" onclick="get_pet_selector()">Back</button>
                </form>"`;
}
