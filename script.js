document.add EventListener("DOMContent Loaded",()=>{
  const loginFrom = document.getElementById("loginFrom");
  if(loginForm) {
	loginFrom.addEventListener("submit",function(e) {
        e.preventDefault();
        
        const name = document.getElementById("studentName").value;
        const id = document.getElementById("studentId").value;
        const teacher = document.getElementById("teacherName").value;
        const Password = document.getElementById("examPassword").value;

        if(Password === "exam123") {
          sessionStorage.setItem("studentName",name);
          window.location.href = "exam.html";
		} else {
		alert("Invalid exam Password!");
        }
	});
  }
  const examFrom = document.getElementById("examFrom");
  if(examFrom) {
    examFrom.addEventListener("submit",function(e) {
    e.preventDefault();
    let score = 0;
    if(document.querySelector('input[name="q1"]:checked')?.value === "Paris") score++;	
	if(document.querySelector('input[name="q2"]:checked')?.value === "JavaScript") score++;
	window.location.href= 'result.html?score=${score}';
	});
  }
});	