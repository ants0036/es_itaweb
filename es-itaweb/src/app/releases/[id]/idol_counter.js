"use client"
// client-side component to upsert whenever a count is incremeted/decremented. 

import { useState, useEffect } from 'react';
import { update } from './actions'

export default async function IdolCounter({i_id, r_id}) {
    return (<div>
                <form>
                <input id = "count" type="number" min ="0" onChange = {updateCount(r_id, i_id)}/>
                <button formAction={login}>Update</button>
                </form>
            </div>)
}