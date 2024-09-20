// client-side component to upsert whenever a count is incremeted/decremented. 
import { update } from '../actions'
import { fetch_count } from '../actions'

export default function IdolCounter({i_id, r_id, variant, count}) {
    return (<div>
                <form>
                <p>Current: {JSON.stringify(count)}  </p>
                <input id = "count" name = "count" type="number" min ="0" defaultValue = {count}/>
                <input type="hidden" id="i_id" name="i_id" value={i_id}/>
                <input type="hidden" id="r_id" name="r_id" value={r_id}/>
                <input type="hidden" id="variant" name="variant" value={variant}/>
                <button formAction={update}>Update</button>
                </form>
            </div>)
}