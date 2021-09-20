import React from 'react';
import Piechart from '../component/Piechart'
import Piedata from '../component/Piedata'
import Bar  from '../component/Bar'
function Main(){
    return(
        <div>
        <div>
                    <div className="fullCard" >
                        <div className="cardContent">
                            <div className="cardText">
                            <Piechart/>
                            </div> 
                        </div>
                        <div className="sas"><Piedata/></div>
                    </div>
               
                    <div className="fullCard1" >
                        <div className="cardContent1">
                            <div className="cardText1">
                               <div className="bar"><Bar/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                

                <div className="footer">
                <div className="fullCard2" >
                    <div className="cardContent2">
                        <div className="cardText">
                            <table>
                                <tr>
                                  <th>Company</th>
                                  <th>Contact</th>
                                  <th>Country</th>
                                </tr>
                                <tr>
                                  <td>Alfreds Futterkiste</td>
                                  <td>Maria Anders</td>
                                  <td>Germany</td>
                                </tr>
                                <tr>
                                  <td>Centro comercial Moctezuma</td>
                                  <td>Francisco Chang</td>
                                  <td>Mexico</td>
                                </tr>
                                <tr>
                                  <td>Ernst Handel</td>
                                  <td>Roland Mendel</td>
                                  <td>Austria</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                
    )
}
export default Main;