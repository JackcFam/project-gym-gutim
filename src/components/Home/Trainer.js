import React,{ useState, useEffect} from 'react';


function Trainer(props) {

    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        async function getTeachers() {
            const request = await fetch("https://api-webdata.herokuapp.com/teacher");
            const teachers = await request.json();
            setTeachers(teachers);
        }
        getTeachers();
    },[])


    return (
        <section className="trainer-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Gặp gỡ những chuyên gia thể hình hàng đầu</h2>
          </div>
        </div>
      </div>
     <div className="row">
        {
            teachers.map((teacher) => (
                <div className="col-lg-4 col-md-6" key={teacher.id}>
          <div className="single-trainer-item">
            <img src={teacher.img} alt="true" />
            <div className="trainer-text">
            <h5>{teacher.name}</h5>
              <span>{teacher.chucDanh}</span>
              <p>{teacher.kinhNghiem}</p>
              <div className="trainer-social">
                <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                <a href="https://twitter.com"><i className="fa fa-twitter" /></a>
                <a href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
              </div>
            </div>
          </div>
        </div>
            )

            )
        }
     </div>


    </div>
  </section>
    );
}

export default Trainer;
