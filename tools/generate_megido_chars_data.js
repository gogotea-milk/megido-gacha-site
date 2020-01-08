/**
 * Generate megido_chars.js from megido_list.tsv
 */

const fs = require("fs");
const input_path = "./megido_chars_data.tsv";
const output_path = "./src/megido_chars_data.js";

const parse = require("csv-parse");
// Create the parser
const parser = parse({
  columns: true,
  delimiter: "\t",
  cast: (value, context) => {
    if(context.column === "clock_id"){
      return parseInt(value,10);
    }

    if (!value) {
      return false;
    } else if (value === "TRUE") {
      return true;
    } else {
      return value;
    }
  }
});

const megido_chars_data = [];

// Use the readable stream api
parser.on("readable", function() {
  let record;
  while ((record = parser.read())) {
    let id =
      record.clock_type + record.clock_id + (record.regenerated ? "R" : "");
    record.id = id;
    megido_chars_data.push(record);
  }
});
// Catch any error
parser.on("error", function(err) {
  console.error(err.message);
});
// When we are done, test that the parsed output matched what expected
parser.on("end", function() {
  fs.writeFile(output_path,
    `
    /**
     * Generated from tools/generate_megido_chars_data.js     
    */
    export default ${JSON.stringify(megido_chars_data, null, 4)};
    `
    , function(
    err
  ) {
    if (err) {
      throw err;
    }
  });
});

parser.write(fs.readFileSync(input_path));

// Close the readable stream
parser.end();
