import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Buscador = ({simpsonApi,setFiltrarCard,buscador,setBuscador}) => {
    


    const handleSearch = (e) =>{
        e.preventDefault()
        if(buscador){
            const filtrar = simpsonApi.filter(simpson =>
                simpson.Name.toLowerCase().includes(buscador.toLowerCase().trim()) ||
                simpson.Gender.toLowerCase().includes(buscador.toLowerCase().trim())
                )
                setFiltrarCard(filtrar)
        }else{
            setFiltrarCard(simpsonApi)
        }
    }

    const cambiodeEstado = (e) =>{
        setBuscador(e.target.value)
    }

  return (
    <>
    <form onSubmit={handleSearch}>
    <InputGroup className="inputt" > 
        <Form.Control
          placeholder="Busca tu Personaje"
          aria-label="Recipient's username"
          onChange={cambiodeEstado}
          value={buscador}
          className='inp'
        />
        <Button type="submit" variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
        {/* <input type="text" onChange={(e) => setBuscador(e.target.value)} value={buscador} />
        <button type='submit'>Buscar</button> */}
    </form>
    </>
  )
}

export default Buscador