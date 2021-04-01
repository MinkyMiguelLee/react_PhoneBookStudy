import React, {useState, useEffect} from 'react';

const DefaultUI = (props) => {
  let [name, setName] = useState('');
  let [number, setNumber] = useState('');

  const onChangeInputVal = (e) => {
    let value = e.target.value;
    if(e.target.name === 'name'){
      setName(value);
    }else{
      setNumber(value);
    }
  }

  const submitHandle = (e) => {
    e.preventDefault();
    if(name === '' || number === ''){
      alert('이름과 전화번호를 모두 입력하세요');
    }else{
      props.onCreate({
        name,
        number
      });
      setName('');
      setNumber('');
    }
  }

  return (
    <div className='marginLeft'>
      <h1>PHONEBOOK</h1>
      <div>
        <form onSubmit={submitHandle}>
          <div className='floatLeft'>
            <div className='floatLeft'>이름</div>
            <input name='name' value={name} type='text' className='inputBox' onChange={onChangeInputVal} />
          </div>
          <div className='inputBox'>
            <div className='floatLeft'>전화번호</div>
            <input name='number' value={number} type='text' className='inputBox' onChange={onChangeInputVal}/>
          </div>
          <button className='marginLeft' type='submit'>추가</button>
        </form>
      </div>
    </div>
  );
};

export default DefaultUI;