import countriesFlags from "./countriesFlag.js";

const getCountryFlag = (data) => {
    for(let country in countriesFlags) {
        if(country === data || countriesFlags[country].alias === data) {
            return countriesFlags[country];
        }
    }

    return {};
}

export default getCountryFlag;