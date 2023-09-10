import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MiApi = ({setSimpsonApi,setFiltrarCard,filtrarCard}) => {
    const getApi = async () =>{

        try {
            const url = "https://apisimpsons.fly.dev/api/personajes?limit=16&page=3"
            const resp = await fetch(url)
            const data = await resp.json()
            console.log(data.docs)
            const api = data.docs.map((e)=>{
                return{
                    Image: e.Imagen,
                    Name: e.Nombre,
                    Gender: e.Genero,
                    History: e.Historia,
                    Ocupation: e.Ocupacion
                }
            }).sort((a, b) => a.Name.localeCompare(b.name));
            setSimpsonApi(api)
            setFiltrarCard(api)

        } catch (error) {
            console.log("La api no esta funcionando", error);
        }
    }

    useEffect(()=>{
        getApi()
    },[] )
  return (
    <>
    <div className='box-daddy'>
        {filtrarCard.map((filtrar, e) => (
            <Card  key={e}>
            <Card.Img variant="top" src={filtrar.Image} alt={filtrar.Name} />
            <Card.Body>
              <Card.Title>Personaje: {filtrar.Name}</Card.Title>
              <Card.Title>Genero: {filtrar.Gender}</Card.Title>
              <Card.Text>
                Descripcion: {filtrar.History}
              </Card.Text>
              <Badge bg="warning"><h5>{filtrar.Ocupation}</h5></Badge>
            </Card.Body>
          </Card>
        ))}

    </div>

    </>
  )
}

export default MiApi