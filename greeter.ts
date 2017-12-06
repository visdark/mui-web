/**
 * Created by sunrenjie on 2017/12/5.
 */

function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);