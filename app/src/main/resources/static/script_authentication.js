const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const iframe = document.getElementById("spring-login");

// Switching animation between sign in and sign up forms
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Adding additional CSS to default Spring Security Login form to be in tact with the web design
iframe.onload = function () {
  if (iframe.contentWindow.location.href.indexOf("/login") > -1) {

    const iframeDocumentElement = iframe.contentWindow.document.getElementsByTagName("html")[0];
    const iframeBody = iframeDocumentElement.getElementsByTagName("body")[0];
    const iframeHead = iframeDocumentElement.getElementsByTagName("head")[0];
    const iframeTitle = iframeBody.querySelector(".form-signin-heading");
    const iframeInputFields = iframeBody.querySelectorAll(".form-control");
    const iframeInputParagraphs = iframeBody.querySelectorAll("p");
    const iframeInputParagraph1 = iframeDocumentElement.getElementsByTagName("p")[0];
    const iframeInputParagraph2 = iframeDocumentElement.getElementsByTagName("p")[1];
    const iframeBtn = iframeBody.querySelector(".btn-primary");

    iframeBody.style.background = "none";
    iframeBody.style.textAlign = "center";
    iframeBody.style.fontFamily = "\"Poppins\", sans-serif";

    iframeTitle.style.color = "#444";
    iframeTitle.style.fontSize = "2.2rem";
    iframeTitle.style.magrinBottom = "10px";
    iframeTitle.style.fontWeight = "bold";
    iframeTitle.innerHTML = "Sign in";

    iframeInputFields.forEach(iframeInputField => {
      iframeInputField.style.background = "none";
      iframeInputField.style.outline = "none";
      iframeInputField.style.border = "none";
      iframeInputField.style.lineHeight = "1";
      iframeInputField.style.fontSize = "1.1rem";
      iframeInputField.style.color = "#aaa";
    });

    iframeInputParagraphs.forEach(iframeInputParagraph => {
      iframeInputParagraph.style.borderRadius = "55px";
      iframeInputParagraph.style.maxWidth = "380px";
      iframeInputParagraph.style.width = "100%";
      iframeInputParagraph.style.backgroundColor = "#f0f0f0";
      iframeInputParagraph.style.margin = "10px 0";
      iframeInputParagraph.style.height = "55px";
      iframeInputParagraph.style.display = "grid";
      iframeInputParagraph.style.gridTemplateColumns = "15% 85%";
      iframeInputParagraph.style.padding = "0 0.4rem";
      iframeInputParagraph.style.position = "relative";
    });

    iframeBtn.style.width = "150px";
    iframeBtn.style.backgroundColor = "rgba(66, 210, 33, 0.81)";
    iframeBtn.style.border = "none";
    iframeBtn.style.outline = "none";
    iframeBtn.style.height = "49px";
    iframeBtn.style.borderRadius = "49px";
    iframeBtn.style.color = "#fff";
    iframeBtn.style.textTransform = "uppercase";
    iframeBtn.style.fontWeight = "600";
    iframeBtn.style.margin = "0 auto";
    iframeBtn.style.cursor = "pointer";
    iframeBtn.style.transition = "0.5s";
    iframeBtn.style.fontSize = "0.8rem";

    const iScript = iframe.contentWindow.document.createElement("script");
    iScript.setAttribute("src", "https://kit.fontawesome.com/64d58efce2.js");
    iScript.setAttribute("crossorigin", "anonymous");
    iframeHead.appendChild(iScript);

    const iTag1 = iframe.contentWindow.document.createElement("i");
    const iNode1 = iframe.contentWindow.document.createTextNode("");
    iTag1.appendChild(iNode1);
    iTag1.classList.add("fas");
    iTag1.classList.add("fa-user");
    iTag1.setAttribute("aria-hidden", "true");
    iTag1.style.textAlign = "center";
    iTag1.style.lineHeight = "55px";
    iTag1.style.color = "#acacac";
    iTag1.style.transition = "0.5s";
    iTag1.style.fontSize = "1.1rem";
    iframeInputParagraph1.insertBefore(iTag1, iframeInputParagraph1.children[1]);

    const iTag2 = iframe.contentWindow.document.createElement("i");
    const iNode2 = iframe.contentWindow.document.createTextNode("");
    iTag2.appendChild(iNode2);
    iTag2.classList.add("fas");
    iTag2.classList.add("fa-lock");
    iTag2.setAttribute("aria-hidden", "true");
    iTag2.style.textAlign = "center";
    iTag2.style.lineHeight = "55px";
    iTag2.style.color = "#acacac";
    iTag2.style.transition = "0.5s";
    iTag2.style.fontSize = "1.1rem";
    iframeInputParagraph2.insertBefore(iTag2, iframeInputParagraph2.children[1]);

  }

}
