import React from 'react';
import { UserContext } from './App';
function CompF(){
    return(
        <div>
           <UserContext.Consumer>
            {
                user=>{
                    return(
                        <div>
                          UserContext Data {user}
                        </div>
                    )
                }
            }
           </UserContext.Consumer>
           
        </div>
    )
}
export default CompF;