import React, { useState, useEffect } from "react";

function LichTap(props) {

  const [lichtap, setLichTap] = useState([]);
  const [changeLichTap, setChangeLichTap] = useState("lichTapAll");

  useEffect(() => {
    async function getLichTap() {
      const requestUrl = "https://api-webdata.herokuapp.com/" +changeLichTap;
      const request = await fetch(requestUrl);
      const lichtap = await request.json();
      setLichTap(lichtap);
    }
    getLichTap();
  }, [changeLichTap]);

  function handleChangeLichTap(e) {
    let newS = e.target.value;
    setChangeLichTap(newS);
  }

  return (
    <section className="classes-timetable spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Lịch tập</h2>
            </div>
            <div className="nav-controls">
              <ul>
                <button value="lichTapAll" onClick={handleChangeLichTap} >
                  All Class
                </button>
                <button value="LichTapGym" onClick={handleChangeLichTap}>Gym</button>
                <button value="lichTapCrossfit" onClick={handleChangeLichTap}>Crossfit</button>
                <button value="lichTapCardio" onClick={handleChangeLichTap}>Cardio</button>
                <button value="lichTapBody" onClick={handleChangeLichTap}>Body</button>
                <button value="lichTapYoga" onClick={handleChangeLichTap}>Yoga</button>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="schedule-table">
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>

                <tbody>
                  {lichtap.map((value) => {
                    return (
                      <tr key={value.id}>
                        <td className="workout-time">{value.time}</td>
                        {value.week.map((item) => {
                          if (
                            item.name === "" &&
                            item.time === "" &&
                            item.title === ""
                          ) {
                            return <td key={item.id} style={{opacity: "0"}}>
                                <h6>noContent</h6>
                                <span>noContent</span>
                                <div className="trainer-name">noContent</div>
                            </td>;
                          } else {
                            return (
                              <td
                                className="hover-bg ts-item"
                                data-tsmeta="gym" key={item.id}
                              >
                                <h6>{item.title}</h6>
                                <span>{item.time}</span>
                                <div className="trainer-name">{item.name}</div>
                              </td>
                            );
                          }
                        })}
                      </tr>
                    );
                  })}

                  {/* <td className="hover-bg ts-item" data-tsmeta="gym">
                      <h6>Gym</h6>
                      <span>10.00 - 11.00</span>
                      <div className="trainer-name">John Smith</div>
                    </td> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LichTap;
