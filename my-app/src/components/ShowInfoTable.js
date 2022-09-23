import React from 'react'

const ShowInfoTable = ({dataInfo}) => {

   
  return (
    <div>
 <section >
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido paterno</th>
              <th>Apellido materno</th>
              <th>edad</th>
              <th>Sexo</th>
              <th>Correo electrónico</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataInfo &&
              dataInfo.map((item) => {
                return (
                  <>
                    <tr key={item.id}>
                    <td >{item.name}</td>
                      <td >{item.lastname}</td>
                      <td >{item.surename}</td>
                      <td >{item.age}</td>
                      <td >{item.sex}</td>
                      <td >{item.email}</td>
                      <td >{item.phone}</td>
                      <td >
                        <button type='submit'> Editar</button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
</section>
    </div>
  )
}

export default ShowInfoTable