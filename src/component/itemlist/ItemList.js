import React, { useRef } from 'react'
import Button from '../button/Button';
import TodoItem from '../todoItem/TodoItem';
import styles from '../../styles/itemList.module.css'

const ItemList = ({item,setItem}) => {
    //const [inputContent,setInputContent] = useState("");
    const inputContent = useRef();
    const cnt = useRef(0);

    const onClick = (e) => {
        e.preventDefault();
        if(!inputContent.current.value){
            alert("일정을 입력해주세요.");
            return;
        }
        setItem([...item, {id : cnt.current++, content : inputContent.current.value}]);
        inputContent.current.value = '';
        
        /* if(!inputContent){
            alert("일정을 입력해주세요.");
            return;
        }
        setItem([...item, {id : cnt.current++, content : inputContent}]);
        setInputContent(''); */
    }

    const remove = (targetId) =>{
        setItem(
            item.filter((it) => 
                it.id !== targetId
            )
        );
    }

    const modify = (targetId, targetContent) => {
        const newItem = Object.assign(item);
        newItem.map((data, i) => {
            if(targetId === data.id && data.content) {
                data.content = targetContent;
            }
        });
        setItem(newItem);
    }

  return (
    <div>
        <div className={styles.box}>
            <form>
            {/* <input className={styles.inputBox} type={'text'} value={inputContent} onChange={e => setInputContent(e.target.value)} placeholder='일정을 입력하세요.'/> */}
                <input className={styles.inputBox} type={'text'} placeholder='일정을 입력하세요.' ref={inputContent}/>
                <Button text={'등록'} onClick={onClick}/>
            </form>
        </div>
        {
            item.map((it)=>{
                return (
                    <TodoItem key={it.id} it={it} onDelete={remove} onUpdate={modify}/>
                )
            })
        }
    </div>
  )
}

export default ItemList