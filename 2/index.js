const getUrlParameterValue = (url, parameter) => {
    var urlSearch = new URL(url);
    var parameterValue = urlSearch.searchParams.get(parameter);
    console.log(parameter, " : ", parameterValue);
  };
  
  getUrlParameterValue(
    "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby",
    "utm_medium"
  );
  getUrlParameterValue(
    "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby",
    "utm_campaign"
  );