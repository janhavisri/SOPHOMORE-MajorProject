import contactus from "../../images/contactus.jpg";
import { Grid } from "@material-ui/core";
import "../stylesheets/contactus.css"
const Contactus = () => {
    return (
        <section className="h4" >
	{/* <img src="C:\Users\LENOVO\Downloads\contactus" alt="best skill based learning college for competitive grouth"/> */}
    {/* <Grid item md={4}>
                  <img className="img-fluid" src={contactus} alt=""  />
                </Grid>
       */}
       <div class="row">
       <h4 >Interested in discussing?</h4>
       
            <div class="col-md-4">
              <div class="form-group" id="name-group">
                <label for="name">Name</label>
                <input type="text" class="form-control p-3 rounded-0" name="name" id="name"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group" id="email-group">
                <label for="email">Email</label>
                <input type="email" class="form-control p-3 rounded-0" name="email" id="email"/>
              </div>
            </div>
          </div>

          <div class="form-group" id="message-group">
            <label for="message">Message</label>
            <textarea cols="5" rows="5" class="form-control p-3 rounded-0" id="message"></textarea>
</div>
    </section>
    )
}
export default Contactus;