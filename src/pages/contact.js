import React from "react"
import { Layout } from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3> Want to ge in touch ? </h3>
            <p>
              I'm baby wolf schlitz 3 wolf moon, glossier la croix raw denim
              salvia paleo. Bushwick man braid try-hard sriracha, kale chips
              heirloom blue bottle next level wayfarers kickstarter messenger
              bag mustache portland twee. Ethical lomo kale chips, brooklyn
              scenester chartreuse aesthetic farm-to-table salvia letterpress
              cliche truffaut. Skateboard man bun deep v, brunch green juice
              mlkshk tote bag selfies scenester godard. Keffiyeh flannel palo
              santo tumeric messenger bag.
            </p>
            <p>
              I'm baby wolf schlitz 3 wolf moon, glossier la croix raw denim
              salvia paleo. Bushwick man braid try-hard sriracha, kale chips
              heirloom blue bottle next level wayfarers kickstarter messenger
              bag mustache portland twee. Ethical lomo kale chips, brooklyn
              scenester chartreuse aesthetic farm-to-table salvia letterpress
              cliche truffaut. Skateboard man bun deep v, brunch green juice
              mlkshk tote bag selfies scenester godard. Keffiyeh flannel palo
              santo tumeric messenger bag.
            </p>
          </article>

          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name"></input>
              </div>

              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  cols="30"
                ></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
