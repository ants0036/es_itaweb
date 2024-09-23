"use client"

export default function IdolDropdown ({names}) {

    var dropdown = document.getElementById("IdolDropdown");
    for (let i = 0; i < names.length ; i++) {
        console.log(names[i])
        var option = document.createElement("option");
        option.text = names[i]
        dropdown.add(option)
    }
    return (
        <select id = "IdolDropdown"> </select>
    )
}