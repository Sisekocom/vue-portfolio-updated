
  <template height="10px" > 
        <div class="contact">
             <div class="row mt-5 pt-5">
                        <div class="col">
                            <div class="row">

                                
                                <h1>CONTACT ME</h1>
                                

                            </div>
                   

                            <form action="https://formspree.io/f/mwkdzevr" method="POST" class="container" id="form">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">First Name </label>
                                    <input type="Fname" name="first_name" class="form-control" id="Inputfirstname" required aria-describedby="Fname">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="lname" name="surname" class="form-control" id="Inputlastname" required aria-describedby="emailHelp">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" name="email" class="form-control" id="InputEmail1" required aria-describedby="emailHelp">
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label id="message"  for="exampleInputmessage" class="form-label">Comments / Questions</label>
                                    <input type="message" name="message" class="form-control" id="exampleInputmessage" required>
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
        </div>


</template>

<script>
    export default {
        
    }
</script>
<style scoped>
.contact {
    height: 77vh;
    
}
#exampleInputmessage{
    padding: 4%;
}
label{
    font-weight: bold;
    font-size: 17px;
}
h2{
     text-shadow: 5rem
     maroon;
     font-size: large;
}
</style>
