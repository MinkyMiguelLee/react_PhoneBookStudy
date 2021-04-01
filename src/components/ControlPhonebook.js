import React, {useState, useEffect} from 'react';

const ControlPhonebook = (props) => {

  const {name, number, id} = props.info
  const [editable, setEdit] = useState(false);
  const [tmpName, setTmpName] = useState(name);
  const [tmpNumber, setTmpNumber] = useState(number);


  const handleRemove = () => {
    props.onRemove(id);
  }

  const handleFix = () => {
    if(editable === true){
      
      props.onFix(id, {tmpName, tmpNumber});
    }
    setEdit(!editable);
  }

  const handleChange = (e) => {
    let value = e.target.value;
    if(e.target.name === 'name'){
      setTmpName(value);
    }else{
      setTmpNumber(value);
    }
  }

  return (
    <div className='nameBox'>
      {editable ?
        <div>
          <div className='floatLeft'>
            <div className='floatLeft'>이름</div>
            <input name='name' value={tmpName} type='text' className='inputBox' onChange={handleChange}/>
          </div>
          <div className='inputBox'>
            <div className='floatLeft'>전화번호</div>
            <input name='number' value={tmpNumber} type='text' className='inputBox' onChange={handleChange}/>
          </div>
        </div> :
        <div>
          <div>이름 : {tmpName}</div>
          <div>전화번호 : {tmpNumber}</div>
        </div> 
      }
 
      <button className='delEditButton' onClick={handleRemove}>삭제</button>
      <button className='delEditButton' onClick={handleFix}>{editable? '적용' : '수정'}</button>
    </div>
  );
};

export default ControlPhonebook;