import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import styles from '../../styles/toDoItem.module.css';

const TodoItem = ({it,onDelete,onUpdate}) => {

    const [modify, setModify] = useState(false);
    const mContent = useRef();
    //const [mContent , setMContent] = useState('');
    
    return (
        <div>
            {modify?(
                <div className={styles.sBox}>
                    <h3>
                    {/* <input className={styles.modifyIput} defaultValue={it.content} onChange={(e) => setMContent(e.target.value)} /> */}
                        <input className={styles.modifyIput} ref={mContent} defaultValue={it.content}/>
                        <Button text={'수정'} 
                        onClick={ 
                            () => {
                                //onUpdate(it.id, mContent); 
                                onUpdate(it.id, mContent.current.value); 
                                setModify(!modify);
                                } } />
                    </h3>
                </div>
            ):(
                <div className={styles.sBox}>
                    <h3>{it.content}
                        <div className={styles.row}>
                            <p className={styles.remove} onClick={() => {setModify(!modify)}}>✏️</p>
                            &emsp;
                            <p className={styles.remove} onClick={()=> {onDelete(it.id)}}>X</p>
                        </div>
                    </h3>
                </div>
            )}
        </div>
  )
}

export default TodoItem