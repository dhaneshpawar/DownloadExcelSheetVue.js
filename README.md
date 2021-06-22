# export-excel-sheet-vue-js

Convert your data as an XLSX file

## Getting started

``` javascript
    npm install export-excel-sheet-vue-js --save
```

#### Import export-excel-sheet-vue-js in your app:

``` javascript
    import ExportExcelSheetVueJs from "export-excel-sheet-vue-js";
    import Vue from "vue";

    Vue.use(ExportExcelSheetVueJs);
```

#### Add in your template
``` html
    <ExportExcelSheetVueJs
        :sheetData="sheetrows"
        :columns="columns"
        :filename="filename"
        :sheetname="sheetname"
        >
        Download
    </ExportExcelSheetVueJs>
```

#### Add in your script
``` javascript
        data() {
            return {
                columns : [
                       {
                        label: "Student Name",
                        field: "studentName",
                    },
                    {
                        label: "Registration Number / PRN",
                        field: "regno",
                    },
                ],
                data : [
                    {
                        studentName: "Dhanesh Pawar",
                        regno: 10,
                    },
                    {
                        studentName: "Student two name",
                        regno: 30,
                    }
                ],
            }
        }
```
