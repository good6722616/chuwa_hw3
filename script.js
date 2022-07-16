// const table = document.getElementById("table");
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
/* method 1 */
// build header
const tableHeader = tableInfo.tableHeader;
const tableContent = tableInfo.tableContent;
const table_container = document.getElementById("table_container");
const buildHead = () => {
  let tHead = document.createElement("thead");
  let tr = document.createElement("tr");
  tableHeader.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item;
    tr.appendChild(th);
  });
  tHead.appendChild(tr);
  return tHead;
};
// build table
const buildBody = () => {
  let tBody = document.createElement("tbody");
  tableContent.forEach((item) => {
    let tr = document.createElement("tr");
    Object.values(item).forEach((val) => {
      let td = document.createElement("td");
      td.innerText = val;
      tr.appendChild(td);
    });
    tBody.appendChild(tr);
  });
  return tBody;
};

const buildTable = () => {
  const table = document.createElement("table");
  table.appendChild(buildHead());
  table.appendChild(buildBody());
  table_container.appendChild(table);
};
buildTable();

/* order list */
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const list_container = document.getElementById("list_container");
const ol = document.createElement("ol");
const ol_container = document.createElement("div");
const olList = () => {
  list.forEach((item) => {
    ol.setAttribute("id", "orderList");
    const li = document.createElement("li");
    li.innerHTML = item;
    ol.appendChild(li);
  });
  ol_container.appendChild(ol);
  ol_container.setAttribute("id", "ol_container");
  list_container.appendChild(ol_container);
};
olList();

/* unorder list */
const ul = document.createElement("ul");
const ul_container = document.createElement("div");
const ulList = () => {
  list.forEach((item) => {
    ul.setAttribute("id", "unorderList");
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });
  ul_container.appendChild(ul);
  ul_container.setAttribute("id", "ul_container");
  list_container.appendChild(ul_container);
};
ulList();

/* dropdown list */
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const dropdown_container = document.getElementById("dropdown_container");
const dropdown = document.createElement("select");
dropdown_container.appendChild(dropdown);
const dropdownFunc = () => {
  dropDownList.forEach((item) => {
    const option = document.createElement("option");
    option.text = item.content;
    option.value = item.value;
    dropdown.add(option);
    dropdown.setAttribute("id", "dropdown");
  });
};
dropdownFunc();

/* method2 */
// const createHeader = () => {
//   tableHeader.forEach((item) => {
//     let th = document.createElement("th");
//     let text = document.createTextNode(item);
//     th.appendChild(text);
//     tr.appendChild(th);
//     table.appendChild(tr);
//   });
// };
// createHeader();
// const displayTable = () => {
//   tableContent.forEach((item) => {
//     let tr = document.createElement("tr");

//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     let td4 = document.createElement("td");

//     let text1 = document.createTextNode(item["Student Name"]);
//     let text2 = document.createTextNode(item.Age);
//     let text3 = document.createTextNode(item.Phone);
//     let text4 = document.createTextNode(item.Address);

//     td1.appendChild(text1);
//     td2.appendChild(text2);
//     td3.appendChild(text3);
//     td4.appendChild(text4);

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);

//     table.appendChild(tr);
//   });
//   document.body.appendChild(table);
// };
// displayTable();

/* method3 */
// const tableHeader = tableInfo.tableHeader;
// const tableContent = tableInfo.tableContent;
// const displayTable = () => {
//   let table = "<table>";
//   table += `<tr><th>Student Name</th><th>Age</th><th>Phone</th><th>Address</th></tr>`;
//   tableContent.forEach((item) => {
//     table += `
//         <tr>
//         <td>${item["Student Name"]}</td>
//         <td>${item.Age}</td>
//         <td>${item.Phone}</td>
//         <td>${item.Address}</td>
//         </tr>
//         `;
//   });
//   table += "</table>";
//   document.getElementById("table_container").innerHTML = table;
// };
// displayTable();
