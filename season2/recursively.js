let user = {
    name: 'Prathyusha',
    address:{
        personal: {
            city: 'Punganur',
            area: 'Teachers colony'
        },
        office: {
            city: 'Bangalore',
            area: {
                landmark: 'Manyata Tech Park',
            }
        }
    }
}

//final obj for baove user object can be wrtien as:
let final_obj = {
    user_name: 'Prathyusha',
    user_address_personal_city:'Punganur',
    user_address_personal_area: 'Teachers colony',
    user_address_office_city: 'Bangalore',
    user_address_office_area_landmark: 'Manyata Tech Park'
}

//now think recursively and writing final obj using funciton
let finalObj = {};
let magic = (obj, parent) => {
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            magic(obj[key], parent+ '_' + key);
        } else {
            finalObj[parent+ '_' + key] = obj[key];
        }
    }
    return finalObj;
}
console.log(magic(user, 'user'));

