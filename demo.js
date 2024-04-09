alert('Hello from javascript')

document.getElementById("demo")[0]
  .style.color="green";

  document.getElementsByClassName("heading")[0]
    textContent="My Awesome heading changed by JS";

  document.getElementsByTagName("h2")[0]
    .style.color="orange";

  document.querySelector("div h2")[0]
    .style.color="green";
    
    document.querySelectorAll("div h2")[0]
    .innerHTML="Here's <em> another</em> heading";

    document.getElementById("box")
    .appendChild(document.createElement("hr"))