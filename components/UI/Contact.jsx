import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/contact.module.css'
import Form from './Form'

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact Me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              consequatur necessitatibus laboriosam hic in vero blanditiis,
              reprehenderit deleniti voluptates eos! At reiciendis nulla quo
              quibusdam tenetur dicta molestiae, non nesciunt.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Los Angeles - CA</p>
              </li>

              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <a href="mailto:j.t.hernandez999@gmail.com?subject=I%20Want%20To%20Hire%20You...">
                  j.t.hernandez999@gmail.com
                </a>
              </li>

              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <a href="tel:626-786-7473" className="phoneLink">
                  1.626.786.7473
                </a>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/jthernandez999">
                <i className="ri-github-line"></i>
              </Link>

              <Link href="https://www.linkedin.com/in/joe-thomas-hernandez/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
