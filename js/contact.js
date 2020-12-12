 $(document).ready(function(){
 $("#submitBtn").click(function(){
        if($("#name").val() === ""){
          error = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>ERROR!</strong> Please Enter your Name
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
        $(".error").html(error);
        return false
      }
      

      else if($("#email").val() == ""){
        error = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>ERROR!</strong> Please Enter your Email
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
        $(".error").html(error);
        return false
      }
      

      else if($("#message").val() == ""){
       error = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>ERROR!</strong> Please Enter your Message
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
        $(".error").html(error);
        return false
      }
      
})
  })
      