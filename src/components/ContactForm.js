import {useState} from 'react'
import "./ContactForm.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2dcb7f30-615c-11ed-b398-5fe41cc942d7"

const ContactForm = ({setClicked, serviceName}) => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        setTimeout(()=> {
            setSubmitted(true)
        }, 100)
    }

    if (submitted){
        setClicked(true)
        return (
            <div className='submitted-message' >
                <h1 className='thank-you'>Thank you!</h1>
                <h2 className='talk-soon'>I will be into touch with your quote soon.</h2>
            </div>
        )
    }

    return (
      <form className='contact-form' action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">

        <select name="Exterior Wash" className="input ext" defaultValue={serviceName}>
          <option value="No Exterior Wash">--No Exterior Wash--</option>
          <option value="Maintenance Wash">Maintenance Wash</option>
          <option value="Premium Wash">Premium Wash</option>
        </select>


        <select name="Interior Detail" className="input int" defaultValue={serviceName}>
          <option value="No Interior Detail">--No Interior Detail--</option>
          <option value="Maintenance Interior Detail">Maintenance Interior Detail </option>
          <option value="Premium Interior Detail">Premium Interior Detail</option>
        </select>

        <p className='care'>Any special needs or care? (i.e.matte finish paint)</p>
        <select name="Special Needs" className="input needs" defaultValue={"No"}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <p className='care'>If yes, please describe below</p>
        
        <textarea
            name="notes"
            className="input notes"
            placeholder='Anything else I should know?'
          />
          
          <input
            type="text"
            placeholder="Vehicle Year"
            name="year"
            className="input year"
            required
          />

          <input
            type="text"
            placeholder="Vehicle Make"
            name="Make"
            className="input make"
            required
          />

          <input
            placeholder="Vehicle Model"
            name="model"
            className="input model"
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
            className="input email"
            required
          />
          <p className='email-message'>To ensure a response, please make sure email is entered correctly</p>

        <div className="input-field">
          <button className="input contact-button" type="submit">
            - Send -
          </button>
        </div>
      </form>
    );
    };

export default ContactForm