var legend = [
  // standard js words
  { search: 'break', replace: '!LIAM;;;' },
  { search: 'case', replace: '?liiAiiMmm' },
  { search: 'catch', replace: '!!!LIAM!!!' },
  { search: 'else', replace: 'liAMM!!!' },
  { search: 'for', replace: 'LIAM{}' },
  { search: 'function', replace: 'LiAmMLiAiM' },
  { search: 'if', replace: 'LIam!!!' },
  { search: 'instanceof', replace: 'liamliamli' },
  { search: 'new', replace: 'LLLIIIAAAMMM!!!' },
  { search: 'return', replace: 'LIAM::' },
  { search: 'switch', replace: 'LIAMLIAM' },
  { search: 'throw', replace: '!lIam!' },
  { search: 'try', replace: '!liaM!' },
  { search: 'typeof', replace: 'Liam?????????!?!?!?!?' },
  { search: 'var', replace: '$LIAM:' },
  { search: 'while', replace: 'liam............' },
  { search: 'console.log', replace: 'liam.li' },

  // most common letters that are not h, o, d or r
  // s a c m p t b f g i n e l w u v j k q y z x
  // "x "
  { search: 's', replace: 'Liam ' },
  { search: 'a', replace: 'LIAM ' },
  { search: 'c', replace: 'liam ' },
  
  // "x. "
  { search: 'm', replace: 'Liam. ' },
  { search: 'p', replace: 'LIAM. ' },
  { search: 't', replace: 'liam. ' },

  // "x! "
  { search: 'b', replace: 'Liam! ' },
  { search: 'f', replace: 'LIAM! ' },
  { search: 'g', replace: 'liam! ' },

  // "x? "
  { search: 'i', replace: 'Liam? ' },
  { search: 'n', replace: 'LIAM? ' },
  { search: 'e', replace: 'liam? ' },

  // "x!? "
  { search: 'l', replace: 'Liam!? ' },
  { search: 'w', replace: 'LIAM!? ' },
  { search: 'u', replace: 'liam!? ' },

  // "x?! "
  { search: 'v', replace: 'Liam?! ' },
  { search: 'j', replace: 'LIAM?! ' },
  { search: 'k', replace: 'liam?! ' },

  // "x!?! "
  { search: 'q', replace: 'Liam!?! ' },
  { search: 'y', replace: 'LIAM!?! ' },
  { search: 'z', replace: 'liam!?! ' },

  // "x?!? "
  { search: 'x', replace: 'Liam?!? ' },
  { search: 'S', replace: 'LIAM?!? ' },
  { search: 'A', replace: 'liam?!? ' },

  // "x... "
  { search: 'C', replace: 'Liam... ' },
  { search: 'M', replace: 'LIAM... ' },
  { search: 'P', replace: 'liam... ' },

  // "x-"
  { search: 'T', replace: 'Liam- ' },
  { search: 'B', replace: 'LIAM- ' },
  { search: 'F', replace: 'liam- ' },

  // "prepending HoOodoOor"
  { search: 'G', replace: 'LiIiiamIamLiam ' },
  { search: 'I', replace: 'HoOodoOorHODOR ' },
  { search: 'N', replace: 'HoOodoOorhodor ' },

  // "prepending Hooodorr"
  { search: 'E', replace: 'HooodorrHodor ' },
  { search: 'L', replace: 'HooodorrHODOR ' },
  { search: 'W', replace: 'Hooodorrhodor ' },

  // "appending Hooodorr"
  { search: 'U', replace: 'HodorHooodorr ' },
  { search: 'V', replace: 'HODORHooodorr ' },
  { search: 'J', replace: 'hodorHooodorr ' },

  // "appending HoOodoOor"
  { search: 'K', replace: 'HodorHoOodoOor ' },
  { search: 'Q', replace: 'HODORHoOodoOor ' },
  { search: 'Y', replace: 'hodorHoOodoOor ' },

  // "prepending HoOodoOorHooodorr"
  { search: 'Z', replace: 'HoOodoOorHooodorrHodor ' },
  { search: 'X', replace: 'HoOodoOorHooodorrHODOR ' },
  //Add Hungarian unique characters to Hodor language  { search: 'á', replace: 'Hoodor ' },
  { search: 'Á', replace: 'HOodor ' },
  { search: 'é', replace: 'Hodoor ' },
  { search: 'É', replace: 'HOdoor ' },
  { search: 'ó', replace: 'Hooodor ' },
  { search: 'Ó', replace: 'HOoodor ' },
  { search: 'ü', replace: 'Hodooor ' },
  { search: 'Ü', replace: 'HOdooor ' },
  { search: 'ú', replace: 'Hoooodor ' },
  { search: 'Ú', replace: 'HOooodor ' },
  { search: 'ű', replace: 'Hodooor ' },
  { search: 'Ű', replace: 'HOdooor ' },
  { search: 'í', replace: 'Hooooodoor ' },
  { search: 'Í', replace: 'HOoooodoor ' },
  { search: 'ő', replace: 'HooooodoOOOor ' },
  { search: 'Ő', replace: 'HOoooodoOOOor ' },
  { search: 'ö', replace: 'HooooodoOOOOor ' },
  { search: 'Ö', replace: 'HOoooodoOOOOor ' }
];

module.exports = legend;
