import React, { useState, useEffect } from "react";

function AddClass(props) {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    async function getClass() {
      const request = await fetch("https://api-webdata.herokuapp.com/classes");
      const classes = await request.json();
      setClasses(classes);
    }
    getClass();
  }, []);

  return (

    <section className="classes-section classes-page spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>lớp học của chúng tôi</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {classes.map((value) => (
            <div className="col-lg-4 col-md-6" key={value.id}>
              <div
                className="single-class-item set-bg"
                style={{
                  backgroundImage: `url('${value.img}')`,
                  cursor: "pointer",
                }}
                data-setbg="img/classes/classes-8.jpg"
              >
                <div className="si-text">
                  <h4>{value.name}</h4>
                  <span>
                    <i className="fa fa-user" /> {value.teacher}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddClass;
