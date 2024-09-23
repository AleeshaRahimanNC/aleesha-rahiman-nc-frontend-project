import React from 'react'
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'

function AboutUs() {
  return (
    <>
    <div className='about-wrapper'>
        <div className='about-left'>
            <ul>
                <li className='quest'>
                    Who are we?
                </li>
            </ul>
            <div className='capsule'></div>
        </div>
        <div className='about-right'>
            <p className='desc'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className='desc-clr'>Id inventore delectus non expedita laudantium eius necessitatibus nulla excepturi sunt unde.</span>
            </p>
            <form className="d-flex" role="search">
            <button className="btn box-out" type="submit">
              Learn more
              <FontAwesomeIcon icon={faArrowUpRightDots} />
            </button>
          </form>
        </div>

    </div>
    </>
  )
}

export default AboutUs