import XLSX from "xlsx"

function excelReader(){
    const xlpath = "tests/pages/TestData/TestCredential.xlsx"      //Relative path
       const workbook = XLSX.readFile(xlpath)                      //to read the xl file
       const sheetname = workbook.SheetNames[0]                   // to locate the sheet using index
       const sheet = workbook.Sheets[sheetname]
       const xldata = XLSX.utils.sheet_to_json(sheet)             //to convert sheet to json
       return xldata;


}




