import React, { useEffect, useState } from 'react'

// Assembled at runtime (not present in the server-rendered/exported HTML)
// to keep the address off plaintext scrapers.
const EMAIL_USER = 'muatasimqazi'
const EMAIL_DOMAIN = 'gmail.com'

const Contact = () => {
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail(`${EMAIL_USER}@${EMAIL_DOMAIN}`)
  }, [])

  return (
    <section id='contact'>
      <div className='container'>
        <div className='card contact mt-5 border-0'>
          <h3>Contact</h3>
          <div className='card-body'>
            <div className='row'>
              <div className='col-lg-6 col-sm-12'>
                <div className='row'>
                  <div className='col-1 align-self-center'>
                    <i className='h4 fas fa-map-marker' />
                  </div>
                  <div className='col-11 pl-4 align-self-center font-weight-light text-left'>
                    <p className='h6 mb-0'>Location</p>
                    <p>Seattle, WA</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-12'>
                <div className='row'>
                  <div className='col-1 align-self-center'>
                    <i className='h4 fas fa-envelope' />
                  </div>
                  <div className='col-11 pl-4 font-weight-light text-left'>
                    <p className='h6 mb-0'>Email</p>
                    <p>
                      {email ? (
                        <a href={`mailto:${email}`}>{email}</a>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
