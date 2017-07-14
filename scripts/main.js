function main() {
    var phonebookDict = {
    Alice: '703-493-1834',
    Bob: '857-384-1234',
    Elizabeth: '484-584-2923'
    };

    console.log(phonebookDict['Elizabeth']);
    phonebookDict["Kareem"] = '938-489-1234';
    delete phonebookDict['Alice'];
    phonebookDict['Bob'] = '968-345-2345';
    var personName = "Elizabeth";
    console.log("Person name is: " + phonebookDict[personName]);
    console.log(phonebookDict);

    for (person in phonebookDict) {
        console.log(person);
    }
}