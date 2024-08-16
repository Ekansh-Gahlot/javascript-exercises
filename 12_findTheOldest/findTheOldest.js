const findTheOldest = function(peoples) {
    let oldestAge = -1;
    let result = "";
    let peopleAge = -1;
    for(let people of peoples)
    {
        const d = new Date();
        if(people.yearOfDeath === undefined)
        {
            peopleAge = d.getFullYear()-people.yearOfBirth 
        }
        else{
            peopleAge = people.yearOfDeath - people.yearOfBirth;
        }
        if(oldestAge < peopleAge)
        {
            oldestAge = peopleAge;
            result = people;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
