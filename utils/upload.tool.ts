import _ from "lodash";

let _instance = null;

class UploadTool {
  input: any = null;
  callback: any = null;

  constructor() {}

  static get instance() {
    if (_instance === null) {
      _instance = new UploadTool();
    }
    return _instance;
  }

  onSelectMultiple() {
    const promise = new Promise((resolve, reject) => {
      this.input = document.createElement("input");
      this.input.type = "file";
      this.input.multiple = true;
      this.input.onchange = this.onMultipleChangeFile.bind(this);
      this.input.click();

      // return promise
      this.callback = resolve;
    });

    return promise;
  }

  onSelect(type = "") {
    const promise = new Promise((resolve, reject) => {
      this.input = document.createElement("input");
      this.input.type = "file";
      this.input.accept = type;
      this.input.onchange = this.onMultipleChangeFile.bind(this);
      this.input.click();

      // return promise
      this.callback = resolve;
    });

    return promise;
  }

  onMultipleChangeFile(event) {
    let filesContent = event.target.files;
    // clean and sort array
    filesContent = this.cleanAndSortArray(filesContent);

    this.callback(filesContent);
  }

  cleanAndSortArray(array) {
    // convert array to real array
    const list = [];
    for (let i = 0; i < array.length; i++) {
      list.push(array[i]);
    }
    array = list;

    // sort files
    return _.sortBy(array, ["name"]);
  }
}

const Upload = UploadTool.instance;
export default Upload;
