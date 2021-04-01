import React, {useState, useEffect} from 'react';
import './components/DefaultUI'
import './App.css';
import ControlPhonebook from './components/ControlPhonebook';
import DefaultUI from './components/DefaultUI';

function App() {
  let [phoneList, setPhoneList] = useState([]);
  let [id, setId] = useState(0);

  const handleCreate = (data) => {
    setPhoneList(phoneList.concat({
      ...data,
      id: id,
    }));
    setId(++id);
  }

  const handleRemove = (id) => {
    setPhoneList(phoneList.filter(info => info.id !== id));
  }

  const handleFix = (id, data) => {
    setPhoneList(phoneList.map(
      info => {
        if(info.id === id){
          return {
            id,
            ...data
          }
        }else{
          return info;
        }
      }
    ))
  }

  const phoneArr = phoneList.map(
    info => (<ControlPhonebook info={info} key={info.id} onRemove={handleRemove} onFix={handleFix}/>)
  )

  return (
    <div className="App">
      <DefaultUI onCreate={handleCreate}/>
      {phoneArr}
    </div>
  );
}

export default App;
