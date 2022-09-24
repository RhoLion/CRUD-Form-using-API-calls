import React, { useState } from 'react';

import TableHeader from './commons/TableHeader';
import EditForm from './EditForm';
import ReadRows from './ReadRows';
import styles from './styles/ShowInfoTable.module.css';

const ShowInfoTable = ({ dataInfo }) => {

  const [editUserId, setEditUserId] = useState(null);
  return (
    <>
      <form className={styles.tableContainer} >
      <table>
          <TableHeader />
          <tbody> 
            {dataInfo &&
              dataInfo.map((item) => {
                return (
                  <>
                   <tr key={item.id}>
                    {editUserId === item.id ? <EditForm /> : <ReadRows item={item}  />}
                  </tr>
                   </>
                );
              })}
          </tbody>
        </table>
      </form>
    </>
  )
}

export default ShowInfoTable