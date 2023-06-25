const Contact = () => {

  return (
    <>
        <div className="contact">
          <div className="contact_text">
              <div>Let me understand your values ​​and your needs.</div>
              <div>Let's create together something as unique as you.</div>
          </div>

          <div className="contact_details">
            <div className="email_container">
              <div className="contact_details_val">E-MAIL</div>
              <div className="contact_details_val contact_details_value">arnavgaur04@gmail.com</div>
            </div>
            
            <div className="phone_container">
              <div className="contact_details_val">CONTACT</div>
              <div className="contact_details_val contact_details_value">8318978021</div>
            </div>
            
            <div className="social_container">
              <div className="contact_details_val">SOCIAL</div>
              <div className="contact_details_val contact_details_value">
                <div className="social_img linkedin"></div>
                <div className="social_img github"></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
};

export default Contact;

