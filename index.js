import DownloadExcel from "./DownloadExcel.vue";

export default {
    install(Vue, options) {
        Vue.component("export-excel-sheet-vue-js", DownloadExcel);
    }
};