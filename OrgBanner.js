import React, { useState, useEffect } from "react"
import DomainIcon from '@material-ui/icons/Domain';
import { TreeView, TreeItem } from "@material-ui/lab"


function Banner({ item }) {
  const [items, setItems] = useState([])
  function createData(name,email) {
    return { name,email };
  }

  const tempOrgRows = []

  useEffect(() => {

    let userData=item;
    userData && userData.length && userData.map((el,i)=>{
     
      tempOrgRows.push(createData(el.name,el.email))
      setItems(tempOrgRows)
      
    })


  }, [item])




  return (
    <div>
      <TreeView className="TreeView" style={{ color: "transparent" }}>
        {Object.keys(items).map((item, i) => (
          <TreeItem
            bgColor="transparent"
            className='TreeItem'
            nodeId={i}

            label={
              <div>
                <div class="grid-container">
                  <div className="grid-item ">
                    <p className="centered">
                      <div className="plus2 ">+</div>
                    </p>

                    <div className="com-banner">
                      <div className="grid-container">
                        <div className="grid-item">
                          <div style={{ paddingTop: '16px' }}>
                            <div className="placeholder1"><DomainIcon /></div>
                            <div className="com-title">COM 1234</div>
                            <div className="com-title">{items[i].name}</div>
                          </div>

                        </div>
                        <div className="grid-item"></div>
                        <div className="grid-item">
                          <div className="companyCount">1 company</div>
                        </div>
                        <div className="grid-item-2">
                          <div className="com-description">{items[i].email}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            }
          >
            <div style={{ color: 'white', padding: '20px' }}>company goes here{items[i].title}</div>

          </TreeItem>
        ))}
      </TreeView>
    </div>
  );
}

export default Banner;


// import { makeStyles } from "@material-ui/core/styles";
// import { TreeView, TreeItem } from "@material-ui/lab";

// function Banner({ item }) {
//   const [items, setItems] = useState(item);
//   useEffect(() => {
//     setItems(item);
//   }, [item]);

//   return (
//     <div>
//       <TreeView className="TreeView" style={{color:"transparent" }}>
//         {Object.keys(items).map((item, i) => (
//           <TreeItem
//             bgColor="transparent"
//             className='TreeItem'
//             nodeId={i}
//             label={
//               <div class="grid-container">
//                 <div className="grid-item ">
//                   <p className="centered">
//                     <div className="plus2 ">+</div>
//                   </p>

//                   <div className="com-banner">
//                     <div className="grid-container">
//                       <div className="grid-item">
//                         <div style={{ paddingTop: "16px" }}>
//                           <div className="placeholder1">x</div>
//                           <div className="com-title">COM 1234</div>
//                           <div className="com-title">{items[i].title}</div>
//                         </div>
//                       </div>
//                       <div class="grid-item"></div>
//                       <div class="grid-item"></div>
//                       <div class="grid-item">
//                         <div className="com-description">
//                           {items[i].description}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             }
//           >
//             <div style={{color:'white',padding:'20px'}}>company goes here{items[i].title}</div>

//           </TreeItem>
//         ))}
//       </TreeView>

//     </div>
//   );
// }

// export default Banner;