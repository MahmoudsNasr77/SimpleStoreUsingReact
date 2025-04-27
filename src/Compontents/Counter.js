import { useState } from 'react';
import './Counter.css';
function Counter() {
    let [tasbeeh, setTasbeeh] = useState(<h3>{ "سبحان الله والحمد لله ولا إله إلا الله والله أكبر" }</h3>);
    let [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
            if (count == 33) {
                setTasbeeh(<h3>{ "سبحان الله" }</h3>);
            }
            if (count == 66) {  
                setTasbeeh(<h3>{ "الحمد لله" }</h3>);
            }
            if (count == 99) {
                setTasbeeh(<h3>{ "لا إله إلا الله" }</h3>);
            }
            if (count == 100) {
                setTasbeeh(<h3>{ "الله أكبر" }</h3>);
            }
            if (count == 101) {
                alert("تسبيحك مكتمل");
                setTasbeeh(<h3>{ "سبحان الله والحمد لله ولا إله إلا الله والله أكبر" }</h3>);
                setCount(0);
            }
}
function handleInputChange(e) {
    const inputValue = e.target.value;
    if (inputValue === "") {
        setTasbeeh(<h3>{ "سبحان الله والحمد لله ولا إله إلا الله والله أكبر" }</h3>);
        setCount(0);
    }
    else {
        setTasbeeh(<h3>{ inputValue }</h3>);
        setCount(0);
    }
}

        return (
            <>
            <div className='counter'>
            <input type="text" className='counter-input' placeholder='أدخل التسبيحة'  onChange={handleInputChange}  />
            <input type="number" className='counter-input' placeholder='أدخل العدد' value={count} onChange={(e) => setCount(e.target.value)} />
            </div>
            <div className='counter'>
                <h1 className='counter-title'>تسبيحة</h1>
                <h2 className='counter-tasbeeh'>{tasbeeh}</h2>
                <h2 className='counter-count'>{count}</h2>
                <button className='counter-button' onClick={handleClick}>زد</button>
            </div>
            </>
        );
    }

export default Counter;