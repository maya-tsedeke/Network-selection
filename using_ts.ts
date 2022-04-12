console.log("Hello world");
function welcomePerson(person:Person){
    console.log("Hey ${person.firstname} ${person.lastname}");
}

const james ={
    firstname: "James",
    lastname: "Tsedeke"
}
welcomePerson(james);
interface Person{
firstname: string;
lastname: string;
}