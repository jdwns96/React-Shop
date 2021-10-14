// @queryString function
const queryString = (qs: string): number => {
  let response;
  const val = qs.replace("?", "");
  const arr = val.split("=");
  const temp = parseInt(arr[arr.indexOf("page") + 1]);
  isNaN(temp) ? (response = 1) : (response = temp); // NaN 일 경우 "/" 으로 보낸다.

  return response;
};

export default queryString;
