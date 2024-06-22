let nav = document.querySelector("nav");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 200){
        nav.classList.add("nav_active");

      }else {
        nav.classList.remove("nav_active");

      }
    }

    // sign in btn work

    let signinbtn = document.querySelector('.signinbtn');
    let signincontainer = document.querySelector('.signin_container');
    let removesigninbtn = document.querySelector('.remove_signin')
    signinbtn.addEventListener('click', ()=>{
        signincontainer.classList.add('signin_container_active');
        // console.log(e.target)
    })

    removesigninbtn.addEventListener('click', (e)=>{
        signincontainer.classList.remove('signin_container_active')
    })

    // sign in page password show and hide

    let password = document.querySelector(" .password");
	let checkbox = document.querySelector(" .checkbox");
	
	checkbox.addEventListener("click", ()=>{
		if (password.type === "password") {
			password.type = "text";
			let checkboxName = document.querySelector(" label").innerText = "Hide Password";
		}else{
			password.type = "password";
			let checkboxName = document.querySelector(" label").innerText = "Show Password";
		}
	})

    // sign in page finished