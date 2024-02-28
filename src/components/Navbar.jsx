import { useState } from "react";
import Modal from "./Modal.jsx"

const Navbar = () => {

    const [ isOpen , setIsOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    const [newRecipe, setNewRecipe] = useState({
        name: "",
        descripcion: "",
        time: "",
        difficulty: "",
        vegan: false,
        meat: false,
        fish: false,
        spicy: false,
        image: "no/image"
    })

    const createRecipe = async () => {

        try{
            const resp = await fetch(`https://crispy-fishstick-g54xr5p99xqcv77p-5001.app.github.dev/usuarios/clisdevivas/recetas`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(newRecipe), // body data type must match "Content-Type" header
            })
            const data = await resp.json()
            setIsOpen(false)
        }catch(err){
            console.error(err)
        }
    }

    return <>
        <div className="bg-red-500 px-8 py-2 flex flex-row justify-between items-center">
            <span className="font-bold" onClick={()=>setMenu(!menu)}>
                Recetario
            </span>
            <button onClick={() => setIsOpen(!isOpen)} className="font-bold text-2xl">
                +
            </button>
        </div>
        <Modal show={isOpen} onCloseModal={() => setIsOpen(false)}>
            <div className="flex flex-col text-sm">
                <label>Titulo</label>
                <input type="text" name="name" 
                    placeholder="title" 
                    value={newRecipe.name} 
                    onChange={(evt) => setNewRecipe({ ...newRecipe, name: evt.target.value })} 
                />
                <label> Descripcion</label>
                <input type="text" name="descripcion" 
                    placeholder="descripcion"
                    value={newRecipe.descripcion}
                    onChange={(evt) => setNewRecipe({ ...newRecipe, descripcion: evt.target.value})}
                />
                <label> Time </label>
                <input type="text" placeholder="time" 
                    name="time"
                    value={newRecipe.time}
                    onChange={ evt => setNewRecipe({ ...newRecipe, time: evt.target.value })}
                />
                <label> Difficulty </label>
                <select type="sel" placeholder="difficulty" 
                    name="difficulty" 
                    value={newRecipe.difficulty}
                    onChange={evt => setNewRecipe({ ...newRecipe, difficulty: evt.target.value })}
                >
                    <option value="easy"> Easy </option>
                    <option value="medium"> Medium </option>
                    <option value="hard"> Hard </option>
                    <option value="Gordon Ramsey"> God </option>
                </select>
            </div>
            <button className="bg-red-500 rounded-lg px-2 py-1 m-2 mt-auto text-white text-md"
                onClick={() => createRecipe()}
            > Create 
            </button>
        </Modal>
    </>
}

export default Navbar;