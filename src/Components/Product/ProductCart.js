import React from "react";
import StarIcon from "@mui/icons-material/Star";
const ProductCart = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px'}}>
      <div className="img-container" style={{ width: "15vw", height: "25vh", position: 'relative'}}>
        <img
          style={{ width: "100%", objectFit: "cover", height: '100%'}}
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17844968/2023/10/4/d2f1dd95-d0b6-4d6f-afbd-d45ff804aa681696399127384-Safari-Glimpse-Poly-Carbonate-Small-Hard-Trolley-Bag---56-cm-15.jpg"
          alt=""
        />
        <div style={{position: 'absolute', bottom: -110, backgroundColor: '#f5f5f6', width: '5vw', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        
        <span style={{display:'flex', alignItems: 'center'}}>
          3 <StarIcon sx={{ color: "yellow"}} />
        </span>
        <div style = {{borderLeft: '1px solid grey', height: '15px'}}></div>
        <span>43 </span></div>
        <div className="content-container" style={{backgroundColor: 'white'}}>
            <div style={{margin: 0}}>
        <p style={{margin: '0', fontWeight: 'bold'}}>This is a Safari.</p>
        <p style={{fontSize: '15px', color: 'grey', margin: 0}}>Category: MEN</p>
        <p style={{margin: 0, fontWeight: 'bold'}}>&#8377;1599</p></div>
      </div>
      </div>
      
    </div>
  );
};

export default ProductCart;
