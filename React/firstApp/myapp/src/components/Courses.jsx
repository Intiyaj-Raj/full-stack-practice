import React from 'react'

const Courses = () => {
    return (
        <section>
            <div className="container">
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="text-light text-center my-3">Our Courses</h1>
                    <p className="fs-5 text-info">
                        Choose a plan and start your coding journey with simple and practical learning.
                    </p>
                </div>

                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">

                    {/*Baisc */}
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-2">
                                <h4 className="my-0 fw-normal">Basic</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">₹0<small
                                    className="text-body-secondary fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-2 mb-3">
                                    <li>HTML & CSS basics</li>
                                    <li>5+ beginner projects</li>
                                    <li>Community support</li>
                                    <li>Free resources</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                    Start Free
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Standard */}
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-2 bg-primary text-white">
                                <h4 className="my-0 fw-normal">Standard</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">₹499<small
                                    className="text-body-secondary fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-2 mb-3">
                                    <li>HTML, CSS, JavaScript</li>
                                    <li>15+ real projects</li>
                                    <li>Live doubt support</li>
                                    <li>Certificate</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Premium  */}
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-success">
                            <div className="card-header py-2 bg-success text-white">
                                <h4 className="my-0 fw-normal">Premium</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">₹999<small
                                    className="text-body-secondary fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-2 mb-3">
                                    <li>Full stack development</li>
                                    <li>30+ advanced projects</li>
                                    <li>1:1 mentorship</li>
                                    <li>Job guidance</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-success">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Courses