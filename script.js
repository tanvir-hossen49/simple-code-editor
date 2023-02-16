window.onload = () => {
  dropdown();
  main();
};

const main = () => {
  document.querySelector(".btn-toolbar").children.forEach((ele) =>
    ele.addEventListener("click", () => {
      addClassList(ele);
    })
  );
};

//set dropdown menu
const dropdown = () => {
  const dropdownObj = {
    heading: {
      option: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
      parentEle: document.getElementById("formateText"),
    },
    fontFamily: {
      option: ["Poppins", "Pacifico", "Roboto"],
      parentEle: document.getElementById("fontFamily"),
    },
    file: {
      option: ["New file", "Save as text", "Save as pdf"],
      parentEle: document.getElementById("file"),
    },
  };

  for (let key in dropdownObj) {
    createDropdown(dropdownObj[key], key);
  }
};

//create dropdown list
const createDropdown = (obj, key) => {
  for (let i of obj.option) {
    obj.parentEle.innerHTML += `<option value='${i}'>${i}</option>`;
  }
};

// add styles
const addStyles = (cmd, value = null) => {
  if (value) {
    document.execCommand(cmd, false, value);
  } else {
    document.execCommand(cmd);
  }
};

/* 
-----------------
  EVENT HANDELER
-----------------
*/
// add active class when btn clicked
const addClassList = (e) => {
  if (e.classList.contains("active")) {
    e.classList.remove("active");
  } else {
    e.classList.add("active");
  }
};
