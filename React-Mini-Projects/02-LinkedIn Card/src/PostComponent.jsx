// Create a style object to apply styles to the div element in PostComponent
const style = {
    display:"inline-block",
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
    color:"black",
    textAlign:"left",
    
};

function PostComponent({name, subtitle, time, image, description}){
    return(
        <div>
            <div style={style}>
                <div style={{display:"flex"}}>
                        <img style={{height:"50px", width:"50px", borderRadius:"50px", margin:"15px"}} src={image} alt="" />
                         <div style={{textAlign:"left"}}>
                         <div style={{fontWeight:"bold", margin:0}}>{name}</div>
                         <div style={{color:"grey", margin:0, padding:0}}>{subtitle}</div>

                         {(time!==undefined)?
                           <div style={{color:"grey", margin:0, padding:0, fontSize:"10px"}}> 
                           <div>{time}</div>
                            <img style={{height:"12px", width:"12px", borderRadius:"50px"}} src="https://e7.pngegg.com/pngimages/8/848/png-clipart-globe-earth-map-of-the-world-miscellaneous-globe.png"  alt="" />
                            </div>:null}
                         </div>
                </div>
                <div style={{alignItems:"left"}}>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default PostComponent;