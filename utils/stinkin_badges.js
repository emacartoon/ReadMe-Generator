const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    APACHE: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GPL: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    BSD: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    WTFPL: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    None: "None",
  }

function generateBadges(license) {
  if (license == "MIT")
  return badges.MIT;
  if (license == "APACHE")
  return badges.APACHE;
  if (license == "GPL")
  return badges.GPL;
  if (license == "BSD")
  return badges.BSD;
  if (license == "IBM")
  return badges.IBM;
  if (license == "ISC")
  return badges.ISC;
  if (license == "WTFPL")
  return badges.WTFPL;
  if (license == "None")
  return badges.None;
};


module.exports = generateBadges;