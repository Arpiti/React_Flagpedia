import { useState } from "react";
import "./styles.css";

export default function App() {
  var flags = {
    "🇦🇨": "Ascension Island",
    "🇦🇩": "Andorra",
    "🇦🇪": "United Arab Emirates",
    "🇦🇫": "Afghanistan",
    "🇦🇬": "Antigua & Barbuda",
    "🇦🇮": "Anguilla",
    "🇦🇱": "Albania",
    "🇦🇲": "Armenia",
    "🇦🇴": "Angola",
    "🇦🇶": "Antarctica",
    "🇦🇷": "Argentina",
    "🇦🇸": "American Samoa",
    "🇦🇹": "Austria",
    "🇦🇺": "Australia",
    "🇦🇼": "Aruba",
    "🇦🇽": "Åland Islands",
    "🇦🇿": "Azerbaijan",
    "🇧🇦": "Bosnia & Herzegovina",
    "🇧🇧": "Barbados",
    "🇧🇩": "Bangladesh",
    "🇧🇪": "Belgium",
    "🇧🇫": "Burkina Faso",
    "🇧🇬": "Bulgaria",
    "🇧🇭": "Bahrain",
    "🇧🇮": "Burundi",
    "🇧🇯": "Benin",
    "🇧🇱": "St. Barthélemy",
    "🇧🇲": "Bermuda",
    "🇧🇳": "Brunei",
    "🇧🇴": "Bolivia",
    "🇧🇶": "Caribbean Netherlands",
    "🇧🇷": "Brazil",
    "🇧🇸": "Bahamas",
    "🇧🇹": "Bhutan",
    "🇧🇻": "Bouvet Island",
    "🇧🇼": "Botswana",
    "🇧🇾": "Belarus",
    "🇧🇿": "Belize",
    "🇨🇦": "Canada",
    "🇨🇨": "Cocos (Keeling) Islands",
    "🇨🇩": "Congo - Kinshasa",
    "🇨🇫": "Central African Republic",
    "🇨🇬": "Congo - Brazzaville",
    "🇨🇭": "Switzerland",
    "🇨🇮": "Côte d’Ivoire",
    "🇨🇰": "Cook Islands",
    "🇨🇱": "Chile",
    "🇨🇲": "Cameroon",
    "🇨🇳": "China",
    "🇨🇴": "Colombia",
    "🇨🇵": "Clipperton Island",
    "🇨🇷": "Costa Rica",
    "🇨🇺": "Cuba",
    "🇨🇻": "Cape Verde",
    "🇨🇼": "Curaçao",
    "🇨🇽": "Christmas Island",
    "🇨🇾": "Cyprus",
    "🇨🇿": "Czechia",
    "🇩🇪": "Germany",
    "🇩🇬": "Diego Garcia",
    "🇩🇯": "Djibouti",
    "🇩🇰": "Denmark",
    "🇩🇲": "Dominica",
    "🇩🇴": "Dominican Republic",
    "🇩🇿": "Algeria",
    "🇪🇦": "Ceuta & Melilla",
    "🇪🇨": "Ecuador",
    "🇪🇪": "Estonia",
    "🇪🇬": "Egypt",
    "🇪🇭": "Western Sahara",
    "🇪🇷": "Eritrea",
    "🇪🇸": "Spain",
    "🇪🇹": "Ethiopia",
    "🇪🇺": "European Union",
    "🇫🇮": "Finland",
    "🇫🇯": "Fiji",
    "🇫🇰": "Falkland Islands",
    "🇫🇲": "Micronesia",
    "🇫🇴": "Faroe Islands",
    "🇫🇷": "France",
    "🇬🇦": "Gabon",
    "🇬🇧": "United Kingdom",
    "🇬🇩": "Grenada",
    "🇬🇪": "Georgia",
    "🇬🇫": "French Guiana",
    "🇬🇬": "Guernsey",
    "🇬🇭": "Ghana",
    "🇬🇮": "Gibraltar",
    "🇬🇱": "Greenland",
    "🇬🇲": "Gambia",
    "🇬🇳": "Guinea",
    "🇬🇵": "Guadeloupe",
    "🇬🇶": "Equatorial Guinea",
    "🇬🇷": "Greece",
    "🇬🇸": "South Georgia & South Sandwich Islands",
    "🇬🇹": "Guatemala",
    "🇬🇺": "Guam",
    "🇬🇼": "Guinea-Bissau",
    "🇬🇾": "Guyana",
    "🇭🇰": "Hong Kong SAR China",
    "🇭🇲": "Heard & McDonald Islands",
    "🇭🇳": "Honduras",
    "🇭🇷": "Croatia",
    "🇭🇹": "Haiti",
    "🇭🇺": "Hungary",
    "🇮🇨": "Canary Islands",
    "🇮🇩": "Indonesia",
    "🇮🇪": "Ireland",
    "🇮🇱": "Israel",
    "🇮🇲": "Isle of Man",
    "🇮🇳": "India",
    "🇮🇴": "British Indian Ocean Territory",
    "🇮🇶": "Iraq",
    "🇮🇷": "Iran",
    "🇮🇸": "Iceland",
    "🇮🇹": "Italy",
    "🇯🇪": "Jersey",
    "🇯🇲": "Jamaica",
    "🇯🇴": "Jordan",
    "🇯🇵": "Japan",
    "🇰🇪": "Kenya",
    "🇰🇬": "Kyrgyzstan",
    "🇰🇭": "Cambodia",
    "🇰🇮": "Kiribati",
    "🇰🇲": "Comoros",
    "🇰🇳": "St. Kitts & Nevis",
    "🇰🇵": "North Korea",
    "🇰🇷": "South Korea",
    "🇰🇼": "Kuwait",
    "🇰🇾": "Cayman Islands",
    "🇰🇿": "Kazakhstan",
    "🇱🇦": "Laos",
    "🇱🇧": "Lebanon",
    "🇱🇨": "St. Lucia",
    "🇱🇮": "Liechtenstein",
    "🇱🇰": "Sri Lanka",
    "🇱🇷": "Liberia",
    "🇱🇸": "Lesotho",
    "🇱🇹": "Lithuania",
    "🇱🇺": "Luxembourg",
    "🇱🇻": "Latvia",
    "🇱🇾": "Libya",
    "🇲🇦": "Morocco",
    "🇲🇨": "Monaco",
    "🇲🇩": "Moldova",
    "🇲🇪": "Montenegro",
    "🇲🇫": "St. Martin",
    "🇲🇬": "Madagascar",
    "🇲🇭": "Marshall Islands",
    "🇲🇰": "North Macedonia",
    "🇲🇱": "Mali",
    "🇲🇲": "Myanmar (Burma)",
    "🇲🇳": "Mongolia",
    "🇲🇴": "Macao Sar China",
    "🇲🇵": "Northern Mariana Islands",
    "🇲🇶": "Martinique",
    "🇲🇷": "Mauritania",
    "🇲🇸": "Montserrat",
    "🇲🇹": "Malta",
    "🇲🇺": "Mauritius",
    "🇲🇻": "Maldives",
    "🇲🇼": "Malawi",
    "🇲🇽": "Mexico",
    "🇲🇾": "Malaysia",
    "🇲🇿": "Mozambique",
    "🇳🇦": "Namibia",
    "🇳🇨": "New Caledonia",
    "🇳🇪": "Niger",
    "🇳🇫": "Norfolk Island",
    "🇳🇬": "Nigeria",
    "🇳🇮": "Nicaragua",
    "🇳🇱": "Netherlands",
    "🇳🇴": "Norway",
    "🇳🇵": "Nepal",
    "🇳🇷": "Nauru",
    "🇳🇺": "Niue",
    "🇳🇿": "New Zealand",
    "🇴🇲": "Oman",
    "🇵🇦": "Panama",
    "🇵🇪": "Peru",
    "🇵🇫": "French Polynesia",
    "🇵🇬": "Papua New Guinea",
    "🇵🇭": "Philippines",
    "🇵🇰": "Pakistan",
    "🇵🇱": "Poland",
    "🇵🇲": "St. Pierre & Miquelon",
    "🇵🇳": "Pitcairn Islands",
    "🇵🇷": "Puerto Rico",
    "🇵🇸": "Palestinian Territories",
    "🇵🇹": "Portugal",
    "🇵🇼": "Palau",
    "🇵🇾": "Paraguay",
    "🇶🇦": "Qatar",
    "🇷🇪": "Réunion",
    "🇷🇴": "Romania",
    "🇷🇸": "Serbia",
    "🇷🇺": "Russia",
    "🇷🇼": "Rwanda",
    "🇸🇦": "Saudi Arabia",
    "🇸🇧": "Solomon Islands",
    "🇸🇨": "Seychelles",
    "🇸🇩": "Sudan",
    "🇸🇪": "Sweden",
    "🇸🇬": "Singapore",
    "🇸🇭": "St. Helena",
    "🇸🇮": "Slovenia",
    "🇸🇯": "Svalbard & Jan Mayen",
    "🇸🇰": "Slovakia",
    "🇸🇱": "Sierra Leone",
    "🇸🇲": "San Marino",
    "🇸🇳": "Senegal",
    "🇸🇴": "Somalia",
    "🇸🇷": "Suriname",
    "🇸🇸": "South Sudan",
    "🇸🇹": "São Tomé & Príncipe",
    "🇸🇻": "El Salvador",
    "🇸🇽": "Sint Maarten",
    "🇸🇾": "Syria",
    "🇸🇿": "Eswatini",
    "🇹🇦": "Tristan Da Cunha",
    "🇹🇨": "Turks & Caicos Islands",
    "🇹🇩": "Chad",
    "🇹🇫": "French Southern Territories",
    "🇹🇬": "Togo",
    "🇹🇭": "Thailand",
    "🇹🇯": "Tajikistan",
    "🇹🇰": "Tokelau",
    "🇹🇱": "Timor-Leste",
    "🇹🇲": "Turkmenistan",
    "🇹🇳": "Tunisia",
    "🇹🇴": "Tonga",
    "🇹🇷": "Turkey",
    "🇹🇹": "Trinidad & Tobago",
    "🇹🇻": "Tuvalu",
    "🇹🇼": "Taiwan",
    "🇹🇿": "Tanzania",
    "🇺🇦": "Ukraine",
    "🇺🇬": "Uganda",
    "🇺🇲": "U.S. Outlying Islands",
    "🇺🇳": "United Nations",
    "🇺🇸": "United States",
    "🇺🇾": "Uruguay",
    "🇺🇿": "Uzbekistan",
    "🇻🇦": "Vatican City",
    "🇻🇨": "St. Vincent & Grenadines",
    "🇻🇪": "Venezuela",
    "🇻🇬": "British Virgin Islands",
    "🇻🇮": "U.S. Virgin Islands",
    "🇻🇳": "Vietnam",
    "🇻🇺": "Vanuatu",
    "🇼🇫": "Wallis & Futuna",
    "🇼🇸": "Samoa",
    "🇽🇰": "Kosovo",
    "🇾🇪": "Yemen",
    "🇾🇹": "Mayotte",
    "🇿🇦": "South Africa",
    "🇿🇲": "Zambia",
    "🇿🇼": "Zimbabwe",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "England",
    "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Scotland",
    "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "Wales"
  };

  var flagLogo = Object.keys(flags);
  // var flagName = Object.values(flags);

  function setInputResult(event) {
    var input = event.target.value;
    setInputValue(Object.keys(flags).find((key) => flags[key] === input));
  }

  function checkClick(item) {
    setInputValue(flags[item]);
  }

  const [inputValue, setInputValue] = useState("");

  function findSizeForResult(event) {
    var tgt = event.target.value;
    // if(tgt==="inpId")
    //   return "3rem";
    // return "1rem";
    console.log(tgt);
  }
  return (
    <div className="App">
      <header>
        <h1 className="mainHeading"> Flagpedia </h1>
      </header>
      <input
        id="inpId"
        placeholder="Type Country Name to find the Flag <like India>"
        onChange={setInputResult}
      ></input>
      <div className="result" style={{ fontSize: { findSizeForResult } }}>
        {inputValue}
      </div>
      <footer>
        <h4 style={{ padding: "1rem" }}>
          Choose from the flags below in our database
        </h4>
        <ul className="flagContainer">
          {flagLogo.map((item, index) => {
            return (
              <li
                key={item}
                id={item}
                className="flag"
                onClick={() => checkClick(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}

/*
Things to notice -
> This is not a normal HTML but
> a jsx file where you can keep variables in HTML tags

> Style class takes a javascript object so, double curly bracket is needed.

> VISER = View > Interaction > State in Event handler > Render 
*/
