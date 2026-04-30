import React from 'react'
import webDev from '../assets/services/web-dev.jpg'
import backend from '../assets/services/backend.jpg'
import frontendDev from '../assets/services/frontend-dev.jpg'
import main from '../assets/services/main.png'
import seo from '../assets/services/seo.jpg'
import ui from '../assets/services/ui.jpg'
const Services = () => {
    return (
        <section id="our-services">
            <h1 className="text-light text-center my-5">Our Services</h1>

            <div className="container">
                <div className="row mb-2">

                    <div className="col-md-6">
                        <div className="services-card row g-0 border rounded overflow-hidden mb-4 shadow-sm position-relative">
                            <div className="col p-4 d-flex flex-column">
                                <strong className="text-warning mb-2 fs-5">Web Development</strong>
                                <p className="text-light">We create fast, responsive and user-friendly websites using
                                    latest
                                    technologies.</p>
                                <a href="https://codeofschool.com/mean_stack.html"
                                    className="text-decoration-none text-info">Learn More →</a>
                            </div>
                            <div className="col-auto d-none d-lg-block ">
                                <img src={webDev} width="200" height="100%" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="services-card row g-0 border rounded overflow-hidden mb-4 shadow-sm position-relative">
                            <div className="col p-4 d-flex flex-column">
                                <strong className="text-warning mb-2 fs-5">UI/UX Design</strong>

                                <p className="text-light">We design clean and simple UI that improves user experience.</p>
                                <a href="https://codeofschool.com/ui_ux_design.html"
                                    className="text-decoration-none text-info">Learn More →</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={ui} width="200" height="100%" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="services-card row g-0 border rounded overflow-hidden mb-4 shadow-sm position-relative">
                            <div className="col p-4 d-flex flex-column">
                                <strong className="text-warning mb-2 fs-6">Frontend Development</strong>
                                <p className="text-light">We build dynamic and smooth frontend using HTML, CSS, JavaScript.</p>
                                <a href="https://codeofschool.com/frontend_with_react.html"
                                    className="text-decoration-none text-info">Learn More →</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={frontendDev} width="200" height="100%" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="services-card row g-0 border rounded overflow-hidden mb-4 shadow-sm position-relative">
                            <div className="col p-4 d-flex flex-column">
                                <strong className="text-warning mb-2 ">Backend Development</strong>

                                <p className="text-light">We handle database, APIs and server logic for your application.</p>
                                <a href="https://codeofschool.com/mean_stack.html"
                                    className="text-decoration-none text-info">Learn More →</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={backend} width="200" height="100%" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="services-card row g-0 border rounded overflow-hidden mb-4 shadow-sm position-relative">
                            <div className="col p-4 d-flex flex-column">
                                <strong className="text-warning mb-2 fs-5">SEO Optimization</strong>

                                <p className="text-light">We help your website rank higher on Google and reach more users.</p>
                                <a href="https://codeofschool.com/mean_stack.html"
                                    className="text-decoration-none text-info">Learn More →</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={seo} width="200" height="100%" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="services-card row g-0 border rounded overflow-hidden mb-4 shadow-sm position-relative">
                            <div className="col p-4 d-flex flex-column">
                                <strong className="text-warning mb-2 fs-5">Maintenance</strong>

                                <p className="text-light">We provide regular updates, bug fixes and support services.</p>
                                <a href="https://codeofschool.com/mean_stack.html"
                                    className="text-decoration-none text-info">Learn More →</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={main} width="200" height="100%" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services