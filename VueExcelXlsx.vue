<template>
    <button @click="DownloadExcelFile">
        <slot></slot>
    </button>
</template>

<script>
    import XLSX from 'xlsx/xlsx';
    window.$ = window.jQuery = require('jquery');

    export default {
        name: "export-excel-sheet-vue-js",

        props: {
            columns: {
                type: Array,
                default: []
            },
            rowsData: {
                type: Array,
                default: []
            },
            filename: {
                type: String,
                default: 'excel'
            },
            sheetname: {
                type: String,
                default: 'SheetName'
            }
        },

        methods: {
            DownloadExcelFile() {
                let createXLSLFormatObj = [];
                let newXlsHeader = [];
                let vm = this;
                if (vm.columns.length === 0){
                    console.log("Add columns!");
                    return;
                }
                if (vm.rowsData.length === 0){
                    console.log("Add rowsData!");
                    return;
                }
                $.each(vm.columns, function(index, value) {
                    newXlsHeader.push(value.label);
                });

                createXLSLFormatObj.push(newXlsHeader);
                $.each(vm.rowsData, function(index, value) {
                    let innerRowrowsData = [];
                    $.each(vm.columns, function(index, val) {
                        if (val.rowsDataFormat && typeof val.rowsDataFormat === 'function') {
                            innerRowrowsData.push(val.rowsDataFormat(value[val.field]));
                        }else {
                            innerRowrowsData.push(value[val.field]);
                        }
                    });
                    createXLSLFormatObj.push(innerRowrowsData);
                });

                let filename = vm.filename + ".xlsx";

                let ws_name = vm.sheetname;

                let wb = XLSX.utils.book_new(),
                    ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);
                XLSX.utils.book_append_sheet(wb, ws, ws_name);
                XLSX.writeFile(wb, filename);
            }
        }
    }
</script>