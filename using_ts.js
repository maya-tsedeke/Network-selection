console.log("Hello world");
function welcomePerson(person) {
    console.log("Hey ${person.firstname} ${person.lastname}");
}
var james = {
    firstname: "James",
    lastname: "Tsedeke"
};
welcomePerson(james);
