// client-side component to upsert whenever a count is incremeted/decremented. 
import { update } from '../actions'

export default function IdolCounter({i_id, r_id, variant}) {
    return (<div>
                <form>
                <input id = "count" type="number" min ="0"/>
                <button formAction={update({i_id, r_id, variant})}>Update</button>
                </form>
            </div>)
}