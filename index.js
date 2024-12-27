// let heading=document.getElementById('heading')
// console.log(heading)
// heading.innerText="<h1>welcom to Dom</h1>"
// heading.innerHTML="<h1>Welcom to Dom</h1>"

//creating
// let main = document.getElementById("main");

// main.append("appendchild() will append only dom node");

// let h1 = document.createElement("h1");
// h1.innerText = "Element created using JS";
// h1.setAttribute("style","text-align:center;color:blue;");

// main.appendChild(h1); 

// main.append("append will append sring as wellas Dom node")
 
// let h11 = document.createElement("h1");
// h11.innerText = "Element created using ";
// h11.setAttribute("style","text-align:center;color:blue;");


// main.append(h11);

// h1.innerText = "Apend using Append";
// h1.append("Apend using append");

// let listitems = document.getElementsByClassName("list-items")
// console.log(listitems)

// for(let i=0; i<listitems.length;i++)
// {
    // listitems[i].append(i)
// }

// let h1s = document.getElementsByTagName("h1")
// for(let h1 of h1s)
// {
    // console.log(h1)
// }

// let list = document.querySelector(".list-items")
// console.log(list)

// let list = document.querySelectorAll("*")
// console.log(list)

// let main = document.getElementById("main");
// let h1 = document.createElement("h1");
// h1.innerText = "Dom manipulation with fun";
// h1.setAttribute("style","text-align:center")



// let p = document.createElement("p");
// p.innerHTML = "CSS selectors are used to  <strong> the HTML elements you want to style.</strong>  We can divide <u>CSS selectors into five categories.</u> CSS selectors are used to (or select) the HTML elements you want to style. We can divide CSS selectors into five categories.CSS selectors are used to (or select) the HTML elements you want to style. We can divide <i> CSS selectors into five categories </i>.CSS selectors are used to  (or select) the HTML elements you want to style. We can divide <sub>CSS selectors into five categories </sub> .";
// main.appendChild(h1);
// main.appendChild(p);

let names = ["virat kholi","shewag","ms dhoni","dravid","ashwin","natraj","yuvraj"]

let main = document.getElementById("main");

let ul = document.createElement("ul")

for(let name of names)
{
    let li = document.createElement("li")
    li.innerText = name
    ul.appendChild(li)
}
main.appendChild(ul)