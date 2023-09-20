// S
// seperate string of names into individual names.
// change names to lowercase
// get initia; of first name
// get last name
// if theres a middle name get initial of moddle name
// if last name has hyphen, remove hyphen
// join first initial, second name initial(if exixts) and last name

// C
// c to lowercase
// add "@" befofore c, then ".com" after c

// join S an C

const S = "John Doe, Peter Parker, Mary Jane Watson-Parker, James Doe, John Elvis Doe, Jane Doe, Penny Parker"
const C = "Company"

function solution(S,C){
    let emailMap = new Map()
    let emailAddressArry = []
    let count = 1

// add "@" befofore c, then ".com" after c
    let companyName = "@" + C.toLowerCase() + ".com"
    
// seperate string of names into individual names.
    let names = S.split(", ")
    names. forEach((name) => {
// change names to lowercase
        let nameArry = name.toLowerCase().split(" ")
        let emailName
// get initia; of first name
        let firstin = nameArry[0][0]
// get last name
        let lastName = nameArry[nameArry.length - 1]

// if last name has hyphen, remove hyphen
        if (lastName.includes("-")){
             lastName = lastName.replace("-", "").slice(0,8)
        }

// if theres a middle name get initial of moddle name
// join first initial, second name initial(if exixts) and last name

        let midIn
        if (nameArry.length === 3){
            midIn = nameArry[1][0]
            emailName = [firstin, midIn, lastName].join('')
        }
        else emailName = [firstin, lastName].join('')
       
        // console.log(emailName)
        if (emailMap.has(emailName)){

            count++;
            emailMap.set(emailName, count)
            console.log(emailMap)
            emailName = `${emailName}${count}`;
            emailAddressArry.push(`${name} ${emailName}${companyName}`)
            
        }
        else {
            emailMap.set(emailName, 1)
            emailAddressArry.push(`${name} ${emailName}${companyName}`)
        }
        console.log(emailAddressArry);
    });

    return emailAddressArry.join(', ')

}

console.log(solution(S,C))