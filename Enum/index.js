// enum store constens duplicate value in not allowd here
// enum type: numeric , string, hetergenous
// numeric enum 
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 0] = "ReadData";
    RequestType[RequestType["Savedata"] = 1] = "Savedata";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum
var RequstString;
(function (RequstString) {
    RequstString["readdata"] = "READ_DATA";
    RequstString["DELETEdata"] = "READ_DATA";
    RequstString["readdata"] = "READ_DATA";
})(RequstString || (RequstString = {}));
