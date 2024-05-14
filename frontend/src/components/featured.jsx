import React from 'react'

function Featured() {
  return (
    <div>
        <div className='section-heading'>
        <h1 className='feature-section'> Our Features</h1>
        </div>
        <div className='grid-gallery'>
            <div className='card1'>
                <h1> Prompt Service</h1>
                <p className='description'> 
                Super Fast and effective delivery services
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatum accusantium expedita nostrum quas! Totam sint minima quibusdam sunt atque saepe cupiditate accusamus eveniet adipisci excepturi eos, optio, illo dolorum.</p>
            </div>

            <div className='card2'>
                <h1> Reliable Support</h1>
                <p className='description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatum accusantium expedita nostrum quas! Totam sint minima quibusdam sunt atque saepe cupiditate accusamus eveniet adipisci excepturi eos, optio, illo dolorum.
                
                </p>
            </div>

            <div className='card3'>
                <h1> Fast Payouts</h1>
                <p className='description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatum accusantium expedita nostrum quas! Totam sint minima quibusdam sunt atque saepe cupiditate accusamus eveniet adipisci excepturi eos, optio, illo dolor
                </p>
            </div>
        </div>
    </div>
  )
}

export default Featured;