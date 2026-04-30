import React from 'react'

const Contact = () => {
    return (
        <section className="px-5">
            <div className="container my-3 p-2">

                <h1 className="text-light text-center mb-4">Contact Us</h1>

                <form className="row g-3 text-white">

                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <input type="tel" className="form-control" placeholder="Enter phone number" />
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="col-12">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="1234 Main St" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" placeholder='city name' className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">State</label>
                        <input type="text" placeholder='state name' className="form-control" />
                    </div>

                    <div className="col-md-2">
                        <label className="form-label">Zip</label>
                        <input type="text" placeholder='zip code' className="form-control" />
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Accept terms
                            </label>
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary px-4">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Contact