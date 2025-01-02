"use client"
import { update } from '../actions'

// A client-side component to increase/decrease the amount of items owned by the user. A form action updates the user data. The component grabs parameters from the URL in order to tell which release & idol the user is updating. 
export default function Incrementer({i_id, r_id, variant}) {
    return (<div>
                <form>
                <input className ="border-2 border-solid size-15" id = "count" name = "count" type="number" min ="0"/>
                <input type="hidden" id="i_id" name="i_id" value={i_id}/>
                <input type="hidden" id="r_id" name="r_id" value={r_id}/>
                <input type="hidden" id="variant" name="variant" value={variant}/>
                <button className = "text-sky-600 pl-2"formAction={update}>Update</button>
                </form>
            </div>)
}