const url = 'https://rickandmortyapi.com/api'

const getCharacter = async (id) => {
        const res = await fetch(`${url}/character/${id}`)
        const data = await res.json()

        return data

}


const getCharacters = async (page) =>{
        const res = await fetch(`${url}/character/?page=${page}`)
        const data = await res.json()
        return data


}


export { getCharacter, getCharacters }