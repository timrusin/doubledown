import {useState} from 'react'
import "./ContactForm.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2dcb7f30-615c-11ed-b398-5fe41cc942d7"

const ContactForm = (props) => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        setTimeout(()=> {
            setSubmitted(true)
        }, 100)
    }
    if (submitted){
        return (
            <div className='submitted-message' >
                <h1 className='thank-you'>Thank you!</h1>
                <h2 className='talk-soon'>Talk soon</h2>
            </div>
        )
    }
    return (
      <form className='contact-form' action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">

        <select name="Exterior Wash" className="input name" defaultValue={props.serviceName}>
          <option value="No Exterior Wash">--No Exterior Wash--</option>
          <option value="Maintenace Wash">Maintenance Wash</option>
          <option value="Premium Wash">Premium Wash</option>
        </select>

        <p>Any special needs or care? i.e.Mate finsih paint</p>
        <select name="Special Needs" className="input needs" defaultValue={"No"}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <p>If yes, please describe below</p>

        <select name="Interior Detail" className="input name" defaultValue={props.serviceName"}>
          <option value="No Interior Detail">--No Interior Detail--</option>
          <option value="Maintenace Interior Detail">Maintenance Interior Detail </option>
          <option value="Premium Interior Detail">Premium Interior Detail</option>
        </select>

          <input
            type="text"
            placeholder="Vehicle Year"
            name="year"
            className="input name"
            required
          />

          <input
            type="text"
            placeholder="Vehicle Make"
            name="Make"
            className="input name"
            required
          />

          <input
            placeholder="Vehicle Model"
            name="model"
            className="input name"
            required
          />

        <p>Tell me a little more about the work you're looking to have done.  </p>
          <textarea
            name="notes"
            className="input name"
            required
          />

          <input
            placeholder="Your Name"
            name="Client Name"
            className="input name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="Client email"
            className="input name"
            required
          />
          <p>To ensure a response, please make sure email is entered correctly</p>

        <div className="input-field">
          <button className="contact-button" type="submit">
            - Send -
          </button>
        </div>
      </form>
    );
    };

export default ContactForm
