import { useState, useEffect } from 'react'


const Recipes = () => {

    const [ recipes, setRecipes ] = useState([])
    const [ isLoading, setIsLoading] = useState(false)
    const [ error, setError ] = useState(null)
    
    const findRecipes = async () => {
        setIsLoading(true)
        try{
            const resp = await fetch(`https://crispy-fishstick-g54xr5p99xqcv77p-5001.app.github.dev/usuarios/clisdevivas/recetas`)
            const data = await resp.json()

            console.log(data)

            setRecipes(data.recetas)
            
            if(data.recetas.length == 0) {
                throw Error("No hay suficientes tareas para renderizar")
            }
            
        }catch(error){
            console.log(error)
            setError(error.message)
        }
        setIsLoading(false)
    }
    
    // Logica - Hooks y Funciones
    useEffect(() => {
        findRecipes()
    },[])

    // Visual JSX
    return <>
        <h1 className="text-red-800">Recipes</h1>
        { !isLoading && <div className="text-black">
            { recipes.map(( recp )=> <div key={recp.id}> 
                {recp.name} 
            </div>)}
        </div>}
        { isLoading && <div className='text-black text-2xl'>
            ...loading
        </div>}
        { error && <>
            <h1 className='text-red-700'>{error}</h1>
            <button>reintentar</button>
        </>}
    </>
}

export default Recipes;