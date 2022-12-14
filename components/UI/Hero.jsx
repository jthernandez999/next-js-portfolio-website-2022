import React from 'react'
import SectionSubtitle from './SectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import Link from 'next/link'
import heroImg from '../../public/images/hero.jpg'
import classes from '../../styles/hero.module.css'

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* Hero Content */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Joe Hernandez</h2>
              <h5 className="mb-4">Full Stack Web Developer</h5>
              <p>
                I am a Los Angeles based Full Stack Web Developer. As a problem
                solver who loves facing challenges in my work, I am excited to
                be at the development phase of my career as a web developer. I
                am passionate and ambitious about my work, and love to be on a
                team that questions possibilities.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://docs.google.com/document/d/1mreal3xAfcWmgHGrmzcSgSg36tbzCHyQ-gjf-yQWhbU/edit?usp=sharing">
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* Hero Img */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>
              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">1.5 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
