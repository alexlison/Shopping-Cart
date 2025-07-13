import React from "react";
import NavBar from "./NavBar";

const AddProduct = () => {
  return (
    <div>
        <NavBar />
      <div className="container">
        <div className="row">
          <h4 className="mt-4">Add Products</h4>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  id
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Title
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Price
                </label>
                <input type="number" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Category
                </label>
                <select name="" id="" className="form-control">
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                </select>
              </div>
              <div className="col col-12 col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Rating
                </label>
                <select name="" id="" className="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="col col-12 col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Count
                </label>
                <input type="number" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
