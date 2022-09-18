import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import pic from './photo.jpg'

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img style={{width:"20%",height:"50%"}}
                className="profile-img"
                src={pic}
                alt="Ismail"
              />
            </div>
            <div className="banner-text">
              <h1 style={{textAlign:"center",fontSize:"bold",color:"aqua"}}>Full Stack Developer</h1>
              <hr />
             

              <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Praveen Sharma</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          This is Praveen Sharma.  I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines. I liked
          to solve a new real world problem by coding.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.I
          dream to be an expert software engineer so that I can build
          professional and useful software that has business value.
        </p>
      </div>
      </div>



      




























          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
