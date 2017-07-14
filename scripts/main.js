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

function topThree(hist) {
    var items = Object.keys(hist).map(function(key) {
        return [key, dict[key]];
    });
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    return "The top 3 are: " + items.slice(0,2);
}

function letterHistogram(str) {
    var toReturn = {};
    for (letterIndex in str) {
        var letter = str[letterIndex];
        if (letter in toReturn) {
            toReturn[letter] += 1;
        } else {
            toReturn[letter] = 1;
        }
    }
    console.log(toReturn);
    console.log(topThree(toReturn));
    return toReturn;
}

function wordHistogram(str) {
    var toReturn = {};
    str = str.toLowerCase();
    var arr = str.split(" ");
    for (wordIndex in arr){
        var word = arr[wordIndex];
        if (word in toReturn) {
            toReturn[word] += 1;
        } else {
            toReturn[word] = 1;
        }
    }
    console.log(toReturn);
}

